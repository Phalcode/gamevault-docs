---
sidebar_position: 9
---

# Plugins

:::danger Things may break
Please note that plugins are currently in very early stages and things may break using them. Always make backups.
:::

## Introduction

GameVault is designed with a high degree of modularity and features a built-in plugin system. Users have the capability to integrate their own plugins into the server.

## Using Plugins

To use plugins, you need to put the folder containing the compiled plugin (.js files) into your GameVault Servers `/plugins` folder. When starting the server, GameVault will automatically detect your Plugins and inject them into the Application.

## Finding Plugins

You can find plugins [here](https://github.com/topics/gamevault-backend-plugin). Make sure they are compatible with your GameVault Backend Version.

## Writing GameVault Plugins

If you are a developer, writing GameVault Plugins is very easy.

### Step by Step Guide of BUilding a plugin

#### Step 1 Cloning the Backend repository

First you need set up a running local instance of the gamevault-backend. You can find instructions on how to set that up [here](https://github.com/Phalcode/gamevault-backend/blob/master/INSTALL.md).

#### Step 2 UNderstanding the architecture

GameVault Plugins just like the rest of GameVaults architecture, are NestJS Modules, and you will develop them as if they always were part of the GameVault Backend code. Make yourself familiar with [NestJS](https://docs.nestjs.com) and its architecture. For Plugins you will be especially using [Modules](https://docs.nestjs.com/modules), [Services](https://docs.nestjs.com/providers) and [Controllers](https://docs.nestjs.com/controllers). I recommend reading through the linked concepts, but if youre a pragmatic person, you can just go in cold turkey and look into example code [below.](#example-plugins)

#### Step 3 Setting up a plugin

Lets say the name of plugin we want to write is `useless-plugin`.

Open up your cloned gamevault-backend repository and create a folder for your plugin under here: `gamevault-backend/.local/plugins/useless-plugin/`.

Then initialize a git repository inside that folder using `git init`.

Build a `useless.plugin.module.ts` file. It will be our NestJS Module and the entrypoint for the entire plugin.

:::tip Dont repeat repeat yourself
If you're plugin is called useless-plugin, dont call the module useless-plugin.plugin.module, but useless.plugin.module.ts.
:::

The module needs to implement our GameVaultPluginModule interface, which can be imported from `src/globals.ts`.

#### Step 4 Explain people what your plugin does

Once you implement this interface your ide will scream to you, that you need to implment the properties of it. FIll in the details of your plugin here. Your plugin Module should now look something like this. You should also add a README and a LICENSE file into that folder to make it human readable and usable in GitHub later on.

```ts
import { Module } from "@nestjs/common";

import {
  GameVaultPluginModule,
  GameVaultPluginModuleMetadataV1,
} from "../../../src/globals";

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export default class UselessPluginModule implements GameVaultPluginModule {
  metadata: GameVaultPluginModuleMetadataV1 = {
    name: "Useless Plugin",
    author: "Phalcode",
    version: "1.0.0",
    description:
      "An useless example plugin. This plugin does nothing useful. It is just an example. It logs the count of users on the server every three seconds and provides two rest apis that show some samples.",
    keywords: ["example", "api"],
    license: "UNLICENSE",
    website: "https://gamevau.lt",
  };
}
```

#### Step 5 Implement your Logic

Now its time to get some work done, implment NEstjs services, controllers and whatever else you want. You can use any existing Gamevault modules. For instance in our example you can see we used the UsersService to count the users on our GameVault server. The possibilities are endless.

##### Make your plugin configurable

You can implement your own configuration environment variables if necessary. Make sure they fit in but do not conflict with any existing environment variables and are distinct enough. (For example, `PLUGIN_AUTHORNAME_PLUGINNAME_SETTING` like `PLUGIN_ALFAGUN74_IGDB_ENABLED`). You can read them using `process.env.PLUGIN_ALFAGUN74_IGDB_ENABLED` anywhere in the code.

#### Step 6 Test your plugin

You can run `pnpm start`, whenever you feel ready to test your plugin, your plugin should inject automatically and you should immediately see in the logs that things should be working.

you can debug your plugin using logs or by using the Toggle Auto Attach Feature of Visual Studio Code. To get some extra quality assurance you can also write and run unit tests by using jest. just add a .spec.ts file to your folder and run `pnpm test`, youll see the output in your console.

#### Step 7 Compiling your plugin

Once you finished building and testing your plugin it is time to compile/transpile it. We need to do this, because you used typescript to write it, but the environment running GameVault only speaks Java script. To compile your plugin just run `pnpm build`. A folder called `dist` should appear in the root of the gamevault-backend project. Open it and you should see your compiled plugin under `dist/.local/plugins/useless-plugin`. if it contains a file ending with `.plugin.module.js` you are at the right spot.

Zip that folder. it is the finished baked Plugin your users will be able to use on their servers.

#### Step 8 Releasing your plugin

Push the Git Repository you created in the first steps onto Github, then publish your zipped built plugin (folder containing js files) by uploading it to the Releases Page of your plugins github site manually. make sure to note what GameVault Version it was built on to guarantee compability.

now simply Tag your github repository with the tag `gamevault-backend-plugin` to make it findable by users.

Congratulations you have now successfully build your very own GameVault Backend Plugin. If your feature is awesome enough, contact us and we may add the module of your plugin as an official contribution into the main GameVault Product, as it is fully compatible. Similar to how the Piston mod made it to minecraft a decade ago. :)

### Specifics to be aware of to develop a metadata provider plugin

There are special things to consider if you want your plugin to integrate into the existing metadata framework:

- Create your plugin module as outlined in Step 3 of the guide above. Now you will need to build a [NestJS service](https://docs.nestjs.com/providers#services) that implements the [abstract.metadata-provider.interface.ts](https://github.com/Phalcode/gamevault-backend/blob/master/src/modules/metadata/providers/abstract.metadata-provider.service.ts). View the built-in metadata providers of GameVault for some inspiration.

- After releasing your plugin, you can also add your provider to the list of metadata providers in this documentation along with a notice that it is community maintained.

### Example Plugins

Phalcode has a few example plugins [here](https://github.com/Phalcode/gamevault-backend-example-plugins) that you can use to learn how to build your own plugins.
