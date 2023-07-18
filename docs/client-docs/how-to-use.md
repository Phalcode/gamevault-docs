---
sidebar_position: 2
---

# How to Use

## File & Folder Structure

:::note Example
Lets say you installed GameVault freshly and configured your Root folder path to `D:/` because your D Drive is larger
:::

GameVault will now generate its folder structure. When everything is done your file system will look like this:

- `D:/GameVault/` - Root Folder
  - `D:/GameVault/Downloads/` - This folder is where your downloads will be saved. For each downloaded game, GameVault generates a new folder in this directory.
  - `D:/GameVault/Installations/` - This folder is where your installed games belong. For each downloaded game, GameVault generates a new folder in this directory.

## Downloading Games

Let's say you found the game `Assassin's Creed Unity (Game ID: 74)` in the Library tab and chose to download it.

As stated above, GameVault generates two folders to store the game files and uses the game ID in the name to identify them:

- `<GameVault Root>/GameVault/Downloads/(74) Assassin's Creed Unity/`
- `<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/`
  
Your downloaded game archive will be saved in `<GameVault Root>/GameVault/Downloads/(74) Assassin's Creed Unity/`. The `<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/` folder should be empty for now.

## Game Installation Process

To start playing a game after downloading it, you need to follow the installation process. This process is designed to make it easier for you by simplifying most of the steps.

Game installation involves two main parts:

### 1. Extracting the Game

By default, GameVault games are compressed, so you need to extract them. Once the download is complete, you'll see an "Extract" button. Clicking this button will extract the game into a subfolder called "Extracted" within the game's Download Directory. A progress bar will show you the extraction progress and estimate the remaining time. Keep in mind that larger or higher-quality compressed games may take longer to extract and use more system resources. If any extraction errors occur, the process will stop with a retry option. The user interface will display the error details. If you encounter repeated extraction errors, it's recommended to contact your GameVault server administrators to check the integrity of the game archive.

:::tip
To make the extraction process easier for each game, you can enable the auto-extract option in the settings. This feature automatically extracts completed downloads.
:::

### 2. Installing the Game

Once the game is extracted, it's important to understand the two types of games on GameVault: Direct-Play games and games that require installation.

#### Direct-Play Games

Direct-Play games come ready to play out of the box!

For Direct-Play games, GameVault provides a simple installation process. You don't need to select an executable file. Just press the available "Install" button now. GameVault will automatically move all the extracted game content to your game's installation directory. The progress bar will show the installation progress and estimate the remaining time. Once the installation is complete, your game is ready to be played.

:::note
The uploader determines if a game is Direct Play by including "(DP)" in the file name based on the game's structure. If this attribute is not specified, the game requires installation using a setup.
:::

#### Games Requiring Installation

Follow these steps for games that require installation:

1. GameVault will offer you to launch a setup executable file via a Dropdown menu.

2. Make sure to select the appropriate setup.exe file and press the now available "Install" button.

3. During the installation process, set the destination folder for your game files to be your games Installation folder. For example `<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/`. This is where the final game files and executable should be located.

4. Wait for the installation to finish. Once you've confirmed a successful installation, you can delete the corresponding game folder by using the trash icon or the "Clear all" option in the downloads tab.

:::info Why does GameVault fully automate the setup procedure?

Different installers work in different ways, so it's not possible to fully automate every type of installer. However, all installers have one thing in common: the ability to choose the installation path for the game. GameVault takes advantage of this by guiding you through the process, but you still need to manually select the installation path.
:::

## Playing a Game

Launching a game on GameVault is simple. Once your game is installed and ready to go, it will appear in the "Installed Games" tab. If it didn't correctly select the correct executable automatically, you can select the appropriate executable from the dropdown menu and click the "Play" button to start the game.

## Tracking Your Game Progress

Once GameVault is launched, it automatically activates a time-tracking daemon. This diligent daemon continuously monitors your game progress, specifically your playtime, and promptly sends this information to the server whenever any .exe file (except those on the ignore-list) is running within a folder located in your Installations directory `<GameVault Root>/Installations/\*`. Even if you play without an internet connection, your playtime will still be tracked and updated on the server as soon as you regain connectivity.

In our context, the term "Progress" refers to a user's activity of playing a game. Each user can have a single progress entry per game.

The progress entry includes the completion state, which can be modified through the community tab, as well as the tracked playtime and some other additional information.

You have the ability to change the progress state or delete it using the community tab. Certain states also change automatically, such as transitioning from UNPLAYED to PLAYING when the game is launched.

:::caution
Please note that this Progress does not include your savegames. GameVault does not have the capability to synchronize or store your savegames. Therefore, it is advisable to create backups of your savegames before uninstalling any games.
:::

## Modifying Games

If you are unhappy with the Box-Art of a game on your server or if there are incorrect Metadata associated with a game, there is a straightforward solution.

If you have the `EDITOR` role or higher on your GameVault server, you can modify games by following these steps:

1. Navigate to the game's Detail Page.
2. Locate and click on the Pencil icon in the corner.
3. A popup will appear, where you can paste a URL for a different box-art image.
4. Additionally, there will be a manual search box for the RAWG database, allowing you to remap the game to the correct one on your own.

Please note that any changes made will affect all users on the server.

## Exiting or Relaunching the App

In order to maintain playtime tracking functionality, simply closing the launcher using the X-Button does not terminate the GameVault process. Instead, it minimizes the app to the system Tray. Therefore, if you truly wish to exit the application, be sure to right-click and select "Exit" from the context menu. The same principle applies when restarting the app. Only one GameVault window can be active at a time, so initiating another GameVault merely brings the minimized app to the forefront without actually restarting it.
