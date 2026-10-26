---
description: Where GameVault 1 stores games, caches, settings, logs and themes.
sidebar_position: 6
---

# Data locations

GameVault 1 keeps executable data in a folder that depends on how you installed
it. Game files live in the root directories you configure in the client.

## Application data

| Installation         | Base folder                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| Microsoft Store      | `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\` |
| Manual (GitHub, exe) | `%APPDATA%\GameVault\`                                                                                    |

Every path below is relative to that base folder.

| Path               | Contents                                                                        |
| ------------------ | ------------------------------------------------------------------------------- |
| `config/user`      | All settings for the profile. Sensitive values are encrypted.                   |
| `config/web`       | Embedded browser data used for the GameVault+ login. Deleting it logs you out.  |
| `cache/images`     | Cached images, named `<ParentID>.<ImageID>` so changed images are re-fetched.   |
| `cache/prgs`       | Progress recorded while offline, synced when the server is reachable again.     |
| `cache/local`      | Metadata of downloaded games, written once so details work offline.             |
| `cache/ignorelist` | Executables the playtime tracker skips, such as `setup.exe` or `uninstall.exe`. |
| `errorlog`         | Crash logs for support requests.                                                |
| `themes`           | Imported custom themes. See [Themes](themes.md).                                |

On every launch the client downsizes the cached images to your screen size,
which keeps loading fast and the cache small.

:::warning
Changing these files by hand can break the client. Edit the ignore list in
**Settings → Data** instead of opening the file.
:::

## Games and downloads

GameVault 1 uses a flat layout: one folder per game, named
`(<Game ID>)<Game Title>`. The root directories come from **Settings → Data**;
GameVault creates a `GameVault` subfolder in each of them.

| Path                                             | Contents                                  |
| ------------------------------------------------ | ----------------------------------------- |
| `<Root>\GameVault\Downloads\(74)Game Title\`     | the downloaded archive and its extraction |
| `<Root>\GameVault\Installations\(74)Game Title\` | the installed game and its executable     |

With `D:\` as root, a game with ID 74 lands in
`D:\GameVault\Downloads\(74)Game Title\`. The installation folder stays empty
until you install the game.

## GameVault 2

GameVault 2 uses different directories and keeps title and version apart; see
[GameVault 2 data locations](../gamevault-2/data.md).

## Next steps

- [Settings](settings.md)
- [Themes](themes.md)
- [Updating](updating.md)
