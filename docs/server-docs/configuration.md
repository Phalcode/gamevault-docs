---
sidebar_position: 2
---

# Configuration

:::tip
Check out [configuration.ts](https://github.com/Phalcode/gamevault-backend/blob/master/src/configuration.ts) for all possible environment variables in case we forgot to update this page.
:::

## Three Ways to Configure GameVault

### 1. Environment Variables (Most Common)

Set variables directly via Docker Compose, `.env` files, or shell:

```yaml
# Docker Compose example
environment:
  SERVER_PORT: 8080
  DB_HOST: postgres
  DB_PASSWORD: mypassword
```

```bash
# .env file example
SERVER_PORT=8080
DB_HOST=postgres
DB_PASSWORD=mypassword
```

### 2. Docker Secrets (`_FILE` method) — For Sensitive Values

Store secrets in files and reference them. Ideal for passwords, API keys, and tokens:

```yaml
# docker-compose.yml
secrets:
  db_password:
    file: ./secrets/db_password.txt
environment:
  DB_PASSWORD_FILE: /run/secrets/db_password
```

GameVault reads the file at runtime, keeping secrets out of logs and configs.

### 3. YAML Configuration Files — For Complex Setups

Create `config.yaml` or `config.yml` in your config volume (`VOLUMES_CONFIG`) for organized, readable configuration:

```yaml
# config.yaml (case-insensitive, supports nested or flat syntax)
server:
  port: 8080
  log_level: info
db:
  system: POSTGRESQL
  host: postgres
  port: 5432
```

Or use flat naming:

```yaml
SERVER_PORT: 8080
SERVER_LOG_LEVEL: info
DB_SYSTEM: POSTGRESQL
DB_HOST: postgres
```

## Which Method Should I Use?

| Scenario | Method | Example |
|----------|--------|----------|
| Simple setup, few variables | Environment Variables | Docker Compose `environment:` block |
| Passwords and secrets | Docker Secrets (`_FILE`) | `DB_PASSWORD_FILE: /run/secrets/db_password` |
| Complex setup, many variables | YAML | Create `config.yaml` in `/config` volume |
| Mixing all three | See **Precedence** below | Secrets override env, env overrides YAML |

## Configuration Precedence (Priority Order)

When a setting exists in multiple places, GameVault uses values in this order (highest → lowest):

1. **`VARIABLE_FILE`** (Docker Secrets file content) — *Always wins*
2. **`VARIABLE`** (environment variable) — *Overrides YAML*
3. **YAML file** (`config.yaml` / `config.yml`) — *Overrides defaults*
4. **Built-in default** — *Used if nothing else is set*

### Real-World Example

If you set the same value in all three places:

```yaml
# .env file or docker-compose environment:
DB_PASSWORD=env-password

# config.yaml:
db:
  password: yaml-password

# Docker secret:
DB_PASSWORD_FILE: /run/secrets/db_password  (contains "secret-password")
```

**GameVault will use:** `secret-password` (from `_FILE`, highest priority)

If you remove the `_FILE`, it uses the **environment** value: `env-password`

If you remove the environment variable too, it uses **YAML**: `yaml-password`

## All Configuration Options

Below are all available configuration variables, organized by category.

### SERVER — Core Server Settings

| Property                                | Description                                                                                                                                                                                                    | Default       | Possible Values                                                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| `PUID`                                  | The User-Identifer that should be used.                                                                                                                                                                        | `1000`        | Any user id (number)                                                                         |
| `PGID`                                  | The Group-Identifer that should be used.                                                                                                                                                                       | `1000`        | Any group id (number)                                                                        |
| `SERVER_PORT`                           | The port the server should use. (Only relevant if the server is run without docker on bare metal.)                                                                                                             | `8080`        | Any non-reserved free port (1024 to 49151)                                                   |
| `SERVER_LOG_LEVEL`                      | The log level of the server.                                                                                                                                                                                   | `info`        | `debug`, `info`, `warn`, `error`, `fatal`, `off`                                             |
| `SERVER_DEMO_MODE_ENABLED`              | Whether the server runs in demo mode (for demonstration or limited-feature scenarios).                                                                                                                         | `false`       | `true`, `false`                                                                              |
| `SERVER_LOG_FILES_ENABLED`              | If the server should also write the logs to the `VOLUMES_LOGS` directory via rolling file logger.                                                                                                              | `true`        | `true`, `false`                                                                              |
| `SERVER_REQUEST_LOG_FORMAT`             | The [morgan log format](https://www.npmjs.com/package/morgan#predefined-formats) for incoming HTTP requests.                                                                                                   | -             | `short`, `combined` [and many more](https://www.npmjs.com/package/morgan#predefined-formats) |
| `SERVER_CORS_ALLOWED_ORIGINS`           | Allowed CORS origins for the server.                                                                                                                                                                           | `*`           | A comma-separated list of origins                                                            |
| `SERVER_REGISTRATION_DISABLED`          | If registration is enabled or not.                                                                                                                                                                             | `false`       | `true`, `false`                                                                              |
| `SERVER_ACCOUNT_ACTIVATION_DISABLED`    | If accounts need to be activated by an admin before using them.                                                                                                                                                | `false`       | `true`, `false`                                                                              |
| `SERVER_ADMIN_USERNAME`                 | Used for role recovery of existing users. The server grants Admin Role to an existing User with this username on register or startup. **⚠️ This won't register a new account!**                                | -             | Any username                                                                                 |
| `SERVER_ADMIN_PASSWORD`                 | Used for password recovery of existing users. Resets the password of the existing user with the username set in `SERVER_ADMIN_USERNAME` to this password on startup. **⚠️ This won't register a new account!** | -             | Any password (No Length Validation)                                                          |
| `SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS` | Maximum bandwidth for downloads on this server in KB/s.                                                                                                                                                        | - (Unlimited) | Any Number                                                                                   |
| `SERVER_ONLINE_ACTIVITIES_DISABLED`     | Whether or not the server should listen to online activities like "ONLINE", "BUSY", "PLAYING" etc. If this is set to true, all users will always be shown as offline.                                          | `false`       | `true`, `false`                                                                              |
| `SERVER_STACK_TRACE_LIMIT`              | Configures the maximum number of stack frames to display in error stack traces, with a higher value providing more detailed debugging information.                                                             | `10`          | Any Number                                                                                   |
| `SERVER_HTTPS_ENABLED`                  | Enables or disables an additional HTTPS server.                                                                                                                                                                | `false`       | `true`, `false`                                                                              |
| `SERVER_HTTPS_PORT`                     | The port the HTTPS server should listen on. (Only relevant if `SERVER_HTTPS_ENABLED` is `true`.)                                                                                                               | `8443`        | Any non-reserved free port (1024 to 49151)                                                   |
| `SERVER_HTTPS_KEY_PATH`                 | The file path to the private key used for HTTPS.                                                                                                                                                               | -             | Any valid file path                                                                          |
| `SERVER_HTTPS_CERT_PATH`                | The file path to the TLS certificate used for HTTPS.                                                                                                                                                           | -             | Any valid file path                                                                          |
| `SERVER_HTTPS_CA_CERT_PATH`             | The file path to the CA certificate used for HTTPS (e.g. for client certificate verification).                                                                                                                 | -             | Any valid file path                                                                          |

### WEB UI — Web Interface Settings

| Property         | Description                                                  | Default | Possible Values |
| ---------------- | ------------------------------------------------------------ | ------- | --------------- |
| `WEB_UI_ENABLED` | Whether or not the web ui should be used.                    | `true`  | `true`, `false` |
| `WEB_UI_VERSION` | You can force a specific web ui version using this property. | -       | `e.g. 16.0.0`   |

### VOLUMES — Storage Folder Paths

| Property            | Description                                                                                                                                     | Default      | Possible Values       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------- |
| `VOLUMES_CONFIG`    | Folder used for configuring GameVault (for example `news.md`, `config.yaml`, and `config.yml`). Relative paths are supported, but absolute paths are recommended. | `/config`    | Any valid folder path |
| `VOLUMES_FILES`     | Folder inside container used for game files. The server needs **write permissions** on this folder for the upload and delete game APIs to work. | `/files`     | Any valid folder path |
| `VOLUMES_MEDIA`     | Folder inside container used for media.                                                                                                         | `/media`     | Any valid folder path |
| `VOLUMES_SAVEFILES` | Folder inside container used for savefile uploads.                                                                                              | `/savefiles` | Any valid folder path |
| `VOLUMES_LOGS`      | Folder inside container used for logs.                                                                                                          | `/logs`      | Any valid folder path |
| `VOLUMES_SQLITEDB`  | Folder inside container used for `SQLITE` database. (Not needed if `DB_SYSTEM` is set to `POSTGRESQL`)                                          | `/db`        | Any valid folder path |
| `VOLUMES_PLUGINS`   | Folder inside container used for plugins.                                                                                                       | `/plugins`   | Any valid folder path |

### DB — Database Configuration

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

### USERS — User Registration & Requirements

| Property                   | Description                                                                                                                     | Default | Possible Values |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `USERS_REQUIRE_EMAIL`      | Require **Email** for new registrations.                                                                                        | `false` | `true`, `false` |
| `USERS_REQUIRE_FIRST_NAME` | Require **First Name** for new registrations.                                                                                   | `false` | `true`, `false` |
| `USERS_REQUIRE_LAST_NAME`  | Require **Last Name** for new registrations.                                                                                    | `false` | `true`, `false` |
| `USERS_REQUIRE_BIRTH_DATE` | Require **Birth Date** for new registrations. (**Automatically set to `true` when `PARENTAL_AGE_RESTRICTION_ENABLED` is true**) | `false` | `true`, `false` |

### PARENTAL — Parental Control & Age Restrictions

| Property                           | Description                                                                                 | Default | Possible Values |
| ---------------------------------- | ------------------------------------------------------------------------------------------- | ------- | --------------- |
| `PARENTAL_AGE_RESTRICTION_ENABLED` | Determines whether age-based parental restrictions are enforced.                            | `false` | `true`, `false` |
| `PARENTAL_AGE_OF_MAJORITY`         | The age at which an individual is legally recognized as an adult for parental restrictions. | `18`    | Any number      |

### GAMES — Game Library & Upload Settings

| Property                                         | Description                                                                                                                                                                                                                                                                                                                                                                                           | Default                                                             | Possible Values                |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------ |
| `GAMES_INDEX_USE_POLLING`                        | Whether to use polling for the file watcher instead of native filesystem events. Useful for network shares (NFS/SMB) or huge libraries where native events might not work.                                                                                                                                                                                                                            | `false`                                                             | `true`, `false`                |
| `GAMES_INDEX_INTERVAL_IN_MINUTES`                | The index interval, measured in minutes, decides how frequently the server should check for changes in games in the `/files` directory. This used to be essential before we implemented the filewatcher to the server. Nowadays, it's optional for rare situations where the filewatcher might miss changes. If set to 0, it won't regularly trigger reindexing and solely depend on the filewatcher. | `60`                                                                | Any number                     |
| `GAMES_SUPPORTED_FILE_FORMATS`                   | Comma-Separated list of supported file-types GameVault should detect.                                                                                                                                                                                                                                                                                                                                 | [All Supported Formats](structure.md#supported-archive-formats)     | ".zip,.7z,.rar"                |
| `GAMES_SEARCH_RECURSIVE`                         | If indexer should search for games in subfolders.                                                                                                                                                                                                                                                                                                                                                     | `true`                                                              | `true`, `false`                |
| `GAMES_INDEX_CONCURRENCY`                        | The number of concurrent indexing tasks.                                                                                                                                                                                                                                                                                                                                                              | `1`                                                                 | Any number                     |
| `GAMES_DEFAULT_ARCHIVE_PASSWORD`                 | A default password for archives. Useful if you always use the same password for your games and want Game Type Detection to work with the encrypted files. Without this, game type detection on encrypted archives depends on the file extension and whether the headers are encrypted.                                                                                                                | `Anything`                                                          | Any string                     |
| `GAMES_WINDOWS_SETUP_DEFAULT_INSTALL_PARAMETERS` | Default command-line parameters used for Windows application setup files. These are used to attempt a silent installation.                                                                                                                                                                                                                                                                            | `/D="%INSTALLDIR%" /S /DIR="%INSTALLDIR%" /SILENT /COMPONENTS=text` | Any string                     |
| `GAMES_MAX_UPLOAD_SIZE`                          | The maximum file size allowed for game uploads via the API. Set it to 0 to disable game uploads.                                                                                                                                                                                                                                                                                                      | `50 gb`                                                             | e.g. "50 gb", "100 gb", "1 tb" |

### MEDIA — Image & Media Upload Settings

| Property                       | Description                                                                       | Default                                  | Possible Values                     |
| ------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------- |
| `MEDIA_MAX_SIZE`               | The maximum size for media uploads. Set it to 0 to disable media uploads.         | `10 mb`                                  | e.g. "10 mb", "5 gb", "300 kb"      |
| `MEDIA_SUPPORTED_FORMATS`      | List of supported media formats (MIME Types) on this server, separated by commas. | [See here](./media.md#supported-formats) | Comma separated list of MIME Types. |
| `MEDIA_GC_DISABLED`            | Whether or not media garbage collection is enabled. (Deletes unused media)        | `false`                                  | `true`, `false`                     |
| `MEDIA_GC_INTERVAL_IN_MINUTES` | The interval in minutes for media garbage collection.                             | `60`                                     | Any number                          |

### SAVEFILES — Game Save File Management

| Property              | Description                                                                                                                                     | Default | Possible Values                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------ |
| `SAVEFILES_ENABLED`   | Enables or disables savefile uploads. You may need to set up a volume for savefiles for them to persist.                                        | `false` | `true`, `false`                |
| `SAVEFILES_MAX_SIZE`  | Sets the maximum size for savefile uploads.                                                                                                     | `1 gb`  | e.g. "10 mb", "5 gb", "300 kb" |
| `SAVEFILES_MAX_SAVES` | Sets the maximum number of savefiles per game and per user. Once this limit is reached, the oldest savefile will be deleted on the next upload. | `10`    | Any number                     |

### METADATA — Game Information Providers

| Property                            | Description                                                                                                                                                            | Default | Possible Values    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------ |
| `METADATA_TTL_IN_DAYS`              | The number of days metadata is considered fresh before requiring an update.                                                                                            | `30`    | Any number of days |
| `METADATA_IGDB_ENABLED`             | Enables or disables the built-in integration with IGDB for metadata retrieval.                                                                                         | `true`  | `true`, `false`    |
| `METADATA_IGDB_PRIORITY`            | The priority level for IGDB metadata sources when multiple metadata sources are available.                                                                             | `10`    | Any number         |
| `METADATA_IGDB_REQUEST_INTERVAL_MS` | The interval, in milliseconds, to wait between consecutive requests to prevent exceeding rate limits. This delay will be applied **before** each call to the provider. | `250`   | Any number         |
| `METADATA_IGDB_CLIENT_ID`           | The Client-ID used for authenticating requests to the IGDB API.                                                                                                        | -       | Your Client ID     |
| `METADATA_IGDB_CLIENT_SECRET`       | The Client-Secret used for authenticating requests to the IGDB API.                                                                                                    | -       | Your Client Secret |

### AUTH — Authentication & Login Methods

| Property                        | Description                                                                                                                                                                                                       | Default                               | Possible Values                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| `AUTH_SEED`                     | Random seed for generating tokens. Generated automatically if not set.                                                                                                                                            | Hash of any credential in the config. | Any random string, it doesn't matter what it says, or how long it is.       |
| `AUTH_ACCESS_TOKEN_EXPIRES_IN`  | Specifies how long an access token is valid.                                                                                                                                                                      | `5m`                                  | A valid [ms-format](https://github.com/vercel/ms) string (e.g. "1h", "30m") |
| `AUTH_REFRESH_TOKEN_EXPIRES_IN` | Specifies how long a refresh token is valid.                                                                                                                                                                      | `30d`                                 | A valid [ms-format](https://github.com/vercel/ms) string (e.g. "1h", "30m") |
| `AUTH_BASIC_AUTH_ENABLED`       | Enables or disables Basic Auth. Disabling this will disable registering and logging in using username and password.                                                                                               | `true`                                | `true`, `false`                                                             |
| `AUTH_API_KEY_ENABLED`          | Enables or disables API Key authentication.                                                                                                                                                                       | `false`                               | `true`, `false`                                                             |
| `AUTH_OAUTH2_ENABLED`           | Enables or disables OAuth2 integration.                                                                                                                                                                           | `false`                               | `true`, `false`                                                             |
| `AUTH_OAUTH2_SCOPES`            | A comma-separated list of OAuth2 scopes to request.                                                                                                                                                               | `openid,email,profile`                | Any comma-separated list of scopes                                          |
| `AUTH_OAUTH2_AUTH_URL`          | The OAuth2 authorization endpoint URL provided by your Identity Provider. Refer to your IdP's documentation for the specific URL.                                                                                 | -                                     | Any valid URL                                                               |
| `AUTH_OAUTH2_TOKEN_URL`         | The OAuth2 token endpoint URL provided by your Identity Provider. Refer to your IdP's documentation for the specific URL.                                                                                         | -                                     | Any valid URL                                                               |
| `AUTH_OAUTH2_USERINFO_URL`      | The OAuth2 user info endpoint URL provided by your Identity Provider. Refer to your IdP's documentation for the specific URL. Optional, since some providers already include the user info in the token response. | -                                     | Any valid URL                                                               |
| `AUTH_OAUTH2_CALLBACK_URL`      | The OAuth2 callback/redirect URL to GameVault. This should be the URL of your GameVault server + `/api/auth/oauth2/login` (e.g. `https://demo.gamevau.lt/api/auth/oauth2/login`)                                  | -                                     | The URL of your GameVault server + `/api/auth/oauth2/login`                 |
| `AUTH_OAUTH2_CLIENT_ID`         | The OAuth2 client ID.                                                                                                                                                                                             | -                                     | Any string                                                                  |
| `AUTH_OAUTH2_CLIENT_SECRET`     | The OAuth2 client secret.                                                                                                                                                                                         | -                                     | Any string                                                                  |

### TESTING — Development & Testing Options

| Property                           | Description                                                                                                                           | Default | Possible Values |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `TESTING_AUTHENTICATION_DISABLED`  | If `true`, the API will accept any auth header and impersonate a user. Useful for testing without authentication.                     | `false` | `true`, `false` |
| `TESTING_MOCK_FILES`               | If `true`, the server will mock all files or ignore filesystem functionalities. Useful for testing without real files.                | `false` | `true`, `false` |
| `TESTING_IN_MEMORY_DB`             | If `true`, the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE. | `false` | `true`, `false` |
| `TESTING_MOCK_PROVIDERS`           | If `true`, the server will create two mock providers. (-9999 and 9999 Priority) Useful for testing metadata-merges.                   | `false` | `true`, `false` |
| `TESTING_LOG_HTTP_TRAFFIC_ENABLED` | If `true`, the server will log all incoming and outgoing HTTP traffic. (Except Healthchecks)                                          | `false` | `true`, `false` |

---

## Tips & Troubleshooting

- **Confused about precedence?** See the real-world example under [Configuration Precedence](#configuration-precedence-priority-order) above.
- **Using relative paths?** Relative paths in `VOLUMES_CONFIG` work but absolute paths are recommended for clarity.
- **YAML not being read?** Ensure the file is named exactly `config.yaml` or `config.yml` and is in your `VOLUMES_CONFIG` folder.
- **Secrets not working?** Make sure the file path in `VARIABLE_FILE` exists and contains the secret value (with no extra whitespace).
