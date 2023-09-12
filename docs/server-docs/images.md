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

## Image Cleanup

GameVault removes images from the database and the filesystem when the linked item is deleted. Non-linked manually uploaded images won't get deleted automatically.
