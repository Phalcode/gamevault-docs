---
sidebar_position: 99
---

# Troubleshooting

Below, we will gradually list some common issues and corresponding solutions to help you maximize the potential of your app. If you can't find a solution to your problem here, feel free to open a ticket on our Github board or seek assistance via [Discord](https://discord.gg/NEdNen2dSu). Alternatively, you may also directly [email our company address](mailto:contact@phalco.de) if the issue is confidential.

## Common Problems and Solutions

### Incorrect Game Mapping

- Refer to [this](./client-docs/how-to-use.md#modifying-games) for instructions on how to modify games.

### Unable to Connect to Server / 500 Internal Server Error

- Review your server log for error details.
- Examine the error log of the client app.
- Ensure that you use the correct protocol (http or https) in the connection string, particularly if your server doesn't support SSL.
- If you have disabled authentication in your server configuration, make sure to include the authentication header for user-specific requests. [See here](./server-docs/configuration.md) for more information.

### Server wont save images

- Review your server log for error details.
- Check if the user you run the gamevault-backend with, has the required permissions for its mounted volume folders.

### User Registration Activation

- Find instructions on granting privileges to your first user in [this](./server-docs/user-management.md#initial-setup) guide.

### Games Not Appearing in the List

- Clear the Searchbox and Press the Search button
- Check the server log and index logs for any errors. It's likely that [your file names are incorrect](./server-docs/structure.md).
- Check the Filesystem Permissions

### Missing Box Arts

- Verify if [the Google API is disabled in your server configuration](./server-docs/configuration.md).

### Lack of Metadata in Games

- If you haven't set up RAWG yet, follow [these steps](./server-docs/indexing-and-metadata.md#rawg-api-key).
- Monitor your server logs.
- Check the RAWG-API Dashboard for any requests associated with your API Key.
- Verify if [the RAWG API is disabled in your server configuration](./server-docs/configuration.md).
- Verify if [your file names are correct](./server-docs/structure.md)

### Forgot my Admin Password

- Refer to [this](./server-docs/user-management.md#recovering-access-to-admin-user) for instructions on how to regain access to your admin account.

### GameVault Backend: SIGILL / Illegal Instruction (Core Dumped)

Phew. Tough one. Apologies, but your CPU is too dated to run the official gamevault-backend image. The reason is that [our image Compression library "sharp" relies on another library called "libvips," which only functions on processors built after ~2011](https://github.com/lovell/sharp/issues/3743), supporting the AVX and SSE 4.2 Instruction set. We've already encountered a couple users facing this issue. Despite countless hours of analysis and debugging, we attempted almost everything to enable the code to run on both older and newer hardware, even considering switching to another library. Unfortunately, we found ourselves at a dilemma. We had to choose between removing server-side image compression for everyone or officially discontinuing support for older hardware. We conducted a poll, and the results were clear: official support for old hardware should be discontinued. We reached out to the community, urging them to maintain an active fork of gamevault backend with compression completely removed, and the latest update suggests that people are working on it.

- In case you manage such a community fork that addresses this issue, we'd gladly promote it in this documentation.
- If you discover a solution that works for both older and newer hardware, we welcome a PR for this problem.

Until then, we're constrained by our current circumstances. Sorry.
