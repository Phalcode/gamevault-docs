---
title: Cloud saves
description: Back up and restore save games through GameVault Server with Ludusavi.
sidebar_position: 5
---

GameVault+ supports cross-device savefile synchronization. Your GameVault server backs up saves automatically, so you can switch computers or reinstall a game without losing progress.

## Quick setup

1. Set `SAVEFILES_ENABLED` to `true` on the server; see
   [save files](/docs/server/configuration.md#savefiles).
2. Enable cloud saves in the client under **GameVault+ → Features → Cloud
   saves**.
3. Give the server a persistent volume for save files; see
   [volumes](/docs/server/configuration.md#volumes).

## How it works

GameVault uses [Ludusavi](https://github.com/mtkennerly/ludusavi) to find and
move save files. A game with save support shows **Cloud saves** on its page,
above your progress summary. The label takes a second to load.

:::info The indicator is a guess
GameVault compares the game name with the
[Ludusavi manifest](https://github.com/mtkennerly/ludusavi-manifest), so the
label can be wrong in both directions. Hover the upload or download button to see
which manifest entry matched. Test the feature once per game instead of trusting
the label. Popular games that are documented on
[PCGamingWiki](https://www.pcgamingwiki.com/) usually appear in the manifest.
:::

### Automatic savefile download

Installing a game downloads the newest save files into the new installation.

### Play and auto-sync

Play for at least a minute, then quit the game. GameVault compresses the save
files and uploads them to the server.

### Cross-device sync

With saves on the server, install the same game on another device and continue
where you stopped.

:::info Cross-device limits
Ludusavi may fail to restore saves when the paths differ between the two devices:

- saves inside the game installation folder, when that folder sits elsewhere on
  the other device;
- saves inside the Windows user profile, when the Windows user name differs.

Ludusavi stores absolute paths instead of placeholders such as `%USERPROFILE%`
or `%INSTALLDIR%`. See
[mtkennerly/ludusavi#464](https://github.com/mtkennerly/ludusavi/issues/464).
:::

### Manual sync

Manual sync helps after playing offline. **Upload savefiles** on the game page
sends the local saves; **Download savefiles** fetches them from the server.
