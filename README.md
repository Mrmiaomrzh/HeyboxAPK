# HeyboxAPK

[![Workflow status](https://github.com/Mrmiaomrzh/HeyboxAPK/actions/workflows/HeyboxDaily.yml/badge.svg)](https://github.com/Mrmiaomrzh/HeyboxAPK/actions/workflows/HeyboxDaily.yml)

**English** | [简体中文](README.zh-CN.md)

HeyboxAPK tracks the Android release and beta APKs for Xiaoheihe (小黑盒), records package metadata, and publishes newly detected versions to GitHub Releases.

[Browse releases](https://github.com/Mrmiaomrzh/HeyboxAPK/releases) · [View workflow runs](https://github.com/Mrmiaomrzh/HeyboxAPK/actions/workflows/HeyboxDaily.yml) · [Latest APK analysis](#latest-apk-analysis)

## Downloads

| Channel | Official CDN | GitHub archive |
| --- | --- | --- |
| Release | [Download APK](https://dl.max-c.com/app/heybox/heybox-release.apk) | [Browse releases](https://github.com/Mrmiaomrzh/HeyboxAPK/releases) |
| Beta | [Download APK](https://dl.max-c.com/app/heybox/heybox-beta.apk) | [Browse releases](https://github.com/Mrmiaomrzh/HeyboxAPK/releases) |

Release assets use the format `<Channel>-<version>(<versionCode>)-<YYYYMMDD>.apk`. Tags use `release-v<version>-<versionCode>` or `beta-v<version>-<versionCode>`.

## How it works

1. A [Cloudflare Worker](cf-worker/) checks both CDN channels every five minutes and requests a workflow run when a file fingerprint changes.
2. [GitHub Actions](.github/workflows/HeyboxDaily.yml) checks CDN ETags and queries multiple app-store sources for version information. It also runs daily at 00:00 UTC (08:00 China Standard Time) as a fallback and supports manual runs.
3. When an update is detected, the workflow downloads and analyzes the APKs, publishes versions whose tags do not already exist, and updates the report below when a release is published.

The analysis includes version information, Android SDK requirements, supported ABIs, permissions, file size, SHA-256, and signing certificate information when available. Release notes may include a store changelog; a verified beta-specific changelog source is not currently configured.

## Latest APK analysis

The following report is maintained by the workflow. App names and permission identifiers are preserved as reported by the APK.

<!-- HEYBOX-ANALYSIS:START -->
## Release - 小黑盒 1.3.403 (1156)

**File**: `Release-1.3.403(1156)-20261125.apk`

| Field | Value |
| --- | --- |
| App | 小黑盒 |
| Package | `com.max.xiaoheihe` |
| Version | 1.3.403 |
| Version code | 1156 |
| Minimum SDK | API 23（Android 6.0 (Marshmallow)） |
| Target SDK | API 34（Android 14） |
| ABIs | arm64-v8a |
| Size | 145MB（151233481 bytes） |
| SHA-256 | `2f09e3f68ff3fe23a1e2635e9e930c0752d066df5f8b88ea7ffea213f75563a3` |
| Source | https://dl.max-c.com/app/heybox/heybox-release.apk |
| Collected (China Standard Time) | 2026-11-25 19:20 |

<details><summary>Permissions (55 items)</summary>

- `android.permission.INTERNET`
- `android.permission.ACCESS_NETWORK_STATE`
- `android.permission.ACCESS_WIFI_STATE`
- `android.permission.CHANGE_NETWORK_STATE`
- `android.permission.WAKE_LOCK`
- `android.permission.REQUEST_INSTALL_PACKAGES`
- `android.permission.REQUEST_DELETE_PACKAGES`
- `android.permission.CAMERA`
- `android.permission.WRITE_EXTERNAL_STORAGE`
- `android.permission.READ_EXTERNAL_STORAGE`
- `android.permission.READ_MEDIA_IMAGES`
- `android.permission.READ_MEDIA_VIDEO`
- `android.permission.READ_PHONE_STATE`
- `android.permission.RECORD_AUDIO`
- `android.permission.MODIFY_AUDIO_SETTINGS`
- `android.permission.BLUETOOTH`
- `android.permission.BLUETOOTH_CONNECT`
- `android.permission.VIBRATE`
- `android.permission.QUERY_ALL_PACKAGES`
- `android.permission.GET_TASKS`
- `com.android.launcher.permission.WRITE_SETTINGS`
- `com.android.launcher.permission.INSTALL_SHORTCUT`
- `com.android.launcher.permission.UNINSTALL_SHORTCUT`
- `com.android.launcher.permission.READ_SETTINGS`
- `android.permission.READ_PRIVILEGED_PHONE_STATE`
- `com.android.permission.GET_INSTALLED_APPS`
- `android.permission.READ_CALENDAR`
- `android.permission.WRITE_CALENDAR`
- `android.permission.PACKAGE_USAGE_STATS`
- `android.permission.HIGH_SAMPLING_RATE_SENSORS`
- `android.permission.POST_NOTIFICATIONS`
- `android.permission.FOREGROUND_SERVICE`
- `android.permission.FOREGROUND_SERVICE_CAMERA`
- `android.permission.FOREGROUND_SERVICE_MICROPHONE`
- `com.asus.msa.SupplementaryDID.ACCESS`
- `freemme.permission.msa`
- `freemme.permission.msa.SECURITY_ACCESS`
- `oplus.permission.settings.LAUNCH_FOR_EXPORT`
- `com.vivo.identifier.permission.OAID_STATE_DIALOG`
- `android.permission.FOREGROUND_SERVICE_DATA_SYNC`
- `android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION`
- `com.max.xiaoheihe.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`
- `android.permission.MOUNT_UNMOUNT_FILESYSTEMS`
- `com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE`
- `com.heytap.mcs.permission.RECIEVE_MCS_MESSAGE`
- `android.permission.ACCESS_BACKGROUND_LOCATION`
- `android.permission.BLUETOOTH_ADMIN`
- `android.permission.SCHEDULE_EXACT_ALARM`
- `getui.permission.GetuiService.com.max.xiaoheihe`
- `com.vivo.notification.permission.BADGE_ICON`
- `com.google.android.gms.permission.AD_ID`
- `com.max.xiaoheihe.permission.MIPUSH_RECEIVE`
- `com.max.xiaoheihe.permission.PROCESS_PUSH_MSG`
- `com.max.xiaoheihe.permission.PUSH_PROVIDER`
- `com.hihonor.push.permission.READ_PUSH_NOTIFICATION_INFO`

</details>

## Beta - 小黑盒 1.3.403 (1157)

**File**: `Beta-1.3.403(1157)-20261125.apk`

| Field | Value |
| --- | --- |
| App | 小黑盒 |
| Package | `com.max.xiaoheihe` |
| Version | 1.3.403 |
| Version code | 1157 |
| Minimum SDK | API 23（Android 6.0 (Marshmallow)） |
| Target SDK | API 34（Android 14） |
| ABIs | arm64-v8a |
| Size | 144MB（150511537 bytes） |
| SHA-256 | `3c702b5dfbc8d773db90b825f4bfbd29520418934ebe49161b2815e11adab84a` |
| Source | https://dl.max-c.com/app/heybox/heybox-beta.apk |
| Collected (China Standard Time) | 2026-11-25 19:20 |

<details><summary>Permissions (55 items)</summary>

- `android.permission.INTERNET`
- `android.permission.ACCESS_NETWORK_STATE`
- `android.permission.ACCESS_WIFI_STATE`
- `android.permission.CHANGE_NETWORK_STATE`
- `android.permission.WAKE_LOCK`
- `android.permission.REQUEST_INSTALL_PACKAGES`
- `android.permission.REQUEST_DELETE_PACKAGES`
- `android.permission.CAMERA`
- `android.permission.WRITE_EXTERNAL_STORAGE`
- `android.permission.READ_EXTERNAL_STORAGE`
- `android.permission.READ_MEDIA_IMAGES`
- `android.permission.READ_MEDIA_VIDEO`
- `android.permission.READ_PHONE_STATE`
- `android.permission.RECORD_AUDIO`
- `android.permission.MODIFY_AUDIO_SETTINGS`
- `android.permission.BLUETOOTH`
- `android.permission.BLUETOOTH_CONNECT`
- `android.permission.VIBRATE`
- `android.permission.QUERY_ALL_PACKAGES`
- `android.permission.GET_TASKS`
- `com.android.launcher.permission.WRITE_SETTINGS`
- `com.android.launcher.permission.INSTALL_SHORTCUT`
- `com.android.launcher.permission.UNINSTALL_SHORTCUT`
- `com.android.launcher.permission.READ_SETTINGS`
- `android.permission.READ_PRIVILEGED_PHONE_STATE`
- `com.android.permission.GET_INSTALLED_APPS`
- `android.permission.READ_CALENDAR`
- `android.permission.WRITE_CALENDAR`
- `android.permission.PACKAGE_USAGE_STATS`
- `android.permission.HIGH_SAMPLING_RATE_SENSORS`
- `android.permission.POST_NOTIFICATIONS`
- `android.permission.FOREGROUND_SERVICE`
- `android.permission.FOREGROUND_SERVICE_CAMERA`
- `android.permission.FOREGROUND_SERVICE_MICROPHONE`
- `com.asus.msa.SupplementaryDID.ACCESS`
- `freemme.permission.msa`
- `freemme.permission.msa.SECURITY_ACCESS`
- `oplus.permission.settings.LAUNCH_FOR_EXPORT`
- `com.vivo.identifier.permission.OAID_STATE_DIALOG`
- `android.permission.FOREGROUND_SERVICE_DATA_SYNC`
- `android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION`
- `com.max.xiaoheihe.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`
- `android.permission.MOUNT_UNMOUNT_FILESYSTEMS`
- `com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE`
- `com.heytap.mcs.permission.RECIEVE_MCS_MESSAGE`
- `android.permission.ACCESS_BACKGROUND_LOCATION`
- `android.permission.BLUETOOTH_ADMIN`
- `android.permission.SCHEDULE_EXACT_ALARM`
- `getui.permission.GetuiService.com.max.xiaoheihe`
- `com.vivo.notification.permission.BADGE_ICON`
- `com.google.android.gms.permission.AD_ID`
- `com.max.xiaoheihe.permission.MIPUSH_RECEIVE`
- `com.max.xiaoheihe.permission.PROCESS_PUSH_MSG`
- `com.max.xiaoheihe.permission.PUSH_PROVIDER`
- `com.hihonor.push.permission.READ_PUSH_NOTIFICATION_INFO`

</details>
<!-- HEYBOX-ANALYSIS:END -->
