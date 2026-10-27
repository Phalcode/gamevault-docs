---
description: Install and manage GameVault Server plugins for metadata providers and integrations.
sidebar_position: 9
---

# Plugins

:::danger
Plugins run with the server's permissions and can break it. Back up your data
before installing one.
:::

## Introduction

Plugins add code to a running server: extra metadata providers, integrations or
endpoints.

## Where to find plugins

Browse the plugins tagged
[gamevault-backend-plugin](https://github.com/topics/gamevault-backend-plugin) on
GitHub. Check that a plugin matches your server version before installing it.

## Installing a plugin

1. Put the folder with the compiled `.js` files into the `/plugins` directory of
   your server. Archives are not supported, so extract them first.
2. Start the server. It loads every plugin it finds there.

## Developing a plugin

For a new plugin, follow these steps:

### Step 1: Clone the backend repository

Set up a local backend first; see
[INSTALL.md](https://github.com/Phalcode/gamevault-backend/blob/master/INSTALL.md).

### Step 2: Understand the architecture

GameVault plugins are built as NestJS modules, just like the rest of the system. You’ll be working with [NestJS](https://docs.nestjs.com) components such as [Modules](https://docs.nestjs.com/modules), [Services](https://docs.nestjs.com/providers), and [Controllers](https://docs.nestjs.com/controllers).

Read the official NestJS documentation, or start from the
[example plugins](#example-plugins) below.

### Step 3: Set up a plugin

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
export default class ReleaseRadarPluginModule implements GameVaultPluginModule {
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
- **not** bundle their own copy of `@nestjs/*` or `reflect-metadata`; rely on the backend's `node_modules`,
- be compiled together with the backend via `pnpm build` (Node LTS), producing a `*.plugin.module.js` entry.  
  :::

:::tip Avoid Redundancy  
When naming files, avoid repeating words. For example, if your plugin is called `release-radar`, name the module file `release-radar.plugin.module.ts`, not `release-radar-plugin.plugin.module.ts`.  
:::

### Step 4: Document the plugin

Once you've implemented the `GameVaultPluginModule` interface, make sure to provide details about your plugin in the metadata section. Be sure to add a `README.md` and `LICENSE` file to the plugin folder to make it clear and accessible when shared on GitHub.

### Step 5: Implement the plugin logic

Now, develop your plugin by adding services, controllers, or any other NestJS components. You can use existing GameVault modules to extend functionality. For instance, the [Release Radar example](#example-plugins) reuses `GamesModule` to read the library and writes a news section. To expose an endpoint publicly, decorate a `@Controller()` and its routes with `@SkipGuards()`.

#### Adding configuration options

If your plugin should support specific configuration for the end user, you can introduce custom environment variables. Make sure they are unique and do not conflict with existing variables. A good pattern is: `PLUGIN_AUTHORNAME_PLUGINNAME_SETTING` (e.g., `PLUGIN_PHALCODE_RELEASE_RADAR_ENABLED`).

You can access these variables in your code via `process.env.PLUGIN_AUTHORNAME_PLUGINNAME_SETTING`.

### Step 6: Test the plugin

When you’re ready to test, run `pnpm start`. GameVault will automatically inject your plugin, and you should see relevant logs. You can debug using logs or Visual Studio Code’s "Toggle Auto Attach" feature. For extra quality assurance, you can write unit tests with Vitest by adding a `.spec.ts` file and running `pnpm test`.

### Step 7: Compile the plugin

Once your plugin is working and tested, compile it by running `pnpm build` (Node LTS). This will generate a `dist` folder with your compiled **ESM** plugin in the `dist/.local/plugins/release-radar` directory. The folder that contains a `.plugin.module.js` file is your compiled plugin. Zip that folder; the archive is what users install on their servers.

### Step 8: Release the plugin

1. Bring your local Git repository to GitHub.
2. Create a release on GitHub and upload the zipped plugin folder containing your plugin’s JavaScript files.
3. Tag your repository with `gamevault-backend-plugin` to make it available for users to find.

### Step 9: Get featured

If your plugin is particularly useful and you want it to be in the standard feature set, contact us! We might integrate it directly into the official GameVault-Backend product.

## Metadata provider plugin specifics

If your plugin should integrate with GameVault’s metadata framework, follow these additional steps:

- Create the plugin as outlined above.
- Develop a NestJS service that implements the [`abstract.metadata-provider.interface.ts`](https://github.com/Phalcode/gamevault-backend/blob/master/src/modules/metadata/providers/abstract.metadata-provider.service.ts).

Once complete, you can feature your plugin [right here in the documentation](metadata-enrichment/metadata.md#community-maintained-metadata-providers).

## Example plugins

Phalcode® publishes [example plugins](https://github.com/Phalcode/gamevault-backend-example-plugins). The recommended reference is the [Release Radar](https://github.com/Phalcode/gamevault-backend-example-plugins/tree/main/v1/release-radar) example, which publishes the most recently added games into the server news.
