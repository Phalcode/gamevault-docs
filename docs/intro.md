---
sidebar_position: 1
---

# Introduction

## What is GameVault?

GameVault is a selfhostable [source-available](https://wikipedia.org/wiki/Source-available_software) gaming platform for DRM-free videogames. It offers a Steam-like browsing and playing experience for you and your community to enjoy the game files stored **on your file server** in an organized way.

You simply put your game files (installers, binaries, etc.) - from wherever you have them, into a folder and the server detects them, enriches them with metadata and offers a user-friendly interface to easily organize, download, install, and play your games. It even tracks your playtimes and progress.

GameVault consists of two components:

- A self-hosted backend server served with Docker
- A client application to use this server

:::tip Try it out!
If you don't have a server yet, but want to try it out, you can use our demo server to get a feel for how it is:
  
**URL**: https://demo.gamevau.lt  
**Username**: demo  
**Password**: demodemo
:::

## Features

Let's take a look at all the main functions of GameVault:

### Client Features

- 🔎 [Browse your server's game collection](./client-docs/gui#library)
- 📥 [Download games from your server](./client-docs/how-to-use#downloading-games)
- ⚙️ [Automatic game extraction and installation](./client-docs/how-to-use#1-extracting-the-game)
- 🎮 [Launch and play games on your Computer](./client-docs/how-to-use#playing-a-game)
- ⏱️ [Track playtime and progress (works offline)](./client-docs/how-to-use#tracking-your-game-progress)
- 👥 [Compare game progress with other users](./client-docs/gui#community)
- ✏️ [Edit game metadata](./client-docs/gui#metadata)
- 🔒 [Manage users and games through Admin UI](./client-docs/gui#administration)
- 🎥 [Built-in media player for trailers and gameplay videos](./client-docs/gui#game)
- 🎨 [Themes](./client-docs/gui#application)

### Server Features

- 🔄 [Automatic game indexing from file system](./server-docs/indexing.md)
- 🤖 [Intelligent game type detection](./server-docs/game-types.md)
- 📚 [Automatic metadata enrichment from various video game databases](./server-docs/metadata-enrichment/metadata.md)
- 👥 [Multi-user authentication system](./server-docs/user-management.md)
- 🔒 [Role-based access control](./server-docs/user-management#user-roles)
- 👨‍👩‍👧‍👦 [Parental control features](./server-docs/parental-control)
- ⏱️ [Game progress tracking system](./client-docs/how-to-use#tracking-your-game-progress)
- 🚨 [Built-in health monitoring and logging](./advanced-usage/rest-api)
- 🔎 [Advanced search, filtering, and sorting](./advanced-usage/rest-api)
- 🔌 [Comprehensive API documentation](./advanced-usage/rest-api)
- ⚙️ [Highly configurable server settings](./server-docs/configuration)
- 🔌 [Extensible plugin framework](./server-docs/plugins.md)
- 🔄 [WebSocket support for real-time updates](./server-docs/websockets.md)
- 💾 [Database backup and restoration](./server-docs/configuration)
- 🔐 [OAuth2 authentication support](./advanced-usage/authentication#setting-up-oauth2-authentication-single-sign-on)

### Premium Features

- Visit our [GameVault+](./gamevault-plus/introduction.md) page to learn more about our premium features.

## Support Us

We're working hard in our free time to provide you, your friends, and families with the best self-hosted gaming experience. It would mean a lot to us if you could support us developers by [getting GameVault+](./gamevault-plus/introduction.md).

Alternatively you can support us by donating us some spare dollars on any of these platforms:

- [Ko-Fi](https://ko-fi.com/phalcode)
- [Liberapay](https://liberapay.com/Phalcode)
- [GitHub Sponsors](https://github.com/sponsors/Phalcode)
- [PayPal](https://paypal.me/phalcode)

:::tip Tip for donators
If you connect your [Discord](https://discord.gg/NEdNen2dSu) account to Ko-Fi, you'll automatically receive the "@Supporters"-Role and permanently stand out in our [Discord](https://discord.gg/NEdNen2dSu) members list. If you donate through a different platform and want to obtain the role, simply send us a message with your receipt as proof.
:::

## License

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]  
[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

GameVault is not open-source software. [Click here to learn why.](/blog/2023/07/13)

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

## Legal Disclaimer

:::warning Legal Disclaimer
GameVault manages DRM-free games and is solely a tool to address this need. We are not responsible for the content or files users store or share.

When we say DRM-free games, we only mean games obtained legally. While GameVault _can_ theoretically be used with illegally obtained games, we do not endorse or support piracy.

Users must be aware of and comply with copyright laws in their respective jurisdictions. We encourage responsible and legal use of GameVault. Unlawful use is strictly improper and unauthorized.
:::
