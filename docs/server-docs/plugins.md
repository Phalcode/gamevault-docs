---
sidebar_position: 9
---

# Plugins

:::danger Plugins are dangerous  
Plugins are dangerous. Things may break, so always make backups before using them.  
:::

## Introduction

GameVault is built with modularity in mind, featuring a plugin system that allows users to integrate custom functionality directly into the server. Whether you're looking to extend GameVault or customize its behavior, plugins provide the flexibility you need.

## Where to Find Plugins

You can browse a list of available GameVault plugins [here](https://github.com/topics/gamevault-backend-plugin). Be sure to check that the plugin is compatible with your specific version of the GameVault backend.

## How to Install Plugins

To install a plugin, follow these steps:

1. Place the folder containing your compiled plugin (`.js` files) into the `/plugins` directory of your GameVault server. Archives are currently not supported, so extract them first.
2. When you start the server, GameVault will automatically detect and load the plugin.

## How to Develop GameVault Plugins

If you're a developer interested in creating plugins, you're in luck, it's simple to get started. Here’s a step-by-step guide:

### Step 1: Clone the Backend Repository

First, set up a local instance of the GameVault backend. Follow the setup instructions available [here](https://github.com/Phalcode/gamevault-backend/blob/master/INSTALL.md).

### Step 2: Understand the Architecture

GameVault plugins are built as NestJS modules, just like the rest of the system. You’ll be working with [NestJS](https://docs.nestjs.com) components such as [Modules](https://docs.nestjs.com/modules), [Services](https://docs.nestjs.com/providers), and [Controllers](https://docs.nestjs.com/controllers).

To start, it's a good idea to read the official NestJS documentation, but if you prefer to jump in and learn by doing, you can reference the [example code below](#example-plugins).

### Step 3: Set Up a Plugin

Suppose we’re creating a plugin called `release-radar`.

1. Navigate to the `gamevault-backend` directory in your cloned repository.
2. Create a folder for your plugin: `gamevault-backend/.local/plugins/release-radar/`.
3. Inside the plugin folder, initialize a git repository with `git init`.
4. Create a new file for your module: `release-radar.plugin.module.ts`. This file will serve as the entry point for your plugin and should implement the `GameVaultPluginModule` interface (which can be imported from `src/globals.ts`).

Here’s a basic example of how your module might look:

```ts
import { Module } from "@nestjs/common";
import {
  type GameVaultPluginModule,
  type GameVaultPluginModuleMetadataV1,
} from "../../../src/globals.js";

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export default class ReleaseRadarPluginModule
  implements GameVaultPluginModule
{
  metadata: GameVaultPluginModuleMetadataV1 = {
    name: "Release Radar",
    author: "Phalcode",
    version: "1.0.0",
    description:
      "An example plugin that publishes the most recently added games into the server news.",
    keywords: ["example", "news", "releases"],
    license: "MIT",
    website: "https://gamevau.lt",
  };
}
```

:::info ESM requirements (GameVault v17.0.1+)  
The backend is now ESM (NodeNext). Plugins must:  
- use explicit `.js` extensions on every relative import (e.g. `../../../src/globals.js`),  
- use `import type` for type-only imports (e.g. `GameVaultPluginModule`),  
- `export default` the module class (no CommonJS `module.exports` / `__esModule` interop),  
- **not** bundle their own copy of `@nestjs/*` or `reflect-metadata` — rely on the backend's `node_modules`,  
- be compiled together with the backend via `pnpm build` (Node LTS), producing a `*.plugin.module.js` entry.  
:::

:::tip Avoid Redundancy  
When naming files, avoid repeating words. For example, if your plugin is called `release-radar`, name the module file `release-radar.plugin.module.ts`, not `release-radar-plugin.plugin.module.ts`.  
:::

### Step 4: Document Your Plugin

Once you've implemented the `GameVaultPluginModule` interface, make sure to provide details about your plugin in the metadata section. Be sure to add a `README.md` and `LICENSE` file to the plugin folder to make it clear and accessible when shared on GitHub.

### Step 5: Implement Your Plugin's Logic

Now, develop your plugin by adding services, controllers, or any other NestJS components. You can use existing GameVault modules to extend functionality. For instance, the [Release Radar example](#example-plugins) reuses `GamesModule` to read the library and writes a news section. To expose an endpoint publicly, decorate a `@Controller()` and its routes with `@SkipGuards()`.

#### Adding Configuration Options

If your plugin should support specific configuration for the end user, you can introduce custom environment variables. Make sure they are unique and do not conflict with existing variables. A good pattern is: `PLUGIN_AUTHORNAME_PLUGINNAME_SETTING` (e.g., `PLUGIN_PHALCODE_RELEASE_RADAR_ENABLED`).

You can access these variables in your code via `process.env.PLUGIN_AUTHORNAME_PLUGINNAME_SETTING`.

### Step 6: Test Your Plugin

When you’re ready to test, run `pnpm start`. GameVault will automatically inject your plugin, and you should see relevant logs. You can debug using logs or Visual Studio Code’s "Toggle Auto Attach" feature. For extra quality assurance, you can write unit tests with Vitest by adding a `.spec.ts` file and running `pnpm test`.

### Step 7: Compile Your Plugin

Once your plugin is working and tested, compile it by running `pnpm build` (Node LTS). This will generate a `dist` folder with your compiled **ESM** plugin in the `dist/.local/plugins/release-radar` directory. Look for the folder containing a `.plugin.module.js` file — this is your compiled plugin. Zip that folder, this is the final, compiled version of your plugin, ready for users to install and run on their servers.

### Step 8: Release Your Plugin

1. Bring your local Git repository to GitHub.
2. Create a release on GitHub and upload the zipped plugin folder containing your plugin’s JavaScript files.
3. Tag your repository with `gamevault-backend-plugin` to make it available for users to find.

### Step 9: Get Featured

If your plugin is particularly useful and you want it to be in the standard feature set, contact us! We might integrate it directly into the official GameVault-Backend product.

## Metadata Provider Plugin Specifics

If your plugin should integrate with GameVault’s metadata framework, follow these additional steps:

- Create the plugin as outlined above.
- Develop a NestJS service that implements the [`abstract.metadata-provider.interface.ts`](https://github.com/Phalcode/gamevault-backend/blob/master/src/modules/metadata/providers/abstract.metadata-provider.service.ts).

Once complete, you can feature your plugin [right here in the documentation](metadata-enrichment/metadata.md#community-maintained-metadata-providers).

## Example Plugins

You can check out some example plugins provided by Phalcode [here](https://github.com/Phalcode/gamevault-backend-example-plugins) to see how plugins are structured and developed. The recommended reference is the [Release Radar](https://github.com/Phalcode/gamevault-backend-example-plugins/tree/main/v1/release-radar) example — a useful plugin that publishes the most recently added games into the server news.
