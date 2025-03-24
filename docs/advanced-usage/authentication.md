# Authentication

:::warning WORK IN PROGRESS
This documentation is still being written and the features are under development. Please check back later for updates.
:::

## How to Authenticate Your API Requests

Most API requests require authentication using a JSON Web Token (JWT). Include this token in the `Authorization` header of each request in the following format:

```http
Authorization: Bearer <your_token>
```

### Generating Tokens

You can generate a Bearer token using one of the `login` endpoints:

- **Basic Authentication:** If Basic Authentication is enabled, authenticate via `POST /api/auth/basic/login` with your username and password.
- **OAuth2 Authentication:** If [OAuth2 authentication](#setting-up-oauth2-authentication) is enabled, authenticate via `GET /api/auth/oauth2/login` through your configured identity provider.

Generated access tokens are valid for **1 hour**, and refresh tokens for **30 days**. These durations can be adjusted on the [Configuration](../server-docs/configuration.md) page.

### Refreshing Tokens

When your access token expires, request a new one using your refresh token via the endpoint `POST /api/auth/refresh`.

### Revoking Tokens

You can revoke a token using the `POST /api/auth/revoke`. This will effectively log out the user by removing the token from the database and invalidating it.

## Setting Up OAuth2 Authentication (Single Sign-On)

Setting up single sign-on (SSO) using OAuth2 authentication for GameVault requires an identity provider (e.g. Google, Authelia, Keycloak, Microsoft, Discord, etc.).

### Steps

1. Enable OAuth2 authentication in your [configuration](../server-docs/configuration.md#auth).
2. Create an OAuth2 client in your chosen identity provider.
3. Add the Authorization URL and Token URL from your identity provider to the [Configuration](../server-docs/configuration.md#auth).
4. Enter your client ID and client secret into the [Configuration](../server-docs/configuration.md#auth).
5. Set the OAuth2 callback URL to your GameVault server URL appended with `/api/auth/oauth2/login` (e.g., `https://demo.gamevau.lt/api/auth/oauth2/login`).
6. Test the authentication by accessing `/api/auth/oauth2/login` on your GameVault server. You will be redirected to your identity provider's login page. After logging in, you'll return to GameVault, and it will exchange the provided authorization code for an access token. It will automatically register the user using the data from your identity provider if they don't already exist. A successful response looks like this:

   ```json
   {
     "id": "2",
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   }
   ```

7. Authentication is now complete. Use the provided access token for authenticated requests to the GameVault API.

### Debugging OAuth2 Authentication

- Set the environment variable `SERVER_LOG_LEVEL` environment variable to `debug` to receive detailed logs about the authentication process.

### Limitations

- Without plugins, only one OAuth2 Identity Provider can be used at a time.
- The OAuth2 implementation is RFC-compliant but basic (requires `openid`, `profile`, `email`). Compatibility may vary depending on the identity provider. If you encounter issues using a popular identity provider, please report them on [GitHub](https://github.com/Phalcode/gamevault-backend/issues). Include details about your identity provider and debug logs in the issue.
