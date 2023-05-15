---
sidebar_position: 5
---

# (WIP) Roles and Permissions

:::note
This page is a work in progress and subject to change.
:::

Roles and permissions are critical components of any software application to ensure that users can only access and manipulate data based on their roles and privileges. In Crackpipe, we have developed a sophisticated role and permission system to enhance security and prevent unauthorized access and manipulation of data.

## Roles

Roles are pre-defined sets of permissions that grant users certain functions based on their role in the system. In a Crackpipe Server, there are three default roles:

| Role            | Description                             | Permissions                                                                                                                |
| --------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Users (Default) | Can see content.                        | READ_GAMES, DOWNLOAD_GAMES, READ_GENRES, READ_TAGS, READ_IMAGES, READ_PROGRESSES, READ_USERS, WRITE_USER, WRITE_PROGRESSES |
| Editors         | Can edit content but cannot edit users. | WRITE_GAMES, USE_RAWG_API                                                                                                  |
| Admins          | Can see and edit everything.            | WRITE_ALL_USERS, WRITE_ALL_PROGRESSES, ALL                                                                                 |

## Permissions

In addition to these roles, Admins can grant specific permissions to users. For example, a user can be granted permission to replace Box Art images. The permission system is implemented through a permission matrix on the client, where administrators can grant and revoke specific permissions and restore default permissions using roles.

The permission matrix includes the following granular permissions:

| Permission           | Description                                   |
| -------------------- | --------------------------------------------- |
| READ_GAMES           | Grants read access to games                   |
| DOWNLOAD_GAMES       | Grants permission to download games           |
| READ_GENRES          | Grants read access to game genres             |
| READ_TAGS            | Grants read access to game tags               |
| READ_IMAGES          | Grants read access to images                  |
| READ_USERS           | Grants read access to users                   |
| WRITE_USER           | Grants write access to own user               |
| READ_PROGRESSES      | Grants read access to user game progress      |
| WRITE_PROGRESSES     | Grants permission to write own game progress  |
| WRITE_GAMES          | Grants permission to write games              |
| USE_RAWG_API         | Grants permission to use the RAWG API         |
| WRITE_ALL_USERS      | Grants permission to write users              |
| WRITE_ALL_PROGRESSES | Grants permission to write user game progress |
| ALL                  | Grants access to all permissions              |

Our role and permission system ensures that users only have access to the parts of the app that they need and are authorized to use. By granting specific permissions and roles, we improve security and prevent unauthorized access and manipulation of data.
