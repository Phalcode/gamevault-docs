---
title: "Playnite"
---

GameVault+ integrates with [Playnite](https://playnite.link) through the [Playnite Library Extension](https://playnite.link/addons.html#GameVault_fab8be77-18ab-4e6c-ad3d-89097b492d74). It lets you browse, launch, and install GameVault titles from Playnite.

![GameVault+ Playnite Integration Showcase](/img/plus/integrations/playnite/showcase.png)

## Setup Guide

### Prerequisites

Before you start, make sure you are [logged in to GameVault+](../client-setup.md) in the GameVault client.

### **Download the Extension**

- Open the **Add-ons...** menu in Playnite using the F9 key or the context menu on the top left corner.
- Select **Browse** -> **Libraries**
- Search for GameVault and download the **GameVault Library Extension**.
- Restart Playnite if necessary.

![Extension Browser Screenshot](/img/plus/integrations/playnite/download.png)

:::note Alternative Download Methods
You can also download the extension from our [GitHub Releases](https://github.com/Phalcode/gamevault-playnite-integration/releases) or the [Playnite website](https://playnite.link/addons.html#GameVault_fab8be77-18ab-4e6c-ad3d-89097b492d74) directly.
:::

### **Communication with the Client**

As of client version 1.17.1 and extension version 1.2, all communication goes through the Client API or the `gamevault://` protocol.
You do not need a separate Playnite login. The extension reads the game list from the server linked to the currently logged-in GameVault client profile.