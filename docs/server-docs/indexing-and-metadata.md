---
sidebar_position: 7
---

# Game Indexing and Information Retrieval

## Game Indexing

### Indexing Frequency

The server regularly scans the `/files` directory for archived games to create an index. The frequency of indexing is determined by the `GAMES_INDEX_INTERVAL_IN_MINUTES` environment variable, which has a default value of 5 minutes.

## Retrieving and Storing Game Information

### Integration with RAWG

#### Matching Games

After adding games, the server attempts to find the corresponding game in the RAWG database. It looks for games on RAWG with similar titles and release years to establish a match. Once a match is found, it becomes the official mapping for that game, and any changes to the mapping must be done manually.

#### RAWG API Key

To use the RAWG integration feature, users can set up a RAWG API Key by configuring the `RAWG_API_KEY` environment variable. The API Key can be obtained from the [RAWG Developer Portal](https://rawg.io/login/?forward=developer). The free tier of the API should be sufficient for most users.

> If you encounter limitations with your RAWG API Key, you have the option to upgrade your account on RAWG or [contact us](mailto:contact@phalco.de) for assistance.

#### Probability Logs for Game Matching

When the `SERVER_LOG_LEVEL` environment variable is set to `DEBUG`, the server logs all probability information during the game matching process. These logs can be helpful in resolving any mapping issues with games.

### Caching Game Information

#### Cached Metadata

The server automatically caches all metadata obtained from RAWG for each game. If a game is already cached, the cache is updated if necessary. The cached metadata includes detailed descriptions, screenshots, release dates, as well as information about developers, publishers, genres, tags, images, and stores.

Crackpipe relies heavily on RAWG integration to enhance the game data.

#### Cache Expiry

Cached metadata is stored in the database permanently and remains valid for a configurable period of time. The duration can be set using the `RAWG_API_CACHE_DAYS` environment variable, with a default validity period of 7 days. The purpose of caching is to reduce the number of RAWG API calls. If you encounter rate limits with your RAWG API Key, you can extend the validity duration. Game metadata does not change frequently, so longer validity periods are generally acceptable.

#### Alternative Database Integration

In the event that RAWG discontinues its service, Crackpipe will retain the latest metadata and work on integrating another video game database as a replacement.

### Disabling RAWG Integration

To disable all calls to the RAWG API, you can use the `TESTING_RAWG_API_DISABLED` environment variable. This will result in no box arts being displayed.

## Game Box Arts

### Google Image Search

#### Finding Box Arts

Crackpipe uses a simple Google Image Search library to find suitable box arts for games. This is necessary because RAWG does not provide box arts directly.

#### Rate Limiting

When adding or updating a large number of games (more than 100), there might be rate limits imposed by Google on your IP address. In such cases, it is recommended to wait for a day or two before continuing the search.

### Box Art Selection Algorithm

The following algorithm is used to select box arts:

1. Searches for `GAME-TITLE (RELEASE-YEAR) game box art`.
2. Filter the results to PNG and JPG formats.
3. Filter the results to images where the height is less than the width.
4. Select the first available image.

### Image Storage

#### Storing Box Arts

To ensure availability, performance, and efficient compression, Crackpipe stores the found box arts on the filesystem under the `/images` directory.

For more information on Crackpipe's image management, refer to [this page](images.md).

#### Customizing Storage Path

The storage path for images can be customized by modifying the `IMAGE_STORAGE_PATH` environment variable.

### Disabling Box Art Behavior

To completely disable the box art feature, you can use the `TESTING_GOOGLE_API_DISABLED` environment variable. This will result in no box arts being displayed.

## Data Integrity Checks

The autoindexer also performs various integrity checks on game files to maintain data consistency.

### Game File Checks

For each game file, the autoindexer verifies the following:

- Game Existence: Checks if the game exists in the database based on the file path.
- Size Verification: Compares the file size in the database with the actual file size and updates the game size if they differ.
- Restoring Deleted Games: Restores, re-indexes, and updates games that were previously deleted but are found in the file system based on the file path or a combination of title and release year.

These integrity checks ensure the accuracy and reliability of game data in the Crackpipe Backend Application.
