---
sidebar_position: 2
---

# File and Folder Structure

If you want to set up a GameVault Server, you need to pay attention to the file and folder structure.
The volume mapped to the `/files` directory must contain your games. These games must be named correctly and should either be archived in one of the supported archive formats listed below or be a single-file executable as described below to be accurately detected by GameVault.

## Supported Archive Formats

GameVault supports all file formats 7zip 23.01 (2023-06-20) does:

`.7z` `.xz` `.bz2` `.gz` `.tar` `.zip` `.wim` `.ar` `.arj` `.cab` `.chm` `.cpio` `.cramfs` `.dmg` `.ext` `.fat` `.gpt` `.hfs` `.ihex` `.iso` `.lzh` `.lzma` `.mbr` `.msi` `.nsis` `.ntfs` `.qcow2` `.rar` `.rpm` `.squashfs` `.udf` `.uefi` `.vdi` `.vhd` `.vmdk` `.wim` `.xar` `.z`

### Single File Executable

We recommend [archiving games](#supported-archive-formats) to save storage and bandwidth. However, if the game is just a single file executable, like `setup_game.exe` or `setup_game.sh`, you can import it into GameVault without archiving. Just be sure to rename it as described below for compatibility with GameVault (e.g. `Minecraft (v1.12) (2011).exe`). By default, GameVault autodetects the [game type](game-types.md) of single-file executables as a setup-type game. In rare cases, games can be single portable executables without additional setup. If that's the case, make sure to mark the games as "Portable" using the type override.

Supported Executables:  
`.exe` `.sh`

:::note Downloading single-file executables
Single-file executables are packed into a `.tar` file (no compression) and cached in the server's `/tmp` folder on-the-fly when users download them, to make them compatible with the GameVault Client. The cached files are reused until deleted by a Server Restart.
:::

## Naming Convention for Games

The name of each game file must follow this format:

`Gamename (vVersion) (EA) (Type) (ReleaseYear).zip`

Note that the parentheses must be included, and the naming convention is **case sensitive**.

Here's an explanation of each part of the naming convention:

| Part            | Description                                                        | Example Value(s)        |
| --------------- | ------------------------------------------------------------------ | ----------------------- |
| **Gamename**    | The name of the game **REQUIRED**                                  | `Far Cry 6`, `HITMAN 3` |
| **Version**     | An optional version tag that must begin with a lowercase `v`       | `(v1.0)`, `(v1.224)`    |
| **EA**          | An optional tag that indicates whether the game is in Early Access | `(EA)`                  |
| **Game Type**   | Override for the games type. [See here.](game-types.md)            | `(W_P)`, `(W_S)`, `...` |
| **ReleaseYear** | The year of the game's release, for accurate detection             | `(2021)`, `(2019)`      |

Here's an example of a file that follows this convention:

`Far Cry 6 (v1.5.0) (2021).zip`

By following this naming convention and using the common values listed in the table above, you can ensure that your games are detected correctly by GameVault.

:::caution Illegal Filenames and Characters

- File names must not contain the following characters: `/`, `<`, `>`, `:`, `"`, `\`, `|`, `?`, and `*`. Replace these problematic characters with appropriate ones to ensure compatibility across all systems.
- Avoid ending file names with spaces or dots.
- Do not use reserved file names such as `CON`, `PRN`, `AUX`, `NUL`, `COM(1-9)`, `LPT(1-9)`, etc.
- Avoid using multiple chained extensions like `.tar.gz` or `.tar.bz2`. Instead, use only the last extension like `.gz` or `.bz2`.
  :::

### Other Examples

Here are some other valid examples of game names that follow the naming convention:

- `Star Wars Jedi - Fallen Order(v1.0.10.0) (2019).zip`
- `HITMAN 3 (v3.10.1) (2021).7z`
- `The Wandering Village (v0.1.32) (EA) (2022).zip`
- `Saints Row (W_S) (2022).zip`
- `Stray (2022).7z`
- `Captain of Industry (v0.4.12b) (EA) (2022).zip`
- `Minecraft (2011).exe`
