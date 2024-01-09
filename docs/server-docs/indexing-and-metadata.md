---
sidebar_position: 7
---

# Game Indexing and Information Retrieval

## Game Indexing

The server watches the files directory (by default `/files`) and creates an index of all games, when changes occur. The indexing can also be triggered via API.

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

#### Disabling Integration for a single Game

To avoid GameVault looking up your game on RAWG and matching it (for example if it's your personal indie game or a game not available on RAWG), you can use the NO-CACHE-Flag `(NC)` in the file path, as explained [here](structure.md#naming-convention-for-games).

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

GameVault relies heavily on RAWG integration to enhance the game data.

#### Cache Expiry

Cached metadata is stored in the database permanently and remains valid for a configurable period of time. The duration can be set using the `RAWG_API_CACHE_DAYS` environment variable, with a default validity period of 30 days. The purpose of caching is to reduce the number of RAWG API calls. If you encounter rate limits with your RAWG API Key, you can extend the validity duration. Game metadata does not change frequently, so longer validity periods are generally acceptable.

#### RAWG Platforms

The following table provides an overview of platforms supported by RAWG, along with their corresponding ID:

| ID  | Platform                                                                | Description                                             |
| --- | ----------------------------------------------------------------------- | ------------------------------------------------------- |
| 1   | [Xbox One](https://wikipedia.org/wiki/Xbox_One)                         | Eighth-generation home video game console by Microsoft  |
| 3   | [iOS](https://wikipedia.org/wiki/IOS)                                   | Mobile operating system developed by Apple Inc.         |
| 4   | [PC](https://wikipedia.org/wiki/Personal_computer)                      | General-purpose computing platform                      |
| 5   | [macOS](https://wikipedia.org/wiki/MacOS)                               | Operating system for Apple Macintosh computers          |
| 6   | [Linux](https://wikipedia.org/wiki/Linux)                               | Open-source Unix-like operating system kernel           |
| 7   | [Nintendo Switch](https://wikipedia.org/wiki/Nintendo_Switch)           | Hybrid video game console by Nintendo                   |
| 8   | [Nintendo 3DS](https://wikipedia.org/wiki/Nintendo_3DS)                 | Handheld game console by Nintendo                       |
| 9   | [Nintendo DS](https://wikipedia.org/wiki/Nintendo_DS)                   | Dual-screen handheld game console by Nintendo           |
| 10  | [Wii U](https://wikipedia.org/wiki/Wii_U)                               | Eighth-generation home video game console by Nintendo   |
| 11  | [Wii](https://wikipedia.org/wiki/Wii)                                   | Seventh-generation home video game console by Nintendo  |
| 12  | [Neo Geo](https://wikipedia.org/wiki/Neo_Geo)                           | Family of video game hardware and software              |
| 13  | [Nintendo DSi](https://wikipedia.org/wiki/Nintendo_DSi)                 | Handheld game console by Nintendo                       |
| 14  | [Xbox 360](https://wikipedia.org/wiki/Xbox_360)                         | Seventh-generation home video game console by Microsoft |
| 15  | [PlayStation 2](https://wikipedia.org/wiki/PlayStation_2)               | Sixth-generation home video game console by Sony        |
| 16  | [PlayStation 3](https://wikipedia.org/wiki/PlayStation_3)               | Seventh-generation home video game console by Sony      |
| 17  | [PSP](https://wikipedia.org/wiki/PlayStation_Portable)                  | Handheld game console by Sony                           |
| 18  | [PlayStation 4](https://wikipedia.org/wiki/PlayStation_4)               | Eighth-generation home video game console by Sony       |
| 19  | [PS Vita](https://wikipedia.org/wiki/PlayStation_Vita)                  | Handheld game console by Sony                           |
| 21  | [Android](<https://wikipedia.org/wiki/Android_(operating_system)>)      | Mobile operating system based on the Linux kernel       |
| 22  | [Atari Flashback](https://wikipedia.org/wiki/Atari_Flashback)           | Series of dedicated video game consoles                 |
| 23  | [Atari 2600](https://wikipedia.org/wiki/Atari_2600)                     | Video game console by Atari                             |
| 24  | [Game Boy Advance](https://wikipedia.org/wiki/Game_Boy_Advance)         | Handheld game console by Nintendo                       |
| 25  | [Atari 8-bit](https://wikipedia.org/wiki/Atari_8-bit_family)            | Series of 8-bit home computers by Atari                 |
| 26  | [Game Boy](https://wikipedia.org/wiki/Game_Boy)                         | Handheld game console by Nintendo                       |
| 27  | [PlayStation](https://wikipedia.org/wiki/PlayStation)                   | Fifth-generation home video game console by Sony        |
| 28  | [Atari 7800](https://wikipedia.org/wiki/Atari_7800)                     | Video game console by Atari                             |
| 31  | [Atari 5200](https://wikipedia.org/wiki/Atari_5200)                     | Video game console by Atari                             |
| 34  | [Atari ST](https://wikipedia.org/wiki/Atari_ST)                         | Home computer by Atari                                  |
| 41  | [Apple II](https://wikipedia.org/wiki/Apple_II)                         | Series of home computers by Apple                       |
| 43  | [Game Boy Color](https://wikipedia.org/wiki/Game_Boy_Color)             | Handheld game console by Nintendo                       |
| 46  | [Atari Lynx](https://wikipedia.org/wiki/Atari_Lynx)                     | Handheld game console by Atari                          |
| 49  | [NES](https://wikipedia.org/wiki/Nintendo_Entertainment_System)         | Third-generation home video game console by Nintendo    |
| 50  | [Atari XEGS](https://wikipedia.org/wiki/Atari_XEGS)                     | Video game console by Atari                             |
| 55  | [Classic Macintosh](https://wikipedia.org/wiki/Macintosh_128K)          | Classic Personal computer by Apple                      |
| 74  | [SEGA Master System](https://wikipedia.org/wiki/Sega_Master_System)     | Third-generation home video game console by SEGA        |
| 77  | [Game Gear](https://wikipedia.org/wiki/Game_Gear)                       | Handheld game console by SEGA                           |
| 79  | [SNES](https://wikipedia.org/wiki/Super_Nintendo_Entertainment_System)  | Fourth-generation home video game console by Nintendo   |
| 80  | [Xbox](https://wikipedia.org/wiki/Xbox)                                 | Sixth-generation home video game console by Microsoft   |
| 83  | [Nintendo 64](https://wikipedia.org/wiki/Nintendo_64)                   | Fifth-generation home video game console by Nintendo    |
| 105 | [GameCube](https://wikipedia.org/wiki/GameCube)                         | Sixth-generation home video game console by Nintendo    |
| 106 | [Dreamcast](https://wikipedia.org/wiki/Dreamcast)                       | Sixth-generation home video game console by SEGA        |
| 107 | [SEGA Saturn](https://wikipedia.org/wiki/Sega_Saturn)                   | Fifth-generation home video game console by SEGA        |
| 111 | [3DO](https://wikipedia.org/wiki/3DO_Interactive_Multiplayer)           | Interactive multiplayer video game console              |
| 112 | [Jaguar](https://wikipedia.org/wiki/Atari_Jaguar)                       | Fifth-generation home video game console by Atari       |
| 117 | [SEGA 32X](https://wikipedia.org/wiki/Sega_32X)                         | Add-on for the SEGA Genesis/Mega Drive                  |
| 119 | [SEGA CD](https://wikipedia.org/wiki/Sega_CD)                           | Add-on for the SEGA Genesis/Mega Drive                  |
| 166 | [Commodore / Amiga](https://wikipedia.org/wiki/Commodore_International) | Series of home computers and game consoles              |
| 167 | [Genesis](https://wikipedia.org/wiki/Sega_Genesis)                      | Fourth-generation home video game console by SEGA       |
| 171 | [Web](https://wikipedia.org/wiki/World_Wide_Web)                        | Games that can be played with a web browser             |
| 186 | [Xbox Series S/X](https://wikipedia.org/wiki/Xbox_Series_X_and_S)       | Ninth-generation home video game consoles by Microsoft  |
| 187 | [PlayStation 5](https://wikipedia.org/wiki/PlayStation_5)               | Ninth-generation home video game console by Sony        |

#### RAWG Stores

The following table provides an overview of stores supported by RAWG, along with their corresponding ID:

| ID  | Store                                                             | Description                                        |
| --- | ----------------------------------------------------------------- | -------------------------------------------------- |
| 1   | [Steam](https://store.steampowered.com/)                          | Digital distribution platform for PC gaming        |
| 2   | [Xbox Store](https://www.xbox.com/browse/games)                   | Microsoft's digital distribution platform          |
| 3   | [PlayStation Store](https://store.playstation.com/)               | Sony's digital storefront for PlayStation games    |
| 4   | [App Store](https://apps.apple.com/)                              | Apple's digital distribution platform for iOS      |
| 5   | [GOG](https://www.gog.com/)                                       | DRM-free digital distribution platform             |
| 6   | [Nintendo Store](https://www.nintendo.com/)                       | Nintendo's official online store                   |
| 7   | [Xbox 360 Store](https://marketplace.xbox.com/games/Xbox360Games) | Microsoft's digital store for Xbox 360 games       |
| 8   | [Google Play](https://play.google.com/)                           | Google's digital distribution platform for Android |
| 9   | [Itch.io](https://itch.io/)                                       | Indie game marketplace and distribution platform   |
| 11  | [EPIC Games](https://www.epicgames.com/store/en-US/)              | Digital distribution platform by Epic Games        |

#### Alternative Database Integration

In the event that RAWG discontinues its service, GameVault will retain the latest metadata and work on integrating another video game database as a replacement.

### Disabling RAWG Integration

To turn off all calls to the RAWG API, utilize the `TESTING_RAWG_API_DISABLED` environmental variable. Omitting the `RAWG_API_KEY` value will also disable RAWG integration.

## Game Box Arts

GameVault utilizes a simple Google Image Search library to find suitable box arts for games. This is necessary because RAWG does not provide box arts directly.

### Google Image Search

#### Finding Box Arts

GameVault uses the following algorithm to find box arts:

1. Searches for `"GAME-TITLE" inurl:steamgriddb.com`.
2. If no results are found, searches for `"GAME-TITLE" game box art`.
3. Selects the first available image that matches the target aspect ratio.

#### Rate Limiting and Cooldown

When adding or updating a large number of games (more than 100), there might be rate limits imposed by Google on your IP address. In such cases, GameVault implements a cooldown mechanism to manage the rate limit.

The cooldown works as follows:

- The cooldown duration is determined by the `IMAGE_GOOGLE_API_RATE_LIMIT_COOLDOWN_IN_HOURS` configuration value, expressed in hours.
- If no box art images are found for multiple games, indicating a potential Google Image Search rate limit, the cooldown is activated for the specified duration.
- The cooldown prevents further box art searches until the cooldown duration has elapsed.
- Once the cooldown is activated, a warning message is logged, whenever gamevault tries to search for new boxarts, indicating the remaining cooldown time.

#### Disabling Google Image

If you rather set your box-arts yourself and want to completely disable the Google Image Search feature, you can use the `TESTING_GOOGLE_API_DISABLED` environment variable. This will block all Google requests.

### Image Storage

#### Storing Box Arts

To ensure availability, performance, and efficient compression, GameVault stores the found box arts on the filesystem under the images directory (by default `/images`).

For more information on GameVault's image management, refer to [this page](images.md).

#### Customizing Storage Path

The storage path for images can be customized by modifying the `VOLUMES_IMAGES` environment variable.

```

```
