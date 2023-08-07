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

Your downloaded zip file will be saved in `<GameVault Root>/GameVault/Downloads/(74) Assassin's Creed Unity/`. The `<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/` folder should be empty for now.

## Installing Games

After downloading the game, you will need to **install it manually** before you can play it.

:::info Why does GameVault not install the game automatically?
GameVault is designed to work with all kinds of games. Some Games come with Installers, some come ready to play out of the box, some games are archived with a very good compression and need to get uncompressed before. Automating these processes would prove quite challenging. However, all these methods share a common feature: you can decide where your final game installation should reside - And GameVault takes advantage of this functionality.
:::

Here are the steps to install the game:

1. All GameVault Games are compressed by default. You need to extract them using a tool like [7Zip](https://www.7-zip.org/).
2. Now install your game into the appropriate folder in the library:

   - `<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/` - This is where the final game files and .exe should be located.

3. You will need to choose an .exe file in the Installations tab before you can play the game. Then GameVault will enable the Play button in the Installations tab.

4. Feel free to delete `<GameVault Root>/GameVault/Downloads/(74) Assassin's Creed Unity/` after you installed the game. You can do it manually or by pressing the Delete-Icon / Clear All in your Downloads Tab.

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
