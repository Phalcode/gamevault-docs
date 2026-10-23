---
sidebar_position: 2
---

# Installing GameVault 1

**Requirement:** Windows 10 or 11 with Microsoft Store installed.

## Microsoft Store (recommended)

Install GameVault from the
[official Microsoft Store](https://www.microsoft.com/store/apps/9PCKDV76GL75).

Experienced users can also run:

```powershell
winget install gamevault
```

Continue with [Connect to a server](../../getting-started/connect-to-server.md).

## Alternative installations

Every option outside the Microsoft Store is less supported and needs manual
updates. See [Updating](updating.md).

### Pre-built artifacts from GitHub

Download the latest build from
[gamevault-app releases](https://github.com/Phalcode/gamevault-app/releases/latest).

:::note Antivirus and SmartScreen
Antivirus software or SmartScreen may block the binary because it is compiled
without a code-signing certificate. Choose **More Details → Run Anyway**.
:::

### Linux via Wine

There is no native GameVault 1 build for Linux. The community guide for Wine and
Bottles is [here](linux-wine.md). Native Linux support exists in
[GameVault 2](../gamevault-2/linux.md).

### Compile from source

1. Install Visual Studio (2022 recommended) with the **.NET Desktop
   Development** workload and .NET 8.0.
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
