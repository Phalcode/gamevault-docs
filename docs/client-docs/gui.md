---
sidebar_position: 98
---

# GUI

This page provides an overview of the Graphical User Interface (GUI) for GameVault. The GUI includes several tabs, each with its own set of functions

## Setup Wizard

The Setup Wizard is a sub page that appears when the settings required to use GameVault are not set. The setup wizard guides you through all these settings with a more detailed explanation. You can exit it at any time by clicking on the tab bar on the left. This is optional, because you can do all the settings in the settings tab as well.

## Library Tab

- Browse, search, filter available games on the server.
- Click on games to open the corresponding game page.
- The Library is paged. A maximum of 80 Games are reloaded at once to save bandwidth and improve performance. When scrolling down, more pages are loaded.

## Game Page

- Find all available details for a game.
- Set a progress state (e.g. completed or aborted).
- Add the game to the Download queue using the download button.
- Remap the game. To do so, you have to search it in the RAWG serach field. If you found the right game click on the Remap Button.
- Set a different thumbnail/background image. You can do this by passng an URL or upload a Image. (only available for Editors)
- By clicking the Re-cache button, the game data will be fetched from RAWG. Use this if the game have broken or old data. (only available for Editors or Administrators)
- Press the back-arrow button in the top left corner or `ÈSC` to return to the Library Tab.

## Downloads Tab

- View all running and completed downloads.
- See current download statistics and progress for running downloads.
- Abort downloads at any time.
- [Extract the Game Archive](../client-docs/how-to-use.md#1-extracting-the-game).
- See current extraction statistics and progress for running extractions.
- Performs the [Installation](../client-docs/how-to-use.md#2-installing-the-game) depending on the game type.
- Open the corresponding folder.
- Delete downloaded files using the delete icon.

## Installations Tab

- View all installed games.
- Choose which .exe file you want to start.
- Click on a game to see more details and launch it using the play button.
- Open the corresponding folder.

## Community Tab

- See a list of all users on the GameVault Server.
- Select any user to see more details on their game progresses.
- See your own progress by clicking on your own user.
- Sort the progresses.
- Delete your progresses.
- Edit your User.

## Settings Tab

### Application

- Auto-Load Library from Server on Startup.
- Auto-Extract Downloaded Games (truggers right after download completed).
- Set Server URL (Automatically add 'https' if not included)
- Set Download Limit. Control auto re-calculate the input.
- Launch GameVault on Computer Startup.
- Minimize GameVault to System Tray on Startup.

### User

- Login.
- Logout.
- Register new User.

### Data

- Select GameVault Root Path (Destination for Downloads ins Installs).
- Clear Image Cache (Shows size).
- Clear Offline Cache (Shows size).

## Admin Tab (only visible for Admins)

- Administrate your Users
- Activate or Deactivate Users
- Change User Roles (also your own)
- Delete or Restore Users
- Re-index games on the server
