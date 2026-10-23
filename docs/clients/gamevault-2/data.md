---
sidebar_position: 8
---

# Data Locations

GameVault 2 stores its data in the platform's standard application-data
directory under `com.phalcode.gamevault`:

| Platform | Data                                                   | Configuration                      |
| -------- | ------------------------------------------------------ | ---------------------------------- |
| Windows  | `%APPDATA%\com.phalcode.gamevault`                     | same directory                     |
| Linux    | `~/.local/share/com.phalcode.gamevault`                | `~/.config/com.phalcode.gamevault` |
| macOS    | `~/Library/Application Support/com.phalcode.gamevault` | same directory                     |

Settings live in `gamevault-settings.json`. Cached covers and background images
are kept in the WebView's local storage and IndexedDB.

## Games and downloads

Game files are not stored in the application-data directory. They live in the
folders configured under **Settings → Downloads**:

- `<Root>/GameVault/<Title>/Versions/<Version>/Download/`
- `<Root>/GameVault/<Title>/Versions/<Version>/Extraction/`
- `<Root>/GameVault/<Title>/Versions/<Version>/Installation/`

## Resetting the client

To start from scratch, quit GameVault 2 and delete the application-data
directory listed above. The next start behaves like a fresh installation; your
server data and installed games are not affected.

:::warning
Deleting the directory removes profiles, settings and cached metadata. Export
the settings dump under **Settings → Developer Tools** first if you want to
keep a record.
:::

GameVault 1 uses different paths; see
[GameVault 1 data locations](../gamevault-1/data.md).
