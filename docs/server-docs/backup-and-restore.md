---
sidebar_position: 7.5
---

# Database Backup & Restoration

:::warning Experimental
The Backup and Restoration Mechanisms in GameVault are currently experimental and should **not** be your primary backup solution. Always maintain your database backups independently and only consider using this as a last resort. In summary, we recommend avoiding this entire process whenever possible, as it can potentially be quite fragile and prone to issues. But i guess something is better than nothing...
:::

:::note Security Measurements  
For security resons any database operation outlined below must be additionally authenticated using your database password.  
:::

## Backup

GameVault offers a user-friendly backup system for both supported database systems, Postgres and SQLite. You can trigger and download backups either through the GameVault Client or directly via the [API](../advanced-usage/api-usage.md) for automation purposes. Each backup is a complete database snapshot, and it's essential to handle these files with care, as they are unencrypted. You can create as many backups as needed.

For SQLite, the GameVault Backup simply duplicates the database file.

For Postgres, it utilizes pgdump to create a comprehensive database dump.

## Restoration

Restoring a backup is a straightforward process.

You can trigger the restoration and upload backups using the GameVault Client or via the [API](../advanced-usage/api-usage.md) for automated procedures. However, before you proceed, there are some critical points to consider:

1. We strongly discourage restoring a backup on a different server version. If you must do it, consider downgrading your GameVault server to a lower version, ideally the version of your backup, as higher versions are more likely to cause compatibility issues. If you have no alternative, make sure to back up your current data again before proceeding.

2. **Never, under any circumstances**, attempt to restore a backup from a different database technology (e.g., SQLite to Postgres or vice versa). This will result in a catastrophic failure.

3. Always monitor the server logs while restoring a backup. If you notice anything unusual or different than a harmless warning, make a copy and securely store the file located at /tmp/gamevault-pre-restore.db on your container/server. This file serves as a backup created just before restoring the uploaded backup. In case of a major failure, GameVault may also perform this pre-restore backup restoration automatically. If you encounter difficulties, attempt to restore from this file. If this doesn't resolve the issue, you may need to explore manual restoration or consider other backup options.

4. The Restoration is not incremental. It hard-deletes everything and hard-restores everything.
