---
sidebar_position: 5.5
---

# Deleting Games

## Deleting a Game via Filesystem

The simplest way to remove a game from GameVault is to delete the game file from the files directory (by default `/files`). The file indexer will automatically detect the missing file and soft-delete the game from the database during the next indexing cycle. Any associated progress data is preserved in case the game is re-added later.

## Deleting a Game via API

Starting with version 16.3.0, administrators can delete game files directly through the API without manually accessing the filesystem. The endpoint permanently deletes the physical game file from the filesystem, after which the file indexer will automatically detect that the file is missing and soft-delete the game from the database. Associated progress data is preserved. Only users with the **Admin** role can use this endpoint, and the server must have **write permissions** on the files volume (`VOLUMES_FILES`). Check out the [API documentation](../advanced-usage/rest-api.md) for the endpoint for more details.
