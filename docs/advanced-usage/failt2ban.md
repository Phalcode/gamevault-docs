---
id: fail2ban-gamevault-guide
title: Configuring Fail2Ban for GameVault
---

:::note Community-Created Guide
This guide was created and tested by a community member. It hasn't been personally tested by our team. We cannot guarantee its effectiveness as we don't use fail2ban. Feel free to give it a try. If you find any errors, you can edit the guide accordingly.
:::

## Introduction

This guide explains how to set up Fail2Ban to safeguard your GameVault application against unauthorized access attempts. Fail2Ban is a tool that scans log files and blocks IP addresses exhibiting malicious behavior through the firewall.

## Prerequisites

- Fail2Ban installed on your host system
- Running GameVault instance as outlined in the [server setup documentation](../server-docs/setup/setup.md)

## Steps

### 1. Enable Log Files and Map a Volume

Ensure that log files are enabled and a volume is mapped to the `/logs` folder within the GameVault backend container in your `docker-compose.yml` file:

```yaml
[...]
gamevault-backend:
    image: phalcode/gamevault-backend:latest
    restart: unless-stopped
    environment:
      [...]
      - SERVER_LOG_FILES_ENABLED: true # <--- Make sure this is not set to false. (Default was false before v11.0.1)
    volumes:
      [...]
      - /your/logs/folder:/logs # <--- Replace `/your/logs/folder` with the actual path to your log folder.
[...]
```

### 2. Identify Failed Authentication Attempts

Failed authentication attempts will appear in the log files in the following format:

```bash
info:    ┏ [17/Aug/2023:20:25:47 +0000] Username @ Address - GET /api/v1/users/me -> 401 - 28.231 ms - 112 - 'GameVault/1.3.0'
```

### 3. Create a Fail2Ban Filter

Create a filter file for Fail2Ban by opening a terminal and executing the command:

```bash
sudo nano /etc/fail2ban/filter.d/gamevault-filter.conf
```

Insert the following content into the file:

```bash
[Definition]
failregex = .*<HOST> - GET.*401
```

Note that this regular expression may require adjustments. You can test it using the command:

```bash
fail2ban-regex /your/logs/folder/gamevault-backend.log /etc/fail2ban/filter.d/gamevault-filter.conf
```

### 4. Configure Fail2Ban Jail

Modify the Fail2Ban jail configuration by executing the command:

```bash
sudo nano /etc/fail2ban/jail.local
```

Add the following block and customize the settings based on your preferences:

```conf
[gamevault]
enabled = true
filter = gamevault-filter
logpath = /your/logs/folder/*.log*
maxretry = 10
findtime = 3600
bantime = 3600
```

### 5. Restart Fail2Ban

To apply the changes, restart the Fail2Ban service:

```bash
sudo systemctl restart fail2ban
```

### 6. Verify Jail Status

Check the status of the GameVault jail:

```bash
sudo fail2ban-client status gamevault
```

## Conclusion

By following these steps, you can enhance the security of your GameVault application by utilizing Fail2Ban to block IP addresses attempting unauthorized access. Remember to fine-tune the settings to suit your specific requirements. Keep in mind that the 401 response will be triggered for each unauthenticated request, which can occur frequently and become bothersome, so you may want to increase the `maxretry` value slightly.

Credit goes to [this StackOverflow answer](https://stackoverflow.com/a/69575369/14570696) and [this Github issue](https://github.com/Phalcode/gamevault-backend/issues/175) for inspiring this guide.
