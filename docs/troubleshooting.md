---
sidebar_position: 99
---

# Troubleshooting

Below, we will gradually list some common issues and corresponding solutions to help you maximize the potential of your app. If you can't find a solution to your problem here, feel free to open a ticket on our Github board or seek assistance or enhancements via Discord or Reddit. (Links can be found in the website's Footer.) Alternatively, you may also directly [email our company address](mailto:contact@phalco.de) if the issue is confidential.

## Common Problems and Solutions

### Incorrect Game Mapping

- Refer to [this](./client-docs/how-to-use.md#modifying-games) for instructions on how to modify games.

### Unable to Connect to Server / 500 Internal Server Error

- Review your server log for error details.
- Examine the error log of the client app.
- Ensure that you use the correct protocol (http or https) in the connection string, particularly if your server doesn't support SSL.
- If you have disabled authentication in your server configuration, make sure to include the authentication header for user-specific requests. [See here](./server-docs/configuration.md) for more information.

### User Registration Activation

- Find instructions on granting privileges to your first user in [this](./server-docs/user-management.md#initial-setup) guide.

### Games Not Appearing in the List

- Check the server log and index logs for any errors. It's likely that [your file names are incorrect](./server-docs/structure.md).

### Missing Box Arts

- Verify if [the Google API is disabled in your server configuration](./server-docs/configuration.md).

### Lack of Metadata in Games

- If you haven't set up RAWG yet, follow [these steps](./server-docs/indexing-and-metadata.md#rawg-api-key).
- Monitor your server logs.
- Check the RAWG-API Dashboard for any requests associated with your API Key.
- Verify if [the RAWG API is disabled in your server configuration](./server-docs/configuration.md).

### Forgot my Admin Password

- Refer to [this](./server-docs/user-management.md#recovering-access-to-admin-user) for instructions on how to regain access to your admin account.
