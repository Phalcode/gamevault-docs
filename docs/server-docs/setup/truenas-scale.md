---
title: "Using TrueNAS Scale"
sidebar_position: 4
---

### TrueNAS Scale

[TrueNAS Scale](https://www.truenas.com/truenas-scale/) is an open-source, hyper-converged storage platform that combines the reliability of TrueNAS with the versatility of Linux, providing a unified solution for storage, virtualization, and containerization in a single, easy-to-manage system.

You can easily set up a GameVault Server by using our template from the [Truecharts Catalog](https://truecharts.org/manual/SCALE/guides/getting-started),
a community based catalog for TrueNAS Scale.

## Prerequisites

- TrueNAS Scale Server
- [Truecharts Catalog already set up](https://truecharts.org/manual/SCALE/guides/getting-started)

## Step 1: Install the Chart

Install the **gamevault-backend** chart.

:::note
gamevault-backend is pre-configured on your behalf with cloudnative-postgres as the default database which requires the prometheus-operator and cloudnative-pg operator to be installed prior.
:::

## Step 2: Configure the Chart

Set your `SERVER_ADMIN_USERNAME`.

You can enable these Menus to further configure your server:

- **Show Server Settings**
- **Show Games and Images Settings**
- **Show RAWG Server Settings**

Leave the Logs and Images storage options as PVC.

Games storage option can be safely set hostpath if not using using any shares or switch to NFS otherwise.

## Conclusion

You have now successfully set up your GameVault Server using TrueNAS Scale.

[Click here to continue.](setup.md#what-next)
