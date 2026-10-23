---
sidebar_position: 9
---

# Web UI

The Web UI is GameVault 2 running in your browser. It is not a separate client:
the server serves the same interface as the desktop app, so library, game pages,
settings, community and administration look and behave the same.

GameVault 2 is built web-first. The desktop app wraps that interface and adds what
a browser cannot do automatically.

## Desktop app and Web UI

| Capability                             | Desktop app       | Web UI                       |
| -------------------------------------- | ----------------- | ---------------------------- |
| Browse library, search, filters        | ✅                | ✅                           |
| Game pages, media, metadata            | ✅                | ✅                           |
| Progress, community, profiles          | ✅                | ✅                           |
| Administration                         | ✅                | ✅                           |
| Streamer / OPSEC mode                  | ✅                | ✅                           |
| Download game files                    | ✅ download queue | ✅ direct browser download   |
| Playtime tracking while playing        | ✅                | ❌                           |
| Extract and install games              | ✅ automatic      | ❌ manual                    |
| Launch games                           | ✅                | ❌                           |
| Hand off a download to the desktop app | —                 | ✅ via `gamevault://install` |
| Local folders, shortcuts, tray         | ✅                | ❌                           |
| Updater                                | ✅ built-in       | ⚠️ via the server admin page |

The Web UI is the right choice for browsing your library from another device,
checking what your community is playing, or doing administrative work without
installing anything. You can also download game files directly in the browser,
or hand a download off to an installed GameVault 2 client.

Automatic extraction, installation, launching and playtime tracking need the
[desktop app](installation.md).

## Opening the Web UI

Enter your server's address in a browser, for example
`http://192.168.0.15:8080`, and sign in with your GameVault account.

## Availability and configuration

The Web UI is included in GameVault Server 16 and later. It is enabled by
default and can be controlled with these environment variables:

| Variable         | Default   | Purpose                                                            |
| ---------------- | --------- | ------------------------------------------------------------------ |
| `WEB_UI_ENABLED` | `true`    | Set to `false` to disable the Web UI                               |
| `WEB_UI_VERSION` | automatic | Pin a specific Web UI release instead of the newest compatible one |

The aliases `SERVER_WEB_UI_ENABLED` and `SERVER_LANDING_PAGE_ENABLED` are still
accepted. See [configuration](../../server/configuration.md) for the full list.

## Updating the Web UI

The Web UI has no updater of its own. Server admins update and restart it from
the administration page with **Update & Restart Web UI**; the server then fetches
the newest compatible release. `WEB_UI_VERSION` pins a specific version when you
do not want the automatic choice.
