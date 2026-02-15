---
sidebar_position: 5
---

# Updating Games

## Applying an Update to a Game

To update a game, place a new game file in the files directory (by default `/files`).

You can freely modify the early access and version flags of your game file. As long as the file maps to the same game identity (typically same title and release-year bucket), GameVault's indexer will recognize it as an update and keep it as another downloadable version for that game. Progress remains attached to the same game entity.

### Example

Let's say you have an outdated version of `Minecraft (EA) (v1.8b) (2011).zip` and you add `Minecraft (v1.20.1) (2011).7z`:

1. Insert `Minecraft (v1.20.1) (2011).7z`.

2. Wait for the automatic indexing process to detect and register the changes.

3. Optionally remove the old file later if you don't want to keep multiple versions.

If you intentionally want separate game entries (instead of multiple versions of one game), refer to [keeping separate entries on purpose](adding-games.md#keeping-separate-entries-on-purpose).

## Downloading a specific version

The API supports version-aware downloads and version listinge. If `version` is omitted from the download endpoint, the server uses its default version selection.

### Visual indicator in the client

Since version 1.17.0.0, the client can show the user if another version of the installed game is available.

![update available indicator](/img/docs/updating-games/update-available-indicator.png)

## Changing or Moving a Game

Changing or moving a game is also a breeze. As long as the **path** or **the combination of title and release year** of the moved or renamed file matches the old file, GameVault's indexer will recognize it as an update. The same game entity will be updated with the new file's information, while preserving any progress associated with the game.
