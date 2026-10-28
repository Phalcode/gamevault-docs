---
description: Compare every GameVault 2 and GameVault 1 feature, including GameVault+ support and known gaps.
sidebar_position: 1
---

# Feature comparison

GameVault 2 (codename RockWhistle) is a rewrite, not an update of GameVault 1.
This page is the single source of truth for what each client can do. Every
missing feature links to the issue that tracks it in the
[gamevault-frontend repository](https://github.com/Phalcode/gamevault-frontend/issues).

The Web UI shares every row with GameVault 2 except local automation: download
queue, extraction, installation, launching, playtime tracking and file system
access. See [Web UI](gamevault-2/web-ui.md).

## Legend

| Symbol | Meaning                                           |
| ------ | ------------------------------------------------- |
| ✅     | Available                                         |
| ⚠️     | Partial, different behaviour, or platform limited |
| ❌     | Missing                                           |
| n/a    | Not applicable                                    |

## Summary

**GameVault 2 is ahead on:** native Linux (AppImage, `.deb`, umu-launcher,
per-game prefixes), macOS, multiple game versions with a version picker, launch
logs, the built-in updater with channels, Streamer/OPSEC mode, tray integration
and gamepad navigation.

**GameVault 1 is ahead on:** GameVault+ (cloud saves, profiles, themes,
integrations), desktop shortcuts and custom themes.

If you depend on a GameVault+ feature, stay on
[GameVault 1](gamevault-1/overview.md) until the corresponding issue is closed.
Everything else can move to [GameVault 2](gamevault-2/overview.md).

## Platforms and distribution

| Feature              | GameVault 2                         | GameVault 1              | Notes                                                         |
| -------------------- | ----------------------------------- | ------------------------ | ------------------------------------------------------------- |
| Windows 10/11        | ✅                                  | ✅                       | GameVault 2 ships an NSIS installer                           |
| Linux                | ✅                                  | ❌                       | GameVault 2: AppImage and `.deb`; GameVault 1 is Windows-only |
| macOS                | ⚠️                                  | ❌                       | GameVault 2 targets Apple Silicon and is less tested          |
| Gamepad / Steam Deck | ✅                                  | ❌                       | GameVault 1 is Windows-only                                   |
| Distribution         | GitHub Releases                     | Microsoft Store + manual |                                                               |
| Update channels      | ✅ stable / early-access / unstable | ❌                       | GameVault 1 updates through the Store                         |
| Built-in updater     | ✅                                  | ⚠️                       | Store builds update via the Store; manual builds do not       |

## Library and browsing

| Feature              | GameVault 2 | GameVault 1 | Notes                                                           |
| -------------------- | ----------- | ----------- | --------------------------------------------------------------- |
| Browse library       | ✅          | ✅          |                                                                 |
| Search, filter, sort | ✅          | ✅          |                                                                 |
| Bookmarks            | ✅          | ✅          |                                                                 |
| Share links          | ✅          | ✅          |                                                                 |
| News                 | ✅          | ✅          |                                                                 |
| Random game picker   | ✅          | ✅          | Picks from the whole library, independent of the active filters |

## Game details and metadata

| Feature                                          | GameVault 2 | GameVault 1 | Notes                                                           |
| ------------------------------------------------ | ----------- | ----------- | --------------------------------------------------------------- |
| Media player                                     | ✅          | ✅          | Trailers, videos, screenshots                                   |
| Markdown descriptions                            | ✅          | ✅          |                                                                 |
| Progress states                                  | ✅          | ✅          |                                                                 |
| Community progress                               | ✅          | ✅          |                                                                 |
| Multiple versions and version picker             | ✅          | ❌          | GameVault 1 always downloads the server default                 |
| Edit images (editor role)                        | ✅          | ✅          |                                                                 |
| Metadata remap and custom metadata (editor role) | ✅          | ✅          |                                                                 |
| Per-game executable and launch overrides         | ✅          | ✅          | Applies server-wide                                             |
| Desktop shortcuts                                | ❌          | ✅          | [#55](https://github.com/Phalcode/gamevault-frontend/issues/55) |
| Uninstall and disk usage                         | ✅          | ✅          |                                                                 |

## Downloads and installation

| Feature                               | GameVault 2 | GameVault 1 | Notes                                            |
| ------------------------------------- | ----------- | ----------- | ------------------------------------------------ |
| Download queue                        | ✅          | ✅          |                                                  |
| Extraction and automatic installation | ✅          | ✅          |                                                  |
| Auto-delete source files              | ✅          | ⚠️          | GameVault 1 offers a manual "clear remains" step |
| Choose download and install folders   | ✅          | ✅          |                                                  |
| Versioned folder layout               | ✅          | ⚠️          | GameVault 2 keeps title and version separated    |

## Launching and operating systems

| Feature                       | GameVault 2 | GameVault 1 | Notes                                                     |
| ----------------------------- | ----------- | ----------- | --------------------------------------------------------- |
| Launch games                  | ✅          | ✅          |                                                           |
| Per-game Wine/Proton prefixes | ✅          | ❌          | Linux only                                                |
| umu-launcher support          | ✅          | ❌          | Linux only                                                |
| Launch logs                   | ✅          | ⚠️          | GameVault 1 has crash logs, not per-launch logs           |
| Tray menu with recent games   | ✅          | ⚠️          | GameVault 1 minimises to tray without a recent-games menu |
| Streamer / OPSEC mode         | ✅          | ❌          |                                                           |

## Progress, users and community

| Feature                             | GameVault 2 | GameVault 1 | Notes                                                                                                  |
| ----------------------------------- | ----------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| Playtime tracking                   | ✅          | ✅          |                                                                                                        |
| Offline playtime and progress sync  | ✅          | ✅          | Minutes are buffered and sent on reconnect, see [Data locations](gamevault-2/data.md#offline-playtime) |
| User profiles, avatars, backgrounds | ✅          | ✅          |                                                                                                        |
| Community view                      | ✅          | ✅          |                                                                                                        |
| User and game administration        | ✅          | ✅          |                                                                                                        |
| Multiple profiles per installation  | ❌          | ✅          | GameVault+ feature, [#48](https://github.com/Phalcode/gamevault-frontend/issues/48)                    |

## Settings, data and customization

| Feature                             | GameVault 2 | GameVault 1 | Notes                                                                               |
| ----------------------------------- | ----------- | ----------- | ----------------------------------------------------------------------------------- |
| Light, dark, system theme           | ✅          | ✅          |                                                                                     |
| Custom and premium themes           | ❌          | ✅          | GameVault+ feature, [#49](https://github.com/Phalcode/gamevault-frontend/issues/49) |
| Ignore list                         | ✅          | ✅          |                                                                                     |
| Clear image cache                   | ✅          | ✅          |                                                                                     |
| Crash logs                          | ⚠️          | ✅          | GameVault 2 has launch logs and diagnostic logging                                  |
| Embedded browser settings           | n/a         | ✅          | GameVault 2 uses the system WebView instead of an embedded browser                  |
| Zoom, volume, hardware acceleration | ✅          | ✅          |                                                                                     |

## GameVault+

GameVault+ is currently available in GameVault 1 only. The
[GameVault+ documentation](../gamevault-plus/introduction.md) describes the
features themselves.

| Feature                            | GameVault 2 | GameVault 1 | Notes                                                                                                           |
| ---------------------------------- | ----------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| Account sign-in and license        | ❌          | ✅          | [#46](https://github.com/Phalcode/gamevault-frontend/issues/46)                                                 |
| Cloud saves (Ludusavi)             | ❌          | ✅          | [#47](https://github.com/Phalcode/gamevault-frontend/issues/47)                                                 |
| Multiple profiles                  | ❌          | ✅          | [#48](https://github.com/Phalcode/gamevault-frontend/issues/48)                                                 |
| Premium and custom themes          | ❌          | ✅          | [#49](https://github.com/Phalcode/gamevault-frontend/issues/49)                                                 |
| Steam integration                  | ❌          | ✅          | [#50](https://github.com/Phalcode/gamevault-frontend/issues/50)                                                 |
| Discord Rich Presence              | ❌          | ✅          | [#51](https://github.com/Phalcode/gamevault-frontend/issues/51)                                                 |
| Playnite integration               | ❌          | ✅          | [#52](https://github.com/Phalcode/gamevault-frontend/issues/52)                                                 |
| Client APIs (CLI, URI, named pipe) | ⚠️          | ✅          | GameVault 2 handles `gamevault://install` only, [#53](https://github.com/Phalcode/gamevault-frontend/issues/53) |

## Keeping this page current

The page is updated when one of the tracking issues ships. If a row is wrong or
missing, open an issue in the
[documentation repository](https://github.com/Phalcode/gamevault-docs/issues).

## Next steps

- [GameVault 2 overview](gamevault-2/overview.md)
- [GameVault 1 overview](gamevault-1/overview.md)
- [Migrating from GameVault 1](../getting-started/migrating-from-gamevault-1.md)
