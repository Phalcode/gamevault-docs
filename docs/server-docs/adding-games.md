---
sidebar_position: 3
sidebar_title: "Adding Games"
---

# Adding Games to GameVault

If you wish to add games to your server but are struggling with unorganized files, varying file formats, and compressed files, you have come to the right place. In this chapter, you will learn the correct process to add games to your GameVault server.

## Before You Begin

Please read the [File and Folder Structure](structure.md) chapter first.

Adding games to your server is a manual process that demands effort and expertise. However, it is worth the effort. To execute the task accurately, follow the steps outlined below for each game. With practice, you will become more proficient and adept at performing these steps with ease.

## Step 1: Preparing

Suppose you have obtained a DRM-free copy of "Crawl," and it is located in your file system as follows:

- Crawl/
  - setup.bin
  - setup.exe

:::note
This is not a real-world example.
:::

If the game files are already compressed in a format that GameVault can understand, such as "Crawl.zip", you can skip the next step. However, if you want to maximize disk space and repack the files, you can do that. Datahoarders, for example, rely on every bit and byte on their disks and tend to repack everything to the maximum compression available.

## Step 2: Compression

To make your game files compatible with GameVault, you need to archive them. We recommend using [7Zip](https://www.7-zip.org/) for this. There are different approaches to this.

:::tip single-file executables
If the game you're about to add only consists of a single executable file such as `setup_game.exe` or `setup_game.sh`, you can choose to skip this stage and proceed with [naming it](#step-3-naming-the-archive). See [here](structure#single-file-executable) for more details.
:::

### Method 1: The Fast Way

The fastest way to compress your game files into a .7z archive is by copying them without compression, which takes little to no time or effort. However, the resulting archive will be as large as the original folder.

```bash
7z a -mx=0 -ms=off game.7z /path/to/game/folder/Crawl/*
```

This command uses the following options:

- `a`: Add files to the archive
- `-mx=0`: Sets the compression level to 0
- `-ms=off`: Turns off solid block compression

### Method 2: The Hardcore Way

To achieve the smallest possible archive size, use the maximum settings of 7zip. The resulting archive may or may not be much smaller than before, but it will definitely be as small as possible. However, this process could take a long time, depending on your hardware, and is very resource-intensive.

```bash
7z a -mx=9 -mfb=64 -md=32m -ms=on game.7z /path/to/game/folder/Crawl/*
```

This command uses the following options:

- `a`: Add files to the archive
- `-mx=9`: Use the maximum compression level
- `-mfb=64`: Set the number of fast bytes to 64
- `-md=32m`: Set the dictionary size to 32MB
- `-ms=on`: Enable solid block compression

### Method 3: The Balanced Way

If you are not happy with either method, you can use the preselected options of 7zip to compress the files as effectively and balanced as possible:

```bash
7z a game.7z /path/to/game/folder/Crawl/*
```

## Step 3: Naming the Archive

Before naming the archive, take a moment to research the game you're about to add. Ask yourself questions or use a search engine to answer  the following questions:

- "What version is the game?"
- "What year was the game released?"
- "Is the game still in early access?"

Once you have gathered all the necessary information, you can name the archive using the [GameVault Naming Structure](structure.md).

In our fictitious example we have a copy of Crawl Version 1.0.1 released in 2014, so we named the archive:

```bash
Crawl (v1.0.1) (2014).7z
```

### Adding the same game multiple times

If you wish to add the same game multiple times to your GameVault server for any specific reason, it is important to ensure that you rename it slightly differently. This is to prevent the indexer from detecting it as a duplicate entry. We recommend using square brackets `[]` as your personal discriminator for these games. Avoid using regular parentheses `()` as they will be removed by the title extraction regex. It also does not matter if the files are in the same sub-folder or in different ones.

By using this approach, the indexer will treat these two games as separate entities.

In case the Auto-Matching feature does not work accurately for these games, you have the option to manually remap them in the client if you have the Role Editor or higher privileges.

**Here's a good example:**

- Game 1: `Minecraft [Tekkit Modpack] (v1.7.10) (2011).zip`
- Game 2: `Minecraft [Hexxit Modpack] (v1.13.2) (2011).zip`

:::info
Will result in two seperate games
:::

**And here's a bad example:**

- Game 1: `Minecraft (v1.7.10) (2011).zip`
- Game 2: `Minecraft (v1.13.2) (2011).zip`

:::danger
Will result in a single game that gets overwritten!
:::

## Step 4: Deploy 🥳

Once you have named the archive, place it into the folder on your host system that is mounted to GameVault's files folder (by default `/files`). Once the archive is in place, GameVault will automatically index the game, enrich it with metadata, and save it in your database.

:::tip Uploading via API
Starting with version v16.3.0, administrators can also upload game files directly through the `POST /api/games` endpoint. The server must have **write permissions** on the files volume (`VOLUMES_FILES`) for this to work.
:::

Congratulations! You have successfully added a game to your GameVault server. Repeat the process for any additional games you want to add.
