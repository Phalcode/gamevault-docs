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
| `SERVER_LOG_FILES_ENABLED`              | If the server should also write the logs to the `VOLUMES_LOGS` directory via rolling file logger.                                                                                                                       | `true`            | `true`, `false`                                                                              |
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

| Property           | Description                                                                                            | Default    | Possible Values       |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ---------- | --------------------- |
| `VOLUMES_FILES`    | Folder inside container used for game files.                                                           | `/files`   | Any valid folder path |
| `VOLUMES_IMAGES`   | Folder inside container used for images.                                                               | `/images`  | Any valid folder path |
| `VOLUMES_LOGS`     | Folder inside container used for logs.                                                                 | `/logs`    | Any valid folder path |
| `VOLUMES_PLUGINS`  | Folder inside container used for plugins.                                                              | `/plugins` | Any valid folder path |
| `VOLUMES_SQLITEDB` | Folder inside container used for `SQLITE` database. (Not needed if `DB_SYSTEM` is set to `POSTGRESQL`) | `/db`      | Any valid folder path |

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

## GAMES

| Property                          | Description                                                                                                                                                                                                                                                                                                                                                                                         | Default                                            | Possible Values |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------- |
| `GAMES_INDEX_INTERVAL_IN_MINUTES` | The index interval, measured in minutes, decides how frequently the server should check for changes in games in the /files directory. This used to be essential before we implemented the filewatcher to the server. Nowadays, it's optional for rare situations where the filewatcher might miss changes. If set to 0, it won't regularly trigger reindexing and solely depend on the filewatcher. | `60`                                               | Any number      |
| `GAMES_SUPPORTED_FILE_FORMATS`    | Comma-Seperated list of supported file-types GameVault should detect.                                                                                                                                                                                                                                                                                                                               | [see here](structure.md#supported-archive-formats) | ".zip,.7z,.rar" |
| `GAMES_SEARCH_RECURSIVE`          | If indexer should search for games in subfolders.                                                                                                                                                                                                                                                                                                                                                   | true                                               | "true", "false  |
| `GAMES_DEFAULT_ARCHIVE_PASSWORD`  | A default password for archives. Useful if you always use the same password for your games and want Game Type Detection to work with the encrypted files. Without this game type detection on encrypted archives depends on the file extension and if the headers are encrypted                                                                                                                     | "Anything"                                         | Any string      |

## USERS

| Property                   | Description                                     | Default | Possible Values |
| -------------------------- | ----------------------------------------------- | ------- | --------------- |
| `USERS_REQUIRE_EMAIL`      | Require Email Field for new registrations.      | `false` | `true`, `false` |
| `USERS_REQUIRE_FIRST_NAME` | Require First Name Field for new registrations. | `false` | `true`, `false` |
| `USERS_REQUIRE_LAST_NAME`  | Require Last Name Field for new registrations.  | `false` | `true`, `false` |

## MEDIA

| Property                       | Description                                                                           | Default                                                                                                                                                                                                                                                                          | Possible Values                     |
| ------------------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `MEDIA_MAX_SIZE_IN_KB`         | he maximum size for media uploads in kilobytes. Set it to 0 to disable media uploads. | `10000` (10MB)                                                                                                                                                                                                                                                                   | Any number                          |
| `MEDIA_SUPPORTED_FORMATS`      | List of supported media formats (MIME Types) on this server, separated by commas.     | `audio/mpeg,audio/wav,audio/ogg,audio/aac,audio/flac,audio/x-ms-wma,audio/amr,audio/mp4,image/bmp,image/jpeg,image/png,image/tiff,image/gif,image/x-icon,video/mp4,video/x-msvideo,video/quicktime,video/x-ms-wmv,video/x-flv,video/x-matroska,video/webm,video/mpeg,video/3gpp` | Comma separated List of MIME types. |
| `MEDIA_GC_DISABLED`            | Whether or not media garbage collection is enabled. (Deletes unused media)            | `false`                                                                                                                                                                                                                                                                          | `true`, `false`                     |
| `MEDIA_GC_INTERVAL_IN_MINUTES` | The interval in minutes for media garbage collection.                                 | `60`                                                                                                                                                                                                                                                                             | Any number                          |

## TESTING

| Property                          | Description                                                                                                                           | Default | Possible Values |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `TESTING_AUTHENTICATION_DISABLED` | If `true`, the API will accept any auth header. Useful for testing without authentication.                                            | `false` | `true`, `false` |
| `TESTING_MOCK_FILES`              | If `true`, the server will mock all files or ignore filesystem functionalities. Useful for testing without real files.                | `false` | `true`, `false` |
| `TESTING_IN_MEMORY_DB`            | If `true`, the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE. | `false` | `true`, `false` |
