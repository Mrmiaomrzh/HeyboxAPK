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

**文件名**：`Release-1.3.394(1127)-20260829.apk`

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
| 签名证书 SHA-256 | `EF42D004AB18B04E0789A9C2A246156589423F9186A345A5B0C52FCB6612D82C` |
| 下载源 | https://dl.max-c.com/app/heybox/heybox-release.apk |
| 抓取日期（北京时间） | 2026-08-29 |

<details><summary>权限列表（55 项）</summary>

- `android.permission.ACCESS_BACKGROUND_LOCATION`
- `android.permission.ACCESS_NETWORK_STATE`
- `android.permission.ACCESS_WIFI_STATE`
- `android.permission.BLUETOOTH`
- `android.permission.BLUETOOTH_ADMIN`
- `android.permission.BLUETOOTH_CONNECT`
- `android.permission.CAMERA`
- `android.permission.CHANGE_NETWORK_STATE`
- `android.permission.FOREGROUND_SERVICE`
- `android.permission.FOREGROUND_SERVICE_CAMERA`
- `android.permission.FOREGROUND_SERVICE_DATA_SYNC`
- `android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION`
- `android.permission.FOREGROUND_SERVICE_MICROPHONE`
- `android.permission.GET_TASKS`
- `android.permission.HIGH_SAMPLING_RATE_SENSORS`
- `android.permission.INTERNET`
- `android.permission.MODIFY_AUDIO_SETTINGS`
- `android.permission.MOUNT_UNMOUNT_FILESYSTEMS`
- `android.permission.PACKAGE_USAGE_STATS`
- `android.permission.POST_NOTIFICATIONS`
- `android.permission.QUERY_ALL_PACKAGES`
- `android.permission.READ_CALENDAR`
- `android.permission.READ_EXTERNAL_STORAGE`
- `android.permission.READ_MEDIA_IMAGES`
- `android.permission.READ_MEDIA_VIDEO`
- `android.permission.READ_PHONE_STATE`
- `android.permission.READ_PRIVILEGED_PHONE_STATE`
- `android.permission.RECORD_AUDIO`
- `android.permission.REQUEST_DELETE_PACKAGES`
- `android.permission.REQUEST_INSTALL_PACKAGES`
- `android.permission.SCHEDULE_EXACT_ALARM`
- `android.permission.VIBRATE`
- `android.permission.WAKE_LOCK`
- `android.permission.WRITE_CALENDAR`
- `android.permission.WRITE_EXTERNAL_STORAGE`
- `com.android.launcher.permission.INSTALL_SHORTCUT`
- `com.android.launcher.permission.READ_SETTINGS`
- `com.android.launcher.permission.UNINSTALL_SHORTCUT`
- `com.android.launcher.permission.WRITE_SETTINGS`
- `com.android.permission.GET_INSTALLED_APPS`
- `com.asus.msa.SupplementaryDID.ACCESS`
- `com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE`
- `com.google.android.gms.permission.AD_ID`
- `com.heytap.mcs.permission.RECIEVE_MCS_MESSAGE`
- `com.hihonor.push.permission.READ_PUSH_NOTIFICATION_INFO`
- `com.max.xiaoheihe.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`
- `com.max.xiaoheihe.permission.MIPUSH_RECEIVE`
- `com.max.xiaoheihe.permission.PROCESS_PUSH_MSG`
- `com.max.xiaoheihe.permission.PUSH_PROVIDER`
- `com.vivo.identifier.permission.OAID_STATE_DIALOG`
- `com.vivo.notification.permission.BADGE_ICON`
- `freemme.permission.msa`
- `freemme.permission.msa.SECURITY_ACCESS`
- `getui.permission.GetuiService.com.max.xiaoheihe`
- `oplus.permission.settings.LAUNCH_FOR_EXPORT`

</details>

## Beta - 小黑盒 1.3.394 (1126)

**文件名**：`Beta-1.3.394(1126)-20260829.apk`

