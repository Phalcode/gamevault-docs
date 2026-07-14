---
sidebar_position: 4
title: "Cloud Saves"
---

GameVault+ supports cross-device savefile synchronization. Your GameVault server backs up saves automatically, so you can switch computers or reinstall a game without losing progress.

## Quick Setup

1. **Enable Cloud Saves**

   - In your GameVault Server settings, set `SAVEFILES_ENABLED` to `true`.  
     [See how →](/docs/server-docs/configuration.md#savefiles)

   - In your GameVault Client settings -> GameVault+ -> Features -> Cloud Saves, enable the feature for your client.

2. **Configure a Storage Volume**
   - Make sure your server has a **persistent volume** to hold savefiles.  
     [Learn more →](/docs/server-docs/configuration.md#volumes)

Once these settings are in place, Cloud Saves are ready to use.

## How It Works

GameVault integrates with [Ludusavi](https://github.com/mtkennerly/ludusavi), an open-source savefile manager. If a game supports cloud saves, you will see **"Cloud saves"** on its Game page above your personal progress summary. The indicator may take a second to load.

:::info Reliability of the Indicator
The **"Cloud Saves" indicator** is **not** guaranteed to be **100% accurate** due to the nature of DRM-free games. It simply checks whether the game name **closely matches** an entry in the **[Ludusavi manifest](https://github.com/mtkennerly/ludusavi-manifest)**. You can see what game it matched to by hovering over the up- or download buttons. In some cases, even if it does match, your specific installation might not be supported. This is **just an indicator**, and **false positives or negatives** can occur. The only way to be sure is to **test it yourself**. As a rule of thumb, if a game is **popular and well-documented on [PCGamingWiki](https://www.pcgamingwiki.com/)** - and therefore in the [Ludusavi manifest](https://github.com/mtkennerly/ludusavi-manifest) - it is **more likely to be supported**.
:::

### Automatic Savefile Download

When you install a game through GameVault, the latest savefile version is downloaded into the new installation automatically.

### Play & Auto-Sync

After you have played for at least a minute and then exit the game, GameVault checks for updated savefiles, compresses them, and uploads them to your GameVault server.

### Cross-Device Sync

If your savefiles are stored on the server, you can install the same game on another device and continue from the same save state.

:::info Cross-Device Limitations of Ludusavi
Ludusavi may not properly restore save files in certin cross-device cases:

- Save files are stored within the **Game Installation Directory**, and your **Game Installation Directory differs** across your devices.
- Save files are stored within the **Windows user profile**, and the **Windows username differs** across your devices.

This is due to Ludusavi storing absolute paths instead of using dynamic placeholders (e.g., %USERPROFILE% or %INSTALLDIR%). [Learn more...](https://github.com/mtkennerly/ludusavi/issues/464)  
:::

### Manual Sync

Sometimes manual sync is still useful, for example after playing offline. Use the **Upload Savefiles** button on the Game page to upload local saves.

If you need to restore local saves, use the **Download Savefiles** button on the Game page.
