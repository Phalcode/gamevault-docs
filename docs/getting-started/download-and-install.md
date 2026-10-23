---
sidebar_position: 2
---

# Download and Install

All desktop builds are published on our [download page](/download) and on
[GitHub Releases](https://github.com/Phalcode/gamevault-frontend/releases).

## GameVault 2

GameVault 2 is available for Windows, Linux and macOS. It is in public beta.

| Platform | Package               | Notes                                                             |
| -------- | --------------------- | ----------------------------------------------------------------- |
| Windows  | `*-setup.exe`         | Installer for Windows 10 and 11                                   |
| Linux    | `.AppImage` or `.deb` | AppImage runs on most distributions, `.deb` targets Debian/Ubuntu |
| macOS    | `.dmg`                | Apple Silicon build                                               |

Detailed instructions:

- [Windows, Linux and macOS installation](../clients/gamevault-2/installation.md)
- [Linux specifics](../clients/gamevault-2/linux.md), including umu-launcher and Steam Deck
- [macOS specifics](../clients/gamevault-2/macos.md)

The desktop client updates itself. See [Updating the client](../clients/gamevault-2/updating.md).

## Web UI

Nothing to install. Open your server's address in a browser, for example
`http://192.168.0.15:8080`. The Web UI is GameVault 2 in your browser: the same
interface and library, and you can download game files directly. Automatic
installation, launching and playtime tracking need the desktop app. See
[Web UI](../clients/gamevault-2/web-ui.md).

## GameVault 1

GameVault 1 is still available from the Microsoft Store and as a manual
download. See
[GameVault 1 installation](../clients/gamevault-1/installation.md).

## Unsigned builds

Our binaries are not code-signed. Windows SmartScreen and macOS Gatekeeper may
warn you the first time you start the app. The installers come from our GitHub
releases and are safe to run; the per-platform pages explain how to get past
the warning.
