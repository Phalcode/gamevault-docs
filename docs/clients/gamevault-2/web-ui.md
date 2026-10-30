---
description: "Use GameVault 2 in a browser: sign in, browse the library and download game files."
sidebar_position: 5
---

# Web UI

The Web UI is GameVault 2 running in your browser. The server serves the same
interface as the desktop app, so the library, game pages, settings, community
and administration pages look and behave the same. What a browser cannot do is
local automation: extraction, installation, launching and playtime tracking.

| Capability                             | Desktop app       | Web UI                       |
| -------------------------------------- | ----------------- | ---------------------------- |
| Browse library, search, filters        | ✅                | ✅                           |
| Game pages, media, metadata            | ✅                | ✅                           |
| Progress, community, profiles          | ✅                | ✅                           |
| Administration                         | ✅                | ✅                           |
| Streamer / OPSEC mode                  | ✅                | ✅                           |
| Download game files                    | ✅ download queue | ✅ direct browser download   |
| Playtime tracking while playing        | ✅                | ❌                           |
| Extract and install games              | ✅ automatic      | ❌ manual                    |
| Launch games                           | ✅                | ❌                           |
| Hand off a download to the desktop app | n/a               | ✅ via `gamevault://install` |
| Local folders, shortcuts, tray         | ✅                | ❌                           |
| Updater                                | ✅ built-in       | ⚠️ via the server admin page |

The Web UI fits browsing your library from another device, checking what your
community is playing, or doing administrative work without installing anything.
If you need installation or playtime tracking, use the
[desktop app](installation.md).

## Opening the Web UI

Enter your server's address in a browser, for example
`http://192.168.0.15:8080`, and sign in with your GameVault account.

## Availability and configuration

The Web UI is served by GameVault Server 16 and later and is enabled by default.
It is configured with the `WEB_UI` variables on the
[configuration page](../../server/configuration.md#web-ui).

## Which Web UI version the server serves {#version-selection}

The server does not bundle a frontend build. On startup, and whenever an admin
triggers a Web UI update, it downloads `gamevault-frontend.zip` from the
[GameVault 2 releases](https://github.com/Phalcode/gamevault-frontend/releases)
and unpacks it into `frontend/` in the config volume (`VOLUMES_CONFIG`,
`/config` by default). The server needs internet access to GitHub the first time
a version is fetched. A downloaded build is reused on later restarts while the
`.version` file in that folder matches the version the server selected.

### Automatic selection

Without `WEB_UI_VERSION`, the server serves the newest stable release with the
same major version as the server. The patch and minor levels are not compared,
so a new feature release reaches the Web UI without a matching server release.
Examples:

| Server version | Available stable releases | Served version | Reason                                               |
| -------------- | ------------------------- | -------------- | ---------------------------------------------------- |
| 17.1.1         | 17.2.0, 17.1.0            | 17.2.0         | Newest release of the server's major version         |
| 17.2.0         | 17.2.0, 17.1.0            | 17.2.0         | Same as above                                        |
| 17.1.1         | 17.0.0                    | 17.0.0         | Only release of the major version                    |
| 18.0.0         | 17.2.0, 17.1.0            | cached 17.x    | No 18.x release yet, the cached build stays in place |
| 17.1.1         | GitHub API unavailable    | cached build   | The last working build keeps being served            |
| 17.1.1         | `unstable` only           | cached build   | Pre-releases are never selected automatically        |

The release list comes from the GitHub API. When it cannot be read (GitHub down,
API rate limit) or contains no release for the server's major version, the
server keeps the build that is already cached and retries on the next restart or
admin restart. It never replaces a working Web UI with a development build on
its own. A fresh installation without a cache stays without a Web UI until a
release for its major version exists, or until an admin pins one.

The pre-release tags `unstable` and `early-access` are only used when you set
`WEB_UI_VERSION` to one of them. Drafts and pre-releases are ignored during the
automatic selection, even when their tag is valid semver.

:::note Compatibility contract
The major version is the compatibility boundary. The desktop app talks to every
server of the same major version, and the Web UI follows the same rule. A client
minor release has to work against every server of its major version. If a
release needs a new server API, it belongs to a new major version, which also
stops older servers from serving it automatically.
:::

### Pinned selection

Set `WEB_UI_VERSION` to a release tag to skip the automatic selection, for
example `WEB_UI_VERSION=17.2.0`. The value must be an existing tag in the
frontend repository, because the server downloads
`https://github.com/Phalcode/gamevault-frontend/releases/download/<tag>/gamevault-frontend.zip`
directly. Pinning changes the served Web UI only and leaves the server version
alone.

`WEB_UI_VERSION=unstable` and `WEB_UI_VERSION=early-access` serve those moving
pre-release builds, which update with every push to the matching branch. Use
them for testing only.

## Updating the Web UI

The Web UI has no updater of its own. An administrator opens the administration
page and uses **Update & Restart Web UI**. The server clears the cached build,
downloads whatever the rules above select and serves it immediately. Restarting
the container runs the same check, so a server update brings the matching Web UI
with it.

## Next steps

- [Install the desktop app](installation.md) for installation and playtime
  tracking
- [Settings](settings.md)
