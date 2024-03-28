---
sidebar_position: 6
---

# User Management

This documentation provides instructions on user management for the GameVault server. User management involves configuring the initial admin user, enabling/disabling user registration, managing user activation, and assigning roles. These features are crucial for controlling user access, maintaining security, and administering the server effectively.

## Admin User

### Initial Setup

:::warning
GameVault does not register the first admin account for you. You will need to do that yourself.
:::

The first registered user on a server is automatically activated and granted admin permissions. You can register it using the GameVault Client Application.

## Admin Role Recovery

If you lost your admin permissions due to misconfiguration, you can fix this by using the `SERVER_ADMIN_USERNAME` environment variable. Simply set this variable to the username of the user you wish to elevate to admin role. Upon server startup, GameVault will automatically grant admin permissions to the specified username provided in this configuration variable.

## Admin Password Recovery

In the event that the server owner gets locked out of the admin user account due to password loss or other reasons, the GameVault Server provides an easy way to recover access.

First, set the `SERVER_ADMIN_USERNAME` environment variable to the username of the admin user you wish to reset the password for.
Then, set the `SERVER_ADMIN_PASSWORD` environment variable to the desired password for the admin user.

For example:

```ini
SERVER_ADMIN_USERNAME=gamevaultfan1
SERVER_ADMIN_PASSWORD=hunter2
```

Upon the next startup of the GameVault server, the admin user's password will be updated to the specified password, allowing the user to regain access.

## User Registration

You have the option to enable or disable new user registration. When tighter control is needed, you can opt to disable public registration.

Simply set the `SERVER_REGISTRATION_DISABLED` environment variable to `true` to easily deactivate the public user registration API in GameVault. This prevents new users from creating accounts and accessing the application.

However, even when public registration is closed, authenticated administrators retain the ability to register new users.

## User Activation

The activation process is a crucial step to authorize and activate new user accounts. By default, newly registered users are required to be activated by an administrator before they can fully utilize the application.

Unactivated users have limited rights, even less than the rights of a guest role user. They are treated as unauthenticated and can not access most APIs.
Admins are exempt from activation checks. They can activate new users through the admin panel within the GameVault application.

However, if you wish to bypass the mandatory activation step and allow new users to immediately gain full access to GameVault, you can disable the activation process. Simply set the `SERVER_ACCOUNT_ACTIVATION_DISABLED` environment variable to `true`. This activates users automatically upon registration, removes the activation requirement and grants immediate access to new users.

## User Roles

Roles play a crucial role in ensuring the security and proper functioning of the GameVault server. They determine the permissions and access levels granted to users within the application.

GameVault implements the following roles:

| Role            | Description                                                                                                        | Level |
| --------------- | ------------------------------------------------------------------------------------------------------------------ | ----- |
| Guest           | This role allows users to view most content within the application.                                                | 1     |
| Users (Default) | This role includes permissions such as downloading games, creating progresses, and editing the user's own profile. | 2     |
| Editors         | Editors have the ability to edit and remap games within the application.                                           | 3     |
| Admins          | Admins possess full control over user management and can edit user profiles.                                       | 4     |

By assigning appropriate roles to users, you can ensure that they have the necessary access and privileges based on their responsibilities.
