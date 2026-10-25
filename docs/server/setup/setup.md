---
sidebar_label: Overview
description: "Choose a supported way to install GameVault Server: Docker Compose, CapRover, TrueNAS, Unraid, Synology or native."
sidebar_position: 1
id: toc
---

# Server setup

GameVault Server runs on any machine with Docker, or natively on Linux. Pick
the guide that matches your host. Every method uses the same image and the
same configuration variables.

:::note Before you start
You need a host with at least 2 GB of RAM, a folder for game files and a
database. PostgreSQL is recommended for larger libraries; SQLite works for
small setups.
:::

## Supported methods

| Host                         | Guide                                                         | Notes                                    |
| ---------------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Docker Compose               | [Docker Compose](./docker-compose.md)                         | Recommended for most Linux hosts and VPS |
| CapRover                     | [CapRover](./caprover.md)                                     | Managed Docker host with a web UI        |
| TrueNAS SCALE 24.10 or newer | [TrueNAS SCALE](./truenas-scale.md)                           | Uses the Docker-compatible app system    |
| Unraid                       | [Unraid](./unraid.md)                                         | Community Applications template          |
| Synology Container Manager   | [Synology Container Manager](./synology-container-manager.md) | DSM 7.2 or newer                         |
| Linux without Docker         | [Native installation](./native.md)                            | Node.js and PostgreSQL or SQLite         |

If you have trouble, ask on [Discord](https://discord.gg/NEdNen2dSu). Include
your host, the method you used and the server logs.

## Add more setup guides

GameVault runs on more systems than we can test. If you set it up on a NAS or
a platform that is missing here, a documentation pull request is welcome:
[gamevault-docs](https://github.com/Phalcode/gamevault-docs).

## What next?

Once the server is running, open `http://<server-ip>:8080` in a browser. The
Web UI is GameVault 2 and needs no installation. Disable it with
`WEB_UI_ENABLED=false` if you only want to serve the API.

1. **Configure the server.** Review the
   [configuration reference](../configuration.md).
2. **Add games.** Prepare the
   [file and folder structure](../structure.md), then
   [add your games](../adding-games.md).
3. **Create the first user.** The first registered account is activated
   automatically and receives the admin role. See
   [user management](../user-management.md).
4. **Add metadata.** Connect a provider such as
   [IGDB](../metadata-enrichment/provider-igdb.md).
5. **Expose the server.** For access outside your LAN, use an HTTPS reverse
   proxy and review [Fail2Ban](../../advanced/fail2ban.md).
