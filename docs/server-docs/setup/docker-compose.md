---
title: "Using Docker Compose"
sidebar_position: 2
---

[Docker](https://www.docker.com) is a platform for developing, shipping, and running applications in containers, and [Docker Compose](https://docs.docker.com/compose) is a tool for defining and managing multi-container Docker applications.

In this guide, you will learn how to set up GameVault using Docker and Docker Compose.

## Prerequisites

- [Docker Engine](https://docs.docker.com/engine/install/) is installed on your system. ([Docker Desktop](https://docs.docker.com/get-docker/) should work too, but this guide is tailored for Docker Engine. Steps might look different on Desktop, but the gist is the same.)

## Step 1: Creating a Docker Compose file

Create a new file named `docker-compose.yml` in a directory of your choice and copy the following code:

```yaml
services:
  gamevault-backend:
    image: phalcode/gamevault-backend:latest
    restart: unless-stopped
    environment:
      DB_HOST: db
      DB_USERNAME: gamevault
      DB_PASSWORD: YOURPASSWORDHERE
    volumes:
      # Mount the folder where your games are
      - /your/games/folder:/files
      # Mount the folder where GameVault should store its media
      - /your/media/folder:/media
    ports:
      - 8080:8080/tcp
  db:
    image: postgres:16
    restart: unless-stopped
    environment:
      POSTGRES_USER: gamevault
      POSTGRES_PASSWORD: YOURPASSWORDHERE
      POSTGRES_DB: gamevault
    volumes:
      # Mount the folder where your PostgreSQL database files should land
      - /your/database/folder:/var/lib/postgresql/data
```

:::note
Replace the variables (`YOURPASSWORDHERE`, `etc.`), as well as the folder paths with what suits you, of course. You can change the port on the left side of the colon aswell.
:::

:::warning
Password (YOURPASSWORDHERE) can't be empty! else the database will not work. If you don't want a password, consider running without a PostgreSQL Database (Not recommended)
:::

### Alternative Step 1: Running without a PostgreSQL Database

We don't recommend it, but you can run GameVault without a PostgreSQL Database too using the following configuration:

```yaml
services:
  gamevault-backend:
    image: phalcode/gamevault-backend:latest
    restart: unless-stopped
    environment:
      DB_SYSTEM: "SQLITE"
    volumes:
      - /your/games/folder:/files
      - /your/media/folder:/media
      - /your/sqlite/database/folder:/db
    ports:
      - 8080:8080/tcp
```

:::note
Replace the variables (`YOURPASSWORDHERE`, `etc.`), as well as the folder paths with what suits you, of course. You can change the port on the left side of the colon aswell.
:::

## Step 2: Start the Service

Open a terminal, navigate to the directory where the `docker-compose.yml` file is located, and run the following command:

```bash
docker compose up -d
```

This will start the GameVault server and PostgreSQL server in the background. The `-d` parameter detaches the process from the terminal.

## Conclusion

Congratulations! Your GameVault Server has been successfully set up using Docker and Docker Compose. You can now access it using your server's IP address followed by the designated port, such as `http://192.168.0.15:8080` for example.

[Click here to continue.](setup.md#what-next)

## Additional Info

### Stopping the server

Open a terminal, navigate to the directory where the `docker-compose.yml` file is located, and run the following command:

```bash
docker compose down
```

### Reading the logs

Open a terminal and run the following command:

```bash
docker logs gamevault-backend
```
