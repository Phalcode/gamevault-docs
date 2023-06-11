---
sidebar_position: 7
---

# Autoindexer and Metadata Retrieval

## Autoindexing

### Indexing Interval

The server periodically indexes the `/files` directory for archived games. The indexing interval is determined by the `GAMES_INDEX_INTERVAL_IN_MINUTES` environment variable, with a default value of 5 minutes.

## Metadata Retrieval and Caching

### RAWG Integration

#### Game Matching

After adding games, the server attempts to find the corresponding game in the RAWG database. It matches the game by looking for games on RAWG with the most similar title and release year and maps it. From now on that game will be "locked in" and you can only change this mapping by remapping it manually.

#### RAWG API Key

To utilize RAWG integration, the user can set up a RAWG API Key using the `RAWG_API_KEY` environment variable. This key can be obtained from the [RAWG Developer Portal](https://rawg.io/login/?forward=developer). If you're not a furious datahoarder, the free tier should be absolutely sufficient.

> If you really should run into the boundaries of your RAWG API Key, you can either pay for an upgrade on RAWG or [contact us](mailto:contact@phalco.de) for other ways to help you.

#### Game Matching Probability Logs

When the `SERVER_LOG_LEVEL` environment variable is set to `DEBUG`, the server prints all probability information of the selection process into the log.

We could need these logs if your instances games are not mapped properly.

### Caching

#### Cached Metadata

The server automatically caches (persists) all metadata retrieved from RAWG for each game. If the game is already cached it updates the cache if necessary.

This cached metadata includes game metadata such as detailed descriptions, screenshots, release dates, but also developers, publishers, genres, tags, images, and stores.

Crackpipe heavily relies on RAWG integration as it enriches the game data.

#### Cache Expiry

Cached metadata is stored in the database permanently and valid until for a configurable period of time, which can be set using the `RAWG_API_CACHE_DAYS` environment variable. The default duration is 7 days.
This is to save RAWG API Calls. You can increase the duration of validity if you run into your RAWG API Key rate limits. The metadata does not change that often anyway.

#### Alternative Database Integration

In the event that RAWG shuts down its service, Crackpipe retains the latest metadata and will work on integrating another videogame database as a replacement.

### Disabling RAWG Calls

To disable all calls to the RAWG API, you can utilize the `TESTING_RAWG_API_DISABLED` environment variable. This will result in no box arts being displayed.

## Box Arts

### Google Image Search

#### Finding Box Arts

Crackpipe uses a very simple Google Image Search library to find suitable box arts for games. This is necessary as RAWG does not provide box arts directly.

#### Rate Limiting

When adding or changing a large number (>100) of games, it's possible to encounter rate limits on your IP address due to Google's restrictions. In such cases, it's advised to wait for a day or two for the search to continue.

### Box Art Selection Algorithm

The following algorithm is used to select box arts:

1. Search for `${game.title} (${year}) game box art`.
2. Filter to PNG and JPG results.
3. Filter to results where the height is less than the width.
4. Select the first available image.

### Image Persistence

#### Box Art Storage

To ensure availability, performance, and efficient compression, Crackpipe persists the found Box Arts on the filesystem under the `/images` directory.

For more infos about Crackpipes Image management check [this out.](images.md)

#### Customizing Storage Path

The storage path for images can be customized by modifying the `IMAGE_STORAGE_PATH` environment variable.

### Disabling Box Art Behavior

To disable the box art behavior completely, you can utilize the `TESTING_GOOGLE_API_DISABLED` environment variable. This will result in no box arts being displayed.

## Integrity Checks

The autoindexer also performs various integrity checks on game files to maintain data consistency.

### Game File Checks

For each game file, the autoindexer verifies the following:

- Game Existence: Checks if the game exists in the database based on the file path.
- Size Verification: Compares the file size in the database with the actual file size. Updates the game size if they differ.
- Deleted Game Restoration: Restores, re-indexes and updates games that were previously deleted but are found in the file system based on file path or combination of title and release year.

These integrity checks ensure the accuracy and reliability of game data in the Crackpipe Backend Application.
