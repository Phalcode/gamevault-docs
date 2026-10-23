---
sidebar_position: 1
---

# Web UI

GameVault Server ships with a Web UI that runs in any modern browser. Open your
server's address, for example `http://192.168.0.15:8080`, and sign in with your
GameVault account.

The Web UI uses the same interface as GameVault 2: library, game pages, user
management, community features and administration.

## What the Web UI can do

- Browse and search the library, including metadata, screenshots and trailers.
- Manage users, roles and parental control if you are an administrator.
- View downloads and installed games, and see what other users are playing.
- Change server settings that are exposed through the API.

## What it cannot do

A browser cannot access your file system or start processes, so the Web UI
cannot download, install or launch games on your computer. For that you need a
desktop client:

- [GameVault 2](../clients/gamevault-2/installation.md) for Windows, Linux and macOS
- [Legacy Windows app](../clients/legacy-windows/overview.md) for Windows

## Disabling or pinning the Web UI

The Web UI is enabled by default. Server operators can change that with
environment variables:

| Variable         | Default   | Purpose                                                            |
| ---------------- | --------- | ------------------------------------------------------------------ |
| `WEB_UI_ENABLED` | `true`    | Set to `false` to disable the Web UI entirely                      |
| `WEB_UI_VERSION` | automatic | Pin a specific Web UI release instead of the newest compatible one |

The aliases `SERVER_WEB_UI_ENABLED` and `SERVER_LANDING_PAGE_ENABLED` are still
accepted. See [configuration](../server/configuration.md) for the full list of
server variables.

## Requirements

The Web UI is included in GameVault Server 16 and later. If your server predates
that release, update the server first.
