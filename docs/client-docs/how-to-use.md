---
sidebar_position: 2
---

# How to Use

## File & Folder Structure

:::note Example
Let's say you installed GameVault freshly and configured your Root folder path to `D:/` because your D Drive is larger.
:::

GameVault will now generate its folder structure. When everything is done, your file system will look like this:

- `D:/GameVault/` - Root Folder
  - `D:/GameVault/Downloads/` - This folder is where your downloads will be saved. For each downloaded game, GameVault generates a new folder in this directory.
  - `D:/GameVault/Installations/` - This folder is where your installed games belong. For each downloaded game, GameVault generates a new folder in this directory.

## Downloading Games

Let's say you found the game `Assassin's Creed Unity (Game ID: 74)` in the Library tab and chose to download it.

:::warning
Only download games from servers you fully trust! There's a potential risk of malware. If your antivirus alerts during the following process, abort any download and installation of the game, fully delete the downloaded data, and warn your server admins to address the malware promptly.
:::

As stated above, GameVault generates two folders to store the game files and uses the game ID in the name to identify them:

- `<GameVault Root>/GameVault/Downloads/(74) Assassin's Creed Unity/`
- `<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/`

Your downloaded game archive will be saved in `<GameVault Root>/GameVault/Downloads/(74) Assassin's Creed Unity/`. The `<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/` folder should be empty for now.

To start playing a game you've downloaded, follow these steps to install it. This process makes it easier for you.

Game installation has two main parts:

### 1. Extracting the Game

GameVault games are [always served in some kind of archive format](../server-docs/structure.md). So you will need to extract them.

After the download is complete, locate the `Extract` button. Clicking it will extract the game into a subfolder called `Extracted` within the game's Download Directory. A progress bar shows the extraction progress and estimated remaining time. Larger or extremely compressed games may take longer to extract.

If there are extraction errors, you can retry the extraction unless you deleted the game archive. Error details are displayed in the user interface. If you encounter repeated extraction errors for the same game, try to extract the game manually or contact your GameVault server administrators to check the integrity of those games.

### 2. Installing the Game

There are different types of GameVault games. [You can find more information about them here](../server-docs/game-types.md).

For now, we will focus on the general concept of Portable and Setup Games.

Portable games are ready to play out of the box, while Setup games require additional setup before playing.

:::note What determines the game type?
The server automatically tries to determine the game's type based on the content, but errors can occur. Administrators can manually overwrite the detected game type by including a [type override in the file name](../server-docs/structure.md).
:::

#### Installing Portable Games

For portable games, GameVault provides a very simple installation process. You don't need to select an executable file. Just press the `Install` button. GameVault will automatically move all the extracted game content to your game's installation directory. This should happen instantly.

Once the installation is complete, your game is ready to be played in the library. If necessary, select the appropriate executable file to launch in the Game Settings tab and click `Play`.

:::note No Game Executable
If you don't see a game executable here but instead see a setup executable, the game's type has incorrectly been set to a portable type on the server. Contact your server administrators to manually override that game's type to a setup type. Then, manually move the files inside your game's installation folder back into the game's download folder. Run the installer and manually select the now-empty game's installation folder as its destination.
:::

#### Installing Setup Games

For games that require installation, GameVault will provide a dropdown menu to launch a setup executable file. Select the appropriate setup.exe file and press the `Install` button.

:::note No Setup Executable
If you don't see a setup executable here but instead see the game's executable, it may have incorrectly been set to a setup type on the server. Contact your server administrators to manually override that game's type to a portable type. Then, manually move the files inside the game downloads `Extracted/` folder to the game's corresponding installation folder, and you should be ready to play.
:::

During the external setup process **it is crucial to set the destination folder for your game files to your game's Installation folder** (e.g., `<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/`). This is where the final game files and executable should be located. If you don't set the destination, GameVault will have no idea where to look for your game files, and the game won't be playable. If you missed setting the destination folder or set it wrongly, uninstall the game from your system and retry this step.

Once the installation is complete, your game is ready to be played. Just select the appropriate .exe file to launch in the Installations tab and click `Play`.

:::info Why does GameVault not fully automate the setup procedure?
Different external installers and setups work very differently, making it nearly impossible to fully automate every type. However, all installers have one thing in common: the ability to choose the installation path for the game. GameVault guides you through the process, but you still need to manually select the installation path and click through the installer.
:::

#### Clearing Remains

Once you have fully confirmed that a game works, you are free to delete the game's corresponding Download using the trash icon in the downloads tab.

## Playing a Game

Launching a game on GameVault is simple. Once your game is installed and ready to go, it will appear in the "Installed Games" tab. If GameVault didn't correctly predict the correct executable to launch automatically, you can change it in the game's settings and click the `Play` button to start the game.

## Tracking Your Game Progress

Once GameVault is launched, it automatically activates a time-tracking daemon. This diligent daemon continuously monitors your game progress, specifically your playtime, and promptly sends this information to the server whenever any .exe file (except those on the ignore-list) is running within a folder located in your Installations directory `<GameVault Root>/Installations/*`. Even if you play without an internet connection, your playtime will still be tracked and updated on the server as soon as you regain connectivity.

In our context, the term "Progress" refers to a user's activity of playing a game. Each user can have a single progress entry per game.

The progress entry includes the completion state, which can be modified through the community tab, as well as the tracked playtime and some other additional information.

You have the ability to change the progress state or delete it using the community tab. Certain states also change automatically, such as transitioning from UNPLAYED to PLAYING when the game is launched.

:::warning
Please note that this Progress does not include your savegames. GameVault does not (yet 😉) have the capability to synchronize or store your savegames. Therefore, it is advisable to create backups of your savegames before uninstalling any games.
:::

## Modifying Games

If you are unhappy with the Box Art or Background Image of a game on your server or if there are incorrect Metadata associated with a game, there is a straightforward solution.

If you have the `EDITOR` role or higher on your GameVault server, you can modify games by following these steps:

Open the game settings by clicking on the settings icon, either in the top-right corner of the box art image or on the game's detail page. A popup will appear.

- Under **Edit Images**, you can select/paste/drop an image or paste a URL for different box art or background image.
- Under **Metadata**, you can remap/unmap incorrectly associated metadata for each provider.
- Under **Custom Metadata**, you can manually overwrite the Metadata of the game.

Please note that any changes made will affect all users on the server.

## Modifying Users

If you want to change the data, profile picture, or background image of your User:

Click your User Icon on the top left corner, then locate and click on the Settings Icon in the top right corner, and a popup will appear.

- Under **Edit Images**, you can select/paste/drop an image or paste a URL for different avatar or background image.
- Under **Edit Details**, you can change the data of your user.

If you have the `ADMIN` role or higher on your GameVault server, you can do the same for all other user profiles in the Admin Dashboard.

## Exiting or Relaunching the App

In order to maintain playtime tracking functionality, simply closing the launcher using the X-Button does not terminate the GameVault process. Instead, it minimizes the app to the system Tray. Therefore, if you truly wish to exit the application, be sure to right-click and select "Exit" from the context menu. The same principle applies when restarting the app. Only one GameVault window can be active at a time, so initiating another GameVault merely brings the minimized app to the forefront without actually restarting it.
