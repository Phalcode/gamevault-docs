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

| Property                                       | Description                                                                                                                                                         | Default           | Possible Values                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------- |
| `PUID`                                         | The User-Identifer that should be used.                                                                                                                             | `1000`            | Any user id (number)                                                                         |
| `PGID`                                         | The Group-Identifer that should be used.                                                                                                                            | `1000`            | Any group id (number)                                                                        |
| `SERVER_LOG_LEVEL`                             | The log level of the server.                                                                                                                                        | `info`            | `debug`, `info`, `warn`, `error`, `fatal`, `off`                                             |
| `SERVER_LOG_FILES_ENABLED`                     | If the server should also write the logs to the `VOLUMES_LOGS` directory via rolling file logger.                                                                   | `false`           | `true`, `false`                                                                              |
| `SERVER_REQUEST_LOG_FORMAT`                    | The [morgan log format](https://www.npmjs.com/package/morgan#predefined-formats) for incoming HTTP Requests                                                         | Custom Log Format | `short`, `combined` [and many more](https://www.npmjs.com/package/morgan#predefined-formats) |
| `SERVER_CORS_ALLOWED_ORIGINS`                  | Allowed CORS origins for the server.                                                                                                                                | `*`               | A comma-separated list of origins                                                            |
| `SERVER_REGISTRATION_DISABLED`                 | If registration is enabled or not.                                                                                                                                  | `false`           | `true`, `false`                                                                              |
| `SERVER_ACCOUNT_ACTIVATION_DISABLED`           | If accounts need to be activated by an admin before using them.                                                                                                     | `false`           | `true`, `false`                                                                              |
| `SERVER_ADMIN_USERNAME`                        | Automatically grants Admin Role to User with this Username on register, or startup.                                                                                 | -                 | Any username                                                                                 |
| `SERVER_ADMIN_PASSWORD`                        | Resets the admin user password to this password on startup. Only used for password reset in case of lockout. ⚠️ CAUTION: This won't register a new account for you! | -                 | Any password (No Length Validation)                                                          |
| `SERVER_SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS` | Maximum bandwidth for downloads on this server in KB/s.                                                                                                             | `Unlimited`       | Any Number                                                                                   |

## VOLUMES

| Property           | Description                                                                                                 | Default   | Possible Values       |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | --------- | --------------------- |
| `VOLUMES_FILES`    | Folder inside container used for game files.                                                                | `/files`  | Any valid folder path |
| `VOLUMES_IMAGES`   | Folder inside container used for images.                                                                    | `/images` | Any valid folder path |
| `VOLUMES_LOGS`     | Folder inside container used for logs.                                                                      | `/logs`   | Any valid folder path |
| `VOLUMES_SQLITEDB` | Folder inside container used for `SQLITE` database. (Not needed id you use `POSTGRESQL` as database system) | `/db`     | Any valid folder path |

## DB

| Property         | Description                                                                               | Default      | Possible Values         |
| ---------------- | ----------------------------------------------------------------------------------------- | ------------ | ----------------------- |
| `DB_SYSTEM`      | The database system used (POSTGRESQL or SQLITE).                                          | `POSTGRESQL` | `POSTGRESQL`, `SQLITE`  |
| `DB_HOST`        | The host of the database (not needed for SQLITE).                                         | `localhost`  | Any valid host name     |
| `DB_PORT`        | The port of the database (not needed for SQLITE).                                         | `5432`       | Any valid port number   |
| `DB_USERNAME`    | The username for the database (not needed for SQLITE).                                    | `default`    | Any valid username      |
| `DB_PASSWORD`    | The password for the database (not needed for SQLITE).                                    | `default`    | Any valid password      |
| `DB_DATABASE`    | The database name (not needed for SQLITE).                                                | `gamevault`  | Any valid database name |
| `DB_SYNCHRONIZE` | Force synchronizes the database with the entities. (⚠️ DANGER: This could break your db!) | `false`      | `true`, `false`         |
| `DB_DEBUG`       | Log all SQL Statements sent to the database.                                              | `false`      | `true`, `false`         |

## RAWG_API

| Property              | Description                                   | Default                   | Possible Values        |
| --------------------- | --------------------------------------------- | ------------------------- | ---------------------- |
| `RAWG_API_URL`        | Base URL of the RAWG API.                     | `https://api.rawg.io/api` | Any valid URL          |
| `RAWG_API_KEY`        | API key for the RAWG API.                     | `""`                      | Any valid RAWG API key |
| `RAWG_API_CACHE_DAYS` | When to renew RAWG API cached data (in days). | `30`                      | Any positive integer   |

## GAMES

| Property                          | Description                                                                                    | Default                                            | Possible Values |
| --------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------- |
| `GAMES_INDEX_INTERVAL_IN_MINUTES` | The index interval in minutes. Determines how often the server should index the list of games. | `5`                                                | Any number      |
| `GAMES_SUPPORTED_FILE_FORMATS`    | Comma-Seperated list of supported file-types GameVault should detect.                          | [see here](structure.md#supported-archive-formats) | ".zip,.7z,.rar" |
| `GAMES_SEARCH_RECURSIVE`          | If indexer should search for games in subfolders.                                              | true                                               | "true", "false  |

## USERS

| Property                   | Description                                     | Default | Possible Values |
| -------------------------- | ----------------------------------------------- | ------- | --------------- |
| `USERS_REQUIRE_EMAIL`      | Require Email Field for new registrations.      | `false` | `true`, `false` |
| `USERS_REQUIRE_FIRST_NAME` | Require First Name Field for new registrations. | `false` | `true`, `false` |
| `USERS_REQUIRE_LAST_NAME`  | Require Last Name Field for new registrations.  | `false` | `true`, `false` |

## IMAGE

| Property                                        | Description                                                                                  | Default        | Possible Values |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------- | --------------- |
| `IMAGE_MAX_SIZE_IN_KB`                          | he maximum size for image uploads in kilobytes. Set it to 0 to disable image uploads.        | `10000` (10MB) | Any number      |
| `IMAGE_GOOGLE_API_RATE_LIMIT_COOLDOWN_IN_HOURS` | The amount of time to wait when the server reaches the rate limit for the Google Images API. | `24`           | Any number      |

## TESTING

| Property                          | Description                                                                                                                           | Default | Possible Values |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `TESTING_AUTHENTICATION_DISABLED` | If `true`, the API will accept any auth header. Useful for testing without authentication.                                            | `false` | `true`, `false` |
| `TESTING_MOCK_FILES`              | If `true`, the server will mock all files or ignore filesystem functionalities. Useful for testing without real files.                | `false` | `true`, `false` |
| `TESTING_IN_MEMORY_DB`            | If `true`, the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE. | `false` | `true`, `false` |
| `TESTING_RAWG_API_DISABLED`       | If `true`, the server will not make any external API calls to RAWG. Useful for testing without depending on the API.                  | `false` | `true`, `false` |
| `TESTING_GOOGLE_API_DISABLED`     | If `true`, the server will not make any external API calls to Google. Useful for testing without depending on the API.                | `false` | `true`, `false` |
