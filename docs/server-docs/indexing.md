---
sidebar_position: 7
---

# Game Indexing

GameVault keeps your database in sync with your game files.

It watches your files volume (default: `/files`) and updates the index when files are added, changed, or removed. You can also trigger a full reindex manually via API.

## When Indexing Runs

Indexing happens in these situations:

- **Automatic file watcher**: reacts to file changes in your library.
- **Scheduled interval scan**: optional fallback (`GAMES_INDEX_INTERVAL_IN_MINUTES`) if you want periodic checks.
- **Manual trigger**: run a full reindex through the API.

## What Happens During Indexing

For each detected game file, GameVault does the following:

1. Validates the file name and extension.
2. Tries to match the file to an existing game.
3. Stores the file as a normalized **game version** record.
4. Updates the game’s default downloadable version.

### Matching Logic (Simplified)

GameVault tries these match steps in order:

1. **Exact file path match** → update existing version record.
2. **Soft-deleted match** (path or title/year match) → restore game and update version.
3. **Title + release-year match** → add/update as another version of that game.
4. **No match** → create a new game entry.

## Integrity Check

After indexing, GameVault verifies that indexed files still exist on disk.

- If versions are missing, they are cleaned up.
- If a game has no remaining version files, the game is soft-deleted.

## Excluding Files and Folders from Indexing

Use these two settings to skip files/folders during directory-based scans (startup scan, scheduled scans, manual reindex, integrity checks):

- `GAMES_SEARCH_EXCLUDE_FILE_REGEX`: matches against the **file name** only (for example `MyGame Demo.zip`).
- `GAMES_SEARCH_EXCLUDE_DIR_REGEX`: matches against each **directory name** only while scanning recursively (for example `screenshots`).

Patterns use JavaScript `RegExp` syntax.

### Examples

```bash
# Exclude filenames containing sample/demo/trailer
GAMES_SEARCH_EXCLUDE_FILE_REGEX=(sample|demo|trailer)

# Exclude folders like screenshots, trailers, and OST
GAMES_SEARCH_EXCLUDE_DIR_REGEX=^(screenshots|trailers|ost)$

# Example: skip files ending with .soundtrack.zip
GAMES_SEARCH_EXCLUDE_FILE_REGEX=\.soundtrack\.zip$
```
