---
description: Publish server news and announcements to every connected GameVault client.
sidebar_position: 11
---

# Server News

Add a `news.md` file to show a message in every connected client: a wishlist
link, a release note, a greeting.

The file is Markdown and lives at `/config/news.md`. Edit it with any text editor
or script. With Docker, mount that folder as a volume:

:::note
After an update, clients show a notification badge for the new entry.
:::

```yaml
[...]
volumes:
    - /your/config/folder:/config
    - [...]
[...]
```

## Managing News via API

Starting with `v16.3.0`, administrators can update server news directly via API. Only users with the **Admin** role can update news. The server must be able to write to your config volume (`VOLUMES_CONFIG`).

## Editing News in the Client

Starting with `v17.0.0`, the GameVault client includes a built-in **News Editor** for administrators. Open the News dialog (newspaper icon in the sidebar) and switch to the **Server News** tab: admins see an **Edit** button that opens a Markdown editor with a preview. Changes are saved back to the server's `news.md` file via the API, so you no longer need to edit the file manually. Only users with the **Admin** role can edit server news.
