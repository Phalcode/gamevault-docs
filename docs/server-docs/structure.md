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
`.exe` `.sh` `.appimage`

:::note Downloading single-file executables
Single-file executables are packed into a `.tar` file (no compression) and cached in the server's `/tmp` folder on-the-fly when users download them, to make them compatible with the GameVault Client. The cached files are reused until deleted by a Server Restart.
:::

## Naming Convention for Games

The name of each game file must follow this format:

`Title (Version) (EarlyAccess) (GameType) (NoCache) (ReleaseYear).zip`

Note that the parentheses must be included, and the naming convention is **case sensitive**.

Here's an explanation of each part of the naming convention:

| Part            | Description                                                                                                                                                                                                              | Example Value(s)                                   | Required? |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- | --------- |
| **Title**       | The name of the game                                                                                                                                                                                                     | `Far Cry 6`, `HITMAN 3`                            | Yes       |
| **Version**     | An optional version tag that must begin with a lowercase `v`                                                                                                                                                             | `(v1.0)`, `(v1.224)` , N/A                         | No        |
| **EarlyAccess** | An optional tag that indicates whether the game is in Early Access                                                                                                                                                       | `(EA)`, N/A                                        | No        |
| **GameType**    | Override for the games type. [See here.](game-types.md)                                                                                                                                                                  | `(W_P)`, `(W_S)`, `(W_SW)`, `(L_P)`, `(L_SW)`, N/A | No        |
| **NoCache**     | An optional "NO CACHE"-flag that prevents metadata searches on external videogame databases. If you have multiple game versions, `(NC)` on any version path disables provider metadata updates for the whole game entry. | `(NC)`, N/A                                        | No        |
| **ReleaseYear** | The year of the game's release, for accurate detection                                                                                                                                                                   | `(2021)`, `(2019)`, N/A                            | No        |

Here's an example of a file that follows this convention:

`Far Cry 6 (v1.5.0) (2021).zip`

By following this naming convention and using the common values listed in the table above, you can ensure that your games are detected correctly by GameVault.

:::warning Illegal Filenames and Characters

- File names must not contain the following characters: `/`, `<`, `>`, `:`, `"`, `\`, `|`, `?`, and `*`. Replace these problematic characters with appropriate ones to ensure compatibility across all systems.
- Avoid ending file names with spaces or dots.
- Avoid using text within Round brackets such as `(GOTY)` in your file names, as GameVault will remove them. Round brackets are reserved for the different flags mentioned above. Use square brackets instead: `[GOTY]`
- Do not use reserved file names such as `CON`, `PRN`, `AUX`, `NUL`, `COM(1-9)`, `LPT(1-9)`, etc.
- Avoid using multiple chained extensions like `.tar.gz` or `.tar.bz2`. Instead, use only the last extension like `.gz` or `.bz2`.

:::

### Other Examples

Here are some other valid examples of game names that follow the naming convention:

- `Star Wars Jedi - Fallen Order(v1.0.10.0) (2019).zip`
- `HITMAN 3 (v3.10.1) (2021).7z`
- `The Wandering Village (v0.1.32) (EA) (2022).iso`
- `Saints Row (W_S) (2022).zip`
- `My personal IndieGame (v1.2.9) (NC) (2018).zip`
- `Stray (2022).7z`
- `Captain of Industry (v0.4.12b) (EA) (2022).gz`
- `Minecraft (2011).exe`
- `Steam Client (W_SW) (2024).zip`
- `Lutris (L_SW) (2023).tar.gz`

## Mounting Multiple Game Volumes

Modern games can be quite large, often requiring storage across multiple disks on the server side. GameVault, however, uses a single `/files` folder to access its games. How can you map multiple drives to your GameVault server while ensuring seamless operation?

### Using Docker

If you’re running GameVault in Docker, mounting additional volumes is straightforward. You can add extra volumes to the GameVault server configuration by pointing each mounted drive on the host side to a subfolder under `/files` on the container side. Here's an example:

```yaml
services:
  gamevault-backend:
    [...]
    volumes:
      - /mnt/disk1/games:/files
      - /mnt/disk2/games:/files/disk2
    [...]
```

In this setup:

- `/mnt/disk1/games` is mounted as the main `/files` directory.
- `/mnt/disk2/games` is mounted as a subfolder `/files/disk2`, allowing GameVault to access games stored on a second disk.

### Running Natively

For systems running GameVault natively without Docker, you can achieve similar results using symbolic links. These links enable the GameVault file watcher to locate games stored across different drives, all accessible within the designated `/files` folder.

To create a symbolic link:

1. Navigate to your configured `/files` directory:

   ```bash
   cd /files
   ```

2. Create a symbolic link for each additional drive:

   ```bash
   ln -s /mnt/disk2/games disk2
   ```

   This command creates a link named `disk2` within `/files` that points to `/mnt/disk2/games`.

With this setup, GameVault will scan and recognize games stored across multiple drives, maintaining a unified structure under the `/files` folder.
