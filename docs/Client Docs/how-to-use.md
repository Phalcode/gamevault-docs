---
sidebar_position: 2
---

# How to Use

## File & Folder Structure

> Lets say you installed Crackpipe freshly and configured your Crackpipe Path to `D:/` because your D Drive is larger

Crackpipe will now generate its folder structure. When everything is done your file system will look like this:

- `D:/Crackpipe/` - Root Folder
  - `D:/Crackpipe/Downloads/` - This folder is where your downloads will be saved. For each downloaded game, Crackpipe generates a new folder in this directory.
  - `D:/Crackpipe/Installations/` - This folder is where your installed games belong. For each downloaded game, Crackpipe generates a new folder in this directory.

## Downloading Games

Let's say you found the game `Assassin's Creed Unity (Game ID: 74)` in the Library tab and chose to download it.

As stated above, Crackpipe generates two folders to store the game files and uses the game ID in the name to identify them:

- `D:/Crackpipe/Downloads/(74) Assassin's Creed Unity/`
- `D:/Crackpipe/Installations/(74) Assassin's Creed Unity/`

Your downloaded zip file will be saved in `D:/Crackpipe/Downloads/(74) Assassin's Creed Unity/`. The `D:/Crackpipe/Installations/(74) Assassin's Creed Unity/` folder should be empty for now.

## Installing Games

After downloading the game, you will need to **install it manually** before you can play it.

> **Why does Crackpipe not install the game automatically?**
> Crackpipe is designed to work with "alternatively obtained" games such as DRM-free games. While Crackpipe can be used to install cracked games, it does not encourage or condone piracy. Some Games come with Installers, some come ready to play out of the box, some game repacks are archived with a very good compression and need to get uncompressed before. Automating all of this would be very hard. All Methods have one thing in common: You can choose where your game installation should land. And Crackpipe makes use of this.

Here are the steps to install the game:

1. All Crackpipe Games are compressed by default. You need to extract them using a tool like [7Zip](https://www.7-zip.org/).
2. Now install your game into the appropriate folder in the library:

   - `<Crackpipe Root>/Installations/(74) Assassin's Creed Unity/` - This is where the final game files and .exe should be located.

3. You will need to choose an .exe file in the Installations tab before you can play the game. Crackpipe will will enable the Play button in the Installations tab.

4. Feel free to delete `D:/Crackpipe/Downloads/(74) Assassin's Creed Unity/` after you installed the game. You can do it manually or by pressing the Delete-Icon / Clear All in your Downloads Tab.

## Playing Games

When you launch Crackpipe, the app automatically starts a time-tracking daemon running in the background. This daemon will count your playtime automatically and report it to the server when there is any .exe running in any folder within your library folder `<Crackpipe Root>/Installations/*`.
