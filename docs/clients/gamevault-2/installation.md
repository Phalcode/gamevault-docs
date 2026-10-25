---
description: Install GameVault 2 on Windows, Linux or macOS and connect it to your server.
sidebar_position: 1
---

# Installing GameVault 2

:::warning Public beta
GameVault 2 is in public beta. Crashes and missing features are possible. If you
depend on GameVault+ features, keep using the
[GameVault 1](../gamevault-1/overview.md) for now. The
[feature comparison](../feature-parity.md) shows exactly what is still missing.
:::

Download the installer for your platform from the [download page](/download) or
from [GitHub Releases](https://github.com/Phalcode/gamevault-frontend/releases).

If you only want to browse or download games, you do not need an installer: open
your server's address in a browser and use the [Web UI](web-ui.md).

## Windows

Run the `*-setup.exe` installer. Windows SmartScreen may warn you because the
binary is not code-signed. Choose **More info → Run anyway**.

After installation, start GameVault from the Start menu. See
[Connect to a server](../../getting-started/connect-to-server.md) for the first
login.

## Linux

Two packages are available:

- **AppImage** for most distributions. Make it executable and run it:

  ```bash
  chmod +x GameVault-*.AppImage
  ./GameVault-*.AppImage
  ```

- **`.deb`** for Debian, Ubuntu and derivatives:

  ```bash
  sudo apt install ./GameVault-*.deb
  ```

AppImages need FUSE. On distributions without `libfuse2` (for example Ubuntu
22.04+), install it or run the AppImage with `--appimage-extract-and-run`.

More Linux details, including umu-launcher and Steam Deck, are on the
[Linux page](linux.md).

## macOS

Open the `.dmg` and drag GameVault into **Applications**. The build targets
Apple Silicon. Gatekeeper may block the first start because the app is not
notarized; see [macOS](macos.md) for the workaround.

## First start

1. Pick a download and installation folder in **Settings → Downloads**.
2. Add your server in the login window.
3. Download a game from the library and install it.

## Updates

GameVault 2 updates itself. The channel and update status are shown under
**Settings → About → Updates**. Manual installs can be updated by installing a
newer package over the old one; see [Updating](updating.md).
