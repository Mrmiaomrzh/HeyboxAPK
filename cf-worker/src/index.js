// Heybox CDN Etag watcher
// Polls the CDN with HEAD requests every 5 minutes, compares Etag against
// the last-seen value in KV, and dispatches a repository_dispatch event to
// GitHub only when a channel's file actually changed.

const CHANNELS = {
  release: "https://dl.max-c.com/app/heybox/heybox-release.apk",
  beta: "https://dl.max-c.com/app/heybox/heybox-beta.apk",
};

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";

const EVENT_TYPE = "heybox-etag-changed";

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(checkEtags(env));
  },
};

async function checkEtags(env) {
  const repo = env.GITHUB_REPO || "Mrmiaomrzh/HeyboxAPK";
  const changed = {};

  for (const [channel, url] of Object.entries(CHANNELS)) {
    let etag = null;

    try {
      const resp = await fetch(url, {
        method: "HEAD",
        headers: { "User-Agent": UA },
        cf: { cacheTtl: 0, cacheEverything: false },
      });

      if (!resp.ok) {
        console.log(`${channel}: HEAD ${resp.status}, skip`);
        continue;
      }

      etag =
        resp.headers.get("etag") ||
        resp.headers.get("last-modified") ||
        resp.headers.get("content-md5");
    } catch (e) {
      console.log(`${channel}: HEAD failed: ${e}`);
      continue;
    }

    if (!etag) {
      console.log(`${channel}: no fingerprint headers, skip`);
      continue;
    }

    const old = await env.ETAG_STATE.get(`etag:${channel}`);

    if (!old) {
      // First run: record baseline without triggering.
      await env.ETAG_STATE.put(`etag:${channel}`, etag);
      console.log(`${channel}: baseline recorded ${etag}`);
      continue;
    }

    if (etag !== old) {
      changed[channel] = etag;
    }
  }

  if (Object.keys(changed).length === 0) {
    return;
  }

  console.log(`changed: ${JSON.stringify(changed)}`);

  let resp;
  try {
    resp = await fetch(`https://api.github.com/repos/${repo}/dispatches`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "heybox-etag-watcher",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_type: EVENT_TYPE,
        client_payload: { changed },
      }),
    });
  } catch (e) {
    console.log(`dispatch failed: ${e}`);
    return;
  }

  if (resp.ok) {
    // Persist new state only after a successful dispatch, so a failed
    // dispatch is retried on the next cron tick.
    for (const [channel, etag] of Object.entries(changed)) {
      await env.ETAG_STATE.put(`etag:${channel}`, etag);
    }
    console.log(`dispatched ${EVENT_TYPE} for ${Object.keys(changed).join(", ")}`);
  } else {
    console.log(`dispatch rejected: ${resp.status} ${await resp.text()}`);
  }
}
