# Authentication

:::warning WORK IN PROGRESS
This documentation is still being written and the features are under development. Please check back later for updates.
:::

GameVault supports two primary authentication methods:

1. **Bearer Token (JWT)** - for users logging in interactively. (The GameVault Client uses this method.)
2. **API-Key** - for machine-to-machine and automated use cases.

This page shows you how to authenticate API requests using one of these methods.

Additionally this page provides details on [how to set up SSO (Single Sign-On)](#setting-up-oauth2-authentication-single-sign-on) via OAuth2, which allows users to authenticate using third-party identity providers like Google, Microsoft, Keycloak, etc.

## Bearer Token (JWT) Authentication

JWT is the default method for user-based authentication. Include your access token in the `Authorization` header like so:

```http
Authorization: Bearer <your_access_token>
```

### Generating Tokens

You can generate a Bearer token using one of the login endpoints:

- **Basic Authentication:**
  If enabled in your [server configuration](../server-docs/configuration.md#auth), authenticate via:

  ```http
  POST /api/auth/basic/login
  ```

  with your username and password. A user needs to be registered first using the registration endpoint.

- **OAuth2 Authentication:**
  If [OAuth2](#setting-up-oauth2-authentication-single-sign-on) is enabled in your [server configuration](../server-docs/configuration.md#auth), authenticate via:

  ```http
  GET /api/auth/oauth2/login
  ```

  through your configured identity provider. This will automatically register the user on the server if they don't already exist.

On success, both methods return an `access_token` and `refresh_token`. You can use the access token for authenticated requests to the GameVault API. The refresh token can be used to request a new access token when the current one expires.

### Token Expiration

Generated access tokens are valid for **5 minutes**, and refresh tokens for **30 days**. These durations can be adjusted on the [Configuration](../server-docs/configuration.md) page.

### Refreshing Tokens

When your access token expires, request a new token pair using your refresh token by calling the `POST /api/auth/refresh` endpoint with your refresh token. Your current refresh token will be invalid after this call so make sure to always use the token received from the response for future token refreshes.

### Revoking Tokens

You can revoke a token by calling the `POST /api/auth/revoke` endpoint with your refresh token. This will effectively log out the user, by blocking future token refreshes.

## API-Key Authentication (Machine-to-Machine)

GameVault also supports API-key-based authentication. This is perfect for bots, automation, and service-to-service calls, no need for login sessions.

### Enabling API Key Support

To enable API-Key authentication, set the following environment variable:

```env
AUTH_API_KEY_ENABLED=true
```

### How to obtain an API Key

1. **Register a user and fetch their API Key**
   Register a user and use their Bearer token to fetch their API key via:

   ```http
   GET /api/users/me
   ```

   Example response:

   ```json
   {
     "id": "4",
     "username": "gvbot_infra",
     "api_key": "a1b2c3d4e5..." // this is your API key
   }
   ```

:::tip You can hide Bots
You can hide bot accounts from users by prefixing their usernames with `gvbot_`.
:::

### Making Authenticated API Requests

Include your API-key in the request headers like so:

```http
X-Api-Key: a1b2c3d4e5...
```

### Notes

- API keys do **not expire**, handle them carefully
- API keys currently **can not be revoked or changed**
- API keys are **user-bound** and inherit that user's permissions.

## Setting Up OAuth2 Authentication (Single Sign-On)

Setting up single sign-on (SSO) using OAuth2 authentication for GameVault requires an identity provider (e.g. Google, Authelia, Keycloak, Microsoft, Discord, etc.).

### Step by Step Guide

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

### Examples

You can find working example configurations for popular identity providers below to get an idea of how to set them up.

#### Google

```env
AUTH_OAUTH2_CLIENT_ID=XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com
AUTH_OAUTH2_CLIENT_SECRET=XXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXX
AUTH_OAUTH2_AUTH_URL=https://accounts.google.com/o/oauth2/v2/auth
AUTH_OAUTH2_TOKEN_URL=https://oauth2.googleapis.com/token
AUTH_OAUTH2_USERINFO_URL=https://www.googleapis.com/oauth2/v3/userinfo
```

#### Discord

```env
AUTH_OAUTH2_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXX
AUTH_OAUTH2_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AUTH_OAUTH2_AUTH_URL=https://discord.com/oauth2/authorize
AUTH_OAUTH2_TOKEN_URL=https://discord.com/api/oauth2/token
AUTH_OAUTH2_SCOPES=openid,email,identify
AUTH_OAUTH2_USERINFO_URL=https://discord.com/api/users/@me
```

### Debugging OAuth2 Authentication

You can set the environment variable `SERVER_LOG_LEVEL` environment variable to `debug` to receive detailed logs about the authentication process.

### Limitations

- Without plugins, only one OAuth2 Identity Provider can be used at a time.
- The OAuth2 implementation is RFC-compliant but basic (requires `openid`, `profile`, `email`). Compatibility may vary depending on the identity provider. If you encounter issues using a popular identity provider, please report them on [GitHub](https://github.com/Phalcode/gamevault-backend/issues). Include details about your identity provider and debug logs in the issue.
