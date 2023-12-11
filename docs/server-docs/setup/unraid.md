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

Install and configure the offical `postgresql15` Community Application by `postgres` on the Community Applications store.

Configuration:

```yaml
POSTGRES_USER: gamevault
POSTGRES_PASSWORD: RANDOMPASSWORD
POSTGRES_DB: gamevault
```

### Alternative Step 1: Running without a PostgreSQL Database

We don't recommend it but you can run GameVault without a PostgreSQL Database too by instead using the `GameVault-Backend-SQLITE` template by `phalcode` in Step 2.

## Step 2: Installing the Template

Find the template for `GameVault-Backend` by `phalcode` on the Community Applications store and fill out the template with your folder paths including your database configuration.

Your GameVault should now be available at `http://tower.local:8080/` or `HOSTNAME:PORT` if you changed your hostname or port.

## Conclusion

You have now successfully set up your GameVault Server using UNRAID.

[Click here to continue.](setup.md#what-next)
