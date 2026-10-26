---
title: Themes
description: Install and switch GameVault+ themes in GameVault 1, including custom theme support.
sidebar_position: 3
---

GameVault+ adds premium themes and lets you install custom ones.

## Premium themes

GameVault+ ships with these themes:

- **Phalcode (Dark)**: dark theme in the Phalcode colours.
  ![Phalcode (Dark)](/img/themes/phalcode_dark.png)
- **Phalcode (Light)**: light theme in the Phalcode colours.
  ![Phalcode (Light)](/img/themes/phalcode_light.png)
- **Halloween (Dark)**: orange and black, for autumn horror games.
  ![Halloween (Dark)](/img/themes/halloween_dark.png)
- **Christmas (Dark)**: dark red and green.
  ![Christmas (Dark)](/img/themes/christmas_dark.png)

## Custom themes

Custom themes let you install your own design.

Community themes live in
[Phalcode/gamevault-community-themes](https://github.com/Phalcode/gamevault-community-themes/).

### How to install and apply a custom theme

#### Automatic installation from the [community themes repository](https://github.com/Phalcode/gamevault-community-themes/)

1. Open **GameVault** and navigate to **Settings → Application → Theme**.
2. Click on the **Community Themes** dropdown menu to load available themes from the community repository.
3. Select your preferred theme and click **"Install Theme"**.

#### Manual installation

1. Place the theme .xaml file into your `themes` folder. Depending on your GameVault installation, the `themes` folder can be located at either `%USERPROFILE%\AppData\Local\Packages\Phalcode.174950BD81C41_dymsgn3qpfjxc\LocalCache\Roaming\GameVault\themes` or `%APPDATA%/GameVault/themes`.
2. Open `GameVault Settings` and select your newly added theme under `Application` -> `Themes`.

### Creating a custom theme

Creating a custom theme is straightforward. You can just create a new .xaml file based on our template and save it in the `themes` folder.

<!--
#### Theme generator
**Coming Soon!**
 An easy-to-use Theme Generator is available [here](https://themes.gamevau.lt/).
-->

#### Template file

Just copy the latest template from the [community themes repository](https://github.com/Phalcode/gamevault-community-themes/), edit it using a text editor, and save it in the `themes` folder to try it out. Be aware that the hex codes are ARGB syntax and not RGB syntax.

### Sharing custom themes

You can share your custom themes with the community by creating a pull request to the [community themes repository](https://github.com/Phalcode/gamevault-community-themes/).
