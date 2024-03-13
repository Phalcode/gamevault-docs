---
sidebar_position: 2
---

# Configuration

:::tip
Check out [configuration.ts](https://github.com/Phalcode/gamevault-backend/blob/master/src/configuration.ts) for all possible environment variables incase we forgot to update this page.
:::

All configuration properties of your GameVault server are passed as environment variables or via a .env file. The following tables describe the available properties, their default values, explanations, and possible values.

## Configuration Properties

This page describes the various configuration properties used in the application. These properties can be configured in the environment variables or in a `.env` file.

## SERVER

| Property                                | Description                                                                                                                                                                                                             | Default           | Possible Values                                                                              |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------- |
| `PUID`                                  | The User-Identifer that should be used.                                                                                                                                                                                 | `1000`            | Any user id (number)                                                                         |
| `PGID`                                  | The Group-Identifer that should be used.                                                                                                                                                                                | `1000`            | Any group id (number)                                                                        |
| `SERVER_PORT`                           | The port the server should use. (Only relevant if the server is run without docker on bare metal.)                                                                                                                      | `8080`            | Any non-reserved free port (1024 to 49151)                                                   |
| `SERVER_LOG_LEVEL`                      | The log level of the server.                                                                                                                                                                                            | `info`            | `debug`, `info`, `warn`, `error`, `fatal`, `off`                                             |
| `SERVER_LOG_FILES_ENABLED`              | If the server should also write the logs to the `VOLUMES_LOGS` directory via rolling file logger.                                                                                                                       | `false`           | `true`, `false`                                                                              |
| `SERVER_REQUEST_LOG_FORMAT`             | The [morgan log format](https://www.npmjs.com/package/morgan#predefined-formats) for incoming HTTP Requests                                                                                                             | Custom Log Format | `short`, `combined` [and many more](https://www.npmjs.com/package/morgan#predefined-formats) |
| `SERVER_CORS_ALLOWED_ORIGINS`           | Allowed CORS origins for the server.                                                                                                                                                                                    | All Origins       | A comma-separated list of origins                                                            |
| `SERVER_REGISTRATION_DISABLED`          | If registration is enabled or not.                                                                                                                                                                                      | `false`           | `true`, `false`                                                                              |
| `SERVER_ONLINE_ACTIVITIES_DISABLED`     | Wether or not the server should listen to online activities like "ONLINE", "BUSY", "PLAYING" etc. If this is set to true, all users will always be shown as offline.                                                    | `false`           | `true`, `false`                                                                              |
| `SERVER_ACCOUNT_ACTIVATION_DISABLED`    | If accounts need to be activated by an admin before using them.                                                                                                                                                         | `false`           | `true`, `false`                                                                              |
| `SERVER_ADMIN_USERNAME`                 | The Server grants Admin Role to User with this Username on register or startup.                                                                                                                                         | -                 | Any username                                                                                 |
| `SERVER_ADMIN_PASSWORD`                 | Only used for password recovery of existing users. Resets the password of the user with the username set in `SERVER_ADMIN_USERNAME` to this password on startup. ⚠️ CAUTION: This won't register a new account for you! | -                 | Any password (No Length Validation)                                                          |
| `SERVER_API_DOCS_ENABLED`               | Enables the API Specification Documenation on `/api/docs`, `/api/docs-json` & `/api/docs/yaml`.                                                                                                                         | `false`           | `true`, `false`                                                                              |
| `SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS` | Maximum bandwidth for downloads on this server in KB/s.                                                                                                                                                                 | - (Unlimited)     | Any Number                                                                                   |

## VOLUMES

| Property           | Description                                                                                            | Default   | Possible Values       |
| ------------------ | ------------------------------------------------------------------------------------------------------ | --------- | --------------------- |
| `VOLUMES_FILES`    | Folder inside container used for game files.                                                           | `/files`  | Any valid folder path |
| `VOLUMES_IMAGES`   | Folder inside container used for images.                                                               | `/images` | Any valid folder path |
| `VOLUMES_LOGS`     | Folder inside container used for logs. (Not needed if `SERVER_LOG_FILES_ENABLED` is set to `false`)    | `/logs`   | Any valid folder path |
| `VOLUMES_SQLITEDB` | Folder inside container used for `SQLITE` database. (Not needed if `DB_SYSTEM` is set to `POSTGRESQL`) | `/db`     | Any valid folder path |

## DB

| Property         | Description                                                                                    | Default      | Possible Values         |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------------ | ----------------------- |
| `DB_SYSTEM`      | The database system used (POSTGRESQL or SQLITE).                                               | `POSTGRESQL` | `POSTGRESQL`, `SQLITE`  |
| `DB_HOST`        | The host of the database (not needed for SQLITE).                                              | `localhost`  | Any valid host name     |
| `DB_PORT`        | The port of the database (not needed for SQLITE).                                              | `5432`       | Any valid port number   |
| `DB_USERNAME`    | The username for the database (not needed for SQLITE).                                         | `default`    | Any valid username      |
| `DB_PASSWORD`    | The password for the database (not needed for SQLITE).                                         | `default`    | Any valid password      |
| `DB_DATABASE`    | The database name (not needed for SQLITE).                                                     | `gamevault`  | Any valid database name |
| `DB_SYNCHRONIZE` | Force synchronizes the database with the entities. ⚠️ CAUTION: This could break your database! | `false`      | `true`, `false`         |
| `DB_DEBUG`       | Log all SQL Statements sent to the database.                                                   | `false`      | `true`, `false`         |

## RAWG_API

| Property                      | Description                                                                                                                                                                                                                                                                                                                                                        | Default                   | Possible Values                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | ----------------------------------------------- |
| `RAWG_API_URL`                | Base URL of the RAWG API.                                                                                                                                                                                                                                                                                                                                          | `https://api.rawg.io/api` | Any valid URL                                   |
| `RAWG_API_KEY`                | API key for the RAWG API.                                                                                                                                                                                                                                                                                                                                          | `""`                      | Any valid RAWG API key                          |
| `RAWG_API_CACHE_DAYS`         | When to renew RAWG API cached data (in days).                                                                                                                                                                                                                                                                                                                      | `30`                      | Any positive integer                            |
| `RAWG_API_INCLUDED_STORES`    | This is a default list of stores that the RAWG search algorithm will search games on. You can specify these stores as a comma-separated list. You can also enter 0 to search all. To find the RAWG Store IDs, refer to [this page](./indexing-and-metadata.md#rawg-stores). By default, we exclude itch.io (ID 9) to filter out a large number of bad asset flips. | `1,2,3,4,5,6,7,8,11`      | Any comma-separated string of RAWG Store IDs    |
| `RAWG_API_INCLUDED_PLATFORMS` | This is a default list of platforms that the RAWG search algorithm will search games on. You can specify these platforms as a comma-separated list. You can also enter 0 to search all. To find the RAWG Platform IDs, refer to [this page](./indexing-and-metadata.md#rawg-platforms). By default, we search all platforms (ID 0).                                | `0`                       | Any comma-separated string of RAWG Platform IDs |

## GAMES

| Property                          | Description                                                                                                                                                                                                                                                                                                                                                                                         | Default                                            | Possible Values |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------- |
| `GAMES_INDEX_INTERVAL_IN_MINUTES` | The index interval, measured in minutes, decides how frequently the server should check for changes in games in the /files directory. This used to be essential before we implemented the filewatcher to the server. Nowadays, it's optional for rare situations where the filewatcher might miss changes. If set to 0, it won't regularly trigger reindexing and solely depend on the filewatcher. | `60`                                               | Any number      |
| `GAMES_SUPPORTED_FILE_FORMATS`    | Comma-Seperated list of supported file-types GameVault should detect.                                                                                                                                                                                                                                                                                                                               | [see here](structure.md#supported-archive-formats) | ".zip,.7z,.rar" |
| `GAMES_SEARCH_RECURSIVE`          | If indexer should search for games in subfolders.                                                                                                                                                                                                                                                                                                                                                   | true                                               | "true", "false  |

## USERS

| Property                   | Description                                     | Default | Possible Values |
| -------------------------- | ----------------------------------------------- | ------- | --------------- |
| `USERS_REQUIRE_EMAIL`      | Require Email Field for new registrations.      | `false` | `true`, `false` |
| `USERS_REQUIRE_FIRST_NAME` | Require First Name Field for new registrations. | `false` | `true`, `false` |
| `USERS_REQUIRE_LAST_NAME`  | Require Last Name Field for new registrations.  | `false` | `true`, `false` |

## IMAGE

| Property                                        | Description                                                                                  | Default                                                                 | Possible Values                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| `IMAGE_MAX_SIZE_IN_KB`                          | he maximum size for image uploads in kilobytes. Set it to 0 to disable image uploads.        | `10000` (10MB)                                                          | Any number                       |
| `IMAGE_GOOGLE_API_RATE_LIMIT_COOLDOWN_IN_HOURS` | The amount of time to wait when the server reaches the rate limit for the Google Images API. | `24`                                                                    | Any number                       |
| `IMAGE_SUPPORTED_IMAGE_FORMATS`                 | List of supported image formats (MIME Types) on this server, separated by commas.            | `image/bmp, image/jpeg, image/png, image/tiff, image/gif, image/x-icon` | List of `image/*` content types. |
| `IMAGE_GC_DISABLED`                             | Whether or not image garbage collection is enabled.                                          | `true`                                                                  | `true`, `false`                  |
| `IMAGE_GC_INTERVAL_IN_MINUTES`                  | The interval in minutes for image garbage collection.                                        | `60`                                                                    | Any number                       |

## PLUGIN

| Property         | Description                                                                                         | Default | Possible Values |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `PLUGIN_ENABLED` | If set to `true`, the server will try to load and run plugins listed in the `PLUGIN_SOURCES` array. | `false` | `true`, `false` |
| `PLUGIN_SOURCES` | A list of URLS for GameVault plugins to load, separated by commas.                                  | -       | List of URLS    |

## TESTING

| Property                          | Description                                                                                                                           | Default | Possible Values |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `TESTING_AUTHENTICATION_DISABLED` | If `true`, the API will accept any auth header. Useful for testing without authentication.                                            | `false` | `true`, `false` |
| `TESTING_MOCK_FILES`              | If `true`, the server will mock all files or ignore filesystem functionalities. Useful for testing without real files.                | `false` | `true`, `false` |
| `TESTING_IN_MEMORY_DB`            | If `true`, the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE. | `false` | `true`, `false` |
| `TESTING_RAWG_API_DISABLED`       | If `true`, the server will not make any external API calls to RAWG. Useful for testing without depending on the API.                  | `false` | `true`, `false` |
| `TESTING_GOOGLE_API_DISABLED`     | If `true`, the server will not make any external API calls to Google. Useful for testing without depending on the API.                | `false` | `true`, `false` |
