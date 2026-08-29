---
sidebar_position: 7.5
---

# Database Backup & Restoration

:::warning Experimental
GameVault's backup and restore features are experimental and should not be your primary backup solution. Keep independent database backups and use this feature only as a last resort. The workflow is fragile enough that you should avoid relying on it unless you have no better option.
:::

:::note Security Measurements  
For security reasons, every database operation described below requires your database password.  
:::

## Backup

GameVault can create backups for both supported database systems: Postgres and SQLite. You can trigger and download backups through the GameVault client or through the [API](../advanced-usage/rest-api) for automation. Each backup is a full database snapshot and is stored unencrypted, so handle the files accordingly.

For SQLite, the GameVault Backup simply duplicates the database file.

For Postgres, it uses `pg_dump` to create a database dump.

:::tip Automating via the API
The backup endpoints are `GET /api/admin/database/backup` and `POST /api/admin/database/restore` (multipart upload). Both require the `X-Database-Password` header with your database password.
:::

## Restoration

Restoring a backup is simple, but risky.

You can upload a backup and start the restore from the GameVault client or through the [API](../advanced-usage/rest-api). Before you proceed, keep these points in mind:

1. Avoid restoring a backup on a different server version. If you must do it, downgrade the GameVault server to the version that created the backup if possible. Higher versions are more likely to hit compatibility issues. Before you continue, create another backup of the current data.

2. Never restore a backup from a different database technology such as SQLite to Postgres or the other way around. It will fail.

3. Watch the server logs during the restore. If you see anything beyond a harmless warning, copy the file at `/tmp/gamevault-pre-restore.db` from the container or server. GameVault creates it immediately before restoring the uploaded backup. In a major failure, GameVault may try to restore this pre-restore backup automatically. If recovery still fails, you will need to restore manually or use another backup.

4. Restoration is not incremental. It deletes the existing data set and replaces it with the uploaded backup.
