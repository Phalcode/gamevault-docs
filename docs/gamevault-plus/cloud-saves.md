---
sidebar_position: 4
title: "Cloud Saves"
---

GameVault+ provides **cross-device savefile synchronization**, making sure your progress stays protected and ready to go, no matter where or when you play. By using GameVault Server, your saves are backed up automatically, so you can switch computers or reinstall a game without losing any progress.

## Quick Setup

1. **Enable Cloud Saves**

   - In your GameVault Server settings, set `SAVEFILES_ENABLED` to `true`.  
     [See how →](/docs/server-docs/configuration.md#savefiles)

   - In your GameVault Client settings -> GameVault+ -> Features -> Cloud Saves, enable the feature for your client.

2. **Configure a Storage Volume**
   - Make sure your server has a **persistent volume** to hold savefiles.  
     [Learn more →](/docs/server-docs/configuration.md#volumes)

That’s it for basic setup! Once these are in place, Cloud Saves are up and running.

## How It Works

GameVault integrates with [Ludusavi](https://github.com/mtkennerly/ludusavi), an open-source savefile manager that supports a wide variety of games. If a particular game supports cloud saves, you’ll see **“Cloud saves”** on its Game page, right above your personal progress summary.

:::warning DISCLAIMER: Reliability of the Indicator
The **"Cloud Saves" indicator** is **not** guaranteed to be **100% accurate** due to the nature of DRM-free games. It simply checks whether the game name **closely matches** an entry in the **[Ludusavi manifest](https://github.com/mtkennerly/ludusavi-manifest)**. You can see what game it matched to by hovering over the up- or download buttons. In some cases, even if it does match, your specific installation might not be supported. This is **just an indicator**, and **false positives or negatives** can occur. The only way to be sure is to **test it yourself**. As a rule of thumb, if a game is **popular and well-documented on [PCGamingWiki](https://www.pcgamingwiki.com/)** - and therefore in the [Ludusavi manifest](https://github.com/mtkennerly/ludusavi-manifest) - it is **more likely to be supported**.
:::

### Automatic Savefile Download

When you install a game through GameVault, your **latest savefile version** is automatically downloaded and placed in your new installation. There’s no need for manual copying — you can jump right back in where you left off.

### Play & Auto-Sync

Once you’ve played for at least a minute and then exit the game, GameVault automatically checks for updated savefiles, compresses them, and uploads them to your GameVault Server. This process happens behind the scenes, so you don’t have to worry about manually backing up your progress.

### Cross-Device Sync

With your savefiles stored in the cloud, you can install the same game on another device and immediately access the same save state. Just launch the game, and GameVault will seamlessly load your existing progress. Whether you’re on a second PC or coming back after a fresh install, your saves will always be there.

:::warning Limitations of Ludusavi in Cross-Device Scenarios
Ludusavi may not properly restore save files in certin cross-device cases:

- Save files are stored within the **Game Installation Directory**, and your **Game Installation Directory differs** across your devices.
- Save files are stored within the **Windows user profile**, and the **Windows username differs** across your devices.

This is due to Ludusavi storing absolute paths instead of using dynamic placeholders (e.g., %USERPROFILE% or %INSTALLDIR%).

[Learn more](https://github.com/mtkennerly/ludusavi/issues/464)  
:::

### Manual Sync

Sometimes you may need to sync savefiles manually, such as when you’ve been offline and only just reconnected to the internet. You can upload your savefiles by using the **Upload Savefiles** button on the Game Page.

You can also download savefiles manually if needed — for instance, if you accidentally deleted your local saves. In such cases, you can retrieve them using the **Download Savefiles** button on the Game Page.
