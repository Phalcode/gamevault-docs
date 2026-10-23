---
sidebar_position: 1
---

# Feature Comparison: GameVault 2 vs Legacy

GameVault 2 (codename RockWhistle) is a rewrite, not an update of the legacy
Windows client. Most of the daily work is covered, but GameVault+ is still
missing entirely and a few local features have not been ported yet.

This page reflects the state as of October 2026. Every missing feature links to
a tracking issue in the
[gamevault-frontend repository](https://github.com/Phalcode/gamevault-frontend/issues).

The Web UI is not a third client. It is GameVault 2 in the browser, so it shares
every row below except the local automation: download queue, extraction and
installation, launching, playtime tracking and file system access. See
[Web UI](gamevault-2/web-ui.md).

## Legend

| Symbol | Meaning                                           |
| ------ | ------------------------------------------------- |
| ✅     | Available                                         |
| ⚠️     | Partial, different behaviour, or platform limited |
| ❌     | Missing                                           |
| —      | Not applicable                                    |

## Summary

**GameVault 2 is ahead on:** native Linux (AppImage, `.deb`, umu-launcher,
per-game prefixes), macOS, multiple game versions with a version picker, launch
logs, the built-in updater with channels, Streamer/OPSEC mode, tray integration
and gamepad navigation.

**The legacy client is ahead on:** GameVault+ (cloud saves, profiles, themes,
integrations), offline progress sync, desktop shortcuts, a random game picker
and custom themes.

If you depend on a GameVault+ feature, stay on the legacy client until the
corresponding issue is closed. Everything else can move to GameVault 2.

## Platforms and distribution

| Feature              | GameVault 2                         | Legacy Windows app       | Notes                                                              |
| -------------------- | ----------------------------------- | ------------------------ | ------------------------------------------------------------------ |
| Windows 10/11        | ✅                                  | ✅                       | GameVault 2 ships an NSIS installer                                |
| Linux                | ✅                                  | ❌                       | GameVault 2: AppImage and `.deb`; legacy only via unsupported Wine |
| macOS                | ⚠️                                  | ❌                       | GameVault 2 targets Apple Silicon and is less tested               |
| Gamepad / Steam Deck | ✅                                  | ⚠️                       | GameVault 2 has gamepad navigation; legacy runs through Proton     |
| Distribution         | GitHub Releases                     | Microsoft Store + manual |                                                                    |
| Update channels      | ✅ stable / early-access / unstable | ❌                       | Legacy updates through the Store                                   |
| Built-in updater     | ✅                                  | ⚠️                       | Store builds update via the Store; manual builds do not            |

## Library and browsing

| Feature              | GameVault 2 | Legacy Windows app | Notes                                                           |
| -------------------- | ----------- | ------------------ | --------------------------------------------------------------- |
| Browse library       | ✅          | ✅                 |                                                                 |
| Search, filter, sort | ✅          | ✅                 |                                                                 |
| Bookmarks            | ✅          | ✅                 |                                                                 |
| Share links          | ✅          | ✅                 |                                                                 |
| News                 | ✅          | ✅                 |                                                                 |
| Random game picker   | ❌          | ✅                 | [#57](https://github.com/Phalcode/gamevault-frontend/issues/57) |

## Game details and metadata

| Feature                                          | GameVault 2 | Legacy Windows app | Notes                                                           |
| ------------------------------------------------ | ----------- | ------------------ | --------------------------------------------------------------- |
| Media player                                     | ✅          | ✅                 | Trailers, videos, screenshots                                   |
| Markdown descriptions                            | ✅          | ✅                 |                                                                 |
| Progress states                                  | ✅          | ✅                 |                                                                 |
| Community progress                               | ✅          | ✅                 |                                                                 |
| Multiple versions and version picker             | ✅          | ❌                 | Legacy always downloads the server default                      |
| Edit images (editor role)                        | ✅          | ✅                 |                                                                 |
| Metadata remap and custom metadata (editor role) | ✅          | ✅                 |                                                                 |
| Per-game executable and launch overrides         | ✅          | ✅                 | Edited in the game settings; applies server-wide                |
| Desktop shortcuts                                | ❌          | ✅                 | [#55](https://github.com/Phalcode/gamevault-frontend/issues/55) |
| Uninstall and disk usage                         | ✅          | ✅                 |                                                                 |

## Downloads and installation

| Feature                               | GameVault 2 | Legacy Windows app | Notes                                                  |
| ------------------------------------- | ----------- | ------------------ | ------------------------------------------------------ |
| Download queue                        | ✅          | ✅                 |                                                        |
| Extraction and automatic installation | ✅          | ✅                 |                                                        |
| Auto-delete source files              | ✅          | ⚠️                 | Legacy offers a manual "clear remains" step            |
| Choose download and install folders   | ✅          | ✅                 |                                                        |
| Versioned folder layout               | ✅          | ⚠️                 | GameVault 2 keeps title and version separated per game |

## Launching and operating systems

| Feature                       | GameVault 2 | Legacy Windows app | Notes                                                |
| ----------------------------- | ----------- | ------------------ | ---------------------------------------------------- |
| Launch games                  | ✅          | ✅                 |                                                      |
| Per-game Wine/Proton prefixes | ✅          | ❌                 | Linux only                                           |
| umu-launcher support          | ✅          | ❌                 | Linux only                                           |
| Launch logs                   | ✅          | ⚠️                 | Legacy has crash logs, not per-launch logs           |
| Tray menu with recent games   | ✅          | ⚠️                 | Legacy minimises to tray without a recent-games menu |
| Streamer / OPSEC mode         | ✅          | ❌                 |                                                      |

## Progress, users and community

| Feature                             | GameVault 2 | Legacy Windows app | Notes                                                                               |
| ----------------------------------- | ----------- | ------------------ | ----------------------------------------------------------------------------------- |
| Playtime tracking                   | ✅          | ✅                 |                                                                                     |
| Offline playtime and progress sync  | ❌          | ✅                 | [#54](https://github.com/Phalcode/gamevault-frontend/issues/54)                     |
| User profiles, avatars, backgrounds | ✅          | ✅                 |                                                                                     |
| Community view                      | ✅          | ✅                 |                                                                                     |
| User and game administration        | ✅          | ✅                 |                                                                                     |
| Multiple profiles per installation  | ❌          | ✅                 | GameVault+ feature, [#48](https://github.com/Phalcode/gamevault-frontend/issues/48) |

## Settings, data and customization

| Feature                             | GameVault 2 | Legacy Windows app | Notes                                                                               |
| ----------------------------------- | ----------- | ------------------ | ----------------------------------------------------------------------------------- |
| Light, dark, system theme           | ✅          | ✅                 |                                                                                     |
| Custom and premium themes           | ❌          | ✅                 | GameVault+ feature, [#49](https://github.com/Phalcode/gamevault-frontend/issues/49) |
| Ignore list                         | ✅          | ✅                 |                                                                                     |
| Clear image cache                   | ✅          | ✅                 |                                                                                     |
| Crash logs                          | ⚠️          | ✅                 | GameVault 2 has launch logs and diagnostic logging                                  |
| Embedded browser settings           | —           | ✅                 | GameVault 2 uses the system WebView instead of an embedded browser                  |
| Zoom, volume, hardware acceleration | ✅          | ✅                 |                                                                                     |

## GameVault+

GameVault+ is currently only available in the legacy Windows app.

| Feature                            | GameVault 2 | Legacy Windows app | Notes                                                                                                           |
| ---------------------------------- | ----------- | ------------------ | --------------------------------------------------------------------------------------------------------------- |
| Account sign-in and license        | ❌          | ✅                 | [#46](https://github.com/Phalcode/gamevault-frontend/issues/46)                                                 |
| Cloud saves (Ludusavi)             | ❌          | ✅                 | [#47](https://github.com/Phalcode/gamevault-frontend/issues/47)                                                 |
| Multiple profiles                  | ❌          | ✅                 | [#48](https://github.com/Phalcode/gamevault-frontend/issues/48)                                                 |
| Premium and custom themes          | ❌          | ✅                 | [#49](https://github.com/Phalcode/gamevault-frontend/issues/49)                                                 |
| Steam integration                  | ❌          | ✅                 | [#50](https://github.com/Phalcode/gamevault-frontend/issues/50)                                                 |
| Discord Rich Presence              | ❌          | ✅                 | [#51](https://github.com/Phalcode/gamevault-frontend/issues/51)                                                 |
| Playnite integration               | ❌          | ✅                 | [#52](https://github.com/Phalcode/gamevault-frontend/issues/52)                                                 |
| Client APIs (CLI, URI, named pipe) | ⚠️          | ✅                 | GameVault 2 handles `gamevault://install` only, [#53](https://github.com/Phalcode/gamevault-frontend/issues/53) |

## Open parity issues

- [#46](https://github.com/Phalcode/gamevault-frontend/issues/46) GameVault+ account sign-in and license activation
- [#47](https://github.com/Phalcode/gamevault-frontend/issues/47) Cloud saves
- [#48](https://github.com/Phalcode/gamevault-frontend/issues/48) Multiple profiles per installation
- [#49](https://github.com/Phalcode/gamevault-frontend/issues/49) Custom and premium themes
- [#50](https://github.com/Phalcode/gamevault-frontend/issues/50) Steam integration
- [#51](https://github.com/Phalcode/gamevault-frontend/issues/51) Discord Rich Presence
- [#52](https://github.com/Phalcode/gamevault-frontend/issues/52) Playnite integration
- [#53](https://github.com/Phalcode/gamevault-frontend/issues/53) Client APIs
- [#54](https://github.com/Phalcode/gamevault-frontend/issues/54) Offline playtime and progress sync
- [#55](https://github.com/Phalcode/gamevault-frontend/issues/55) Desktop shortcuts
- [#57](https://github.com/Phalcode/gamevault-frontend/issues/57) Random game picker

This page is updated when one of these issues ships. If something is wrong or
missing, open an issue in the
[documentation repository](https://github.com/Phalcode/gamevault-docs/issues).

## Next steps

- [GameVault 2 documentation](gamevault-2/installation.md)
- [Legacy Windows client documentation](legacy-windows/overview.md)
- [Migrating from GameVault 1](../getting-started/migrating-from-gamevault-1.md)
