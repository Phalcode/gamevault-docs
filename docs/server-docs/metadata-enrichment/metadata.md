---
title: Enriching your Games with Metadata
sidebar_position: 0.01
---

Research shows that nobody wants to see blank placeholder images and missing descriptions in their library. We want those games enriched with some **juicy metadata**.

GameVault supports a **vast plugin framework** that supports connecting to various metadata providers simultaneously. In the following sections, you'll learn how to set up a metadata provider and get started.

## Setting Up a Metadata Provider

**Click on any of the entries below to get to their dedicated page.**

### Built-In Metadata Providers

- [**IGDB (via Client-ID and Client-Secret)**](./provider-igdb.md)

### Community-Maintained Metadata Providers

- **Not yet available**, but you can [build the first one!](#developing-a-new-metadata-provider)

## How Metadata Enrichment in GameVault Works

The GameVault Server includes a metadata service that allows various Metadata Provider Plugins to register. Each provider registers with a numerical priority value - the higher the priority, the more important the metadata is treated.

After [indexing the games](../indexing), GameVault automatically searches for relevant metadata. It uses a standard interface search method to find games on the metadata provider (often based on Game Title and Release Year) and determines the best match using a probability index calculated with an NLP Levenshtein algorithm and the release-year-offset. The further away the title and release date, the less probable the match. For each game file, only one game can be mapped per metadata provider.

## Editing Metadata

To edit metadata, Users need to have the role `EDITOR` or higher. Data provided by users are always treated with **the highest priority**. Only one user-provided metadata object per game is allowed and it is the same for all users. This can be used to fill in missing data manually or change it.

## Remapping a Game

It is possible to search the registered Metadata Providers to find a better matching game and remap the current match to it.

## Unmapping a Game

It is possible to unmap a game from a Metadata Provider, which will disconnect the mapped metadata from the game.

## How GameVault Merges Metadata

GameVault always applies the metadata detached and by priority, by creating an **effective** metadata object `game.metadata`. We call this process "merging". It works as follows:

Let's say we have a game: "Grand Theft Auto: San Andreas" with two Metadata Providers and a user-provided edit.

| Provider | Priority | Title                         | Description                                        | Age Rating |
| -------- | -------- | ----------------------------- | -------------------------------------------------- | ---------- |
| STEAM    | 1        | Grand Theft Auto: San Andreas | All you had to do is to follow the damn train, CJ. | 18         |
| IGDB     | 2        | Grand Theft Auto: San Andreas | I'll have two number 9s, a number 9 large...       |            |
| USER     | ∞        | N/A                           | N/A                                                | 12         |

GameVault begins creating the "effective" metadata object by starting with the lowest priority provider and working its way up. In our case, the lowest priority provider is Steam with a priority of 1.

So the generated metadata object initially looks like this:

| Provider  | Title                         | Description                                        | Age Rating |
| --------- | ----------------------------- | -------------------------------------------------- | ---------- |
| GameVault | Grand Theft Auto: San Andreas | All you had to do is to follow the damn train, CJ. | 18         |

Next, the IGDB provider is used. As you can see, it has a different description, but the age rating is missing. GameVault will overwrite the description with the more important one. However, the missing age rating will be ignored, as some data from a lower priority provider is always preferred over having no data in a field. So the merged metadata object now looks like:

| Provider  | Title                         | Description                                  | Age Rating |
| --------- | ----------------------------- | -------------------------------------------- | ---------- |
| GameVault | Grand Theft Auto: San Andreas | I'll have two number 9s, a number 9 large... | 18         |

Finally, we get to the user-provided metadata. This one is special because the user always has the highest priority. So it will always be used. In our case, we want to let our underage kid play some San Andreas, so we overwrote the age rating to 12. Again, missing fields will be ignored.

So the merged metadata object now looks like:

| Provider  | Title                         | Description                                  | Age Rating |
| --------- | ----------------------------- | -------------------------------------------- | ---------- |
| GameVault | Grand Theft Auto: San Andreas | I'll have two number 9s, a number 9 large... | 12         |

This is the final result. The merge is done by the GameVault Server.

The server will trigger a new merge whenever a relevant metadata object is changed (e.g., Edit of Game Metadata, Recache, Remap, etc.).

## Developing a New Metadata Provider

To build a new integration for a metadata provider, you need to write a GameVault Backend Plugin. [Click here](../plugins.md) to understand how that works.

Then you will need to build a [NestJS service](https://docs.nestjs.com/providers#services) that implements the [abstract.metadata-provider.interface.ts](https://github.com/Phalcode/gamevault-backend/blob/master/src/modules/metadata/providers/abstract.metadata-provider.service.ts) and implement your own configuration environment variables if necessary. Make sure they fit in but do not conflict with any existing environment variables and are distinct enough. (For example, `PLUGIN_AUTHORNAME_PLUGINNAME_SETTING` like `PLUGIN_ALFAGUN74_IGDB_ENABLED`).

Last but not least, you can then create a GitHub repository and tag it with the tag `gamevault-backend-plugin` to make it findable. After that, you can also add your provider in this documentation with a notice that it is community maintained.
