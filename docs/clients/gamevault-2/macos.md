---
sidebar_position: 6
---

# GameVault 2 on macOS

GameVault 2 ships as a `.dmg` for Apple Silicon Macs. The macOS build receives
less testing than Windows and Linux, so bugs are more likely here. Please report
them in the [issue tracker](https://github.com/Phalcode/gamevault-frontend/issues).

## Installation

1. Download the `.dmg` from the [download page](/download).
2. Open it and drag GameVault into **Applications**.
3. Start GameVault from Launchpad or Finder.

## Gatekeeper

The build is not notarized, so macOS blocks the first start with a message that
the app cannot be verified. To allow it:

- Right-click (or Control-click) the app, choose **Open**, then confirm, or
- open **System Settings → Privacy & Security** and click **Open Anyway** for
  GameVault.

You only need to do this once per installation.

## Requirements

- macOS on Apple Silicon (arm64). Intel Macs are not supported by the published
  build.
- Enough free disk space for your download and installation folders.

## Updates

The client updates itself through the built-in updater. See
[Updating](updating.md). If you installed the app manually and the updater is
unavailable, install a newer `.dmg` over the existing app; your settings and
library stay in place.
