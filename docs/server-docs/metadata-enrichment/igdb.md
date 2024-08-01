# IGDB

## Configurations

| Property                      | Description                            | Default | Possible Values    |
| ----------------------------- | -------------------------------------- | ------- | ------------------ |
| `METADATA_IGDB_ENABLED`       | Enables / Disables the Provider        | `true`  | `true`, `false`    |
| `METADATA_IGDB_PRIORITY`      | Priority of the Provider               | `50`    | Any Integer        |
| `METADATA_IGDB_CLIENT_ID`     | Your developer.twitch.tv Client ID     | -       | Your Client-ID     |
| `METADATA_IGDB_CLIENT_SECRET` | Your developer.twitch.tv Client Secret | -       | Your Client-Secret |

## Mappings

| GameVault Field     | IGDB API Field(s)                      | Notes                                                                                                |
| ------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `provider_slug`     | "igdb"                                 | hardcoded.                                                                                           |
| `provider_data_id`  | `id`                                   |                                                                                                      |
| `provider_data_url` | `url`                                  |                                                                                                      |
| `title`             | `name`                                 |                                                                                                      |
| `release_date`      | `first_release_date`                   |                                                                                                      |
| `description`       | `game.summary` and/or `game.storyline` | If both are available, both get used, else any available will be mapped                              |
| `rating`            | `total_rating`                         |                                                                                                      |
| `url_website`       | `websites[0].url`                      | Only the first website is mapped                                                                     |
| `early_access`      | `status`                               | True if the Game is either in status `alpha`, `beta` or `early_access`                               |
| `developers`        | `involved_companies`                   | Filtered by `involved_company.developer === true`                                                    |
| `publishers`        | `involved_companies`                   | Filtered by `involved_company.publisher === true`                                                    |
| `genres`            | `genres`                               |                                                                                                      |
| `tags`              | `keywords` and `themes`                |                                                                                                      |
| `screenshots`       | `screenshots` and `artworks`           | Using the highest possible 16:9 resolution via `t_1080p_2x`                                          |
| `cover`             | `cover`                                | Using the highest possible cover resolution via `t_cover_big_2x`                                     |
| `background`        | `artworks[0]` or `screenshots[0]`      | Only first artwork/screenshot is mapped. Using the highest possible 16:9 resolution via `t_1080p_2x` |
