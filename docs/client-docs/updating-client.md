---
sidebar_position: 3
---

# Updating the Client

The process for updating the app depends on the client and the installation source.

## Cross-Platform Client

:::warning Early Access
The cross-platform client is still in **early access**. It updates itself through a built-in updater; expect changes and occasional breakage between releases.
:::

The cross-platform client (Windows, Linux, macOS) updates itself through a built-in updater. When you launch it, it checks for available updates on the currently selected channel and prompts you to download and install the new version.

If you installed the client manually (e.g. from GitHub releases) and your build has no updater, download the new installer from the [GitHub releases page](https://github.com/Phalcode/gamevault-frontend/releases) and install it over the previous version.

## Legacy Windows App

### Microsoft Store

If you obtained the app from the Microsoft Store, we're pleased to inform you that our Client app features an automatic update functionality through the Microsoft Store. When you launch the app and observe the spinning logo, it automatically checks for available updates. If a new version is detected, the app prompts you to install it. After the update is installed, the application will close, and you'll need to manually restart it. Once restarted, you'll be using the most recent version.

### Other Sources

If you acquired the app from a different source, such as by self-compiling, extracting it from the .appxbundle, or downloading the binaries from GitHub, it becomes your responsibility to stay updated with the latest releases and perform the installations.

Be sure to [join our Discord community](https://discord.gg/NEdNen2dSu) and watch our Github Projects to stay informed about the latest advancements.

## Update Channels

The cross-platform client supports three update channels:

- **stable**: the latest stable release (default). Built from the `master` branch.
- **early-access**: pre-release builds published from the `early-access` branch.
- **unstable**: builds published from the `develop` branch.

The desktop client defaults to the channel its build was created for. Early Access and Unstable channels are only offered in the channel picker while Developer Tools are unlocked.