---
sidebar_position: 4
---

# Storage, Cache & Offline Usage

This page gives you an overview of one of GameVault's hidden features: Caching and storing data.

When you install the app from the Microsoft Store, all the data it saves (except for the GameVault Root Folder for your Downloads and Installations) can be found in the following location: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\`. Alternatively, if you did not install the app from the Microsoft Store, you can find the data here: `%APPDATA%/GameVault`.

:::warning
Please be aware that manually altering this data may lead to unwanted issues in GameVault.
:::

## Image Cache

GameVault caches all loaded images locally for faster retrieval. They're kept in a specific subfolder with a format like "ParentID.ImageID," where the ParentID could represent the Game ID or User ID. This unique ImageID allows GameVault to detect when an image becomes outdated (e.g., when another user modifies a game's box art). When you request that image again, the cache is immediately updated.

## Image Optimization

In the Microsoft Store version of GameVault, when you open the app, it performs an image optimization process. This process efficiently adjusts images to match your screen size, leading to faster loading times and reduced storage usage.

## Offline Cache (Progress)

Even when you or your GameVault Server is offline, as long as the GameVault Client is running in the background, it continues to track your playtime. This data is sent to the server the next time you or the server is online.

## Offline Cache (Game Metadata)

After downloading a game, GameVault stores the game's metadata locally once. This allows you to see all game details even when you or the server is offline. There is currently no way to refresh the cached metadata of a game.

## Settings

All GameVault settings are stored and retrieved in a user file. Sensitive data is encrypted for security.

## Ignore List

The Ignore List includes commonly encountered false positives of sidecar-executables, such as `setup.exe`, `UnityCrashHandler.exe` or `uninstall.exe`. This list is retrieved from the server if not already present. It's used by the playtime tracker for instance to avoid counting `setup.exe` as playtime. Furthermore, these executables are hidden in the selection list within the installation tab, ensuring that only game-related executables are shown. You can also edit the Ignore List locally by opening the "ignorelist" file and adding your own entries to be excluded.
