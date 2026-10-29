---
description: "Reference for every GameVault 2 setting: downloads, appearance, updates and privacy."
sidebar_position: 8
---

# Settings

GameVault 2 groups its settings into categories in the left sidebar. Some
settings exist only in the desktop app; the Web UI shows the subset that makes
sense in a browser.

![Settings overview listing appearance, sound, downloads, games, startup, privacy, about and developer tools](/img/screenshots/2026-10-26/Settings/Main.webp "The settings overview, with the search box above the categories")

## Downloads

![Downloads settings with the location list, speed limit and the after-download switches](/img/screenshots/2026-10-26/Settings/Downloads.webp)

- **Download locations**: root folders for downloads and installations; the
  per-game structure is described under [data locations](data.md#games-and-downloads).
- **Download speed limit**: bandwidth cap in KB/s, `0` means unlimited.
- **Auto-extract downloads**: unpack archives right after download.
- **Auto-install games**: start installers or copy portable games
  automatically, and mark files executable where needed.
- **Auto-delete source files**: remove archives and extracted files after a
  successful installation.
- **Clear image cache**: drop cached covers and backgrounds.

## Appearance

- **Theme**: light, dark or follow the system.
- **Zoom**: scale the interface.
- **Streamer / OPSEC mode**: mask user names, emails and the server URL; see
  [OPSEC mode](opsec-mode.md).
- **Smooth scrolling** and **hardware acceleration**: rendering switches for
  Linux/WebKitGTK systems.

![Appearance settings in the light theme](/img/screenshots/2026-10-26/Settings/Appearance_Lightmode.webp "Theme, zoom and OPSEC mode, here in the light theme")

## Sound

Master volume and per-event sound effects. A test button previews the current
volume.

![Sound settings with the volume slider at 70 percent and a test button](/img/screenshots/2026-10-26/Settings/Sound.webp)

## Startup

- **Launch GameVault on computer startup**.
- **Minimize to system tray on startup**: stays in the tray only when the
  autostart entry opens GameVault. Starting GameVault yourself always shows the
  window.

![Startup settings with the two toggles for autostart and tray mode](/img/screenshots/2026-10-26/Settings/Startup.webp)

## Games

- **Minimize when launching a game**: hide GameVault while a game runs and
  restore it on exit.
- **Ignore list**: files and folders the client must skip entirely.
- **Launch logs**: open the log window automatically and browse previous
  launches. Useful for Wine/Proton problems; the files are listed under
  [data locations](data.md#application-data).
- **Wine/Proton prefix directory** (Linux only): base folder for the isolated
  prefix of each game.

![Games settings with the launch toggle, the ignored executables list and the launch log switch](/img/screenshots/2026-10-26/Settings/Games.webp)

## Privacy

- **Usage analytics**: anonymous usage statistics and error reports. Off stops
  every request immediately, and the choice is kept in the app settings, so it
  survives updates.

## About

Version, license, third-party licenses, system information and, in the desktop
app, the **Updates** section with the update channel and auto-update status.

## Developer tools

Developer tools must be unlocked before the update channel picker appears. They
contain diagnostics for bug reports: build info, settings dump, verbose
diagnostic logging, toast and download previews, and the WebView devtools.

![Developer tools with build info, simulated download states and the settings dump](/img/screenshots/2026-10-26/Settings/DeveloperTools.webp)

:::note Web UI
The browser build shows **Simulate desktop app** instead of desktop-only
settings, which is handy for checking layouts without installing the app.
:::

## Next steps

- [Updating](updating.md): update channels and manual updates
- [Data locations](data.md)
