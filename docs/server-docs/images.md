---
sidebar_position: 8
---

# Images

This page outlines how images are handled within the backend application.

## Supported Image Types

`.bmp`, `.jpg`, `.jpeg`, `.png`, `.gif`, `.ico`, `.tif`, `.tiff`

## Image Persistence

To ensure availability, performance, and efficient compression, GameVault persists all images on the filesystem using the images directory (by default `/images`) and the database. This includes all types of images, such as box arts, screenshots, and thumbnails. The storage path for images can be customized by modifying the `VOLUMES_IMAGES` environment variable.

## Reusing Images

GameVault stores each image one-to-one, with no image recycling.

In the past, GameVault used to recycle images to save space and reduce duplication. But we removed this feature because the process of removing repeated images became too complex, and it's very rare for the same image to be used multiple times on a server.

## Image Garbage Collection

:::danger Potential data loss
Garbage collection **can result in data loss**, as it will **delete any files inside the images folder** without an association in the database. For example if you set up a new, empty database. It is advisable to regularly back up your images just to be safe. If you don't want to lose any data, you can disable garbage collection by setting the `IMAGE_GC_DISABLED` environment variable to `true`.
:::

GameVault regularly cleans up its images in the database and filesystem to keep things tidy. We call this process garbage collection.

You can control how often the garbage colletion happens by changing the value of `IMAGE_GC_INTERVAL_IN_MINUTES`.

During cleanup, GameVault first gets rid of all images in the database that aren't used. Afterwards, it deletes all image files in the images folder that don't match any database entries. So please don't put any files in the images folder that you don't want to be deleted.

If you want to turn off this feature, you can use the `IMAGE_GC_DISABLED` setting.
