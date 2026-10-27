---
description: Create users, assign roles, activate accounts and recover admin access.
sidebar_position: 6
---

# User management

This page covers the first admin account, user registration, account activation
and roles.

## Admin user

### Initial setup

:::warning
GameVault does not create the first admin account. Register it yourself with the
GameVault client.
:::

The first account registered on a server is activated automatically and gets the
admin role.

## Admin role recovery

Lost admin access after a misconfiguration? Set `SERVER_ADMIN_USERNAME` to the
username that should get the admin role. On the next server start GameVault
grants that user admin permissions and activates the account. The variable only
promotes an **existing** user; it never creates an account.

## Admin password recovery

If the admin password is lost, the server can reset it at startup.

First, set the `SERVER_ADMIN_USERNAME` environment variable to the username whose
password should be reset. Then set `SERVER_ADMIN_PASSWORD` to the new password.

:::tip
Both variables are only applied at server startup, and the user must already exist on the server. They are a **recovery mechanism**, not an account creation mechanism.
:::

For example:

```ini
SERVER_ADMIN_USERNAME=gamevaultfan1
SERVER_ADMIN_PASSWORD=hunter2
```

On the next server start the password is replaced with the one you set.

## User registration

Public registration can be turned off, for example when the server should stay
private.

Set `SERVER_REGISTRATION_DISABLED` to `true` to disable the public registration
API. New users can then no longer create accounts. Administrators can still
create users while public registration is closed.

## User activation

By default an administrator has to activate a new account before it can use the
server.

Unactivated users are treated as unauthenticated and cannot access most APIs.
That is fewer rights than the guest role has. Admins skip the activation check
and activate new users in the admin panel.

Set `SERVER_ACCOUNT_ACTIVATION_DISABLED` to `true` to remove the step. New
accounts are then active as soon as they register.

## User roles

Every user has exactly one role, and the role decides what they may do.

GameVault implements the following roles:

| Role            | Description                                                             | Level |
| --------------- | ----------------------------------------------------------------------- | ----- |
| Guest           | Can view most content.                                                  | 0     |
| Users (Default) | Can download games, create progress entries and edit their own profile. | 1     |
| Editors         | Can edit and remap games.                                               | 2     |
| Admins          | Full control over users and profiles.                                   | 3     |

Give each user the lowest role that lets them do their job.
