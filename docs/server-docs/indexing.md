---
sidebar_position: 7
---

# Game Indexing

The server watches the files directory (by default `/files`) and creates an index of all games, when changes occur. The indexing can also be triggered via API.

The indexing algorithm follows these steps:

- It recursively scans all game files for changes in the files directory.
- For each changed game file:
  - It checks if the exact same file path already exists in the database. If it does, the indexed file is normalized/upserted as a game version record.
  - It checks if the game exists in the database but was previously deleted, based on file path or title/release-year matching. If so, it restores the game and upserts the indexed file as a version.
  - It checks if the game already exists by title/release-year matching. If so, it upserts the indexed file as an additional/updated version of that game.
  - If the game does not exist in the database at all, it indexes the game.
  - It then synchronizes the game's legacy top-level download fields (`file_path`, `version`, `size`, `release_date`, `early_access`, `type`) with the selected default version.

Finally, an integrity check ensures that indexed version files still exist. If a game has no remaining files across all versions, the game is soft-deleted.
