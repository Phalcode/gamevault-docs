---
sidebar_position: 4
---

# Updating GameVault 2

GameVault 2 updates itself through a built-in updater. On launch it checks the
selected channel for a new release and asks whether to download and install it.
The update downloads in the background and installs on restart.

## Update channels

- **stable** — the latest stable release (default). Built from the `master`
  branch.
- **early-access** — pre-release builds from the `ea` branch.
- **unstable** — builds from the `develop` branch.

A build defaults to the channel it was created for. Early Access is open to
everyone: unlock **Developer Tools** in **Settings → About** by clicking the
version number five times, then pick the channel under **Settings → About →
Updates**. No application or signup is needed. See
[Early Access and Update Channels](../../help/early-access.md).

## Manual installations

If the updater is unavailable (for example in a build you compiled yourself),
install the new package over the old one:

- **Windows:** run the new `*-setup.exe`.
- **Linux:** replace the AppImage, or `sudo apt install ./GameVault-*.deb`.
- **macOS:** open the new `.dmg` and replace the app in **Applications**.

Settings, profiles and installed games stay in place across updates.

## Checking the current version

**Settings → About** shows the installed version, the channel and the last
update check. Include this information when you report a bug.
