---
sidebar_position: 4
---

# API Usage

The GameVault API is fully documented and available for use to everyone. With the API, you can build your own GameVault clients, integrate the data into progress tracking sites, and manage your libraries automatically.

## Register a Separate User

To use the GameVault API, it is recommended to register a separate user. This user will be used to authenticate your API requests. You can do this by using the Register Form in the settings tab of the GameVault App.

## API Documentation

You can check out the API documentation at `example.com/api/docs` after making sure the server environment variable `SERVER_API_DOCS_ENABLED` is set to `true`.  

The API documentation provides a complete guide on how to use the API, including authentication, endpoints, and parameters.

You can also download the OpenAPI Specification in different formats using `example.com/api/docs-json` or `example.com/api/docs-yaml`. This is useful for importing the Calls into a tool like Postman or generate the client code using the openapi-generator.

## API Endpoints

Some of the available API endpoints include:

- **/admin API**: APIs for administration of your gamevault server
- **/health API**: APIs for health monitoring
- **/games API**: APIs for searching and downloading games
- **/progresses API**: APIs for tracking and managing user progress for games
- **/files API**: API for reindexing the game files
- **/tags API**: API for retrieving a list of tags
- **/genres API**: API for retrieving a list of genres
- **/users API**: APIs for managing user profiles and authentication
- **/rawg API**: APIs for interacting with the Rawg game database
- **/images API**: API for retrieving images by UUID.

## Authentication

Almost all requests to the API require basic-auth authentication. You will need to include it in the Authentication header of each request.
