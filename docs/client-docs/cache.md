---
sidebar_position: 4
---

# Cache

This page provides an overview of the heardpiece of GameVault. Everything the App saves to storage in any form. All of this Data will be located in your `../AppData/Roaming/GameVault` Folder.

:::caution
Please note that manually changing the data, can lead to unwanted behavior in GameVault
:::


## Image Cache

All images in GameVault are stored locally. This ensures that they can be reloaded quickly. They are stored with the format "identifier.imageID" in the respective sub folder. The identifier stands for example for the game ID or the user ID.  
Since the ImageID is unique, it is possible for GameVault to detect if an image is outdated (for example, a box art image of a game has been modified by another user). The next time this image is requested, the image cache is also updated immediately. So GameVault is always up to date.

## Image Optimization

Every time you start GameVault, it runs an image optimization process. This optimally crops the images to the user's screen size and thus ensures even faster loading times and less unnecessary storage usage.

## Offline Cache (Progress)

Whenever there is no connection to the server, GameVault continues to track game times. These are transmitted to the server the next time it is connected.

## Offline Cache (Game Metadata)

Once a download is complete, GameVault stores the game metadata locally. This way you can use all the functions related to this game, even if there is no connection to the server.

## Settings

In a user file all possible settings related to GameVault are stored and retrieved.
Data like password and server URL are encrypted.

## Ignore List

The Ignore List contains a list of entries that occur quite often. This list is retrieved from the server (if not already present). It is used by the time tracker to exclude for example installation processes from tracking, but also when selecting the executable in the installation tab, it is used so that only game relevant executables are displayed.
The Ignore List is locally extensible. To do this, open the "ignorelist" file and add your own entries that you want to ignore.