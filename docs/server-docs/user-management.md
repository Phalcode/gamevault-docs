---
sidebar_position: 6
---

# User Management

This documentation provides instructions on user management for the Crackpipe server. User management involves configuring the initial admin user, enabling/disabling user registration, managing user activation, and assigning roles. These features are crucial for controlling user access, maintaining security, and administering the server effectively.

## Admin User

### Initial Setup

To configure the initial admin user for the Crackpipe server, you can utilize Docker environment variables. By setting the `SERVER_ADMIN_USERNAME` environment variable to the desired username for the admin user and afterwards manually registering that user in the Crackpipe App, you can establish the initial admin user account.

For example:

```plaintext
SERVER_ADMIN_USERNAME=adminuser
```

:::note
Replace `adminuser` with your preferred username.
:::

Once the admin user is configured and registered, you can proceed with user registration, activation, and role assignment.

### Automatic Admin Permissions

Upon registration of the initial admin user, the Crackpipe server will automatically grant administrative permissions to the user. This ensures that the admin user has the necessary privileges to administrate the server.

If the admin user was misconfigured to not have admin permissions or if the user already exists, the server will automatically grant admin permissions to that user upon startup. This ensures that the admin user has the correct permissions even if there are configuration errors or existing users.

By automatically assigning admin permissions, Crackpipe simplifies the setup process and ensures that the admin user has the appropriate access levels from the start.

## Recovering Access to Admin User

In the event that the server owner gets locked out of the admin user account due to password loss or other reasons, the Crackpipe Server provides a way to recover access.

To regain access, set the `SERVER_ADMIN_PASSWORD` environment variable to the desired password for the admin user.

For example:

```plaintext
SERVER_ADMIN_PASSWORD=mynewpassword
```

:::note
Replace `mynewpassword` with your preferred password.
:::

Upon the next startup of the Crackpipe server, the admin user's password will be updated to the specified password, allowing the

## User Registration

Crackpipe offers a user registration feature that allows new users to create accounts and gain access to the application. However, in certain scenarios where tighter control over user access is required, you have the option to disable user registration.

By setting the `SERVER_REGISTRATION_DISABLED` environment variable to `true`, you can easily disable user registration in Crackpipe. Disabling registration prevents new users from creating accounts and accessing the application.

This feature provides administrators with flexibility and control over user onboarding, ensuring that only approved users can utilize the application.

## User Activation

In Crackpipe, the activation process is a crucial step to authorize and activate new user accounts. By default, newly registered users are required to be activated by an administrator before they can fully utilize the application.

Unactivated users have limited rights, even less than that of a guest. They are unable to access certain locked APIs within Crackpipe. Activation ensures that only authorized individuals can interact with the application and its sensitive functionalities.

Admins, with their highest level of control, are exempt from activation checks. They can activate new users through the admin panel within the Crackpipe application.

However, if you wish to bypass the mandatory activation step and allow new users to immediately gain full access to Crackpipe, you can disable the activation process. Simply set the `SERVER_ACCOUNT_ACTIVATION_DISABLED` environment variable to `true`. This activates users automatically upon registration, removes the activation requirement and grants immediate access to new users.

## User Roles

Roles play a crucial role in ensuring the security and proper functioning of the Crackpipe server. They determine the permissions and access levels granted to users within the application.

Crackpipe implements the following roles:

| Role            | Description                                                                                                        | Level |
| --------------- | ------------------------------------------------------------------------------------------------------------------ | ----- |
| Guest           | This role allows users to view all content within the application.                                                 | 1     |
| Users (Default) | This role includes permissions such as downloading games, creating progresses, and editing the user's own profile. | 2     |
| Editors         | Editors have the ability to edit and remap games within the application.                                           | 3     |
| Admins          | Admins possess full control over user management and can edit user profiles.                                       | 4     |

By assigning appropriate roles to users, you can ensure that they have the necessary access and privileges based on their responsibilities.
