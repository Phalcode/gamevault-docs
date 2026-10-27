---
description: Install GameVault 2 on Apple Silicon macOS and handle Gatekeeper on first launch.
sidebar_position: 4
---

# Installing on macOS

import FirstStart from "./_first-start.md";

GameVault 2 ships a `.dmg` for Apple Silicon Macs. It is in public beta: crashes
and missing features are expected, see the [overview](overview.md) for the
status. Download it from the [download page](/download) or from
[GitHub Releases](https://github.com/Phalcode/gamevault-frontend/releases).

:::note
The macOS build receives less testing than Windows and Linux. Report problems in
the [issue tracker](https://github.com/Phalcode/gamevault-frontend/issues).
:::

## Requirements

- macOS on Apple Silicon (arm64). Intel Macs are not supported by the published
  build.
- Free disk space for the download and installation folders.

## Installation

1. Open the `.dmg` and drag GameVault into **Applications**.
2. Start GameVault from Launchpad or Finder.
3. macOS blocks the first start because the build is not notarized. Allow it
   with **Open** from the right-click menu, or with **System Settings →
   Privacy & Security → Open anyway**. You only need to do this once.

<FirstStart />

## Verify

GameVault opens the profile selection, and the library loads after you sign in.
If nothing loads, work through
[Troubleshooting](../../troubleshooting.md#the-client-cannot-connect).

## Next steps

- [Usage](using.md)
- [Settings](settings.md)
- [Data locations](data.md)
- [Updating](updating.md)
