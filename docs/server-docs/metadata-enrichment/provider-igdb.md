# Provider: IGDB

## Overview

[The Internet Games Database (IGDB)](https://igdb.com) is one of the most popular databases for detailed video game information run by [twitch.tv](https://twitch.tv). By integrating IGDB with GameVault, users get accurate and up-to-date game data. We're pleased to partner with IGDB to provide the best game information to our users.

## Setup

1. [Register for an IGDB API Key by creating a Developer Application on dev.twitch.tv](https://api-docs.igdb.com/#account-creation)
2. Go to your [developer dashboard](https://dev.twitch.tv/console/apps) and copy the Client ID and Client Secret of your app
3. Put them in the `METADATA_IGDB_CLIENT_ID` and `METADATA_IGDB_CLIENT_SECRET` settings

## Configurations

| Property                      | Description                            | Default | Possible Values    |
| ----------------------------- | -------------------------------------- | ------- | ------------------ |
| `METADATA_IGDB_ENABLED`       | Enables / Disables the Provider        | `true`  | `true`, `false`    |
| `METADATA_IGDB_PRIORITY`      | Priority of the Provider               | `50`    | Any Integer        |
| `METADATA_IGDB_CLIENT_ID`     | Your developer.twitch.tv Client ID     | -       | Your Client-ID     |
| `METADATA_IGDB_CLIENT_SECRET` | Your developer.twitch.tv Client Secret | -       | Your Client-Secret |

## Mappings

### Fields

| GameVault Field     | IGDB API Field(s)                      | Notes                                                                                                |
| ------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `provider_slug`     | "igdb"                                 | hardcoded.                                                                                           |
| `age_rating`        | `age_ratings`                          | See [here](#age-rating) for details.                                                                 |
| `provider_data_id`  | `id`                                   |                                                                                                      |
| `provider_data_url` | `url`                                  |                                                                                                      |
| `title`             | `name`                                 |                                                                                                      |
| `release_date`      | `first_release_date`                   |                                                                                                      |
| `description`       | `game.summary` and/or `game.storyline` | If both are available, both get used, else any available will be mapped                              |
| `rating`            | `total_rating`                         |                                                                                                      |
| `early_access`      | `status`                               | True if the Game is either in status `alpha`, `beta` or `early_access`                               |
| `developers`        | `involved_companies`                   | Filtered by `involved_company.developer === true`                                                    |
| `publishers`        | `involved_companies`                   | Filtered by `involved_company.publisher === true`                                                    |
| `genres`            | `genres`                               |                                                                                                      |
| `tags`              | `keywords` and `themes`                |                                                                                                      |
| `cover`             | `cover`                                | Using the highest possible cover resolution via `t_cover_big_2x`                                     |
| `background`        | `artworks[0]` or `screenshots[0]`      | Only first artwork/screenshot is mapped. Using the highest possible 16:9 resolution via `t_1080p_2x` |
| `url_websites`      | `websites.url`                         |                                                                                                      |
| `url_screenshots`   | `screenshots` and `artworks`           | Using the highest possible 16:9 resolution via `t_1080p_2x`                                          |
| `url_trailers`      | `videos`                               | Only when video title includes the words "trailer", "teaser" or "intro"                              |
| `url_gameplays`     | `videos`                               | Only when video title includes the words "gameplay"                                                  |

### Age Rating

The table below shows how age ratings from GameVault and IGDB are matched. Ratings like "Not Yet Rated" are ignored. A game can have ratings from multiple systems. The IGDB integration calculates the average of all ratings, rounds it, and then saves it to GameVault.

| Age Rating System | Rating Name        | GameVault Minimum Age (Years) | IGDB Rating Enum Value |
| ----------------- | ------------------ | ----------------------------- | ---------------------- |
| **PEGI**          | Three              | 3                             | 1                      |
|                   | Seven              | 7                             | 2                      |
|                   | Twelve             | 12                            | 3                      |
|                   | Sixteen            | 16                            | 4                      |
|                   | Eighteen           | 18                            | 5                      |
| **ESRB**          | EC                 | 3                             | 7                      |
|                   | E                  | 6                             | 8                      |
|                   | E10                | 10                            | 9                      |
|                   | T                  | 13                            | 10                     |
|                   | M                  | 17                            | 11                     |
|                   | AO                 | 18                            | 12                     |
| **CERO**          | CERO_A             | 0                             | 13                     |
|                   | CERO_B             | 12                            | 14                     |
|                   | CERO_C             | 15                            | 15                     |
|                   | CERO_D             | 17                            | 16                     |
|                   | CERO_Z             | 18                            | 17                     |
| **USK**           | USK_0              | 0                             | 18                     |
|                   | USK_6              | 6                             | 19                     |
|                   | USK_12             | 12                            | 20                     |
|                   | USK_16             | 16                            | 21                     |
|                   | USK_18             | 18                            | 22                     |
| **GRAC**          | GRAC_ALL           | 0                             | 23                     |
|                   | GRAC_Twelve        | 12                            | 24                     |
|                   | GRAC_Fifteen       | 15                            | 25                     |
|                   | GRAC_Eighteen      | 18                            | 26                     |
| **CLASS_IND**     | CLASS_IND_L        | 0                             | 28                     |
|                   | CLASS_IND_Ten      | 10                            | 29                     |
|                   | CLASS_IND_Twelve   | 12                            | 30                     |
|                   | CLASS_IND_Fourteen | 14                            | 31                     |
|                   | CLASS_IND_Sixteen  | 16                            | 32                     |
|                   | CLASS_IND_Eighteen | 18                            | 33                     |
| **ACB**           | ACB_G              | 0                             | 34                     |
|                   | ACB_PG             | 8                             | 35                     |
|                   | ACB_M              | 15                            | 36                     |
|                   | ACB_MA15           | 15                            | 37                     |
|                   | ACB_R18            | 18                            | 38                     |
