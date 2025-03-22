---
title: "Using Native Approach"
sidebar_position: 99
---

Container technology presents an efficient and scalable solution by encapsulating applications and their dependencies. This ensures consistent performance across diverse environments and streamlines deployment, management, and scalability.

Although we strongly discourage it, if none of the alternative installation methods are suitable for you, GameVault can also be installed directly on your system without using containers. The example provided here uses Debian.

### Prerequisites

- [Node.js](https://nodejs.org/) must be installed on your system (check the required version [here](https://github.com/Phalcode/gamevault-backend/blob/master/Dockerfile#L1)).
- [PostgreSQL](https://www.postgresql.org/) database (or configure SQLITE later on).
- Install necessary packages: [`p7zip-full`](https://packages.debian.org/en/sid/p7zip-full) and [`p7zip-rar`](https://packages.debian.org/en/sid/p7zip-rar) (non-free-repository) (or their equivalents in your distribution).
- Install the [parallel node package manager](https://pnpm.io/): `npm i -g pnpm`.

### Step 1: Clone the Source Code

```bash
cd ~
git clone https://github.com/Phalcode/gamevault-backend.git
cd gamevault-backend
```

### Step 2: Install Dependencies

Now we need to install all necessary node dependencies.

```bash
pnpm install
```

### Step 3: Set up an .env File

Create a .env file in the cloned `gamevault-backend` directory and [configure your GameVault as desired](../configuration.md) or set them in your system/VM directly.

#### Example using SQLITE

First create the necessary folders or just use existing ones in your config:

For example:

```bash
cd ~
mkdir -p gamevault-db gamevault-media gamevault-games gamevault-logs gamevault-plugins
```

Then use them in your .env file:

```ini
#/gamevault-backend/.env
DB_SYSTEM=SQLITE
VOLUMES_SQLITEDB=/path/for/database/files
VOLUMES_FILES=/path/for/gane/files
VOLUMES_MEDIA=/path/for/media/files
VOLUMES_LOGS=/path/for/log/files
VOLUMES_PLUGINS=/path/for/plugin/files
```

### Step 4: Build and Start the Server

To start the server, run:

```bash
pnpm start
```

## Conclusion

You have now successfully set up your GameVault Server.

[Click here to continue.](setup.md#what-next)

## Additional Info

Don't put/change anything except the .env file inside the gamevault-backend folder if you don't know what you're doing.

### Stopping the Server

Press CTRL + C to stop the server.

### Updating the Server

You can update the server by running

```bash
git pull
pnpm install
```

inside of your gamevault-backend git repository. It will auto update to the latest version and install the latest dependencies.

You can update to a specific version by using:

```bash
git fetch --all --tags --prune
git checkout tags/9.0.0
pnpm install
```

for example.
