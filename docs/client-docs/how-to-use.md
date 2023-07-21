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

To start playing a game you've downloaded, follow these steps to install it. This process makes it easier for you.

Game installation has two main parts:

### Extracting the Game

By default, GameVault games are contained in some kind of archive format. You need to extract them.

After the download is complete, find the "Extract" button. Clicking it will extract the game into a subfolder called `Extracted` within the game's Download Directory.

A progress bar shows the extraction progress and estimated remaining time. Larger or higher-quality compressed games may take longer to extract.

If there are extraction errors, you are able to retry the extraction unless you deleted the game archive. Error details are displayed in the user interface. If you have repeated extraction errors for the same game, contact your GameVault server administrators to check the integrity of those games.

:::tip Auto-Extract
To make extraction easier, enable the auto-extract option in the settings. This will automatically extract completed downloads.
:::

### Installing the Game

There are two types of GameVault games: **Direct-Play** games and **Setup-Needed** Games.

Direct-Play games are ready to play out of the box, while Setup-Needed games require a setup before playing.

:::note What determines the game type?
The server automatically determines if a game is Direct-Play or Setup-Needed, but errors can occur. Administrators can manually overwrite the detected game type by including `(DP)` or `(SN)` in the file name.
:::

#### Installing Direct-Play Games

For Direct-Play games, GameVault provides a very simple installation process. You don't need to select an executable file. Just press the "Install" button. GameVault will automatically move all the extracted game content to your game's installation directory. The progress bar shows the installation progress and estimated remaining time.

Once the installation is complete, your game is ready to be played. Just select the appropriate .exe file in the Installations tab and click Play.
:::note No Game Executable
If you don't see a game executable here but instead see a setup executable, contact your server administrators to manually set that game as Setup-Needed.
:::

Once you confirmed the game works, you can delete the games corresponding Downloads folder using the trash icon or the "Clear all" option in the downloads tab.

#### Installing Setup-Needed Games

For games that require installation, GameVault will provide a dropdown menu to launch a setup executable file. Select the appropriate setup.exe file and press the "Install" button.

:::note No Setup Executable
If you don't see a setup executable here but instead see the game's executable, contact your server administrators to manually set that game as Direct-Play.
:::

During the setup process, **set the destination folder for your game files as your game's Installation folder** (e.g., \<GameVault Root\>/GameVault/Installations/(74) Assassin's Creed Unity/). This is where the final game files and executable should be located.

Wait for the setup to finish. Your game now should be ready to be played. Just select the appropriate .exe file in the Installations tab and click Play.

Once you confirmed the game works, you can delete the games corresponding Downloads folder using the trash icon or the "Clear all" option in the downloads tab.

:::info Why does GameVault not fully automate the setup procedure?
Different installers work differently, making it impossible to fully automate every type. However, all installers have one thing in common: the ability to choose the installation path for the game. GameVault guides you through the process, but you still need to manually select the installation path.
:::

## Playing a Game

Launching a game on GameVault is simple. Once your game is installed and ready to go, it will appear in the "Installed Games" tab. If GameVault didn't correctly predict the correct executable to launch automatically, you can select it from the dropdown menu and click the "Play" button to start the game.

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
