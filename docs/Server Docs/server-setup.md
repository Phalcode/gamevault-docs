---
sidebar_position: 1
---

# Setting up a Server

## Prerequisites

- [TypeORM](https://github.com/typeorm/typeorm)-compatible PostgreSQL Server
- Zipped Games in a specific name format

## Setup a Server using Docker Compose

```dockercompose
version: '3.1'
services:
  crackpipe-backend:
    image: crackpipe-backend
    restart: unless-stopped
    environment:
      CONFIG_RAWG_API_KEY: "YOURRAWGAPIKEY"
      CONFIG_DB_HOST: "db"
      CONFIG_DB_USERNAME: "default"
      CONFIG_DB_PASSWORD: "default"
    volumes:
      - /files:/your/games/folder:ro
  db:
    image: postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: default
      POSTGRES_PASSWORD: default
      POSTGRES_DB: crackpipe
    ports:
      - 5432:5432
```

## Configuration

Check out [configuration.ts](https://github.com/Phalcode/crackpipe-backend/blob/master/src/configuration.ts) for all possible environment variables.


