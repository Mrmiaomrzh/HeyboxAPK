# HeyboxAPK

自动收集小黑盒（XiaoHeiHe）安装包，每日追踪 Release 与 Beta 渠道的版本变化。

[![Heybox APK Daily Tracker](https://github.com/Mrmiaomrzh/HeyboxAPK/actions/workflows/heybox-daily.yml/badge.svg)](https://github.com/Mrmiaomrzh/HeyboxAPK/actions/workflows/heybox-daily.yml)

## 工作流介绍

由 [`.github/workflows/heybox-daily.yml`](.github/workflows/heybox-daily.yml) 自动完成：

- ⏰ **定时运行**：每天北京时间 20:00（UTC 12:00）触发，也支持在 Actions 页面手动触发
- ⬇️ **下载 APK**（带浏览器 UA）：
  - Release 渠道：<https://dl.max-c.com/app/heybox/heybox-release.apk>
  - Beta 渠道：<https://dl.max-c.com/app/heybox/heybox-beta.apk>
- 📦 **命名规则**：`Release/Beta-版本名称(版本号)-yyyymmdd.apk`，例如 `Release-1.3.394(1127)-20260829.apk`
- 🏷️ **发布 Release**：按版本打 Tag（`release-v<版本名称>` / `beta-v<版本名称>`），APK 作为附件上传；版本未更新时自动跳过，不重复发布
- 📝 **自动分析**：解析包名、版本、最低/目标 SDK、ABI、完整权限列表、SHA-256、签名证书等信息，写入 Job Summary 与 Release Note，并自动更新本页下方「最新分析」区块提交回仓库

## 最新分析

> 本区块由工作流每次发布新版本时自动更新。

<!-- HEYBOX-ANALYSIS:START -->
## Release - 小黑盒 1.3.394 (1127)

**文件名**：`Release-1.3.394(1127)-20260908.apk`

| 项目 | 值 |
| --- | --- |
| 应用名称 | 小黑盒 |
| 包名 | `com.max.xiaoheihe` |
| 版本名称 | 1.3.394 |
| 版本号 | 1127 |
| 最低支持 SDK | API 23（Android 6.0 (Marshmallow)） |
| 目标 SDK | API 34（Android 14） |
| 支持 ABI | arm64-v8a |
| 大小 | 114MB（119532203 字节） |
| SHA-256 | `c6138fcd44d1343f8fe608ee983621490940e850ce54c674a9ee9972d7e4f5f7` |
| 下载源 | https://dl.max-c.com/app/heybox/heybox-release.apk |
| 抓取日期（北京时间） | 2026-09-08 01:14 |

<details><summary>权限列表（55 项）</summary>

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
- `android.permission.MOUNT_UNMOUNT_FILESYSTEMS`
- `android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION`
- `com.max.xiaoheihe.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`
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
## Beta - 小黑盒 1.3.395 (1129)

**文件名**：`Beta-1.3.395(1129)-20260908.apk`

| 项目 | 值 |
| --- | --- |
| 应用名称 | 小黑盒 |
| 包名 | `com.max.xiaoheihe` |
| 版本名称 | 1.3.395 |
| 版本号 | 1129 |
| 最低支持 SDK | API 23（Android 6.0 (Marshmallow)） |
| 目标 SDK | API 34（Android 14） |
| 支持 ABI | arm64-v8a |
| 大小 | 114MB（118946956 字节） |
| SHA-256 | `aed9ad12f3eaf841bf90a1e8632735f7abb315bea05d540d2d98a3a01499c47a` |
| 下载源 | https://dl.max-c.com/app/heybox/heybox-beta.apk |
| 抓取日期（北京时间） | 2026-09-08 01:14 |

<details><summary>权限列表（55 项）</summary>

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
- `android.permission.MOUNT_UNMOUNT_FILESYSTEMS`
- `android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION`
- `com.max.xiaoheihe.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`
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
