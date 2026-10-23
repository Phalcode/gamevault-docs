---
sidebar_position: 1
sidebar_label: Introduction
---

# Introduction

## What is GameVault?

GameVault is a self-hostable platform for DRM-free games. Add installers or
portable builds to a folder on your server; GameVault detects them, enriches
them with metadata and serves them to clients that can browse, download,
install and launch them.

GameVault has two parts:

- **GameVault Server** — the self-hosted backend, usually run with Docker.
- **A client** — two clients exist:
  - [GameVault 2](./clients/gamevault-2/installation.md), the actively developed
    client for Windows, Linux and macOS (public beta). It is web-first: the
    [Web UI](./clients/gamevault-2/web-ui.md) is the same client in your browser,
    with direct downloads but without automatic installation, launching and
    playtime tracking.
  - The [legacy Windows app](./clients/legacy-windows/overview.md), the original
    client with full GameVault+ support.

Not sure which one fits? The [feature comparison](./clients/feature-parity.md)
lists what each client supports.

:::tip Try it out
You do not need a server to look around. Use our demo instance:

**URL**: [demo.gamevau.lt](https://demo.gamevau.lt)  
**Username**: demo  
**Password**: demodemo
:::

## Getting started

1. [Choose your client](./getting-started/choose-your-client.md).
2. [Download and install](./getting-started/download-and-install.md) it, or
   [set up a server](./server/setup/setup.md) first.
3. [Connect the client to your server](./getting-started/connect-to-server.md).
4. Coming from the old client? Read
   [Migrating from GameVault 1](./getting-started/migrating-from-gamevault-1.md).

## Features

### Client

- Browse your server's library, with search, filters and sorting.
- Download games and pick between multiple versions when the server offers them.
- Extract and install portable games and setup installers automatically.
- Launch games, track playtime and sync progress, even while offline.
- Compare progress with other users and see what is being played.
- Edit metadata, bookmarks and share links.
- Watch trailers, gameplay videos and screenshots in the built-in media player.
- Hide names, emails and server addresses with
  [Streamer / OPSEC mode](./clients/gamevault-2/opsec-mode.md).
- Run Windows games on Linux with umu-launcher and per-game Proton prefixes.

### Server

- [Automatic indexing](./server/indexing.md) of game files.
- [Game type detection](./server/game-types.md) for archives, installers and
  portable builds.
- [Metadata enrichment](./server/metadata-enrichment/metadata.md) through
  providers such as IGDB.
- [Multi-user authentication](./server/user-management.md) with role-based
  access control and [parental control](./server/parental-control.md).
- [Version management](./server/adding-games.md#keeping-multiple-versions-of-the-same-game)
  with a version picker in GameVault 2.
- [Plugin framework](./server/plugins.md) for metadata and custom integrations.
- [REST API](./advanced/rest-api.md), [OAuth2/SSO](./advanced/authentication.md)
  and [WebSockets](./advanced/websockets.md).
- [Backup and restore](./server/backup-and-restore.md).

### GameVault+

[GameVault+](./gamevault-plus/introduction.md) is an optional subscription with
cloud saves, multiple profiles, extra themes and integrations. It currently
requires the legacy Windows app.

## Support Us

GameVault is built in our free time. The best way to support development is
[GameVault+](./gamevault-plus/introduction.md). Donations are welcome too:

- [Ko-Fi](https://ko-fi.com/phalcode)
- [Liberapay](https://liberapay.com/Phalcode)
- [GitHub Sponsors](https://github.com/sponsors/Phalcode)
- [PayPal](https://paypal.me/phalcode)

:::tip Discord role for supporters
Connect your [Discord](https://discord.gg/NEdNen2dSu) account to Ko-Fi and you
receive the "@Supporters" role automatically. For other platforms, send us your
receipt.
:::

## License

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]  
[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

GameVault is not open-source software. [Read why.](/blog/2023/07/13)

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

## Legal Disclaimer

:::warning Legal Disclaimer
GameVault manages DRM-free games. We are not responsible for the content or
files users store or share.

"DRM-free" means legally obtained games. GameVault can theoretically be used
with illegally obtained games, but we do not endorse or support piracy.

Users must comply with copyright law in their jurisdiction. Unlawful use is
strictly prohibited.
:::
