---
sidebar_position: 5
---

# Updating Games

## Applying an Update to a Game

To update a game, simply delete the existing game file and replace it with a new one in the files directory (by default `/files`).

You can freely modify the early access and version flags of your game. As long as the **path** or **the combination of title and release year** of the new file matches the old file, GameVault's indexer will recognize it as an update. The same game entity will be restored if needed and updated with the new file's information, while preserving any progress associated with the game.

### Example

Let's say you have a very outdated version of the game `Minecraft (EA) (v1.8b) (2011).zip` and you want to update it to the newest version, such as `Minecraft (v1.20.1) (2011).7z`:

1. Delete `Minecraft (EA) (v1.8b) (2011).zip`.

2. Insert `Minecraft (v1.20.1) (2011).7z`.

3. Wait for the automatic indexing process to detect and register the changes.

If you want to keep multiple versions of the same game, refer to the documentation on [adding the same game multiple times](adding-games.md#adding-the-same-game-multiple-times).

### Visual indicator in the client

Since version 1.17.0.0, the client can show the user if another version of the installed game is available.

![update available indicator](/img/docs/updating-games/update-available-indicator.png)

## Changing or Moving a Game

Changing or moving a game is also a breeze. As long as the **path** or **the combination of title and release year** of the moved or renamed file matches the old file, GameVault's indexer will recognize it as an update. The same game entity will be updated with the new file's information, while preserving any progress associated with the game.
