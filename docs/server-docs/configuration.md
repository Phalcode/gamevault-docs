---
sidebar_position: 2
---

# Configuration

> Check out [configuration.ts](https://github.com/Phalcode/crackpipe-backend/blob/master/src/configuration.ts) for all possible environment variables.

All configuration properties of your Crackpipe server are passed as environment variables or via a .env file. The following tables describe the available properties, their default values, explanations, and possible values.

## Server Configuration Properties

| Property Name               | Default Value | Explanation                                     | Possible Values                 |
| --------------------------- | ------------- | ----------------------------------------------- | ------------------------------- |
| SERVER_PORT                 | 8080          | The port the server should listen on            | Any valid port number           |
| SERVER_LOG_LEVEL            | info          | The Log Level (debug, info, warn, error, fatal) | debug, info, warn, error, fatal |
| SERVER_CORS_ALLOWED_ORIGINS | \*            | Allowed CORS origins                            | Any valid CORS origin           |
| SERVER_REGISTRATION_ENABLED | false         | Whether or not registration is enabled          | true, false                     |
| SERVER_IMAGE_STORAGE_PATH   | /images       | The path where images will be stored            | Any valid file path             |

## Database Configuration Properties

| Property Name  | Default Value | Explanation                                                                                                          | Possible Values       |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------- |
| DB_SYSTEM      | POSTGRESQL    | The host of the database (POSTGRESQL or SQLITE)                                                                      | POSTGRESQL, SQLITE    |
| DB_HOST        | localhost     | The host of the database (not needed for SQLITE)                                                                     | Any valid host name   |
| DB_PORT        | 5432          | The port of the database (not needed for SQLITE)                                                                     | Any valid port number |
| DB_USERNAME    | default       | The username of the database (not needed for SQLITE)                                                                 | Any valid string      |
| DB_PASSWORD    | default       | The password of the database (not needed for SQLITE)                                                                 | Any valid string      |
| DB_DATABASE    | crackpipe     | The name of the database (not needed for SQLITE)                                                                     | Any valid string      |
| DB_LOCATION    | /db           | The path of the Sqlite DB (not needed for POSTGRESQL)                                                                | Any valid file path   |
| DB_SYNCHRONIZE | false         | Whether or not to synchronize the database (Use if create table failure occurs but watch out it could break your db) | true, false           |

## RAWG API Configuration Properties

| Property Name       | Default Value           | Explanation                                      | Possible Values          |
| ------------------- | ----------------------- | ------------------------------------------------ | ------------------------ |
| RAWG_API_URL        | https://api.rawg.io/api | The base URL of RAWG API                         | Any valid URL            |
| RAWG_API_KEY        | 123456789               | The API KEY for Rawg API                         | Any valid string         |
| RAWG_API_CACHE_DAYS | 7                       | The number of days to renew Rawg API cached data | Any valid number of days |

## CRON Configuration Properties

| Property Name                  | Default Value | Explanation                                   | Possible Values             |
| ------------------------------ | ------------- | --------------------------------------------- | --------------------------- |
| CRON_INDEX_INTERVAL_IN_MINUTES | 5             | The interval in minutes for file API indexing | Any valid number of minutes |

## Testing Configuration Properties

| Property Name                   | Default Value | Explanation                                                                     | Possible Values |
| ------------------------------- | ------------- | ------------------------------------------------------------------------------- | --------------- |
| TESTING_AUTHENTICATION_DISABLED | false         | Whether or not to accept any auth Header during testing                         | true, false     |
| TESTING_MOCK_FILES              | false         | Whether or not to mock existing game files during testing                       | true, false     |
| TESTING_IN_MEMORY_DB            | false         | Whether or not to use fake in-memory database during testing (only with sqlite) | true, false     |
| TESTING_RAWG_API_DISABLED       | false         | Whether or not                                                                  |
