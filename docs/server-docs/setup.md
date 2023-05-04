---
sidebar_position: 1
---

# Setting up a Crackpipe Server

Setting up a Crackpipe server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place.

There are many ways to deploy a Crackpipe Server. You can choose one from below.

## Method 1: Docker Setup

### 1. Install Docker and Docker Compose

Docker and Docker Compose are recommended to set up the Crackpipe server. If you do not have Docker and Docker Compose installed on your system, follow these steps to install them:

- **Docker**: You can download Docker from the official [Docker website](https://www.docker.com/get-started).
- **Docker Compose**: Docker Compose is already included in the Docker Desktop installation for Windows and macOS users. If you are using Linux, follow the instructions on the [Docker Compose installation page](https://docs.docker.com/compose/install/).

### 2. Create a Docker Compose file

Create a new file named `docker-compose.yml` in a directory of your choice and copy the following code:

```yaml
version: "3.1"
services:
  crackpipe-backend:
    image: phalcode/crackpipe-backend:latest
    restart: unless-stopped
    environment:
      CONFIG_DB_HOST: "db"
      CONFIG_DB_USERNAME: "default"
      CONFIG_DB_PASSWORD: "default"
    volumes:
      - /files:/your/games/folder:ro
      - /images:/your/images/folder
  db:
    image: postgres:15-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: default
      POSTGRES_PASSWORD: default
      POSTGRES_DB: crackpipe
    ports:
      - 5432:5432
```

### 3. Start the Crackpipe server

Open a terminal, navigate to the directory where the `docker-compose.yml` file is located, and run the following command:

```bash
docker-compose up -d
```

This will start the Crackpipe server and PostgreSQL server in the background. The `-d` parameter detaches the process from the terminal.

Congratulations! You have successfully set up a Crackpipe server. You can now start adding games and managing your game library.

#### Method 1.1: Docker Setup without PostgreSQL

We really don't recommend it but you can run Crackpipe without a PostgreSQL Database too using the following configuration:

```yaml
version: "3.1"
services:
  crackpipe-backend:
    image: phalcode/crackpipe-backend:latest
    restart: unless-stopped
    environment:
      CONFIG_DB_SYSTEM: "SQLITE"
    volumes:
      - /files:/your/games/folder:ro
      - /db:/your/sqlite/database/folder
      - /images:/your/images/folder
```

## Method 2: Caprover One Click App

Not yet available

## Method 3: Portrainer One Click App

Not yet available

## What Next?

### 🥳 Congratulations! 🥳

Now that you have set up your server you can begin [configuring it](configuration.md) and [importing games](adding-games.md).

- Most notably you should set the `CONFIG_RAWG_API_KEY` Environment Variable for [RAWG](https://rawg.io/), which is the worlds largest video game database that Crackpipe uses to fetch game metadata. You can apply for a free one [here](https://rawg.io/login/?forward=developer).

- Also Crackpipe needs your games to be in a specific format to be able to identify and install them correctly. Definitely also have a read on [this chapter.](structure.md)
