---
sidebar_label: Early Access
description: Switch update channels for GameVault 2 and the server, and test pre-release builds without an application.
sidebar_position: 10
---

# Early Access and update channels

Early Access is open to everyone. There is no application, no form and no
invite. Switch the update channel in the client and you are in.

## Switching to Early Access

1. Open **Settings → About**.
2. Click the version number five times to unlock **Developer Tools**.
3. Open **Settings → Developer Tools → Updates** (or scroll to the update
   section).
4. Set **Update channel** to **Early Access**.
5. Check for updates. New builds arrive through the built-in updater.

That is the whole process. It stays open permanently, so you can join or leave
whenever you want by switching back to **Stable**.

## Channels

| Channel        | Source branch | Purpose                                   |
| -------------- | ------------- | ----------------------------------------- |
| `stable`       | `master`      | Normal releases, default                  |
| `early-access` | `ea`          | Feature previews before they reach stable |
| `unstable`     | `develop`     | Every merged change, expect breakage      |

**Early Access** is the recommended channel for testing. **Unstable** is for
development and breaks more often.

## Discuss and report

Early Access feedback is welcome in
[Discord](https://discord.gg/NEdNen2dSu). Talk about builds, ask questions and
compare notes with other testers there.

Bugs belong in the trackers:

- Client: [gamevault-frontend issues](https://github.com/Phalcode/gamevault-frontend/issues)
- Server: [gamevault-backend issues](https://github.com/Phalcode/gamevault-backend/issues)
- Documentation: [gamevault-docs issues](https://github.com/Phalcode/gamevault-docs/issues)

Include the version, channel and operating system. For client problems, add the
launch log or the settings dump from Developer Tools.

## Early Access is not a subscription

The old Early Access Program for the Microsoft Store app is gone. You do not
need GameVault+, a Microsoft account or a Store installation to test
pre-release builds. GameVault 2 updates itself through the channel you pick.

## Before you switch

:::warning
Pre-release builds can corrupt settings or installations. Back up your settings
and download folders before switching, and expect features to change between
builds.
:::

## Server pre-releases

The server image is published with three tags:

| Tag                                       | Contents                   |
| ----------------------------------------- | -------------------------- |
| `phalcode/gamevault-backend:latest`       | Stable releases            |
| `phalcode/gamevault-backend:early-access` | Early Access builds        |
| `phalcode/gamevault-backend:unstable`     | Every merge from `develop` |

Switch by changing the image tag in your compose file or `.env`, then recreate
the container. Keep pre-release tags on a test instance and read the
[server changelog](https://github.com/Phalcode/gamevault-backend/blob/develop/CHANGELOG.md)
before updating.
