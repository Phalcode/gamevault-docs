---
sidebar_position: 5
---

# Updating Games

## Applying an Update to a Game

To update a game, place a new game file in the files directory (by default `/files`).

You can freely modify the version tag, early-access flag, game type override, archive format, and file name details of your game file. As long as the file maps to the same game identity, GameVault will keep it under the same game entry instead of creating a separate game.

In practice, the game identity is usually the same **title + release-year bucket**. When that matches, GameVault stores the new file as another downloadable version of the same game. Progress, metadata, and bookmarks remain attached to the shared game entity.

After the new file is indexed:

- the game gains another entry in `versions[]`
- the server may switch the default downloadable version automatically


### Example

Let's say you have an outdated version of `Minecraft (EA) (v1.8b) (2011).zip` and you add `Minecraft (v1.20.1) (2011).7z`:

1. Insert `Minecraft (v1.20.1) (2011).7z`.

2. Wait for the automatic indexing process to detect and register the changes.

3. Optionally remove the old file later if you don't want to keep multiple versions.

If you intentionally want separate game entries (instead of multiple versions of one game), refer to [keeping separate entries on purpose](adding-games.md#keeping-separate-entries-on-purpose).

## Downloading a specific version via API

The API is version-aware.

- `GET /api/games/:game_id` returns the game including its available `versions[]`.
- `GET /api/game/:game_id/versions/:version_id` downloads one explicit version.
- `GET /api/games/:game_id/download` is the legacy compatibility endpoint and downloads the server-selected default version.

When multiple versions exist, the server chooses the default version by ranking the available version tags. See [indexing.md#how-the-default-version-is-chosen](indexing.md#how-the-default-version-is-chosen) for details on the ranking rules.

### Visual indicator in the client

The client also shows the user if a new version of the installed game is available on the server.

![update available indicator](/img/docs/updating-games/update-available-indicator.png)

## Changing or Moving a Game

Changing or moving a game is also straightforward. As long as the combination of title and release year still matches, GameVault keeps the same game entity and preserves the associated progress.

Typical outcomes:

- **Same path, updated file**: the existing version record is refreshed.
- **New path, same game identity**: a new version is added and the stale old path is cleaned up by the next integrity check.
- **No versions left on disk**: the game is soft-deleted until a matching file appears again.
