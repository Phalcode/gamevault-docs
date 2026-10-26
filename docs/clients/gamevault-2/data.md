---
description: Where GameVault 2 stores downloads, installations, logs, settings and cache files.
sidebar_position: 9
---

# Data locations

GameVault 2 keeps its own data in the platform's standard directories under
`com.phalcode.gamevault`. Game files are stored somewhere else, in the folders
you choose.

## Application data

| Platform | Data                                                   | Configuration                      | Logs                                         |
| -------- | ------------------------------------------------------ | ---------------------------------- | -------------------------------------------- |
| Windows  | `%APPDATA%\com.phalcode.gamevault`                     | same directory                     | `%LOCALAPPDATA%\com.phalcode.gamevault\logs` |
| Linux    | `~/.local/share/com.phalcode.gamevault`                | `~/.config/com.phalcode.gamevault` | `~/.local/share/com.phalcode.gamevault/logs` |
| macOS    | `~/Library/Application Support/com.phalcode.gamevault` | same directory                     | `~/Library/Logs/com.phalcode.gamevault`      |

What lives there:

- `gamevault-settings.json`: every setting, including download folders and the
  update channel.
- `cached-images/`: cover art and backgrounds downloaded from the server.
- `logs/launch-logs/`: output of every game launch. Useful for Wine and Proton
  problems.
- `logs/tracker-logs/`: playtime tracker output.
- WebView storage: profile, session and the image cache of the Web UI.

## Games and downloads

Game files live in the root folder from **Settings → Downloads**, one folder per
game and version:

| Path                                                        | Contents               |
| ----------------------------------------------------------- | ---------------------- |
| `<Root>/GameVault/<Title>/Versions/<Version>/Download/`     | the downloaded archive |
| `<Root>/GameVault/<Title>/Versions/<Version>/Extraction/`   | the extracted files    |
| `<Root>/GameVault/<Title>/Versions/<Version>/Installation/` | the installed game     |

Deleting the `Download` folder after a successful installation frees the archive
without touching the installed game; the client also offers to do that
automatically under **Settings → Downloads**.

## Offline playtime

While the server is unreachable, the playtime tracker stores the minutes it
cannot credit next to the installed game:

| Path                                                                       | Contents                          |
| -------------------------------------------------------------------------- | --------------------------------- |
| `<Root>/GameVault/<Title>/Versions/<Version>/.gamevault.offline_time.json` | Minutes waiting for the next sync |

The client sends them when it starts, when the connection returns and on every
retry while a balance is open. Uninstalling a version deletes the file with it,
so reconnect before you remove a game you played without a connection.

## Resetting the client

To start from scratch, quit GameVault 2 and delete the application-data
directory for your platform. The next start behaves like a fresh installation;
your server data and installed games are not affected.

:::warning
Deleting the directory removes profiles, settings and cached metadata. Export a
settings dump under **Settings → Developer Tools** first if you want to keep a
record.
:::

## GameVault 1

GameVault 1 uses different paths and a flat game folder layout; see
[GameVault 1 data locations](../gamevault-1/data.md).

## Next steps

- [Settings](settings.md)
- [Updating](updating.md)
