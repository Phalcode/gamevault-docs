---
sidebar_position: 1
---

# Frequently Asked Questions

## Do I need my own server?

Yes. GameVault is self-hosted: you run the server on your own hardware or a
hosted virtual machine, and your clients connect to it. There is no official
hosted GameVault service.

If you only want to look around, use the demo server:

**URL**: [demo.gamevau.lt](https://demo.gamevau.lt)  
**Username**: demo  
**Password**: demodemo

Start with [server setup](../server/setup/setup.md) if you want your own
instance.

## Which client should I use?

- **GameVault 2** for Windows, Linux and macOS. It is the actively developed
  client and the only one with native Linux support. In a browser, the
  [Web UI](../clients/gamevault-2/web-ui.md) gives you the same interface
  without installing anything; it can download game files, but automatic
  installation, launching and playtime tracking need the desktop app.
- **Legacy Windows app** if you need a GameVault+ feature or the Microsoft Store
  distribution.

See [Choose your client](../getting-started/choose-your-client.md) for a
comparison, or the [feature comparison](../clients/feature-parity.md) for the
detailed matrix.

## Is GameVault 2 ready for daily use?

It is in public beta. The core loop (browse, download, install, launch) works,
but some features are missing and bugs are expected. GameVault 1 remains
available and feature-complete.

## Can I keep games installed with the legacy client?

No. GameVault 2 uses a different installation layout, so games have to be
downloaded and installed again. Your server data, account and playtime are
unaffected. See [Migrating from GameVault 1](../getting-started/migrating-from-gamevault-1.md).

## Does GameVault run on Linux and macOS?

Yes, through GameVault 2. Linux packages are `.AppImage` and `.deb`, macOS gets
an Apple Silicon `.dmg`. Running the legacy Windows client on Linux through Wine
is possible but unsupported.

## Can I download or launch games from the browser?

Not directly. The Web UI can download game files in the browser and hand a
download off to an installed GameVault 2 client. A browser cannot start local
processes, so automatic extraction, installation, launching and playtime
tracking require the [desktop app](../clients/gamevault-2/installation.md).

## Is GameVault free?

The server and clients are free to use. GameVault is source-available under
CC BY-NC-SA 4.0, not OSI open source. An optional
[GameVault+](../gamevault-plus/introduction.md) subscription adds extras and
funds development.

## Is GameVault+ available in GameVault 2?

Not yet. Cloud saves, multi-profile, themes and the integrations currently
require the legacy Windows app. Support for GameVault 2 is planned. The
[feature comparison](../clients/feature-parity.md#gamevault) lists every feature
and its tracking issue.

## How do I update?

GameVault 2 updates itself through its built-in updater. The legacy client
updates through the Microsoft Store, or manually if you installed it elsewhere.
See [GameVault 2 updates](../clients/gamevault-2/updating.md) and
[legacy updates](../clients/legacy-windows/updating.md).

## How do I hide my user name in screenshots?

Enable **Streamer / OPSEC Mode** under
[Settings → Appearance](../clients/gamevault-2/opsec-mode.md), or press
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd>.

## Where do I report bugs?

- Client: [gamevault-frontend](https://github.com/Phalcode/gamevault-frontend/issues)
- Server: [gamevault-backend](https://github.com/Phalcode/gamevault-backend/issues)
- Docs: [gamevault-docs](https://github.com/Phalcode/gamevault-docs/issues)

For setup problems, check [Troubleshooting](troubleshooting.md) and
[Beta Program and Update Channels](beta-program.md) first.
