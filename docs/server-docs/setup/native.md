---
title: "Native"
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
git clone https://github.com/Phalcode/gamevault-backend.git
cd gamevault-backend
```

### Step 2: Install Dependencies

```bash
pnpm install
```

### Step 3: Build

```bash
pnpm run build
```

Your server files are now in the `dist/` folder.

### Step 4: Set up an .env File

Create a .env file in the `dist/src/` directory and [configure your GameVault as desired](../configuration.md) or set them in your system/VM directly.

Example:

```bash
#dist/src/.env
DB_SYSTEM=SQLITE
SERVER_ADMIN_USERNAME=admin
```

### Step 5: Start the Server

To start the server, run:

```bash
node dist/src/main
```

## Conclusion

You have now successfully set up your GameVault Server.

[Click here to continue.](setup.md#what-next)

## Additional Info

### Stopping the Server

Press CTRL + C to stop the server.
