---
sidebar_position: 1
---

# Setting up a GameVault Server

Setting up a GameVault server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place.

There are many ways to deploy a GameVault Server. You can choose one from below.

## Method 1: Docker Setup

### 1. Install Docker and Docker Compose

Docker and Docker Compose are recommended to set up the GameVault server. If you do not have Docker and Docker Compose installed on your system, follow these steps to install them:

- **Docker**: You can download Docker from the official [Docker website](https://www.docker.com/get-started).
- **Docker Compose**: Docker Compose is already included in the current Docker installations for Windows, Linux and macOS users as `docker compose`. If you are still using `docker-compose`, follow the instructions on the [Docker Compose Migration Guide](https://docs.docker.com/compose/migrate/).

### 2. Create a Docker Compose file

Create a new file named `docker-compose.yml` in a directory of your choice and copy the following code:

```yaml
version: "3.8"
services:
  gamevault-backend:
    image: phalcode/gamevault-backend:latest
    restart: unless-stopped
    environment:
      DB_HOST: db
      DB_USERNAME: gamevault
      DB_PASSWORD: RANDOMPASSWORD
      # The Following Line grants Admin Role to account with this username upon registration.
      SERVER_ADMIN_USERNAME: admin
      # Uncomment and Insert your RAWG API Key here if you have one (http://rawg.io/login?forward=developer)
      # RAWG_API_KEY: YOURAPIKEYHERE
    volumes:
      # Mount the folder where your games are
      - /your/games/folder:/files
      # Mount the folder where gamevault should store its images
      - /your/images/folder:/images
    ports:
      - 8080:8080
  db:
    image: postgres:15
    restart: unless-stopped
    environment:
      POSTGRES_USER: gamevault
      POSTGRES_PASSWORD: RANDOMPASSWORD
      POSTGRES_DB: gamevault
    volumes:
      # Mount the folder where your postgres database files should land
      - /your/database/folder:/var/lib/postgresql/data
```

### 3. Start the GameVault server

Open a terminal, navigate to the directory where the `docker-compose.yml` file is located, and run the following command:

```bash
docker compose up -d
```

This will start the GameVault server and PostgreSQL server in the background. The `-d` parameter detaches the process from the terminal.

Congratulations! You have successfully set up a GameVault server. You can now start adding games and managing your game library.

#### Method 1.1: Docker Setup without PostgreSQL

We don't recommend it but you can run GameVault without a PostgreSQL Database too using the following configuration:

```yaml
version: "3.8"
services:
  gamevault-backend:
    image: phalcode/gamevault-backend:latest
    restart: unless-stopped
    environment:
      DB_SYSTEM: "SQLITE"
      # The Following Line grants Admin Role to account with this username upon registration.
      SERVER_ADMIN_USERNAME: admin
      # Uncomment and Insert your RAWG API Key here if you have one (https://gamevau.lt/docs/server-docs/indexing-and-metadata#rawg-api-key)
      # RAWG_API_KEY: YOURAPIKEYHERE
    volumes:
      - /your/games/folder:/files
      - /your/images/folder:/images
      - /your/sqlite/database/folder:/db
```

## Method 2: Caprover One Click App

If you're using [Caprover](https://caprover.com), setting up a GameVault Server with a Postgres DB is just a click away.

We have already created a Caprover One-Click-App Integration for this purpose. However, our app hasn't gained enough prominence to be included in the official One-Click-App Repository of Caprover. So, we decided to create our own [third-party repository](https://github.com/Phalcode/caprover-one-click-apps).

To use it, follow these simple steps:

1. Log in to your CapRover dashboard
2. Go to "Apps" and click on "One-Click Apps/Databases." Scroll down to the bottom
3. Under "3rd party repositories", copy and paste the following link: `https://phalcode.github.io/caprover-one-click-apps`
4. Click the "Connect New Repository" button

Now, all you need to do is search for 'GameVault' using the search box and follow the installation wizard.

## Method 3: TrueNAS Scale

To add the gamevault server Truenas Scale, just add the [truecharts catalog](https://truecharts.org/manual/SCALE/guides/getting-started), a community based catalog for Truenas Scale and install the **gamevault-backend** chart.

:::note
gamevault-backend is pre-configured on your behalf with cloudnative-postgres as the default database which requires the prometheus-operator and cloudnative-pg operator to be installed prior.
:::

Setup your **Server Admin Username**.

You can enable these Menus to further configure your server:
- **Show Server Settings**
- **Show Games and Images Settings**
- **Show RAWG Server Settings**

Leave the Logs and Images storage options as PVC.

Games storage option can be safely set hostpath if not using using any shares or switch to NFS otherwise.
- Add your games/zips here.

## More Methods

We're excited to announce that we're expanding our support for Setup Integrations! In the future, we plan to add more to our lineup.

We do want to point out that each system has its own unique blueprint syntax, and it can take a bit of time to set up the blueprints of new Integrations just right.

However, we're always looking for passionate individuals to join us in our mission! If you're interested in contributing and setting up an integration for any system, we'd love to have you on board. Together, we can make our platform even more accessible and user-friendly for everyone.

## What Next?
**Congratulations! 🥳**

To set up and start using server, follow these steps:

1. **Configure your server:** Customize the server settings to meet your specific needs. Refer to the [configuration guide](configuration.md) for detailed instructions.

2. **Add games:** Prepare your game files in the required format for GameVault to identify and install them correctly. Read the [structure chapter](structure.md) for important information. Once ready, proceed to [add your games](adding-games.md).

3. **Enhance with Metadata:** Connect your server to RAWG, the world's largest video game database that GameVault utilizes for fetching game metadata. This will enrich your gaming experience. Learn how to establish the connection in the [indexing and metadata guide](indexing-and-metadata.md).

4. **Create an admin user:** Set up an admin user account to gain full administrative access to the application. Refer to the [user management guide](user-management.md) for instructions on setting up the first user.

Enjoy your gaming experience with GameVault!
