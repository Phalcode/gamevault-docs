---
sidebar_position: 1
id: toc
---

# Setting up a GameVault Server

There are multiple ways to set up a GameVault Server. You can choose one from below that suits you.

If you have any trouble setting up a GameVault server don't give up! There are a lot of helpful people on our [discord](https://discord.gg/NEdNen2dSu) that can help you.

## Supported Methods

- [Docker Compose](./docker-compose.md)
- [Caprover](./caprover.md)
- [TrueNAS Scale](./truenas-scale.md)
- [UNRAID](./unraid.md)
- [Synology Container Manager](./synology-container-manager.md)
- [TrueNAS Scale - Legacy](./truenas-scale-legacy.md)
- [Native](./native.md)

### More Methods

We want to add more setup options to our lineup! Each system has its own way of doing things, and it can take some time and experience to set up new options just right.

We're looking for people who are excited to help out. Since we don't run a GameVault Server on every system, we need your help to add new setup options! If you're interested in joining and setting up options for any system, we'd love to have you contribute to this documentation [on Github](https://github.com/Phalcode/gamevault-docs). Together, we can make our platform easier for everyone to use.

## What Next?

**Congratulations! 🥳**

You now should have a server up and running. To further set up and start using server, you can follow these steps:

1. **Configure your server:** Customize the server settings to meet your specific needs. Refer to the [configuration guide](../configuration.md) for detailed instructions.

2. **Add some games:** Prepare your game files in the required format for GameVault to identify and install them correctly. Read the [structure chapter](../structure.md) for important information. Once ready, proceed to [add your games](../adding-games.md).

3. **Create your first user:** Set up an admin user account to gain full administrative access to the application. Refer to the [user management guide](../user-management.md) for instructions on setting up the first user.

4. **Enhance your games with metadata:** Connect your server to a metadata source such as IGDB to enrich your games with metadata. Learn how to do this in the [metadata chapter](../metadata-enrichment/metadata.md).

5. **(OPTIONAL) Make your server accessible outside your Local Area Network**: If you want to make the application accessible beyond your local network, for instance, for your friends or yourself to connect to it remotely, you'll need to configure an HTTPS reverse proxy and potentially make adjustments to firewall rules. We recommend utilizing [NGINX Proxy Manager](https://nginxproxymanager.com) for this purpose. Numerous guides are available on how to set up a reverse proxy for a Docker container, so we won't cover it in detail in this guide.

Enjoy your new gaming experience with GameVault!
