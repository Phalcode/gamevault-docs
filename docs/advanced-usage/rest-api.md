---
sidebar_position: 4
---

# REST API Usage

The GameVault Backend Server offers a fully documented REST API for use to everyone. With the API, you can build your own GameVault clients or 3rd party integrations and manage your libraries automatically.

## Register a Bot User

To use the GameVault API, it is recommended to register a separate user with the username prefix `gvbot_` (e.g. `gvbot_image_downloader`). The bot user will not appear in the public user list. This user will be used to authenticate your API requests. You can do this by using the Register Form in the settings tab of the GameVault App.

## OpenAPI Specification

You can check out the API specification at `/api/docs` after making sure the server environment variable `SERVER_API_DOCS_ENABLED` is set to `true`. There is also a hosted version of the latest API Documentation available at [demo.gamevau.lt/api/docs](https://demo.gamevau.lt/api/docs).

The API documentation provides a complete guide on how to use the API, including authentication, endpoints, and parameters.

You can also download the OpenAPI Specification in different formats using `example.com/api/docs-json` or `example.com/api/docs-yaml`. This is useful for importing the Calls into a tool like Postman or generate the client code using the openapi-generator.

## Authentication

Click [here](authentication.md) to learn how to authenticate your API requests.
