---
sidebar_position: 2
---

# How to Use

## File & Folder Structure

> Lets say you installed Crackpipe freshly and configured your Root folder path to `D:/` because your D Drive is larger

Crackpipe will now generate its folder structure. When everything is done your file system will look like this:

- `D:/Crackpipe/` - Root Folder
  - `D:/Crackpipe/Downloads/` - This folder is where your downloads will be saved. For each downloaded game, Crackpipe generates a new folder in this directory.
  - `D:/Crackpipe/Installations/` - This folder is where your installed games belong. For each downloaded game, Crackpipe generates a new folder in this directory.

## Downloading Games

Let's say you found the game `Assassin's Creed Unity (Game ID: 74)` in the Library tab and chose to download it.

As stated above, Crackpipe generates two folders to store the game files and uses the game ID in the name to identify them:

- `<Crackpipe Root>/Crackpipe/Downloads/(74) Assassin's Creed Unity/`
- `<Crackpipe Root>/Crackpipe/Installations/(74) Assassin's Creed Unity/`

Your downloaded zip file will be saved in `<Crackpipe Root>/Crackpipe/Downloads/(74) Assassin's Creed Unity/`. The `<Crackpipe Root>/Crackpipe/Installations/(74) Assassin's Creed Unity/` folder should be empty for now.

## Installing Games

After downloading the game, you will need to **install it manually** before you can play it.

> **Why does Crackpipe not install the game automatically?**
> Crackpipe is designed to work with "alternatively obtained" games such as DRM-free games. While Crackpipe can be used to install cracked games, it does not encourage or condone piracy. Some Games come with Installers, some come ready to play out of the box, some game repacks are archived with a very good compression and need to get uncompressed before. Automating all of this would be very hard. All Methods have one thing in common: You can choose where your game installation should land. And Crackpipe makes use of this.

Here are the steps to install the game:

1. All Crackpipe Games are compressed by default. You need to extract them using a tool like [7Zip](https://www.7-zip.org/).
2. Now install your game into the appropriate folder in the library:

   - `<Crackpipe Root>/Crackpipe/Installations/(74) Assassin's Creed Unity/` - This is where the final game files and .exe should be located.

3. You will need to choose an .exe file in the Installations tab before you can play the game. Then Crackpipe will enable the Play button in the Installations tab.

4. Feel free to delete `<Crackpipe Root>/Crackpipe/Downloads/(74) Assassin's Creed Unity/` after you installed the game. You can do it manually or by pressing the Delete-Icon / Clear All in your Downloads Tab.

## Tracking Your Game Progress

Once Crackpipe is launched, it automatically activates a time-tracking daemon. This diligent daemon continuously monitors your game progress, specifically your playtime, and promptly sends this information to the server whenever any .exe file (except those on the ignore-list) is running within a folder located in your Installations directory `<Crackpipe Root>/Installations/\*`. Even if you play without an internet connection, your playtime will still be tracked and updated on the server as soon as you regain connectivity.

In our context, the term "Progress" refers to a user's activity of playing a game. Each user can have a single progress entry per game.

The progress entry includes the completion state, which can be modified through the community tab, as well as the tracked playtime and some other additional information.

You have the ability to change the progress state or delete it using the community tab. Certain states also change automatically, such as transitioning from UNPLAYED to PLAYING when the game is launched.

Please note that this Progress does not include your savegames. Crackpipe does not have the capability to synchronize or store your savegames. Therefore, it is advisable to create backups of your savegames before uninstalling any games.

## Modifying Games

If you are unhappy with the Box-Art of a game on your server or if there are incorrect Metadata associated with a game, there is a straightforward solution.

If you have the `EDITOR` role or higher on your Crackpipe server, you can modify games by following these steps:

1. Navigate to the game's Detail Page.
2. Locate and click on the Pencil icon in the corner.
3. A popup will appear, where you can paste a URL for a different box-art image.
4. Additionally, there will be a manual search box for the RAWG database, allowing you to remap the game to the correct one on your own.

Please note that any changes made will affect all users on the server.

## Exiting or Relaunching the App

In order to maintain playtime tracking functionality, simply closing the launcher using the X-Button does not terminate the Crackpipe process. Instead, it minimizes the app to the system Tray. Therefore, if you truly wish to exit the application, be sure to right-click and select "Exit" from the context menu. The same principle applies when restarting the app. Only one Crackpipe window can be active at a time, so initiating another Crackpipe merely brings the minimized app to the forefront without actually restarting it.
