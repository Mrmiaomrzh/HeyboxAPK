# HeyboxAPK

[![工作流状态](https://github.com/Mrmiaomrzh/HeyboxAPK/actions/workflows/HeyboxDaily.yml/badge.svg)](https://github.com/Mrmiaomrzh/HeyboxAPK/actions/workflows/HeyboxDaily.yml)

[English](README.md) | **简体中文**

HeyboxAPK 追踪小黑盒 Android 正式版和测试版 APK，记录安装包信息，并将检测到的新版本发布到 GitHub Releases。

[浏览发布版本](https://github.com/Mrmiaomrzh/HeyboxAPK/releases) · [查看工作流记录](https://github.com/Mrmiaomrzh/HeyboxAPK/actions/workflows/HeyboxDaily.yml) · [查看最新 APK 分析](README.md#latest-apk-analysis)

## 下载

| 渠道 | 官方 CDN | GitHub 归档 |
| --- | --- | --- |
| 正式版（Release） | [下载 APK](https://dl.max-c.com/app/heybox/heybox-release.apk) | [浏览发布版本](https://github.com/Mrmiaomrzh/HeyboxAPK/releases) |
| 测试版（Beta） | [下载 APK](https://dl.max-c.com/app/heybox/heybox-beta.apk) | [浏览发布版本](https://github.com/Mrmiaomrzh/HeyboxAPK/releases) |

发布附件的命名格式为 `<渠道>-<版本名称>(<版本号>)-<YYYYMMDD>.apk`，标签格式为 `release-v<版本名称>-<版本号>` 或 `beta-v<版本名称>-<版本号>`。

## 工作原理

1. [Cloudflare Worker](cf-worker/) 每五分钟检查两个 CDN 渠道的文件标识，发现变化时请求运行工作流。
2. [GitHub Actions](.github/workflows/HeyboxDaily.yml) 检查 CDN ETag，并从多个应用商店查询版本信息。工作流每天 UTC 00:00（北京时间 08:00）运行一次作为兜底，也支持手动运行。
3. 检测到更新后，工作流下载并分析 APK，为尚未发布的版本创建 GitHub Release；有新版本发布时，更新英文首页中的分析报告。

分析内容包括版本、Android SDK 要求、支持的 ABI、权限、文件大小、SHA-256，以及可获取时的签名证书信息。正式版发布说明可能包含商店更新日志；目前尚未配置经过验证的 Beta 专用更新日志来源。

## 最新 APK 分析

[查看自动生成的最新分析报告](README.md#latest-apk-analysis)。报告由工作流统一维护，以英文展示字段，并保留 APK 中的应用名称和权限标识。
