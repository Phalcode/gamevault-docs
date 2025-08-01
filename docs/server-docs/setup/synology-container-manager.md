---
title: "Using Synology Container Manager"
sidebar_position: 6
---

Synology Container Manager is a software application developed by Synology Inc. for their network-attached storage (NAS) devices. It provides users with a graphical user interface for managing Docker containers, allowing them to deploy, manage, and monitor containerized applications on their Synology NAS.

In this guide, you will learn how to set up GameVault on such a system using Docker Compose.

:::note Contribute to this page!
Unfortunately, none of our team members uses Synology Hardware and this guide was written blindly. The GameVault Docs live from contributions. If you use a Synology system kindly contribute some screenshots to this page. Thanks!
:::

## Prerequisites

- Access to a Synology NAS with [Container Manager](https://www.synology.com/dsm/packages/ContainerManager) installed. See supported devices [here](https://www.synology.com/dsm/packages/ContainerManager).

## Step 1: Create Necessary Folders

Begin by creating directories for the containers to utilize.  
Open `File Station` and create the following folders:

- `/docker/projects/gamevault-compose`
- `/docker/gamevault`
- `/docker/gamevault/files`
- `/docker/gamevault/media`
- `/docker/gamevault/database`

![Step 1](/img/docs/setup/synology/step1.png)

## Step 2: Set Up a Project in Container Manager

1. Open `Container Manager` from your Synology NAS.
2. Click on 'Project' and then 'Create'
3. Fill in the following details:
   - Project Name: `gamevault`
   - Path: `/docker/projects/gamevault-compose`
   - Source: Select 'Create docker-compose.yml'

## Step 3: Create Docker Compose File

Copy and paste the following code into the editor:

```yml
services:
  gamevault-backend:
    image: phalcode/gamevault-backend:latest
    restart: unless-stopped
    environment:
      DB_HOST: db
      DB_USERNAME: gamevault
      DB_PASSWORD: YOURPASSWORDHERE
    volumes:
      - /volume1/docker/gamevault/files:/files
      - /volume1/docker/gamevault/media:/media
    ports:
      - 8080:8080/tcp
  db:
    image: postgres:17
    restart: unless-stopped
    environment:
      POSTGRES_USER: gamevault
      POSTGRES_PASSWORD: YOURPASSWORDHERE
      POSTGRES_DB: gamevault
    volumes:
      - /volume1/docker/gamevault/database:/var/lib/postgresql/data
```

:::note
Replace the variables (`YOURPASSWORDHERE`, `etc.`), as well as the folder paths with what suits you, of course. You can change the port on the left side of the colon aswell.
:::

:::warning
Password (YOURPASSWORDHERE) can't be empty! else the database will not work. If you don't want a password, consider running without a PostgreSQL Database (Not recommended)
:::

![Step 3](/img/docs/setup/synology/step3.png)

### Alternative Step 3: Running without a PostgreSQL Database

We don't recommend it, but you can run GameVault without a PostgreSQL Database too using the following configuration:

```yaml
services:
  gamevault-backend:
    image: phalcode/gamevault-backend:latest
    restart: unless-stopped
    environment:
      DB_SYSTEM: "SQLITE"
    ports:
      - 8080:8080/tcp #Change the left one if you want
    volumes:
      - /volume1/docker/gamevault/files:/files
      - /volume1/docker/gamevault/media:/media
      - /volume1/docker/gamevault/database:/db
```

:::note
Replace the variables (`YOURPASSWORDHERE`, `etc.`), as well as the folder paths with what suits you, of course. You can change the port on the left side of the colon aswell.
:::

## Conclusion

You've successfully set up GameVault Server using Synology Container Manager. You should now be able to access the web interface via your NAS's IP address followed by port 8080. If you encounter any issues or have feedback, please let us know.

## Additional Info

### Stopping the Server

To stop the GameVault Server, follow these steps:

1. Navigate to `Container Manager` on your Synology NAS.
2. Select the GameVault container from the list of running containers.
3. Click on "Stop" to halt the container's operation.

### Reading the Logs

To view the logs for the GameVault Server, do the following:

1. Navigate to `Container Manager` on your Synology NAS.
2. Select the GameVault container from the list of containers.
3. Click on "Details" to expand the container's information.
4. Select the "Log" tab to view the container's logs in real-time.
