---
description: Install GameVault 1 from the Microsoft Store or with the manual installer.
sidebar_position: 2
---

# Installing on Windows

GameVault 1 requires Windows 10 or 11. It cannot be installed on Linux or macOS;
use [GameVault 2](../gamevault-2/overview.md) there.

## Requirements

- Windows 10 or 11. GameVault 1 cannot be installed on Linux or macOS; use
  [GameVault 2](../gamevault-2/overview.md) there.
- The Microsoft Store for the recommended installation.

## Installation

### Microsoft Store (recommended)

Install GameVault from the
[official Microsoft Store](https://www.microsoft.com/store/apps/9PCKDV76GL75).

Experienced users can also run:

```powershell
winget install gamevault
```

The Store build updates itself; see [Updating](updating.md).

### Pre-built artifacts from GitHub

Download the latest build from
[gamevault-app releases](https://github.com/Phalcode/gamevault-app/releases/latest).

:::note Antivirus and SmartScreen
Antivirus software or SmartScreen may block the binary because it is compiled
without a code-signing certificate. Choose **More details → Run anyway**.
:::

### Compile from source

1. Install Visual Studio (2022 recommended) with the **.NET desktop
   development** workload and .NET 8.0.
2. Clone the [gamevault-app](https://github.com/Phalcode/gamevault-app)
   repository.
3. Open the solution, choose **Release** and build the `gamevault` project.
4. Use the output files.

### Extract from the .appxbundle

1. Open [store.rg-adguard.net](https://store.rg-adguard.net).
2. Paste `https://www.microsoft.com/store/apps/9PCKDV76GL75` into the search
   field.
3. Download the current `.appxbundle`.
4. Extract it, then extract `ReleasePackage_[VERSION]_x64.appx`.

:::note Manual updates
Everything outside the Microsoft Store is less supported and has to be updated
by hand; see [Updating](updating.md).
:::

## Verify

After the first start, the profile selection opens; continue with
[Connect to a server](../../getting-started/connect-to-server.md).

## Next steps

- [Usage](using.md)
- [Settings](settings.md)
- [Data locations](data.md)
