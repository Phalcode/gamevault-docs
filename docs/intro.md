---
sidebar_position: 1
---

# Introduction

## What is GameVault?

GameVault is an innovative gaming platform providing a self-hosted, [source-available](https://wikipedia.org/wiki/Source-available_software) alternative to popular gaming platforms. It lets you and your friends enjoy DRM-free games stored **on your file server** in an organized way.

Think of it as your personal Steam or Plex server, but for your personal video game collection (and without streaming). It lets you and your friends enjoy your games from anywhere.

You put your game files (installers, binaries, etc.) from wherever you have them into a folder and the platform detects them, enriches them with metadata and offers a user-friendly interface to easily organize, download, install, and play your games. It even tracks your playtimes and progress.

GameVault consists of two components:

- A self-hosted backend server served with Docker
- A client application to use this server

:::tip Try it out!
If you don't have a server yet, but want to try it out, you can connect your GameVault Client to our demo server get a feel for how it works.  
[Click here to learn more.](client-docs/setup#option-2-using-the-demo-server)
:::

### Who Can Enjoy GameVault?

Whether you're into the classics or the cutting-edge, GameVault is the perfect companion for:

🎮 **DRM-free Gamers:** Enjoy your games from anywhere.  
🏠 **Self Hosters:** Keep your game collection on your own server.  
📚 **Game Collectors:** Organize and cherish your growing library.  
💾 **Data Hoarders:** Archive every gigabyte of gaming history.  
👾 **Indie Gamers:** Keep track of your independent gems.  
🕹️ **Retro Gamers:** Relive the golden era of gaming.  
🛠️ **Game Developers:** Test and distribute your creations.  
👪 **And their Friends & Family:** Share the joy of gaming with loved ones.

### What GameVault is not

Listed below are some examples of what GameVault is not:

- Game Pirating Application
- Game Streaming Application (e.g. Geforce NOW, Sunshine)
- Game Server Management Application (e.g. Pterodactyl)
- Local Game Library / Library Merging Application (e.g Playnite, Heroic, Launchbox) - although you might just run the server on your local machine, then it basically is.

## Features

Let's take a look at all the main functions of GameVault:

### Client Features

- 🔎 [Browse your server's game collection](./client-docs/gui#library-tab)
- 📥 [Securely download your games from your server](./client-docs/how-to-use#downloading-games)
- ⚙️ [Automatically extract and install games](./client-docs/how-to-use#1-extracting-the-game)
- 🎮 [Launch and play the games on your PC](./client-docs/how-to-use#playing-a-game)
- ⏱️ [Track playtimes and progress (even when the server is offline)](./client-docs/how-to-use#tracking-your-game-progress)
- 👥 [Compare game progress with other users on the server](./client-docs/gui#community-tab)
- 🔒 [Manage your users and games with a powerful Admin UI](./client-docs/gui#admin-tab)

### Server Features

- ♻️ [Automatically indexes games from the file system into a database](./server-docs/indexing-and-metadata.md#game-indexing)
- 📚 [Enhances games with metadata like tags, genres, description and more using RAWG API](./server-docs/indexing-and-metadata.md#integration-with-rawg)
- 📸 [Automatically finds beautiful box art for your library](./server-docs/indexing-and-metadata.md#game-box-arts)
- 👥 [Multi-User Authentication](./server-docs/user-management.md)
- 🔒 [Role-Based Access Control](./server-docs/user-management#user-roles)
- ⏱️ [Keeps track of your users' game progress and state](./client-docs/how-to-use#tracking-your-game-progress)
- 🚨 [Health Monitoring and Logging](./advanced-usage/rest-api)
- 🔎 [Full-Text Search, Filters, Sorting, Pagination](./advanced-usage/rest-api)
- 🔌 [Fully Documented API](./advanced-usage/rest-api)
- ⚙️ [Highly Configurable](./server-docs/configuration)

## Support

We're working hard in our free time to provide you, your friends, and families with the best self-hosted gaming experience. It would mean a lot to us if you could support us developers by donating us some spare dollars on any of these platforms:

- [Ko-Fi](https://ko-fi.com/phalcode)
- [Liberapay](https://liberapay.com/Phalcode)
- [GitHub Sponsors](https://github.com/sponsors/Phalcode)
- [PayPal](https://paypal.me/phalcode)

Tip: If you connect your [Discord](https://discord.gg/NEdNen2dSu) account to Ko-Fi, you'll automatically receive the "@Supporters"-Role and permanently stand out in our [Discord](https://discord.gg/NEdNen2dSu) members list. You'll be acknowledged as a generous and wonderful person. If you donate through a different platform and want to obtain the role, simply send us a message with your receipt as proof that you're truly a Supporter.

## License

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

## Legal Disclaimer

:::warning Legal Disclaimer
GameVault manages DRM-free games and is solely a tool to address this need. We are not responsible for the content or files users store or share.

When we say DRM-free games, we only mean games obtained legally. While GameVault _can_ theoretically be used with illegally obtained games, we do not endorse or support piracy.

Users must be aware of and comply with copyright laws in their respective jurisdictions. We encourage responsible and legal use of GameVault. Unlawful use is strictly improper and unauthorized.
:::
