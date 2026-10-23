---
sidebar_position: 9
---

# Web UI

The Web UI is GameVault 2 running in your browser. It is not a separate client:
the server serves the same interface as the desktop app, so library, game pages,
settings, community and administration look and behave the same.

GameVault 2 is built web-first. The desktop app wraps that interface and adds the
parts a browser cannot do.

## Desktop app and Web UI

| Capability                      | Desktop app | Web UI |
| ------------------------------- | ----------- | ------ |
| Browse library, search, filters | ✅          | ✅     |
| Game pages, media, metadata     | ✅          | ✅     |
| Progress, community, profiles   | ✅          | ✅     |
| Administration                  | ✅          | ✅     |
| Streamer / OPSEC mode           | ✅          | ✅     |
| Download manager                | ✅          | ❌     |
| Extract and install games       | ✅          | ❌     |
| Launch games                    | ✅          | ❌     |
| Local folders, shortcuts, tray  | ✅          | ❌     |
| Built-in updater                | ✅          | ❌     |

The Web UI is the right choice for browsing your library from another device,
checking what your community is playing, or doing administrative work without
installing anything. To download and play, use the
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

## There is no GameVault 1 Web UI

GameVault 1 is the legacy Windows desktop app and has no browser counterpart.
The Web UI always shows the GameVault 2 interface.
