---
sidebar_label: FAQ
description: Answers about hosting, clients, GameVault+, updates, Early Access and supported platforms.
sidebar_position: 9
---

# Frequently asked questions

## Do I need my own server?

Yes. GameVault is self-hosted: you run the server on your own hardware or a
hosted virtual machine, and your clients connect to it. There is no official
hosted GameVault service.

If you only want to look around, use the demo server:

**URL**: [demo.gamevau.lt](https://demo.gamevau.lt)  
**Username**: demo  
**Password**: demodemo

Start with [server setup](server/setup/setup.md) if you want your own
instance.

## Which client should I use?

[GameVault 2](clients/gamevault-2/overview.md) for Windows, Linux and macOS, or
[GameVault 1](clients/gamevault-1/overview.md) if you need a GameVault+ feature
or the Microsoft Store distribution. The
[feature comparison](clients/feature-parity.md) has the full matrix.

## Is GameVault 2 ready for daily use?

It is in public beta. The core loop (browse, download, install, launch) works,
but some features are missing and bugs are expected. GameVault 1 remains
available and feature-complete.

## Can I keep games installed with GameVault 1?

No. GameVault 2 uses a different installation layout, so games have to be
downloaded and installed again. Your server data, account and playtime are
unaffected. See [Migrating from GameVault 1](getting-started/migrating-from-gamevault-1.md).

## Does GameVault run on Linux and macOS?

Yes, with GameVault 2. Linux packages are `.AppImage` and `.deb`; macOS gets an
Apple Silicon `.dmg`. GameVault 1 is Windows-only.

## Can I download or launch games from the browser?

The Web UI can download game files in the browser and hand a download off to an
installed GameVault 2 client. A browser cannot start local processes, so
automatic extraction, installation, launching and playtime tracking require the
[desktop app](clients/gamevault-2/installation.md).

## Is GameVault free?

The server and clients are free to use. GameVault is source-available under
CC BY-NC-SA 4.0, not OSI open source. An optional
[GameVault+](gamevault-plus/introduction.md) subscription adds extras and
funds development.

## Is GameVault+ available in GameVault 2?

Not yet; it requires GameVault 1. The
[feature comparison](clients/feature-parity.md#gamevault) lists every feature
with its tracking issue.

## How do I get Early Access builds?

Early Access is open to everyone, with no application or signup. The steps and
channels are described in
[Early Access and update channels](early-access.md).

## How do I update?

GameVault 2 updates itself through its built-in updater. GameVault 1
updates through the Microsoft Store, or manually if you installed it elsewhere.
See [GameVault 2 updates](clients/gamevault-2/updating.md) and
[GameVault 1 updates](clients/gamevault-1/updating.md).

## How do I hide my user name in screenshots?

Enable **Streamer / OPSEC mode** under
[Settings → Appearance](clients/gamevault-2/opsec-mode.md), or press
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd>.

## Where do I report bugs?

- Client: [gamevault-frontend](https://github.com/Phalcode/gamevault-frontend/issues)
- Server: [gamevault-backend](https://github.com/Phalcode/gamevault-backend/issues)
- Docs: [gamevault-docs](https://github.com/Phalcode/gamevault-docs/issues)

For setup problems, check [Troubleshooting](troubleshooting.md) and
[Early Access and Update Channels](early-access.md) first.
