---
sidebar_position: 4
title: "Cloud Save Management with GameVault+"
---

GameVault+ provides **secure, cross-device savefile synchronization** to your GameVault Server, ensuring your game progress is always remembered and accessible. Whether you're switching computers, reinstalling a game, or taking a break, your latest saves are automatically preserved and ready whenever you are.

:::warning Server Setup Prerequisites
For savefile synchronization to work, your GameVault Server must have:

1. **Savefiles Feature Enabled**  
   Set `SAVEFILES_ENABLED` to `true` in your server configuration  
   [Configuration Details →](/docs/server-docs/configuration.md#savefiles)

2. **Dedicated Savefile Storage**  
    Configure a persistent volume for savefile storage  
    [Volume Setup Guide →](/docs/server-docs/configuration.md#volumes)
   :::

## How It Works

### 1. Automatic Save Download

When installing a game through GameVault, the **latest savefile version** is automatically downloaded and applied to your game installation without requiring any manual intervention. This ensures you always start with the most recent progress, no matter where or when you last played.

### 2. Play & Auto-Sync

After finishing your gaming session and exiting the game, GameVault takes over. It automatically detects updated savefiles, compresses and uploads it securely to your GameVault Server. This process happens seamlessly in the background, so you never have to worry about losing progress.

### 3. Multi-Device Access

Once your savefiles are synced, you can install the game on any other device and access the exact same save state. This allows you to continue your progress seamlessly, no matter which device you're using.
