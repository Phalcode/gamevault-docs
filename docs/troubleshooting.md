---
sidebar_position: 99
---

# Troubleshooting

Below, we will gradually list some common issues and corresponding solutions to help you maximize the potential of your app. If you can't find a solution to your problem here, feel free to open a ticket on our Github board or seek assistance via [Discord](https://discord.gg/NEdNen2dSu). Alternatively, you may also directly [email our company address](mailto:contact@phalco.de) if the issue is confidential.

## All-Rounder Solutions that Fix Most Problems

I can't mention these in every single Section below, so before you try to solve anything, try these:

- Check if the server is running healthily and is reachable from your client.
- Restart GameVault Client and Server.
- Examine Client and Server Logs for error details. (Set `SERVER_LOG_LEVEL` to `debug`)
- Check Server [Configuration](./server-docs/configuration.md).

## Common Problems and Solutions

### Incorrect Game Mapping

- Refer to [this](./client-docs/how-to-use.md#modifying-games) for instructions on how to modify games.

### Unable to Connect to Server / 500 Internal Server Error

- [Try these solutions first.](#all-rounder-solutions-that-fix-most-problems)
- Ensure that you use the correct protocol (http or https) in the connection string, particularly if your server doesn't support SSL.
- If you have disabled authentication in your server configuration, make sure to include the authentication header for user-specific requests. [See here](./server-docs/configuration.md) for more information.

### Server fails to save images / create SQLITE Database / index games or throws a Permissions Denied / No Permission / EACCES error

This is most probably a permissions issue due to the fact that gamevault runs as a non-root user (1000:1000) by default for security purposes.

Either make sure this user has permissions to read/write to the folders you map in as volumes, or run GameVault with a user that has using the `PUID` & `PGID` environment variables.

### Initial Admin User is not working / has no permissions / needs to be activated

- You need to register the first user.
- Find instructions on granting privileges to your first user in [this](./server-docs/user-management.md#initial-setup) guide.

### Games Not Appearing in the Installations / Servers List

- [Add Games to your server](./server-docs/adding-games.md)
- Clear the Searchbox
- Write something into the searchbox, then remove it, to trigger a new search
- Clear the filters
- For installations, verify your correct root folder is set [in the settings](./client-docs/gui.md#data).
- Verify your server's game id does not differ from the one in your installation folder (The game's server id can be found in the lower left corner of [the game's settings](./client-docs/gui.md#game-settings)).
- Verify [your file names are correct](./server-docs/structure.md).
- Check the Filesystem Permissions. See [here](#server-fails-to-save-images--create-sqlite-database--index-games-or-throws-a-permissions-denied--no-permission--eacces-error)

### Missing Box Arts

- Verify if [the Google API is disabled in your server configuration](./server-docs/configuration.md).
- Verify you have not hit the Google API's rate limit. (Server Logs will tell)
- Clear image caches [in the settings.](./client-docs/gui.md#data)
- Verify you don't live in a problematic third world country with questionable political connections and positions, where you are being monitored by the government and Google is blocked by a national firewall to get you to use the government's controlled substitute services to isolate you from the outside world and manipulate you with false information.

### Lack of Metadata in Games

- If you haven't set up RAWG yet, follow [these steps](./server-docs/indexing-and-metadata.md#rawg-api-key).
- Check the RAWG-API Dashboard for any requests associated with your API Key.
- Verify if [the RAWG API is disabled in your server configuration](./server-docs/configuration.md).
- Verify if [your file names are correct](./server-docs/structure.md)
- Verify if you accidently marked your game as `(NC)` (No Cache Flag)

### Forgot my Admin Password

- Refer to [this](./server-docs/user-management#recovering-access-to-admin-user-after-password-loss) for instructions on how to regain access to your admin account.

### GameVault Backend: SIGILL / Illegal Instruction (Core Dumped)

Phew. Tough one. Apologies, but your CPU is too dated to run the official gamevault-backend image. The reason is that [our image Compression library "sharp" relies on another library called "libvips," which only functions on processors built after ~2011](https://github.com/lovell/sharp/issues/3743), supporting the AVX and SSE 4.2 Instruction set. We've already encountered a couple users facing this issue. Despite countless hours of analysis and debugging, we attempted almost everything to enable the code to run on both older and newer hardware, even considering switching to another library. Unfortunately, we found ourselves at a dilemma. We had to choose between removing server-side image compression for everyone or officially discontinuing support for older hardware. We conducted a poll, and the results were clear: official support for old hardware should be discontinued. We reached out to the community, urging them to maintain an active fork of gamevault backend with compression completely removed. You can find it [here](license-contribute.md#gamevault-backend).

If you discover a solution that works for both older and newer hardware, we welcome a PR for this problem.

Until then, we're constrained by our current circumstances. Sorry.

### Game Downloads are slow

- Make sure the Clients Bandwidth Speed Limit is unset (0)
- Make sure the Servers Bandwidth Speed Limit is unset (`SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS`)
- Restart your Client and Server
- If your server is in your LAN, make sure you don't mistakenly access it from WAN
- Check your middle-mans: Proxies, VPNs and older Network Hardware could all affect the download speeds.
