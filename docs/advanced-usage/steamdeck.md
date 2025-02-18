# Running the Client on Steamdeck

This page serves as a community-driven guide to assist you in setting up the GameVault client on SteamOS.

:::warning
Please note that running GameVault on Linux using this method is considered **unsupported** and **unrecommended**.
:::

## App Setup Guide

To start, you need the Application files. The simplest way to get them is explained [here](../client-docs/setup.md#option-1-obtain-pre-built-artifacts-from-github).

1. Download the latest version of the GameVault app [here](https://github.com/Phalcode/gamevault-app/releases).
2. Download .NET from [here](https://download.visualstudio.microsoft.com/download/pr/fc8c9dea-8180-4dad-bf1b-5f229cf47477/c3f0536639ab40f1470b6bad5e1b95b8/windowsdesktop-runtime-8.0.13-win-x64.exe).
3. Download fonts from [here](https://archive.org/details/windows-11-21h2-complete-font-collection).
4. Unzip the GameVault application where you want the application to live.

   :::warning
   Where you place the app is where it will install windows portable apps. Make sure you have enough space.
   :::

5. Add `gamevault.exe` to Steam library as a non-steam game.
6. Change game compatibility properties to use your preferred version of proton.
7. Change the target of the Non-steam game to the .NET installer.
8. Run the game via Steam.
9. Install .NET.
10. Change the target of the Non-steam game to the `gamevault.exe`.
11. Find the Compdata folder `/home/deck/.local/share/steam/steamapps/compatdata/GAMEAPPIDNUMBER/`.

   :::tip
   Easiest way to find this is to install and run protontricks in the discover store. Mine is 3860686742
   :::

12. Unzip fonts downloaded from archive.org and install to `/home/deck/.local/share/steam/steamapps/compatdata/GAMEAPPIDNUMBER/pfx/drive_c/windows/Fonts`. (specifically Segoe UI)
13. Run GameVault via Steam

## Updating the Client

:::warning
Since there is currently no auto-update functionality available (as mentioned in [this link](../client-docs/updating-client.md#other-sources)), it is your responsibility to manually update your GameVault client. To update your client, you will need to repeat the procedure in this documentation.
:::

## Logging into Phalcode account

:::warning
The GameVault pop-up to authenticate your Phalcode account relies on WebView2, which is not natively supported on the Steam Deck. As of February 18 2025, there is no known method for installing the WebView2 dependency on the Steam Deck. Consequently, GameVault+ features are not available on the Steam Deck.
:::
