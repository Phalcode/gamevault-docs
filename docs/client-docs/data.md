---
sidebar_position: 4
---

# Data Management

This page gives you an overview of how GameVault stores and manages its data.

When you install the app from the Microsoft Store, all the data it saves (except for the GameVault Root Folder for your Downloads and Installations) can be found under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\`. Alternatively, if you did not install the app from the Microsoft Store, you can find the data under: `%APPDATA%/GameVault`.

:::warning Don't modify unless you know what you're doing
Please be aware that manually altering this data may lead to unwanted issues in GameVault.
:::

## Image Cache

> Located under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\cache\images` or `%APPDATA%\GameVault\cache\images`

GameVault caches all loaded images locally for faster retrieval. They're kept in a specific subfolder with a format like "ParentID.ImageID," where the ParentID could represent the Game ID or User ID. This unique ImageID allows GameVault to detect when an image becomes outdated (e.g., when another user modifies a game's box art). When you request that image again, the cache is immediately updated.

### Image Cache Optimization

When you launch the GameVault Client, it performs an image optimization process. This process efficiently adjusts all cached images to match your screen size, leading to faster loading times and reduced storage usage.

## Offline Cache (Progresses)

> Located under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\cache\prgs` or `%APPDATA%\GameVault\cache\prgs`

Even when your application or your GameVault Server is offline, as long as the GameVault Client is running in the background, it continues to track your playtime. This data is sent to the server the next time you or the server is online.

## Offline Cache (Game Metadata)

> Located under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\cache\local` or `%APPDATA%\GameVault\cache\local`

After downloading a game, GameVault stores the game's metadata locally **once**. This allows you to see all game details even when your application or the server is offline. There is currently no way to refresh the cached metadata of a game.

## Settings

> Located under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\config\user` or `%APPDATA%\GameVault\config\user`

All GameVault settings are stored and retrieved in a user file. Sensitive data is encrypted for security.

## Embedded Browser Settings

> Located under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\config\web` or `%APPDATA%\GameVault\config\web`

GameVault's embedded browser settings are stored in the web folder. The embedded browser is used for the GameVault+ login functionality. You can delete this folder if you wish to clear all browser data. This will also log you out of your Phalcode account.

## Ignore List

> Located under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\cache\ignorelist` or `%APPDATA%\GameVault\cache\ignorelist`

The Ignore List includes commonly encountered false positives of sidecar-executables, such as `setup.exe`, `UnityCrashHandler.exe` or `uninstall.exe`. This list is retrieved from the server if not already present. It's used by the playtime tracker for instance to avoid counting `setup.exe` as playtime. Furthermore, these executables are hidden in the selection list within the installation tab, ensuring that only game-related executables are shown. You can also edit the Ignore List locally by opening the "ignorelist" file and adding your own entries to be excluded.

## Crash Logs

> Located under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\errorlog` or `%APPDATA%\GameVault\errorlog`

The Crash Logs are generated when an unhandled error occurs in GameVault. They can be used to debug issues or to provide support.

## Themes

> Located under: `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\themes` or `%APPDATA%\GameVault\themes`

Here you can import your custom themes. To learn more about custom themes, refer to [Custom Themes Guide](../gamevault-plus/themes.md#custom-themes).
