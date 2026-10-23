---
sidebar_position: 1
---

# Choose Your Client

GameVault has three ways to access a server. They all connect to the same
library and use the same account.

|                          | GameVault 2           | Web UI                      | Legacy Windows app            |
| ------------------------ | --------------------- | --------------------------- | ----------------------------- |
| Platforms                | Windows, Linux, macOS | Any modern browser          | Windows 10/11                 |
| Installation             | Desktop app           | None, served by your server | Microsoft Store or manual     |
| Download manager         | Yes                   | No                          | Yes                           |
| Install and launch games | Yes                   | No                          | Yes                           |
| Status                   | Public beta           | Stable                      | Feature-complete, maintenance |

## GameVault 2 (recommended)

GameVault 2 is the new cross-platform desktop client. It manages versions per
game, installs and launches titles, and brings first-class Linux support with
AppImage, `.deb`, umu-launcher and per-game Wine/Proton prefixes.

It is in public beta. The legacy Windows app is still available if you depend
on a feature that GameVault 2 does not have yet.

[Install GameVault 2](../clients/gamevault-2/installation.md)

## Web UI

The Web UI is served by GameVault Server itself. Open your server's address in
a browser and you get the same library, browsing and administration interface
without installing anything.

A browser cannot download, install or launch games on your computer, so the Web
UI is best for browsing, managing users or checking on your server from another
device.

[Learn about the Web UI](../web-ui/overview.md)

## Legacy Windows app

The original Windows client. It is feature-complete and only receives
maintenance updates, but it is the only client with full GameVault+ support
today and it can be installed from the Microsoft Store.

[Learn about the legacy client](../clients/legacy-windows/overview.md)

## Still need a server?

A client is only half of the setup. If you do not have a GameVault server yet,
start with the [server setup guide](../server/setup/setup.md) or try the demo
server:

**URL**: [demo.gamevau.lt](https://demo.gamevau.lt)  
**Username**: demo  
**Password**: demodemo
