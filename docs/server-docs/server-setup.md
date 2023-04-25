---
sidebar_position: 1
---

# Setting up a Crackpipe Server

Setting up a Crackpipe server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place.

There are many ways to deploy a Crackpipe Server. Choose one from below.

## Prerequisites

- **Zipped Games in a specific name format**: Crackpipe needs the games to be in a specific name format to be able to identify and install them correctly. Definitely have a read on [this chapter.](Structure.md)
- **TypeORM-compatible PostgreSQL Server**: Crackpipe uses a PostgreSQL server to store all the data. Ensure that you have a TypeORM-compatible PostgreSQL server installed and running on your system.
  - With the right setup using sqlite, Crackpipe doesn't need a Postgres database to run, so it can be skipped if necessary. Nevertheless, we suggest configuring a Postgres database to ensure the best performance. See [Method 1.1.](#method-11-docker-setup-without-postgresql)

### Method 1: Docker Setup

#### 1. Install Docker and Docker Compose

Docker and Docker Compose are recommended to set up the Crackpipe server. If you do not have Docker and Docker Compose installed on your system, follow these steps to install them:

- **Docker**: You can download Docker from the official [Docker website](https://www.docker.com/get-started).
- **Docker Compose**: Docker Compose is already included in the Docker Desktop installation for Windows and macOS users. If you are using Linux, follow the instructions on the [Docker Compose installation page](https://docs.docker.com/compose/install/).

#### 2. Create a Docker Compose file

Create a new file named `docker-compose.yml` in a directory of your choice and copy the following code:

```yaml
version: "3.1"
services:
  crackpipe-backend:
    image: crackpipe-backend
    restart: unless-stopped
    environment:
      CONFIG_DB_HOST: "db"
      CONFIG_DB_USERNAME: "default"
      CONFIG_DB_PASSWORD: "default"
    volumes:
      - /files:/your/games/folder:ro
  db:
    image: postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: default
      POSTGRES_PASSWORD: default
      POSTGRES_DB: crackpipe
    ports:
      - 5432:5432
```

The above code defines two Docker services:

- **crackpipe-backend**: This is the Crackpipe server itself. The `image` parameter specifies the Docker image to be used. `CONFIG_RAWG_API_KEY` is the API key for [RAWG](https://rawg.io/), which is a video game database that Crackpipe uses to obtain game information. `CONFIG_DB_HOST`, `CONFIG_DB_USERNAME`, and `CONFIG_DB_PASSWORD` are the PostgreSQL server connection details. The `volumes` parameter mounts the directory that contains the zipped games to `/your/games/folder` inside the container.
- **db**: This is the PostgreSQL server. The `image` parameter specifies the Docker image to be used. `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB` are the PostgreSQL server settings.

#### 3. Configure Crackpipe

Configure the `config.yml` file located in the `backend` folder. This file contains various settings, including the path to the directory where the zipped games are located, the path to the directory where the games will be installed, and the URL of the server.

#### 4. Start the Crackpipe server

Open a terminal, navigate to the directory where the `docker-compose.yml` file is located, and run the following command:

```bash
docker-compose up -d
```

This will start the Crackpipe server and PostgreSQL server in the background. The `-d` parameter detaches the process from the terminal.

Congratulations! You have successfully set up a Crackpipe server. You can now start adding games and managing your game library.

### Method 1.1: Docker Setup without PostgreSQL

We really don't recommend it but you can run Crackpipe without a PostgreSQL Database too using the following configuration:

```yaml
version: "3.1"
services:
  crackpipe-backend:
    image: crackpipe-backend
    restart: unless-stopped
    environment:
      CONFIG_DB_SYSTEM: "SQLITE"
    volumes:
      - /files:/your/games/folder:ro
```

### Method 2: Caprover One Click App

Not yet available

### Method 2: Portrainer One Click App

Not yet available
