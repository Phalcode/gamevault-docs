---
sidebar_position: 98
---

# GUI Overview

This documentation provides a clear overview of the Graphical User Interface (GUI) for GameVault. The GUI encompasses various tabs, each offering distinct functionalities.

## Setup Wizard

The Setup Wizard is a sub-page that appears when the necessary settings for GameVault are not configured. It guides users through these settings with detailed explanations. Exiting the wizard is optional, as all settings can also be configured in the settings tab.

## Library

!["Library Tab"](/img/features/library.png)

- Browse available and installed games.
- Expand or collapse sections with expanders.
- Launch installed games by clicking the play button on box art.
- Download available games by clicking the download button on box art.
- Access game settings directly with the Settings icon.
- The paged Library loads a maximum of 80 games at once for bandwidth efficiency.
- Use the dice icon to open a random game on the server.
- Employ the Filter icon for server game filtering.
- Utilize the search bar to find specific games.

## Game

!["Game Page"](/img/features/game.png)

- View comprehensive game details including a Media Player for Trailers/Gameplays/Screenshots
- Descriptions and Notes can also be displayed as Markdown.
- Set progress states (e.g., completed or aborted).
- Review personal progress and that of other users
- Add games to the download queue or launch installed games.
- Bookmark the game or create a share link
- Navigate back to the Library Tab using the back-arrow button or `ESC` key.

## Game Settings

### Your Computer

- Settings affecting local game installations.

#### Installation

- View installation directory.
- Uninstall games.
- Check disk usage for the game.

#### Launch Options

- Set default executable and launch parameters.
- Create desktop shortcuts.

### Server

- Settings affecting all users on the server (visible to editors or higher).

#### Edit Game Images

- Set a different thumbnail/background image using URLs or uploads. Has also a button to simplify the search for box/background images

#### Metadata

!["Metadata"](/img/features/gamesettings_metadata.png)

- View available metadata providers.
- Change metadata providers priority.
- Unmap metadata providers. If unmaped the header text will be grayed out a bit and the action buttons are disabled.
- Recache selected metadata provider.
- Switch metadata from selectd metadata providers in the "Remap Game" section.

#### Edit Game Details

!["Edit Game Details"](/img/features/gamesettings_details.png)

- Have full control of all the specific game details such as description, genres, tags etc including a preview of the current set data.
- Click the relead icon beside a game detail to load the current values into the textbox.
- Clear all user overwritten details by clicking the related button on the top right.
  :::note Format
  Multiple entries such as genres, tags etc. must be separated by a comma.
  :::

## Downloads

!["Downloads Tab"](/img/features/downloads.png)

- Monitor running and completed downloads.
- View download statistics and progress.
- Abort downloads.
- Extract game archives and view extraction progress.
- Perform installations based on game types.
- Open download folders and delete downloaded files.

## Community

!["Community Tab"](/img/features/community.png)

- View all users on the GameVault Server.
- Select users for detailed game progress information.
- Sort and delete progresses.
- Edit user details and reload progresses.

## User Settings

### Edit User Images

- Set avatar/background images using URLs or uploads.

### Edit Details

- View and update user details.
- Update passwords with confirmation.

## Settings

### Application

- Configure server URL and startup options.
- Change curren client theme or open the theme folder to insert your own.

### Installation

- Configure the donwload bandwidth limit.
- Set if you want to auto extract downloaded games and set a default password for encrypted archives.
- Set if portable games should be auto installed and if the install files should be auto deleted.

### User

- Log In to GameVault Backend Server.
- Log Out from GameVault Backend Server.
- Register a new user on the GameVault Backend Server.
- Enter current User Settings

### Data

- Select GameVault root path and clear image and offline caches.
- Clear image/offline cache

## Administration

!["Admin Tab"](/img/features/admin.png)

- Visible to admins only.
- View, activate/deactivate, and edit user roles.
- Delete or restore users.
- Open Community Tab profile by clicking on users' avatars.
- Re-index games on the server.

## News

!["News"](/img/features/news.png)

- At the bottom left of the screen is a button with which you can display the latest news from gamevault or the server's own news.
- When new news are available the button will be marked with a red badged.
- News can also be displayed as Markdown.
