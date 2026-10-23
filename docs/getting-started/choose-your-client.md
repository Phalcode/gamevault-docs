---
sidebar_position: 1
---

# Choose Your Client

GameVault has two clients. Both connect to the same server and the same account.

|                                     | GameVault 2                                 | Legacy Windows app (GameVault 1) |
| ----------------------------------- | ------------------------------------------- | -------------------------------- |
| Platforms                           | Windows, Linux, macOS, plus a browser build | Windows 10/11                    |
| Installation                        | Desktop app, or nothing for the Web UI      | Microsoft Store or manual        |
| Download game files                 | Browser download or desktop app             | Yes                              |
| Automatic install, launch, tracking | Desktop app only                            | Yes                              |
| Status                              | Public beta                                 | Feature-complete, maintenance    |
| GameVault+                          | Planned                                     | Available                        |

The [feature comparison](../clients/feature-parity.md) covers every difference in
detail.

## GameVault 2 (recommended)

GameVault 2 is the actively developed client. It manages multiple versions per
game, installs and launches titles, and brings first-class Linux support with
AppImage, `.deb`, umu-launcher and per-game Wine/Proton prefixes.

GameVault 2 is web-first: the desktop app runs the same interface that your
server serves as the [Web UI](../clients/gamevault-2/web-ui.md). The browser
build shares the library, game pages, settings, community and admin views, and
can download game files or hand a download off to an installed desktop client.
What it leaves out is the local automation: extraction, installation, launching
and playtime tracking.

- [Install the desktop app](../clients/gamevault-2/installation.md)
- [Open the Web UI in your browser](../clients/gamevault-2/web-ui.md)

It is in public beta. The legacy Windows app is still available if you depend on
a feature that GameVault 2 does not have yet.

## Legacy Windows app (GameVault 1)

The original Windows client. It is feature-complete and only receives
maintenance updates, but it is the only client with full GameVault+ support
today.

[Learn about the legacy client](../clients/legacy-windows/overview.md)

## Still need a server?

A client is only half of the setup. If you do not have a GameVault server yet,
start with the [server setup guide](../server/setup/setup.md) or try the demo
server:

**URL**: [demo.gamevau.lt](https://demo.gamevau.lt)  
**Username**: demo  
**Password**: demodemo
