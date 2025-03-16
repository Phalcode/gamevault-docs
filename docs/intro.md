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
If you don't have a server yet, but want to try it out, you can connect your GameVault Client to our demo server get a feel for how it works.  
[Click here to learn more.](client-docs/setup#option-2-using-the-demo-server)
:::

## Features

Let's take a look at all the main functions of GameVault:

### Client Features

- 🔎 [Browse your server's game collection](./client-docs/gui#library)
- 📥 [Download your games from your server](./client-docs/how-to-use#downloading-games)
- ⚙️ [Automatically extract and install games](./client-docs/how-to-use#1-extracting-the-game)
- 🎮 [Launch and play the games on your PC](./client-docs/how-to-use#playing-a-game)
- ⏱️ [Track playtimes and progress (even when the server is offline)](./client-docs/how-to-use#tracking-your-game-progress)
- 👥 [Compare game progress with other users on the server](./client-docs/gui#community)
- ✏️ [Edit any game metadata](./client-docs/gui#metadata)
- 🔒 [Manage your users and games with a powerful Admin UI](./client-docs/gui#administration)

### Server Features

- ♻️ [Automatic indexer to sync games from the file system into the database](./server-docs/indexing.md)
- 📚 [Automatic enrichment of games with metadata, box arts, tags, genres, description and more using various APIs](./server-docs/metadata-enrichment/metadata.md)
- 👥 [Multi-User Authentication](./server-docs/user-management.md)
- 🔒 [Role-Based Access Control](./server-docs/user-management#user-roles)
- 👨‍👩‍👧‍👦 [Parental Control Features](./server-docs/parental-control)
- ⏱️ [Game Progress and Statistics Tracking](./client-docs/how-to-use#tracking-your-game-progress)
- 🚨 [Health Monitoring and Logging](./advanced-usage/rest-api)
- 🔎 [Full-Text Search, Filters, Sorting, Pagination](./advanced-usage/rest-api)
- 🔌 [Fully Documented API](./advanced-usage/rest-api)
- ⚙️ [Highly Configurable](./server-docs/configuration)
- ⚙️ [Modular Plugin Framework](./server-docs/plugins.md)

### Premium Features

- Visit our [GameVault+](./gamevault-plus/introduction.md) page to learn more about our premium features.

## Support

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
