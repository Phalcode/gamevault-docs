---
sidebar_position: 2
---

# Configuration

:::tip
Check out [configuration.ts](https://github.com/Phalcode/gamevault-backend/blob/master/src/configuration.ts) for all possible environment variables in case we forgot to update this page.
:::

All configuration properties of your GameVault server are passed as environment variables or via a .env file. The following tables describe the available properties, their default values, explanations, and possible values.

## Configuration Properties

This page describes the various configuration properties used in the application. These properties can be configured in the environment variables or in a `.env` file.

## SERVER

| Property                                | Description                                                                                                                                                                                                    | Default       | Possible Values                                                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| `PUID`                                  | The User-Identifer that should be used.                                                                                                                                                                        | `1000`        | Any user id (number)                                                                         |
| `PGID`                                  | The Group-Identifer that should be used.                                                                                                                                                                       | `1000`        | Any group id (number)                                                                        |
| `SERVER_PORT`                           | The port the server should use. (Only relevant if the server is run without docker on bare metal.)                                                                                                             | `8080`        | Any non-reserved free port (1024 to 49151)                                                   |
| `SERVER_LOG_LEVEL`                      | The log level of the server.                                                                                                                                                                                   | `info`        | `debug`, `info`, `warn`, `error`, `fatal`, `off`                                             |
| `SERVER_LOG_FILES_ENABLED`              | If the server should also write the logs to the `VOLUMES_LOGS` directory via rolling file logger.                                                                                                              | `true`        | `true`, `false`                                                                              |
| `SERVER_REQUEST_LOG_FORMAT`             | The [morgan log format](https://www.npmjs.com/package/morgan#predefined-formats) for incoming HTTP Requests                                                                                                    | -             | `short`, `combined` [and many more](https://www.npmjs.com/package/morgan#predefined-formats) |
| `SERVER_CORS_ALLOWED_ORIGINS`           | Allowed CORS origins for the server.                                                                                                                                                                           | `*`           | A comma-separated list of origins                                                            |
| `SERVER_REGISTRATION_DISABLED`          | If registration is enabled or not.                                                                                                                                                                             | `false`       | `true`, `false`                                                                              |
| `SERVER_ACCOUNT_ACTIVATION_DISABLED`    | If accounts need to be activated by an admin before using them.                                                                                                                                                | `false`       | `true`, `false`                                                                              |
| `SERVER_ADMIN_USERNAME`                 | Used for role recovery of existing users. The Server grants Admin Role to an existing User with this Username on register or startup. **⚠️ This won't register a new account!**                                | -             | Any username                                                                                 |
| `SERVER_ADMIN_PASSWORD`                 | Used for password recovery of existing users. Resets the password of the existing user with the username set in `SERVER_ADMIN_USERNAME` to this password on startup. **⚠️ This won't register a new account!** | -             | Any password (No Length Validation)                                                          |
| `SERVER_API_DOCS_ENABLED`               | Enables the API Documentation on `/api/docs`, `/api/docs-json` & `/api/docs/yaml`.                                                                                                                             | `false`       | `true`, `false`                                                                              |
| `SERVER_LANDING_PAGE_ENABLED`           | Whether or not the landing page ("GameVault UI is in Another Castle!") should be shown for lost users.                                                                                                         | `true`        | `true`, `false`                                                                              |
| `SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS` | Maximum bandwidth for downloads on this server in KB/s.                                                                                                                                                        | - (Unlimited) | Any Number                                                                                   |
| `SERVER_ONLINE_ACTIVITIES_DISABLED`     | Whether or not the server should listen to online activities like "ONLINE", "BUSY", "PLAYING" etc. If this is set to true, all users will always be shown as offline.                                          | `false`       | `true`, `false`                                                                              |
| `SERVER_STACK_TRACE_LIMIT`              | Configures the maximum number of stack frames to display in error stack traces, with a higher value providing more detailed debugging information.                                                             | `10`          | Any Number                                                                                   |

## VOLUMES

| Property            | Description                                                                                            | Default      | Possible Values       |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ------------ | --------------------- |
| `VOLUMES_CONFIG`    | Folder inside container used for configuring GameVault.                                                | `/config`    | Any valid folder path |
| `VOLUMES_FILES`     | Folder inside container used for game files.                                                           | `/files`     | Any valid folder path |
| `VOLUMES_MEDIA`     | Folder inside container used for media.                                                                | `/media`     | Any valid folder path |
| `VOLUMES_SAVEFILES` | Folder inside container used for savefile uploads.                                                     | `/savefiles` | Any valid folder path |
| `VOLUMES_LOGS`      | Folder inside container used for logs.                                                                 | `/logs`      | Any valid folder path |
| `VOLUMES_SQLITEDB`  | Folder inside container used for `SQLITE` database. (Not needed if `DB_SYSTEM` is set to `POSTGRESQL`) | `/db`        | Any valid folder path |
| `VOLUMES_PLUGINS`   | Folder inside container used for plugins.                                                              | `/plugins`   | Any valid folder path |

## DB

| Property                             | Description                                                                                        | Default      | Possible Values         |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- | ------------ | ----------------------- |
| `DB_SYSTEM`                          | The database system used (POSTGRESQL or SQLITE).                                                   | `POSTGRESQL` | `POSTGRESQL`, `SQLITE`  |
| `DB_HOST`                            | The host of the database (not needed for SQLITE).                                                  | `localhost`  | Any valid host name     |
| `DB_PORT`                            | The port of the database (not needed for SQLITE).                                                  | `5432`       | Any valid port number   |
| `DB_USERNAME`                        | The username for the database (not needed for SQLITE).                                             | `default`    | Any valid username      |
| `DB_PASSWORD`                        | The password for the database (not needed for SQLITE).                                             | `default`    | Any valid password      |
| `DB_DATABASE`                        | The database name (not needed for SQLITE).                                                         | `gamevault`  | Any valid database name |
| `DB_DEBUG`                           | Log all SQL Statements sent to the database.                                                       | `false`      | `true`, `false`         |
| `DB_SYNCHRONIZE`                     | Force synchronizes the database with the entities. (This could break your database!)               | `false`      | `true`, `false`         |
| `DB_TLS_ENABLED`                     | Enables TLS for the database. (not needed for SQLITE).                                             | `false`      | `true`, `false`         |
| `DB_TLS_REJECT_UNAUTHORIZED_ENABLED` | Whether the database will reject TLS connections that do not present a valid, trusted certificate. | `false`      | `true`, `false`         |
| `DB_TLS_KEY_PATH`                    | The file path to the private key used for securing TLS connections to the database.                | -            | Any file path           |
| `DB_TLS_CERTIFICATE_PATH`            | The file path to the TLS certificate used for authenticating the database server.                  | -            | Any file path           |
| `DB_TLS_CA_CERTIFICATE_PATH`         | The file path to the CA certificate used for verifying client certificates in TLS connections.     | -            | Any file path           |

## USERS

| Property                   | Description                                                                                                                     | Default | Possible Values |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `USERS_REQUIRE_EMAIL`      | Require **Email** for new registrations.                                                                                        | `false` | `true`, `false` |
| `USERS_REQUIRE_FIRST_NAME` | Require **First Name** for new registrations.                                                                                   | `false` | `true`, `false` |
| `USERS_REQUIRE_LAST_NAME`  | Require **Last Name** for new registrations.                                                                                    | `false` | `true`, `false` |
| `USERS_REQUIRE_BIRTH_DATE` | Require **Birth Date** for new registrations. (**Automatically set to `true` when `PARENTAL_AGE_RESTRICTION_ENABLED` is true**) | `false` | `true`, `false` |

## PARENTAL

| Property                           | Description                                                                                 | Default | Possible Values |
| ---------------------------------- | ------------------------------------------------------------------------------------------- | ------- | --------------- |
| `PARENTAL_AGE_RESTRICTION_ENABLED` | Determines whether age-based parental restrictions are enforced.                            | `false` | `true`, `false` |
| `PARENTAL_AGE_OF_MAJORITY`         | The age at which an individual is legally recognized as an adult for parental restrictions. | `18`    | Any number      |

## GAMES

| Property                          | Description                                                                                                                                                                                                                                                                                                                                                                                         | Default                                                         | Possible Values |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------- |
| `GAMES_INDEX_INTERVAL_IN_MINUTES` | The index interval, measured in minutes, decides how frequently the server should check for changes in games in the /files directory. This used to be essential before we implemented the filewatcher to the server. Nowadays, it's optional for rare situations where the filewatcher might miss changes. If set to 0, it won't regularly trigger reindexing and solely depend on the filewatcher. | `60`                                                            | Any number      |
| `GAMES_SUPPORTED_FILE_FORMATS`    | Comma-Seperated list of supported file-types GameVault should detect.                                                                                                                                                                                                                                                                                                                               | [All Supported Formats](structure.md#supported-archive-formats) | ".zip,.7z,.rar" |
| `GAMES_SEARCH_RECURSIVE`          | If indexer should search for games in subfolders.                                                                                                                                                                                                                                                                                                                                                   | true                                                            | "true", "false  |
| `GAMES_DEFAULT_ARCHIVE_PASSWORD`  | A default password for archives. Useful if you always use the same password for your games and want Game Type Detection to work with the encrypted files. Without this game type detection on encrypted archives depends on the file extension and if the headers are encrypted                                                                                                                     | "Anything"                                                      | Any string      |

## MEDIA

| Property                       | Description                                                                       | Default                                  | Possible Values                     |
| ------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------- |
| `MEDIA_MAX_SIZE`               | The maximum size for media uploads. Set it to 0 to disable media uploads.         | `10 mb`                                  | e.g. "10 mb", "5 gb", "300 kb"      |
| `MEDIA_SUPPORTED_FORMATS`      | List of supported media formats (MIME Types) on this server, separated by commas. | [See here](./media.md#supported-formats) | Comma separated list of MIME Types. |
| `MEDIA_GC_DISABLED`            | Whether or not media garbage collection is enabled. (Deletes unused media)        | `false`                                  | `true`, `false`                     |
| `MEDIA_GC_INTERVAL_IN_MINUTES` | The interval in minutes for media garbage collection.                             | `60`                                     | Any number                          |

## SAVEFILES

| Property              | Description                                                                                                                                     | Default | Possible Values                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------ |
| `SAVEFILES_ENABLED`   | Enables or disables savefile uploads. You may need to set up a volume for savefiles for them to persist.                                        | `false` | `true`, `false`                |
| `SAVEFILES_MAX_SIZE`  | Sets the maximum size for savefile uploads.                                                                                                     | `10 gb` | e.g. "10 mb", "5 gb", "300 kb" |
| `SAVEFILES_MAX_SAVES` | Sets the maximum number of savefiles per game and per user. Once this limit is reached, the oldest savefile will be deleted on the next upload. | `100`   | Any number                     |

## METADATA

| Property                            | Description                                                                                                                                                            | Default | Possible Values    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------ |
| `METADATA_TTL_IN_DAYS`              | The number of days metadata is considered fresh before requiring an update.                                                                                            | `30`    | Any number of days |
| `METADATA_IGDB_ENABLED`             | Enables or disables the built-in integration with IGDB for metadata retrieval.                                                                                         | `true`  | `true`, `false`    |
| `METADATA_IGDB_PRIORITY`            | The priority level for IGDB metadata sources when multiple metadata sources are available.                                                                             | `1`     | Any number         |
| `METADATA_IGDB_REQUEST_INTERVAL_MS` | The interval, in milliseconds, to wait between consecutive requests to prevent exceeding rate limits. This delay will be applied **before** each call to the provider. | `250`   | Any number         |
| `METADATA_IGDB_CLIENT_ID`           | The Client-ID used for authenticating requests to the IGDB API.                                                                                                        | -       | Your Client ID     |
| `METADATA_IGDB_CLIENT_SECRET`       | The Client-Secret used for authenticating requests to the IGDB API.                                                                                                    | -       | Your Client Secret |

## TESTING

| Property                          | Description                                                                                                                           | Default | Possible Values |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `TESTING_AUTHENTICATION_DISABLED` | If `true`, the API will accept any auth header. Useful for testing without authentication.                                            | `false` | `true`, `false` |
| `TESTING_MOCK_FILES`              | If `true`, the server will mock all files or ignore filesystem functionalities. Useful for testing without real files.                | `false` | `true`, `false` |
| `TESTING_IN_MEMORY_DB`            | If `true`, the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE. | `false` | `true`, `false` |
| `TESTING_MOCK_PROVIDERS`          | If `true`, the server will create two mock providers. (-9999 and 9999 Priority) Useful for testing metadata-merges.                   | `false` | `true`, `false` |
