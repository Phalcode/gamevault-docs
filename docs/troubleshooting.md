---
sidebar_label: Troubleshooting
description: Fix the most common GameVault Server and client problems, and learn how to collect logs for a support request.
sidebar_position: 8
---

# Troubleshooting

Start with the checklist below. If the problem persists, collect a complete log
file and ask for help on [Discord](https://discord.gg/NEdNen2dSu) or in the
[GitHub issue tracker](https://github.com/Phalcode/gamevault-frontend/issues).

## Before you ask for help

1. Check that the server is running and reachable from the client.
2. Restart the client and the server.
3. Set `SERVER_LOG_LEVEL` to `debug` and read the logs.
4. Verify your [configuration](server/configuration.md), volumes and
   permissions.
5. Reproduce the problem once and note the exact time.

Include the GameVault version, the client platform, the server image tag and a
complete log file. Never paste secrets; replace them with `**REDACTED**`.

## The client cannot connect

- Use the correct protocol. A server without TLS needs `http://`, not `https://`.
- Confirm the port. The default is `8080`; a reverse proxy may expose `443`.
- If the server is behind a proxy, verify that the proxy forwards WebSocket
  upgrades and does not buffer large downloads.
- A `500` response usually points to a server-side problem. Check the server
  logs before changing client settings.

## The first admin account does not work

Register the first user after the server starts. The first registered account is
activated automatically and receives the admin role. If you already created
users, see [admin role recovery](server/user-management.md#admin-role-recovery)
and [admin password recovery](server/user-management.md#admin-password-recovery).

## Permissions denied / EACCES

GameVault runs as a non-root user (`1000:1000` by default). The container user
must be able to read and write every mapped volume:

- game files (`VOLUMES_FILES`)
- media (`VOLUMES_MEDIA`)
- save files (`VOLUMES_SAVEFILES`)
- logs (`VOLUMES_LOGS`)
- the SQLite database (`VOLUMES_SQLITEDB`)

Either grant the correct permissions on the host or set `PUID` and `PGID` to a
user that owns the folders. Do not run the container as root.

Symptoms include failing media saves, an empty or unwritable SQLite database,
indexing errors and `EACCES` messages.

## Games do not appear

- [Add the games](server/adding-games.md) and wait for indexing to finish.
- Clear the search box and every active filter, then refresh.
- Check the [file and folder structure](server/structure.md).
- Verify the game is supported in [game types](server/game-types.md).
- For GameVault 1 installations, verify the root folder in
  [Settings](clients/gamevault-1/gui.md#settings) and compare the server game ID
  with the installation folder. See the
  [GameVault 1 settings](clients/gamevault-1/gui.md#game-settings).

## Missing box art or metadata

- Configure a [metadata provider](server/metadata-enrichment/metadata.md).
- Check that the provider is enabled in the
  [server configuration](server/configuration.md).
- Verify the [file names](server/structure.md); ambiguous names cannot be
  matched reliably.
- A `(NC)` flag on **any** version file disables provider updates for the whole
  game. Remove the flag and trigger a refresh.
- Clear the media cache in the client and reload the library.

## Incorrect game mapping

Remap the game in the client:
[GameVault 2](clients/gamevault-2/using.md#modifying-games) or
[GameVault 1](clients/gamevault-1/gui.md#game-settings).

## Slow downloads

- Remove the client bandwidth limit under **Settings → Application**.
- Remove the server limit: unset `SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS` or set
  it to `0`.
- Make sure the client is using the LAN address, not the public address.
- Check proxies, VPNs and older network hardware between client and server.
- Restart both sides after changing limits.

## How to collect logs

1. Set `SERVER_LOG_LEVEL=debug` in the server environment.
2. Set `SERVER_LOG_FILES_ENABLED=true`.
3. Map a host folder to `/logs` (Docker) or set `VOLUMES_LOGS` (native).
4. Reproduce the problem.
5. Send the complete log file from server start to the error. Do not trim it.

:::info Complete logs are required
Trimmed logs hide the cause. Redact secrets with `**REDACTED**`; the server
redacts most sensitive values automatically.
:::

## Still stuck?

- [Discord](https://discord.gg/NEdNen2dSu) for quick questions.
- [Client issues](https://github.com/Phalcode/gamevault-frontend/issues)
- [Server issues](https://github.com/Phalcode/gamevault-backend/issues)
- [Documentation issues](https://github.com/Phalcode/gamevault-docs/issues)
- [contact@phalco.de](mailto:contact@phalco.de) for confidential reports.
