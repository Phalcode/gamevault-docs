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

| Property                             | Description                                                                                                 | Default Value     | Possible Values                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------- |
| `SERVER_PORT`                        | The port the server should listen on.                                                                       | `8080`            | Any valid port number                                                                        |
| `SERVER_LOG_LEVEL`                   | The log level of the server                                                                                 | `info`            | `debug`, `info`, `warn`, `error`, `fatal`, `off`                                             |
| `SERVER_LOG_FILES_ENABLED`           | If the server should also write the logs to the `VOLUMES_LOGS` directory via rolling file logger       | `false`           | `true`, `false`                                                                              |
| `SERVER_REQUEST_LOG_FORMAT`          | The [morgan log format](https://www.npmjs.com/package/morgan#predefined-formats) for incoming HTTP Requests | Custom Log Format | `short`, `combined` [and many more](https://www.npmjs.com/package/morgan#predefined-formats) |
| `SERVER_CORS_ALLOWED_ORIGINS`        | Allowed CORS origins for the server.                                                                        | `*`               | A comma-separated list of origins                                                            |
| `SERVER_REGISTRATION_DISABLED`       | If registration is enabled or not.                                                                          | `false`           | `true`, `false`                                                                              |
| `SERVER_ACCOUNT_ACTIVATION_DISABLED` | If accounts need to be activated by an admin before using them.                                             | `false`           | `true`, `false`                                                                              |
| `SERVER_ADMIN_USERNAME`              | Automatically grants Admin Role to User with this Username on register, or startup                          | -                 | Any username                                                                                 |
| `SERVER_ADMIN_PASSWORD`              | Resets the admin user password to this password on startup                                                  | -                 | Any password (No Length Validation)                                                          |
| `FORCED_SHARP_VERSION`               | Specify a wanted sharp version (ie 0.27.1 for non avx cpus)             | unset                 | valid sharp version                                                          |

## VOLUMES

| Property           | Description                                                                                                 | Default Value | Possible Values       |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- | --------------------- |
| `VOLUMES_FILES`    | Folder inside container used for game files                                                                 | `/files`      | Any valid folder path |
| `VOLUMES_IMAGES`   | Folder inside container used for images                                                                     | `/images`     | Any valid folder path |
| `VOLUMES_LOGS`     | Folder inside container used for logs.                                                                      | `/logs`       | Any valid folder path |
| `VOLUMES_SQLITEDB` | Folder inside container used for `SQLITE` database. (Not needed id you use `POSTGRESQL` as database system) | `/db`         | Any valid folder path |

## DB

| Property          | Description                                                                                                                                | Default Value | Possible Values         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ----------------------- |
| `DB_SYSTEM`       | The database system used (POSTGRESQL or SQLITE).                                                                                           | `POSTGRESQL`  | `POSTGRESQL`, `SQLITE`  |
| `DB_HOST`         | The host of the database (not needed for SQLITE).                                                                                          | `localhost`   | Any valid host name     |
| `DB_PORT`         | The port of the database (not needed for SQLITE).                                                                                          | `5432`        | Any valid port number   |
| `DB_USERNAME`     | The username for the database (not needed for SQLITE).                                                                                     | `default`     | Any valid username      |
| `DB_PASSWORD`     | The password for the database (not needed for SQLITE).                                                                                     | `default`     | Any valid password      |
| `DB_DATABASE`     | The database name (not needed for SQLITE).                                                                                                 | `gamevault`   | Any valid database name |
| `DB_SYNCHRONIZE`  | Synchronize the database with the entities (it could break your db). Currently the default because we have not implemented migrations yet. | `true`        | `true`, `false`         |
| `DB_DEBUG`        | Log all SQL Statements sent to the database.                                                                                               | `false`       | `true`, `false`         |
| ~~`DB_LOCATION`~~ | **[Deprecated in favor of `VOLUMES_SQLITEDB`]** The folder of the SQLITE DB file (not needed for POSTGRESQL).                              | `/db`         | Any valid folder path   |

## RAWG_API

| Property              | Description                                   | Default Value             | Possible Values        |
| --------------------- | --------------------------------------------- | ------------------------- | ---------------------- |
| `RAWG_API_URL`        | Base URL of the RAWG API.                     | `https://api.rawg.io/api` | Any valid URL          |
| `RAWG_API_KEY`        | API key for the RAWG API.                     | `""`                      | Any valid RAWG API key |
| `RAWG_API_CACHE_DAYS` | When to renew RAWG API cached data (in days). | `7`                       | Any positive integer   |

## GAMES

| Property                          | Default | Possible Values | Description                                                                                    |
| --------------------------------- | ------- | --------------- | ---------------------------------------------------------------------------------------------- |
| `GAMES_INDEX_INTERVAL_IN_MINUTES` | `5`     | Any number      | The index interval in minutes. Determines how often the server should index the list of games. |

## IMAGE

| Property                    | Default   | Possible Values | Description                                                                                                                                                                  |
| --------------------------- | --------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IMAGE_GC_KEEP_DAYS`        | `30`      | Any number      | The number of days to keep unused images. After this period, images that have not been accessed are deleted.                                                                 |
| `IMAGE_GC_INTERVAL_MINUTES` | `60`      | Any number      | How often to run the image garbage collector, in minutes.                                                                                                                    |
| ~~`IMAGE_STORAGE_PATH`~~    | `/images` | Any string      | **[Deprecated in favor of `VOLUMES_IMAGES`]** The path to the directory where the images will be stored. This should be a valid path on the server where the app is running. |

## TESTING

| Property                          | Default | Possible Values | Description                                                                                                                           |
| --------------------------------- | ------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `TESTING_AUTHENTICATION_DISABLED` | `false` | `true`, `false` | If `true`, the API will accept any auth header. Useful for testing without authentication.                                            |
| `TESTING_MOCK_FILES`              | `false` | `true`, `false` | If `true`, the server will mock all files or ignore filesystem functionalities. Useful for testing without real files.                |
| `TESTING_IN_MEMORY_DB`            | `false` | `true`, `false` | If `true`, the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE. |
| `TESTING_RAWG_API_DISABLED`       | `false` | `true`, `false` | If `true`, the server will not make any external API calls to RAWG. Useful for testing without depending on the API.                  |
| `TESTING_GOOGLE_API_DISABLED`     | `false` | `true`, `false` | If `true`, the server will not make any external API calls to Google. Useful for testing without depending on the API.                |
