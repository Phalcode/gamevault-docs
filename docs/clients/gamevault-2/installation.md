---
description: Install GameVault 2 on Windows 10 and 11 and connect it to your server.
sidebar_position: 2
---

# Installing on Windows

import FirstStart from "./_first-start.md";

GameVault 2 ships a `*-setup.exe` installer for Windows 10 and 11. It is in
public beta: crashes and missing features are expected, see the
[overview](overview.md) for the status. Download it from the
[download page](/download) or from
[GitHub Releases](https://github.com/Phalcode/gamevault-frontend/releases).

## Requirements

- Windows 10 or 11.
- Free disk space for the download and installation folders.

## Installation

1. Run the `*-setup.exe` installer.
2. If SmartScreen blocks the start, choose **More info → Run anyway**. The
   binary is not code-signed.
3. Start GameVault from the Start menu.

<FirstStart />

## Verify

The library shows your server's games after login, and a downloaded game appears
in the downloads tab with a progress bar. If the library stays empty, work
through [Troubleshooting](../../troubleshooting.md#the-client-cannot-connect).

![GameVault 2 library after the first login, with no installed games yet](/img/screenshots/2026-10-26/Library/Library_NoGamesInstalled.webp "A fresh install shows the server games and an empty installed section")

## Next steps

- [Usage](using.md)
- [Settings](settings.md)
- [Data locations](data.md)
- [Updating](updating.md)