| 项目 | 值 |
| --- | --- |
| 应用名称 | 小黑盒 |
| 包名 | `com.max.xiaoheihe` |
| 版本名称 | 1.3.394 |
| 版本号 | 1126 |
| 最低支持 SDK | API 23（Android 6.0 (Marshmallow)） |
| 目标 SDK | API 34（Android 14） |
| 支持 ABI | arm64-v8a |
| 大小 | 113MB（118889871 字节） |
| SHA-256 | `4b3100a0c290f1a2d20a43be7b1eb944fd8ba0a409192addf924809178140f75` |
| 签名证书 SHA-256 | `EF42D004AB18B04E0789A9C2A246156589423F9186A345A5B0C52FCB6612D82C` |
| 下载源 | https://dl.max-c.com/app/heybox/heybox-beta.apk |
| 抓取日期（北京时间） | 2026-08-29 |

<details><summary>权限列表（55 项）</summary>

- `android.permission.ACCESS_BACKGROUND_LOCATION`
- `android.permission.ACCESS_NETWORK_STATE`
- `android.permission.ACCESS_WIFI_STATE`
- `android.permission.BLUETOOTH`
- `android.permission.BLUETOOTH_ADMIN`
- `android.permission.BLUETOOTH_CONNECT`
- `android.permission.CAMERA`
- `android.permission.CHANGE_NETWORK_STATE`
- `android.permission.FOREGROUND_SERVICE`
- `android.permission.FOREGROUND_SERVICE_CAMERA`
- `android.permission.FOREGROUND_SERVICE_DATA_SYNC`
- `android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION`
- `android.permission.FOREGROUND_SERVICE_MICROPHONE`
- `android.permission.GET_TASKS`
- `android.permission.HIGH_SAMPLING_RATE_SENSORS`
- `android.permission.INTERNET`
- `android.permission.MODIFY_AUDIO_SETTINGS`
- `android.permission.MOUNT_UNMOUNT_FILESYSTEMS`
- `android.permission.PACKAGE_USAGE_STATS`
- `android.permission.POST_NOTIFICATIONS`
- `android.permission.QUERY_ALL_PACKAGES`
- `android.permission.READ_CALENDAR`
- `android.permission.READ_EXTERNAL_STORAGE`
- `android.permission.READ_MEDIA_IMAGES`
- `android.permission.READ_MEDIA_VIDEO`
- `android.permission.READ_PHONE_STATE`
- `android.permission.READ_PRIVILEGED_PHONE_STATE`
- `android.permission.RECORD_AUDIO`
- `android.permission.REQUEST_DELETE_PACKAGES`
- `android.permission.REQUEST_INSTALL_PACKAGES`
- `android.permission.SCHEDULE_EXACT_ALARM`
- `android.permission.VIBRATE`
- `android.permission.WAKE_LOCK`
- `android.permission.WRITE_CALENDAR`
- `android.permission.WRITE_EXTERNAL_STORAGE`
- `com.android.launcher.permission.INSTALL_SHORTCUT`
- `com.android.launcher.permission.READ_SETTINGS`
- `com.android.launcher.permission.UNINSTALL_SHORTCUT`
- `com.android.launcher.permission.WRITE_SETTINGS`
- `com.android.permission.GET_INSTALLED_APPS`
- `com.asus.msa.SupplementaryDID.ACCESS`
- `com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE`
- `com.google.android.gms.permission.AD_ID`
- `com.heytap.mcs.permission.RECIEVE_MCS_MESSAGE`
- `com.hihonor.push.permission.READ_PUSH_NOTIFICATION_INFO`
- `com.max.xiaoheihe.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`
- `com.max.xiaoheihe.permission.MIPUSH_RECEIVE`
- `com.max.xiaoheihe.permission.PROCESS_PUSH_MSG`
- `com.max.xiaoheihe.permission.PUSH_PROVIDER`
- `com.vivo.identifier.permission.OAID_STATE_DIALOG`
- `com.vivo.notification.permission.BADGE_ICON`
- `freemme.permission.msa`
- `freemme.permission.msa.SECURITY_ACCESS`
- `getui.permission.GetuiService.com.max.xiaoheihe`
- `oplus.permission.settings.LAUNCH_FOR_EXPORT`

</details>
<!-- HEYBOX-ANALYSIS:END -->
