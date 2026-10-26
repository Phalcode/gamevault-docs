---
description: Update GameVault 2 through the built-in updater and recover when it is unavailable.
sidebar_position: 10
---

# Updating

GameVault 2 updates itself. On launch it checks the selected channel for a new
release and asks whether to download and install it. The download runs in the
background and installs on restart.

Settings, profiles and installed games stay in place across updates.

## Checking the current version

**Settings → About** shows the installed version, the channel and the last
update check. Include this information when you report a bug.

## Switching channels

GameVault 2 offers three channels: **stable** (default), **early-access** and
**unstable**. The picker lives under **Settings → About → Updates** and only
appears after developer tools are unlocked. A build defaults to the channel it
was created for.

[Early Access](../../early-access.md) describes the channels, how to switch and
the pre-release server images.

## Manual installations

If the updater is unavailable, for example in a build you compiled yourself,
install the new package over the old one:

- **Windows:** run the new `*-setup.exe`.
- **Linux:** replace the AppImage, or run
  `sudo apt install ./GameVault-*.deb`.
- **macOS:** open the new `.dmg` and replace the app in **Applications**.

## Troubleshooting

If the updater reports an error, check the log directory under
[data locations](data.md#application-data) and retry the download. A manual
install over the existing one is always possible and keeps your data.

## Next steps

- [Early Access and update channels](../../early-access.md)
- [Data locations](data.md)
