---
sidebar_position: 7
---

# Game Indexing

GameVault keeps your database in sync with your game files.

It watches your files volume (default: `/files`) and updates the index when files are added, changed, or removed. Each detected file is stored as its own game version record, while the parent game entry stays stable. You can also trigger a full reindex manually via API.

## When Indexing Runs

Indexing happens in these situations:

- **Automatic file watcher**: reacts to file changes in your library.
- **Scheduled interval scan**: optional fallback (`GAMES_INDEX_INTERVAL_IN_MINUTES`) if you want periodic checks.
- **Manual trigger**: run a full reindex through the API.

## What Happens During Indexing

For each detected game file, GameVault does the following:

1. Validates the file name and extension.
2. Tries to match the file to an existing game.
3. Stores or restores the file as a normalized **game version** record.
4. Sorts all active versions of that game.
5. Updates the game’s default downloadable version.

### Matching Logic (Simplified)

GameVault tries these match steps in order:

1. **Exact file path match** → update existing version record.
2. **Soft-deleted match** (path or title/year match) → restore game and update version.
3. **Title + release-year match** → add/update as another version of that game.
4. **No release year in the filename** → prefer an existing same-title no-year bucket first, then fall back to legacy title-only matching.
5. **No match** → create a new game entry.

## How the Default Version Is Chosen

When a game has multiple versions, GameVault ranks them and uses the highest-ranked one as the default download.

The ranking prefers, in this order:

- strict semantic versions such as `v2.0.0` over `v1.5.0`
- other comparable numeric versions over plain text labels
- newer date-like versions such as `v2025-04-27`
- stable-looking labels over pre-release-like labels such as `alpha`, `beta`, or `rc` when the rest is otherwise equal
- newer `indexed_at` timestamps as a tie-breaker

This same ordering is also used when GameVault returns `versions[]` in API responses, so the first entry is normally the server-selected default version.

## Integrity Check

After indexing, GameVault verifies that indexed files still exist on disk.

- Missing version files are removed from the active version list.
- If the previously selected default version disappeared, another remaining version is promoted automatically.
- If a game has no remaining version files, the game is soft-deleted.
- Versions that still belong to already deleted games are cleaned up as well.

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
