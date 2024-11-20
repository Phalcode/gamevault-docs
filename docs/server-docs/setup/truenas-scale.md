---
title: "Using TrueNAS Scale"
sidebar_position: 4
---

[TrueNAS Scale](https://www.truenas.com/truenas-scale/) is an open-source, hyper-converged storage platform that combines the reliability of TrueNAS with the versatility of Linux, providing a unified solution for storage, virtualization, and containerization in a single, easy-to-manage system.

Since the release of TrueNAS Scale version 24.10 (Electric Eel), Docker is now used to run apps on TrueNAS Scale. With the use of Docker Compose, setting up a GameVault Server on TrueNAS Scale is quick and easy!

**If you are using an older version of TrueNAS Scale, please use the legacy documentation: [TrueNAS Scale - Legacy](truenas-scale-legacy.md)**

## Prerequisites

- a running TrueNAS Scale Server (version 24.10 or newer)
- an understanding of storage/users in TrueNAS Scale
- a docker-compose.yml file that you have already configured by following the [Using Docker Compose](docker-compose.md) and [Configuration](/docs/server-docs/configuration.md) pages.

## Step 1: Log in to your TrueNAS Scale Dashboard

![Step 1](/img/docs/setup/scale/scale-login.png)

## Step 2: Configure User/Storage for GameVault

**Configuring User**

By default, GameVault will try to run as user ID 1000 and group ID 1000. However, this will not normally work in TrueNAS Scale. Instead, you will need to specify which user/group ID GameVault should use. You can create a new user, or use an existing one!

In your docker-compose.yml, file add the PUID and PGID variables to the gamevault-backend environment variables.
For simplicity, we will use the "apps" user/group which is built-in to TrueNAS Scale and uses ID number 568 for both PUID and PGID.

```plaintext
PUID: 568
PGID: 568
```

**Configuring Storage**

GameVault expects three directories:

- a directory where your games are located - mounted to the /files directory internally
- a directory for GameVault to store the database files - mounted to the /var/lib/postgresql/data directory internally
- a database for GameVault to store its media - mounted to the /media directory internally
  
These directories will need to be created before you can deploy GameVault on your TrueNAS Scale server.
If you have not yet done so, create the needed directories before continuing, and ensure your chosen user has read/write access to all three of the directories.

## Step 2a: Setting your GameVault Admin user

You can specify a username that will be given the Admin role upon registration in GameVault. Add the following variable to your docker-compose.yml file under the gamevault-backend environment variables. Set it to your desired GameVault username, and your account will be given the Admin role once you register!

```plaintext
SERVER_ADMIN_USERNAME: YourUsernameHere
```

Make sure to register your admin account using the same username!

When finished, your docker-compose.yml file should look something like this:

```yaml
services:
  gamevault-backend:
    image: phalcode/gamevault-backend:latest
    restart: unless-stopped
    environment:
      PUID: 568
      PGID: 568
      SERVER_ADMIN_USERNAME: YourUsernameHere
      DB_HOST: db
      DB_USERNAME: gamevault
      DB_PASSWORD: YOURPASSWORDHERE
    volumes:
      # Mount the folder where your games are
      - /mnt/yourgames:/files
      # Mount the folder where GameVault should store its media
      - /mnt/GameVault/media:/media
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
      - /mnt/GameVault/database:/var/lib/postgresql/data
```

You are now ready to deploy GameVault!

## Step 3: Navigate to Apps and Disover Page

Go to **apps** -> **discover**

![Scale-EE-Step-3](/img/docs/setup/scale/Scale-EE-Step-3.png)

## Step 4: Select "Install via YAML"

Click the three dot icon next the the "Custom App" button:

![Scale-EE-Step-4](/img/docs/setup/scale/Scale-EE-Step-4.png)

Then, select the option to "Install via YAML":

![Scale-EE-Step-4a](/img/docs/setup/scale/Scale-EE-Step-4a.png)

In the pop-out window, enter the name of the custom app: for this example we used "gamevault-backend"

Then, paste the entire contents of your docker-compose.yml file into the "Custom Config" section:

![Scale-EE-Step-4b](/img/docs/setup/scale/Scale-EE-Step-4b.png)

Make sure you have all your needed changes per the rest of the documentation, then click "Save".

The system will automatically do all the setup and return you to the main **Apps** pages when complete!

## Conclusion

You have now successfully set up your GameVault Server using TrueNAS Scale!

[Click here to continue.](setup.md#what-next)

## Additional Info

### Stopping the Server

To stop the GameVault server, navigate to the main **Apps** page, and check the box next to your running instance of gamevault:

![Scale-EE-Stop1](/img/docs/setup/scale/Scale-EE-Stop1.png)

Then, click the drop-down menu for "Select action", and choose "Stop All Selected"

![Scale-EE-Stop2](/img/docs/setup/scale/Scale-EE-Stop2.png)

This will shutdown GameVault and the database.

### Reading the Logs

Navigate to "Apps" and choose the GameVault-backend App you have created.

Under the "Workloads" section, you will see two "Containers" running:

![Scale-EE-logs1](/img/docs/setup/scale/Scale-EE-logs1.png)

Click the "veiw logs" icon next to either the database container (db) or the gamevault container (gamevault-backend) to open the logs:

![Scale-EE-logs2](/img/docs/setup/scale/Scale-EE-logs2.png)

In the new window that opens, choose the number of previous log lines you would like to view (500 is normal), then click "Connect":

![Scale-EE-logs3](/img/docs/setup/scale/Scale-EE-logs3.png)

You will see the previous number of log lines up to the number you entered, and all new log entries will appear as they are written!

### Troubleshooting

If you recieve any errors while trying to save your GameVault configuration, be sure that all indents/spacing is correct YAML syntax.
You can try a few things to ensure proper formatting:

- Use a text editor that maintains indents properly, such as Notepad++
- Copy the example docker-compose.yml file from above, paste it directly into the configuration window, and add your changes directly. This can help ensure consistent formatting.
