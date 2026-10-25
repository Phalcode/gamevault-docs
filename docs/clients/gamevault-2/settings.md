---
description: "Reference for every GameVault 2 setting: downloads, appearance, updates and privacy."
sidebar_position: 3
---

# Settings Reference

Settings are grouped into categories in the left sidebar. Some settings only
exist in the desktop app; the Web UI shows the subset that makes sense in a
browser.

## Downloads

- **Download locations** — root folders for downloads and installations. The
  client stores each game and version in its own subfolder; see
  [Using GameVault](using.md#file--folder-structure).
- **Download speed limit** — bandwidth cap in KB/s, `0` means unlimited.
- **Auto-Extract Downloads** — unpack archives right after download.
- **Auto-Install Games** — start installers or copy portable games
  automatically, and mark files executable where needed.
- **Auto-Delete Source Files** — remove archives and extracted files after a
  successful installation.
- **Clear image cache** — drop cached covers and backgrounds.

## Appearance

- **Theme** — light, dark or follow the system.
- **Zoom** — scale the interface.
- **Streamer / OPSEC Mode** — mask user names, emails and the server URL; see
  [OPSEC mode](opsec-mode.md).
- **Smooth scrolling** and **hardware acceleration** — rendering switches for
  Linux/WebKitGTK systems.

## Sound

Master volume and per-event sound effects. A test button previews the current
volume.

## Startup

- **Launch GameVault on Computer Startup**.
- **Minimize to System Tray on Startup**.

## Games

- **Minimize when launching a game** — hide GameVault while a game runs and
  restore it on exit.
- **Ignore List** — files and folders the client must skip entirely.
- **Launch logs** — open the log window automatically and browse previous
  launches. Useful for Wine/Proton problems.
- **Wine/Proton Prefix Directory** (Linux only) — base folder for the isolated
  prefix of each game.

## Privacy

- **Usage analytics** — anonymous usage statistics. Off means no telemetry.

## About

Version, license, third-party licenses, system information and, in the desktop
app, the **Updates** section with the update channel and auto-update status.

## Developer Tools

Developer Tools must be unlocked before the update channel picker appears.
They contain diagnostics for bug reports: build info, settings dump, verbose
diagnostic logging, toast and download previews, and the WebView devtools.

:::note Web UI
The browser build shows **Simulate Desktop App** instead of desktop-only
settings, which is handy for checking layouts without installing the app.
:::
