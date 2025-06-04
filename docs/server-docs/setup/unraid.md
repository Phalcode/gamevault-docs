---
title: "Using UNRAID"
sidebar_position: 5
---

Unraid is a storage operating system that allows users to create a centralized and scalable network-attached storage (NAS) solution, utilizing a unique array of drives with different sizes and types while offering the flexibility to run virtual machines and Docker containers.

You can easily set up a GameVault Server by using one of our templates from the Unraid Community Applications Store.

## Prerequisites

- UNRAID Server Running
- [Community Applications Plugin installed](https://forums.unraid.net/topic/38582-plug-in-community-applications)

## Step 1: Setting up the Database

Log into your Unraid dashboard and navigate to your apps section of the dashboard and search for the offical `postgresql17` Community Application.

## Step 2: Install POSTGRES

Using the default configuration making sure you add the following entries:

```yaml
POSTGRES_USER: gamevault
POSTGRES_PASSWORD: RANDOMPASSWORD
POSTGRES_DB: gamevault
```
Make sure you remember the password and port you set we will use this in step 3

![Step 2](/img/docs/setup/unraid/unraid2.png)

## Step 3: Setting up your GameVault Backend server

Search for `gamevault-backend` on the Unraid app store making sure to click the one without the SQLITE in the title. 

Click install

![Step 3](/img/docs/setup/unraid/unraid3.png)

### Alternative Step 3: Running without a PostgreSQL Database

We don't recommend it but you can run GameVault without a PostgreSQL Database too by instead using the `GameVault-Backend-SQLITE` template by `phalcode` in Step 2.


## Step 4: Configure install

Using the password and port fill out the information that is required and click apply at the bottom. 

![Step 4](/img/docs/setup/unraid/unraid4.png)


Your GameVault should now be available at `http://tower.local:8080/` or `HOSTNAME:PORT` if you changed your hostname or port.

## Conclusion

You have now successfully set up your GameVault Server using UNRAID.

[Click here to continue.](setup.md#what-next)

## Additional Info

### Stopping the Server

Navigate to "Docker" tab and left click the GameVault app icon you have created.

Click on "Stop".


### Reading the Logs

Navigate to "Docker" tab and left click the GameVault app icon you have created.

Click on "Logs".

This should bring a pop-up window of the currently logs of the server.
