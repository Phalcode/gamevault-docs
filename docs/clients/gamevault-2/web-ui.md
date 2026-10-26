---
description: "Use GameVault 2 in a browser: sign in, browse the library and download game files."
sidebar_position: 5
---

# Web UI

The Web UI is GameVault 2 running in your browser. The server serves the same
interface as the desktop app, so the library, game pages, settings, community
and administration pages look and behave the same. What a browser cannot do is
local automation: extraction, installation, launching and playtime tracking.

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
| Hand off a download to the desktop app | n/a               | ✅ via `gamevault://install` |
| Local folders, shortcuts, tray         | ✅                | ❌                           |
| Updater                                | ✅ built-in       | ⚠️ via the server admin page |

The Web UI fits browsing your library from another device, checking what your
community is playing, or doing administrative work without installing anything.
If you need installation or playtime tracking, use the
[desktop app](installation.md).

## Opening the Web UI

Enter your server's address in a browser, for example
`http://192.168.0.15:8080`, and sign in with your GameVault account.

## Availability and configuration

The Web UI is included in GameVault Server 16 and later. It is enabled by
default and can be controlled with two environment variables:

| Variable         | Default   | Purpose                                                            |
| ---------------- | --------- | ------------------------------------------------------------------ |
| `WEB_UI_ENABLED` | `true`    | Set to `false` to disable the Web UI                               |
| `WEB_UI_VERSION` | automatic | Pin a specific Web UI release instead of the newest compatible one |

The aliases `SERVER_WEB_UI_ENABLED` and `SERVER_LANDING_PAGE_ENABLED` are still
accepted. See [configuration](../../server/configuration.md) for the full list.

## Updating the Web UI

The Web UI has no updater of its own. Server admins update and restart it from
the administration page with **Update & Restart Web UI**; the server then
fetches the newest compatible release. `WEB_UI_VERSION` pins a specific version
when you do not want the automatic choice.

## Next steps

- [Install the desktop app](installation.md) for installation and playtime
  tracking
- [Settings](settings.md)
