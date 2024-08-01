---
title: Enriching your Games with Metadata
---

Nobody wants to see blank placeholders in their library. We want those games enriched with some juicy metadata.

Since v13 GameVault supports a vast plugin framework that supports all kinds of metadata providers and even multiple ones at the same time in combination. In the following pages you will learn how to set up a metadata provider and get going. But first lets talk about the basics.

## How Metadata Enrichment in GameVault works

The GameVault Server brings a Metadate service, that allows various Metadata Provider Plugins to register onto. Each provider registers with a numerical priority value. the higher the priority the more important the metadata is treated.

When indexing the games, GameVault automatically tries to find metadata for the new Games and games with outdated metadata. It uses a standard interface search method that finds results on the metadata provider (often based on Game Title and release Year) and tries to find the best match of the list using a probability index that gets calculated using an NLP Levenshtein algorithm and the release-year-driftoff. the further away the title and release date is, the more unprobable is the match. For each Game File only one Game can me mapped per Metadata Provider. If multiple Providers were used gamevault applies the metadata by priority. so if provider A provides no data for tags, and provider B does does it will merge the data of Provider A with Provider Bs so most metadata fields are filled.

## Remapping a Game

It is possible to search the registered Metadata Providers to find a better matching game and remap the current match to it.

## Developing a new Metadata Provider

To build an integration for a new Metadata provider you need to write a GameVault Plugin. See [Plugins]() to see how that works.

Then you need to build a NestJS service that implements the abstract.metadata-provider.interface.ts and implement your own configuration variables.

You can then create a github repository, tag it with the tag `gamevault-backend-plugin` to make it findable. After that you can document your provider in this documentation with a notice that it is community maintained.

## What Providers are supported?

Click on any of the entries below to get to their dedicated Page.

### Built-In:

- IGDB (via Client-ID and Client Secret)

### Community Made:

- Not yet available. Be the first one!