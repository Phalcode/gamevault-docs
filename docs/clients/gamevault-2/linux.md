---
description: "GameVault 2 on Linux: AppImage, .deb, umu-launcher, Proton prefixes and Steam Deck notes."
sidebar_position: 5
---

# GameVault 2 on Linux

GameVault 2 is the first client with native Linux support. No Wine setup is
needed to run the client itself.

## Packages

### AppImage

The AppImage runs on most distributions without installation:

```bash
chmod +x GameVault-*.AppImage
./GameVault-*.AppImage
```

If FUSE is missing (common on Ubuntu 22.04 and newer), install `libfuse2` or
start the AppImage with `--appimage-extract-and-run`.

Optional desktop integration tools such as AppImageLauncher can add a menu
entry and handle updates.

### Debian package

On Debian, Ubuntu and derivatives:

```bash
sudo apt install ./GameVault-*.deb
```

The package pulls in the required WebKitGTK and GTK libraries.

## Running Windows games

GameVault 2 uses [umu-launcher](https://github.com/Open-Wine-Components/umu-launcher)
to run Windows games. umu manages the Proton/Wine runtime and the per-game
prefix.

- Each game gets an isolated prefix under the folder configured in
  **Settings → Games → Wine/Proton Prefix Directory**.
- Server admins can preconfigure umu metadata for a game: `umu_game_id`
  (`GAMEID`), `umu_store` (`STORE`) and `umu_proton_path` (`PROTONPATH`). The
  client inherits these values from the game metadata.
- Launch output and errors are written to the launch log. Enable
  **Settings → Games → Launch logs** to open the log window automatically and
  to browse earlier launches.

## Steam Deck

On SteamOS, use the AppImage. GameVault 2 supports gamepad navigation, so it
works in Gaming Mode.

1. Download the AppImage and make it executable.
2. Add it to Steam as a non-Steam game.
3. Start it once in Desktop Mode to finish the server login.
4. Switch to Gaming Mode and launch it from your library.

Games started by GameVault inherit Steam's environment when GameVault itself was
started through Steam, so overlays and controller mappings keep working.

## GameVault 1

Running the old Windows client on Linux with Wine or Bottles is documented
separately under
[GameVault 1 Linux setup](../gamevault-1/linux-wine.md).
