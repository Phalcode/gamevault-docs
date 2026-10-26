---
description: "Install GameVault 2 on Linux with the AppImage or the .deb package."
sidebar_position: 3
---

# Installing on Linux

import FirstStart from "./_first-start.md";

GameVault 2 ships a `.deb` package and an AppImage for Linux; the client itself
does not need Wine. It is in public beta: crashes and missing features are
expected, see the [overview](overview.md) for the status. Download it from the
[download page](/download) or from
[GitHub Releases](https://github.com/Phalcode/gamevault-frontend/releases).

## Requirements

- A 64-bit Linux distribution.
- FUSE for the AppImage; Debian, Ubuntu or a derivative for the `.deb` package.
- Free disk space for the download and installation folders.

## Installation

### AppImage

The AppImage runs on most distributions without installation:

```bash
chmod +x GameVault-*.AppImage
./GameVault-*.AppImage
```

If FUSE is missing (common on Ubuntu 22.04 and newer), install `libfuse2` or
start the AppImage with `--appimage-extract-and-run`. Tools such as
AppImageLauncher can add a menu entry and handle updates.

### Debian package

1. Install the package:

   ```bash
   sudo apt install ./GameVault-*.deb
   ```

2. Start GameVault from your application menu.

The package pulls in the required WebKitGTK and GTK libraries.

<FirstStart />

## Verify

**Settings → About** shows the version and update channel. If a game does not
start, check the [launch log](settings.md#games) before changing prefix
settings.

## Running Windows games

GameVault 2 launches Windows games through
[umu-launcher](https://github.com/Open-Wine-Components/umu-launcher), which
manages the Proton/Wine runtime and the per-game prefix.

- Each game gets an isolated prefix under the folder set in
  **Settings → Games → Wine/Proton Prefix Directory**.
- Server admins can preconfigure the umu metadata per game: `umu_game_id`
  (`GAMEID`), `umu_store` (`STORE`) and `umu_proton_path` (`PROTONPATH`). The
  client inherits these values from the game metadata.
- Launch output and errors go to the launch log. Enable
  **Settings → Games → Launch logs** to open it automatically.

## Steam Deck

On SteamOS, use the AppImage. GameVault 2 supports gamepad navigation, so it
works in Gaming Mode.

1. Download the AppImage and make it executable.
2. Add it to Steam as a non-Steam game.
3. Start it once in Desktop Mode to finish the server login.
4. Switch to Gaming Mode and launch it from your library.

Games started by GameVault inherit Steam's environment when GameVault itself was
started through Steam, so overlays and controller mappings keep working.

## Next steps

- [Usage](using.md)
- [Settings](settings.md)
- [Data locations](data.md)
- [Updating](updating.md)
