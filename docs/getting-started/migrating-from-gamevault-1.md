---
sidebar_position: 4
---

# Migrating from GameVault 1

GameVault 2 (codename RockWhistle) is a new client, not an update of the legacy
Windows app. Your server, account and library stay the same; the client on your
computer changes.

## What carries over

- Your server and account. Sign in with the same credentials.
- The game library, metadata, user data and playtime recorded by the server.
- GameVault+ subscription status.

## What does not carry over

GameVault 2 uses a different layout for game installations. Games installed
with the legacy client cannot be reused, so they have to be downloaded and
installed again in GameVault 2.

Local client settings (download folders, window state, themes) are not
imported either. Look through the [settings reference](../clients/gamevault-2/settings.md)
once after installing.

## Recommended migration

1. Keep the legacy Windows app installed for now.
2. Install GameVault 2 next to it. Both clients can use the same server.
3. Download and install the games you actively play in GameVault 2.
4. Once everything works, uninstall the legacy app and remove its old
   `Downloads` and `Installations` folders to free up space.

If disk space is tight, migrate one game at a time and delete the legacy
installation after the new one is verified.

## GameVault+ features

GameVault+ is currently available in the legacy Windows app only. Cloud saves,
multi-profile, themes and the integrations are still missing from GameVault 2.
If you depend on them, keep using the legacy client until they arrive.

The [feature comparison](../clients/feature-parity.md#gamevault) lists every
GameVault+ feature with its tracking issue.

## Reporting problems

Bugs in GameVault 2 belong in the
[gamevault-frontend issue tracker](https://github.com/Phalcode/gamevault-frontend/issues).
Server-side problems go to
[gamevault-backend](https://github.com/Phalcode/gamevault-backend/issues).
