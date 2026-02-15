---
sidebar_position: 5.5
---

# Deleting Games

You can remove games either by deleting files from `/files` or by using the API. Game progress and metadata are kept, so re-adding a game later is possible.

## Deleting a Game via Filesystem

Delete the game files in your files directory (default: `/files`).

- If at least one version file is still there, the game remains visible.
- If no version files are left, the game is soft-deleted on the next indexing cycle.

### Example (Filesystem)

Example:

- `Minecraft (v1.0.0) (2011).zip`
- `Minecraft (v1.1.0) (2011).zip`

Delete only `v1.0.0` → game stays.
Delete `v1.1.0` as well → game is soft-deleted on next indexing.


## Deleting a Game via API

Since version 16.3.0, admins can delete game files via API.

Behavior:

- `DELETE /api/games/:game_id?version=v1.0.0` deletes one specific version.
- `DELETE /api/games/:game_id` deletes all version files of that game.
- If no files remain, the game is soft-deleted.

Only **Admin** users can call this endpoint, and the server needs write access to `VOLUMES_FILES`.

See [API docs](../advanced-usage/rest-api.md) for full endpoint details.
