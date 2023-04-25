---
sidebar_position: 4
---

# API Usage

The Crackpipe API is fully documented and available for use to everyone. With the API, you can build your own Crackpipe clients, integrate the data into progress tracking sites, and manage your libraries automatically.

## Register a Separate User

To use the Crackpipe API, it is recommended to register a separate user. This user will be used to authenticate your API requests. You can do this by using the Register Form in the settings tab of the Crackpipe App.

## API Documentation

Once you have registered your account, you can check out the API documentation at `example.com/api/v1/docs`. The API documentation provides a complete guide on how to use the API, including authentication, endpoints, and parameters.

You can also download the OpenAPI Specification using `example.com/api/v1/docs-json` or `example.com/api/v1/docs-yaml`. This is useful for importing the Calls into a tool like Postman or generate the client code using the openapi-generator.

## API Endpoints

Some of the available API endpoints include:

- **Games API**: APIs for searching and downloading games
- **Progress API**: APIs for tracking and managing user progress for games
- **Tags API**: API for retrieving a list of tags
- **Genres API**: API for retrieving a list of genres
- **User API**: APIs for managing user profiles and authentication
- **Utility API**: Miscellaneous APIs for manual indexing, caching, and updating
- **Rawg API**: APIs for interacting with the Rawg game database
- **Images API**: API for retrieving images by UUID.

## Authentication

Almost all requests to the API require basic-auth authentication. You will need to include it in the Authentication header of each request.
