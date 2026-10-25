---
description: Run the legacy GameVault 1 Windows client on Linux with Wine and Bottles.
sidebar_position: 7
---

# Running GameVault 1 on Linux

This page serves as a community-driven guide to assist you in setting up GameVault 1 on Linux.

:::tip Native Linux client
[GameVault 2](../gamevault-2/linux.md) is in **public beta** and ships native Linux packages (`.deb` and `.AppImage`), so it no longer requires Wine. The guide below is only relevant if you want to run GameVault 1.
:::

:::warning
Please note that running GameVault on Linux using this method is considered **unsupported** and **unrecommended**. It should only be utilized as a last resort when no other options are available.
:::

## Getting the application

To start, you need the Application files. The simplest way to get them is explained [here](installation.md#pre-built-artifacts-from-github).

## Setting up with Wine

1. Install Wine and winetricks
2. Run `winetricks dotnetdesktop6` in a terminal
3. Launch `gamevault.exe`

## Setting up with Bottles

:::tip

When using Bottles under flatpak, your data will be in the following directory:

`~/.var/app/com.usebottles.bottles/data/bottles/[YOUR BOTTLE NAME]`

Keep that in mind when unpacking games to install them.

:::

1. Install [Bottles](https://usebottles.com/)
2. Create a new bottle  
   ![Creating a new Bottle](/img/linux/bottles/make_bottle.png)
3. Inside your bottle click `Dependencies` and install `dotnetcoredesktop6`  
   ![Configuring the .NET Core Dependency](/img/linux/bottles/dotnet.png)
4. Go back to the main page for your bottle and press `Run Executable...` and select `gamevault.exe`

## Updating the Client

:::warning
Since there is currently no auto-update functionality available (as mentioned in [this link](updating.md#manual-installations)), it is your responsibility to manually update your GameVault client. To update your client, you will need to repeat the procedure in this documentation.
:::

## Known issues

- Text can look very broken if certain fonts are not installed on your system.
  - If you're on Arch Linux, [this](https://aur.archlinux.org/packages/ttf-ms-win11-auto) AUR package fixes the issue.
  - If you're on Debian, you could try to use [this](https://packages.debian.org/ttf-mscorefonts-installer) package. (untested)
  - Additionally - you can also try [this](https://archive.org/details/windows-11-21h2-complete-font-collection) and install it to your wine prefix's fonts folder ~/.wine/drive_c/windows/Fonts ; This works on the steamdeck
