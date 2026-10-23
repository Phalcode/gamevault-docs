---
sidebar_position: 2
---

# Beta Program and Update Channels

GameVault 2 is in public beta, and the server and clients offer pre-release
channels if you want to test changes earlier.

## The old Early Access Program

The Early Access Program for the Microsoft Store app has ended. The
cross-platform client replaced it: GameVault 2 is available to everyone as a
public beta. The old `early-access` page now points here.

## Client update channels

GameVault 2 knows three channels:

| Channel        | Source branch | Purpose                                   |
| -------------- | ------------- | ----------------------------------------- |
| `stable`       | `master`      | Normal releases, default                  |
| `early-access` | `ea`          | Feature previews before they reach stable |
| `unstable`     | `develop`     | Every merged change, expect breakage      |

Switch the channel under **Settings → About → Updates**. Early Access and
Unstable only appear after unlocking **Developer Tools**, which keeps the
default experience on stable builds.

:::warning
Pre-release builds can corrupt settings or installations. Back up your library
and download folders before switching, and report problems in the
[issue tracker](https://github.com/Phalcode/gamevault-frontend/issues).
:::

## Server pre-releases

The server publishes pre-release Docker images next to the stable tags. Use
them only on a test instance, and read the
[server changelog](https://github.com/Phalcode/gamevault-backend/blob/develop/CHANGELOG.md)
before updating.

## Reporting beta problems

- Client bugs: [gamevault-frontend issues](https://github.com/Phalcode/gamevault-frontend/issues)
- Server bugs: [gamevault-backend issues](https://github.com/Phalcode/gamevault-backend/issues)
- Documentation bugs: [gamevault-docs issues](https://github.com/Phalcode/gamevault-docs/issues)

Include the version, channel, operating system and, for client problems, the
launch log or the settings dump from **Settings → Developer Tools**.
