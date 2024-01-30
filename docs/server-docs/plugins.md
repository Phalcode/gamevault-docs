---
sidebar_position: 9
---

# Plugins

## Introduction

GameVault is designed with a high degree of modularity and features a built-in plugin system. Users have the capability to integrate their own plugins into the server.

## Getting Started

- Set the `PLUGIN_ENABLED` environment variable to `true` to enable plugins.
- Add your raw plugin paths to the comma-separated list of plugins in the `PLUGIN_SOURCES` environment variable.

For example:

```.env
PLUGIN_ENABLED=true
PLUGIN_SOURCES="https://raw.githubusercontent.com/Phalcode/gamevault-backend-example-plugins/master/plugins/gamevault-chuck-norris-joke-fetcher-plugin.js"
```

## Finding Plugins

Coming soon.

## Writing GameVault Plugins

### Example Plugins

Phalcode has a few example plugins [here](https://github.com/Phalcode/gamevault-backend-example-plugins) that you can use to learn how to build your own plugins.

### Available Features

Coming soon.
