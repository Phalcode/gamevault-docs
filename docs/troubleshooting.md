---
sidebar_position: 99
---

# Troubleshooting

Below, we will gradually list some common issues and corresponding solutions to help you maximize the potential of your app. If you can't find a solution to your problem here, feel free to open a ticket on our Github board or seek assistance via [Discord](https://discord.gg/NEdNen2dSu). Alternatively, you may also directly [email our company address](mailto:contact@phalco.de) if the issue is confidential.

## All-Rounder Solutions that Fix Most Problems

I can't mention these in every single Section below, so before you try to solve anything, try these:

- Check if the server is running healthy and is reachable from your client.
- Restart GameVault Client and Server.
- Examine Client and Server Logs for error details. (Set `SERVER_LOG_LEVEL` to `debug`)
- Check [Server for any issues with Configuration](./server-docs/configuration.md).

## Common Problems and Solutions

### Incorrect Game Mapping

- Refer to [this](./client-docs/how-to-use.md#modifying-games) for instructions on how to remap your games.

### Server fails to save media / create SQLITE Database / index games / throws a Permissions Denied / No Permission / EACCES error

This is most probably a permissions issue due to the fact that gamevault runs as a non-root user (1000:1000) by default for security purposes.

Either make sure this user has permissions to read/write to the folders you map in as volumes, or run GameVault with a user that has the permissions to do so. You can do this by using the `PUID` & `PGID` environment variables.

### Unable to Connect to Server / 500 Internal Server Error

- Ensure that you use the correct protocol (http or https) in the connection string, particularly if your server doesn't support SSL.
- If you have disabled authentication in your server configuration, make sure to include the authentication header for user-specific requests. [See here](./server-docs/configuration.md) for more information.

### Initial Admin User is not working

- You need to register the first user. It is automatically activated and granted admin permissions.

### Games Not Appearing in the Installations / Servers List

- [Add Games to your server](./server-docs/adding-games.md)
- Clear the Searchbox
- Clear all active Filters
- Press F5 to trigger a new search
- For installations, verify your correct root folder is set [in the settings](./client-docs/gui.md#data).
- Verify your server's game id does not differ from the one in your installation folder (The game's server id can be found in the lower left corner of [the game's settings](./client-docs/gui.md#game-settings)).
- Verify [your file names are correct](./server-docs/structure.md).
- Check the Filesystem Permissions. See [here](#server-fails-to-save-media--create-sqlite-database--index-games--throws-a-permissions-denied--no-permission--eacces-error)

### Missing Box Arts

- [Set up a Metadata Provider](./server-docs/metadata-enrichment/metadata.md) that provides box art for your games.
- Clear media caches [in the settings.](./client-docs/gui.md#data)

### Lack of Metadata in Games

- [Set up a Metadata Provider](./server-docs/metadata-enrichment/metadata.md) that provides metadata for your games.
- Verify if [your Metadata Provider is disabled in your server configuration](./server-docs/configuration.md).
- Verify if [your file names are correct](./server-docs/structure.md)
- Verify if you accidently marked your game as `(NC)` (No Cache Flag)

### Lost my Admin Role

- Refer to [this](./server-docs/user-management#admin-role-recovery) for instructions on how to regain admin privileges for your user.

### Forgot my Admin Password

- Refer to [this](./server-docs/user-management#admin-password-recovery) for instructions on how to reset the password of your admin user.

### Game Downloads are slow

- Make sure the Clients Bandwidth Speed Limit is unset under `Settings -> Application`
- Make sure the Servers Bandwidth Speed Limit is unset (`SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS` environment variable unset or 0)
- Restart your Client and Server
- If your server is in your LAN, make sure you don't mistakenly access it from WAN
- Check your middle-mans: Proxies, VPNs and older Network Hardware could all affect the download speeds.

## How to Report an Issue

To help us resolve your issue quickly and accurately, please include as much detail as possible, especially:

- A **complete log file** (from server start to when the issue occurs).
- Set the environment variable `SERVER_LOG_LEVEL` to `debug` before collecting the logs.

:::warn Full logs needed
Please do not trim or shorten log files. It just makes it harder for us to understand what went wrong. We know they get big, but we know how to read them.
You can redact sensitive details by replacing them with the word `**REDACTED**` before you send them if you want to, but the server tries to automatically redact sensitive data, so they should be gernerally safe to share.
:::

## How to Collect Logs

If you're not sure how to gather logs, or your system makes it unclear you can use GameVault's Built-in Logging feature:

1. **Enable logging:**

   Set the environment variable `SERVER_LOG_FILES_ENABLED` to `true`

2. **Set the log folder:**

   - If you're using Docker:  
     Bind a local folder to `/logs` using the docker volumes feature.

   - If you're running natively:  
     Make sure the `VOLUMES_LOGS` path is set to a local folder in your configuration.

After this setup, logs will be saved automatically to the specified location.
