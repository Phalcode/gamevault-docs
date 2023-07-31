---
sidebar_position: 2.5
---

# Game Types

GameVault offers various **Types** of Games. The application will handle different kinds of games differently, for example during installation.

The Game Type is automatically detected by the server, but it can be manually overridden using the Type Tag from [GameVaults Naming Structure](structure.md).

Each game can only have one type tag. If it has multiple type tags only one of them gets used.

## List of currently supported Game Types

:::info
More game types may be added in the future (e.g., ROMS, Linux, Android, etc.)
You can request more game types [on our github](https://github.com/Phalcode/gamevault-backend/issues/new).
:::

### Windows

#### Portable (W_P)

Portable Windows games are game files that can be played immediately. No additional setup is necessary.

Example file structure:

- Butcher_Data/
- Butcher.exe

#### Setup (W_S)

For Windows Setup games, users must go through a setup process (e.g., "setup.exe") before playing the game.

Example file structure:

- data.bin
- data2.bin
- setup.exe

### Undetected

This is the default game type if the server cannot automatically determine the game type. Users will have to manually install the game into the game's installation folder.

Example file structure:

- data/
- setup.sh
