---
sidebar_position: 4
---

# REST API Usage

The GameVault Backend Server offers a fully documented REST API for use to everyone. With the API, you can build your own GameVault clients or 3rd party integrations and manage your libraries automatically.

## Registering a Bot User

To use the GameVault API in automations, it is recommended to register a separate user with the username prefix `gvbot_` (e.g. `gvbot_image_downloader`). The bot user will not appear in the public user list. This user will be used to authenticate your API requests. You can do this by using the Register Form in the settings tab of the GameVault App.

## OpenAPI Specification

You can check out the API specification at `/api/docs`. It is served by the built-in Web UI, which is enabled by default and can be toggled with `WEB_UI_ENABLED`. There is also a hosted version of the latest API Documentation available at [demo.gamevau.lt/api/docs](https://demo.gamevau.lt/api/docs).

The API documentation provides a complete guide on how to use the API, including authentication, endpoints, and parameters.

You can also download the OpenAPI Specification in different formats using `example.com/api/docs-json` or `example.com/api/docs-yaml`. This is useful for importing the Calls into a tool like Postman or generate the client code using the openapi-generator.

## Authentication

Click [here](authentication.md) to learn how to authenticate your API requests.
