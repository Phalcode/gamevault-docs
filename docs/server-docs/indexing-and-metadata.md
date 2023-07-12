---
sidebar_position: 7
---

# Game Indexing and Information Retrieval

## Game Indexing

The server regularly scans the files directory (by default `/files`) to create an index of archived games. The indexing frequency is determined by the `GAMES_INDEX_INTERVAL_IN_MINUTES` environment variable, which has a default value of 5 minutes.

The indexing algorithm follows these steps:

- It recursively scans all games in the files directory.

- For each game:
  - It checks if the exact same game already exists in the database, either based on the file path or a combination of the title and release year. If it does, the game is skipped.
  - It checks if the game exists in the database but was previously deleted, again based on the file path or a combination of the title and release year. If so, it restores the game and updates its information with the current file's details, such as size, title, year, early access flag, path, and version.
  - It checks if the game already exists in the database. If so, it updates the game's information with the current file's details.
  - If the game does not exist in the database at all, it indexes the game.

Finally, a simple integrity check is performed to ensure that the games in the database also exist in the files directory, and vice versa.

## Retrieving and Storing Game Information

### Integration with RAWG

#### Matching Games

After adding games, the server attempts to find the corresponding game in the RAWG database. It looks for games on RAWG with similar titles and release years to establish a match. Once a match is found, it becomes the official mapping for that game, and any changes to the mapping must be done manually.

#### RAWG API Key

To use the RAWG integration feature, users can set up a RAWG API Key by configuring the `RAWG_API_KEY` environment variable. The API Key can be obtained from the [RAWG Developer Portal](https://rawg.io/login/?forward=developer). The free tier of the API should be sufficient for most users.

:::tip
If you encounter limitations with your RAWG API Key, you have the option to upgrade your account on RAWG or [contact us](mailto:contact@phalco.de) for assistance.
:::

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

To turn off all calls to the RAWG API, utilize the `TESTING_RAWG_API_DISABLED` environmental variable. Omitting the `RAWG_API_KEY` value will also disable RAWG integration.

## Game Box Arts

Crackpipe utilizes a simple Google Image Search library to find suitable box arts for games. This is necessary because RAWG does not provide box arts directly.

### Google Image Search

#### Finding Box Arts

Crackpipe uses the following algorithm to find box arts:

1. Searches for `"GAME-TITLE" inurl:steamgriddb.com`.
2. If no results are found, searches for `"GAME-TITLE" game box art`.
3. Selects the first available image that matches the target aspect ratio.

#### Rate Limiting and Cooldown

When adding or updating a large number of games (more than 100), there might be rate limits imposed by Google on your IP address. In such cases, Crackpipe implements a cooldown mechanism to manage the rate limit.

The cooldown works as follows:

- The cooldown duration is determined by the `IMAGE_GOOGLE_API_RATE_LIMIT_COOLDOWN_IN_HOURS` configuration value, expressed in hours.
- If no box art images are found for multiple games, indicating a potential Google Image Search rate limit, the cooldown is activated for the specified duration.
- The cooldown prevents further box art searches until the cooldown duration has elapsed.
- Once the cooldown is activated, a warning message is logged, whenever crackpipe tries to search for new boxarts, indicating the remaining cooldown time.

#### Disabling Google Image

If you rather set your box-arts yourself and want to completely disable the Google Image Search feature, you can use the `TESTING_GOOGLE_API_DISABLED` environment variable. This will block all Google requests.

### Image Storage

#### Storing Box Arts

To ensure availability, performance, and efficient compression, Crackpipe stores the found box arts on the filesystem under the images directory (by default `/images`).

For more information on Crackpipe's image management, refer to [this page](images.md).

#### Customizing Storage Path

The storage path for images can be customized by modifying the `VOLUMES_IMAGES` environment variable.
