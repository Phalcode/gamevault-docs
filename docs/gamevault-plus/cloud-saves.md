---
sidebar_position: 4
title: "Cloud Saves"
---

GameVault+ offers **secure, cross-device savefile synchronization** through your GameVault Server, ensuring your progress is always protected and readily available. Whether you’re switching computers, reinstalling a game, or taking a break, your most recent saves are automatically backed up and ready whenever you return.

:::warning Server Setup Prerequisites
To enable savefile synchronization, make sure your GameVault Server meets these requirements:

1. **Savefiles Feature Enabled**  
   Set `SAVEFILES_ENABLED` to `true` in your server configuration.  
   [Learn more →](/docs/server-docs/configuration.md#savefiles)

2. **Dedicated Savefile Storage**  
    Configure a persistent volume to store savefiles.  
    [Volume Setup Guide →](/docs/server-docs/configuration.md#volumes)
   :::

## How It Works

GameVault+ leverages [Ludusavi](https://github.com/mtkennerly/ludusavi), an open-source savefile manager that supports over 20,000 games. If a game supports cloud saves, you’ll see "Cloud saves" mentioned on its Game page, right above your personal progress summary.

### 1. Automatic Savefile Download

When you install a game through GameVault+, the **latest savefile version** is immediately downloaded and applied to your new game installation—no manual steps required. This ensures you always pick up right where you left off.

### 2. Play & Auto-Sync

After you exit the game, GameVault+ automatically detects any changes to your savefiles, compresses them, and securely uploads them to your GameVault Server. This background process is seamless, so you never have to worry about manually backing up your progress.

### 3. Multi-Device Access

Once your savefiles are in sync, you can install the same game on a different device and access the exact same save state. Just launch the game and your game progress will be automatically loaded. Whether you play on a second PC or come back after a fresh install, your progress will always be waiting for you.
