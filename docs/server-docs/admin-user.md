---
sidebar_position: 6
---

# Admin User Configuration

This documentation provides instructions on how to configure the initial admin user for the Crackpipe server using Docker environment variables. The initial admin user has permissions to administrate the server including all privileges.

## Initial Admin User Configuration

To configure the admin user for the Crackpipe you need to set the `SERVER_ADMIN_USERNAME` environment variable to the desired username for the admin user.

For example:

```plaintext
SERVER_ADMIN_USERNAME=adminuser
```

> Note: Replace `adminuser` with your preferred username.

Now you can register your User.

## Automatic Admin Permissions

Upon registration of the initial admin user, the Crackpipe Server will automatically grant administrative permissions to the user. This ensures that the admin user has the necessary privileges to administrate the server.

If the admin user was misconfigured to not have admin permissions or if the user already exists, the server will automatically grant admin permissions to that user upon startup. This ensures that the admin user has the correct permissions even if there are configuration errors or existing users.

## Recovering Access to Admin User

In the event that the server owner gets locked out of the admin user account due to password loss or other reasons, the Crackpipe Server provides a way to recover access.

Set the `SERVER_ADMIN_PASSWORD` environment variable to the desired password for the admin user. For example:

```plaintext
SERVER_ADMIN_PASSWORD=mynewpassword
```

> Note: Replace `mynewpassword` with your preferred password.

> Warning: We do not enforce the minimum password length when using this environment variable, but we recommend a password with more than 8 characters

Upon the next startup of the Crackpipe Server, the User with `SERVER_ADMIN_USERNAME` as Username will be set to the specified password, allowing the server owner to regain access to the admin user account.

## Conclusion

Configuring the admin user for the Crackpipe Server grants the necessary permissions to administrate the server. By setting the Docker environment variable `SERVER_ADMIN_USERNAME` to the desired username, the admin user will have admin privileges upon registration. 

Additionally, if the admin user was misconfigured or already exists, the server will grant admin permissions upon startup. In case of a lockout situation, the `SERVER_ADMIN_PASSWORD` environment variable can be used to regain access to the admin user account.

Feel free to reach out to our support team if you encounter any issues or have further questions.
