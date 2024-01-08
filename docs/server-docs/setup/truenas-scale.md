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

## Additional Info

### Stopping the Server

To stop the server in TrueNAS Scale, you can click on the gamevault-backend app and then edit the app; set the replicas to 0 or use the ["stop-all"](https://truecharts.org/news/stop-all/) feature. When editing an application, checking the "stop-all" box and saving the changes accomplishes this. If you're working with applications based on CNPG (cloudnative-postgres), the same methods apply, ensuring a safe shutdown.

![stop-all](/img/docs/setup/scale/gamevault-stop-all.png)

If you prefer using [Heavyscript](https://github.com/Heavybullets8/heavy_script), a specialized script for TrueNAS Scale, it offers a secure way to stop apps, including those utilizing CNPG. By default, Heavyscript employs the ["stop-all"](https://truecharts.org/news/stop-all/) function to ensure a graceful shutdown.

Simple commands for heavyscript:

stop: ```heavyscript app -x gamevault-backend```

start: ```heavyscript app -s gamevault-backend```

Keep in mind that TrueNAS Scale does not support third-party operators. Consequently, relying on the stop button within the TrueNAS Scale GUI, often considered an IX (iXsystems) hack in the Kubernetes space, is not recommended. For a dependable and supported approach, opt for the replica settings, "stop-all" checkbox, or leverage Heavyscript.

### Reading the Logs

Navigate to "Apps" and choose the GameVault-backend App you have created.

In workloads, select any of the white boxes with lines icon; thats the logs button.

![gamevault-workloads-logs-1](/img/docs/setup/scale/gamevault-workloads-logs-1.png)

You have to select the correct main pod and container

![gamevault-workloads-logs-2](/img/docs/setup/scale/gamevault-workloads-logs-2.png)

Once you selected the main pod and container pod; you should see the logs for the app

![gamevault-workloads-logs-3](/img/docs/setup/scale/gamevault-workloads-logs-3.png)

You can then download the logs, but you might have to reselect the correct pods again when downloading the logs.

![gamevault-workloads-logs-4](/img/docs/setup/scale/gamevault-workloads-logs-4.png)
