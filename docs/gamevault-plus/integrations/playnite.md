---
title: "Playnite"
---

**GameVault+** integrates seamlessly with **[Playnite](https://playnite.link)** using our [**Playnite Library Extension**](https://playnite.link/addons.html#GameVault_fab8be77-18ab-4e6c-ad3d-89097b492d74). Enjoy the convenience of browsing, launching, and installing your games directly from Playnite, just as you're used to!

![GameVault+ Playnite Integration Showcase](/img/plus/integrations/playnite/showcase.png)

## Setup Guide

### Prerequisites

Before starting, make sure you're [logged in to **GameVault+**](../client-setup.md) within your GameVault application.

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

As of client version 1.17.1 and extension version 1.2, all communication occurs exclusively via the Client API or the gamevault:// protocol.
This eliminates the need for a separate login, as the game list is retrieved directly from the server associated with the currently logged-in GameVault Client profile.