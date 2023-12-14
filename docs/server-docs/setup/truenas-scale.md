---
title: "Using TrueNAS Scale"
sidebar_position: 4
---

[TrueNAS Scale](https://www.truenas.com/truenas-scale/) is an open-source, hyper-converged storage platform that combines the reliability of TrueNAS with the versatility of Linux, providing a unified solution for storage, virtualization, and containerization in a single, easy-to-manage system.

Setting up a GameVault Server on TrueNAS Scale is just a click away by using our template from the [Truecharts Catalog](https://truecharts.org/manual/SCALE/guides/getting-started),
a community based catalog for TrueNAS Scale.

## Prerequisites

- a running TrueNAS Scale Server!
- add the TrueCharts[Catalog](https://truecharts.org/manual/SCALE/guides/getting-started)
- Install the following [operators](https://truecharts.org/manual/FAQ#operators) from TrueCharts; **prometheus-operator** and **cloudnative-pg**.

## Step 1: Log in to your TrueNAS Scale Dashboard

![Step 1](/img/docs/setup/scale/scale-login.png)

## Step 2: Navigate to the catalog Page in TrueNas Scale

Go to **apps** -> **discover** -> **catalogs**.

![Step 2](/img/docs/setup/scale/scale-add-truecharts-catalog.png)

Validate that TrueCharts catalog was added to the server, if not refer back to the Prerequisites section.

## Step 3: Navigate to Apps and Disover Page

Go to **apps** -> **discover** and search for **gamevault-backend**

![Step 3](/img/docs/setup/scale/scale-discover-gamevault-app-search.png)

## Step 4: Configure and Install gamevault-backend

![Step 4](/img/docs/setup/scale/scale-discover-gamevault-app-install.png)

![Step 4a](/img/docs/setup/scale/scale-configure-gamevault-app-install-1.png)

Scroll down to **App Configuration**.

Set your `Admin User` and `Admin Password`.

![Step 4b](/img/docs/setup/scale/scale-configure-gamevault-app-install-3.png)

:::note 

Leave the Logs and Images storage options as PVC.

:::

Games storage option can be safely set hostpath if not using using any shares or switch to NFS otherwise; please follow the [Dataset and Share Setup](https://truecharts.org/manual/SCALE/guides/dataset) guide.


![Step 4c](/img/docs/setup/scale/scale-configure-gamevault-app-install-3.png)

Scroll down to **Documentation** and click install, wait a few minutes and the app should deploy!

![Installed](/img/docs/setup/scale/scale-configured-gamevault-app-installed.png)


## Conclusion

You have now successfully set up your GameVault Server using TrueNAS Scale.

[Click here to continue.](setup.md#what-next)
