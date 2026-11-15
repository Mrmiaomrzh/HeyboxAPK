# heybox-etag-watcher（Cloudflare Worker）

每 5 分钟对两个 CDN 渠道发 HEAD 请求，Etag 相比上次发生变化时才调用 GitHub
`repository_dispatch` 触发 [`HeyboxDaily.yml`](../.github/workflows/HeyboxDaily.yml)。
定时 schedule（每 12 小时）保留作为兜底。

## 部署步骤

```bash
cd cf-worker
npx wrangler login

# 1. 创建 KV 命名空间，把输出的 id 填进 wrangler.toml 的 REPLACE_WITH_KV_NAMESPACE_ID
npx wrangler kv namespace create ETAG_STATE

# 2. 配置 GitHub PAT（repository_dispatch 需要）
npx wrangler secret put GITHUB_TOKEN

# 3. 部署
npx wrangler deploy
```

### GitHub PAT 要求

- Fine-grained PAT：仅选中 `HeyboxAPK` 仓库，权限 **Contents: Read and write**
  （repository_dispatch 属于 Contents 权限）
- 或 classic PAT 勾选 `repo` scope

## 行为说明

| 场景 | Worker 动作 |
| --- | --- |
| 首次运行 / KV 为空 | 只记录基线 Etag，**不触发**（避免上线即下载） |
| Etag 无变化 | 什么都不做，不消耗 Actions |
| Etag 变化 | dispatch `heybox-etag-changed`，成功后写入新 Etag |
| dispatch 失败 | 不写入新 Etag，下个 5 分钟周期自动重试 |

触发后的 workflow 会重新跑一遍 precheck 自行确认 Etag 变化并下载发布，
Worker 只是信号源，误触发是安全的（precheck 无变化时几十秒内退出）。

## 验证

```bash
# 手动触发一次 scheduled 事件
npx wrangler dev --test-scheduled
# 浏览器访问 http://localhost:8787/__scheduled?cron=*/5+*+*+*+*

# 查看日志
npx wrangler tail

# 确认 KV 里的基线
npx wrangler kv key get --binding=ETAG_STATE "etag:release"
npx wrangler kv key get --binding=ETAG_STATE "etag:beta"
```
