---
sidebar_position: 8
---

# Images

In GameVault, images play a crucial role in providing visual representations of games and users and enhancing the user experience. This page outlines how images are handled within the backend application.

## Image Persistence

To ensure availability, performance, and efficient compression, GameVault persists all images on the filesystem using the images directory (by default `/images`) and the database. This includes various types of images, such as box arts, screenshots, and thumbnails. The storage path for images can be customized by modifying the `VOLUMES_IMAGES` environment variable.

## Image Reuse

GameVault utilizes image reuse to optimize storage and reduce duplication. When multiple games or entities share the same image, GameVault avoids redundant storage by referencing the same image in the database.

## Image Cleanup

To maintain a clean and efficient image storage system, GameVault regularly performs image cleanup. This process involves removing images that are no longer in use and also are older than a specified number of days.

### Cleanup Interval

The server initiates the image cleanup process at regular intervals determined by the `IMAGE_GC_INTERVAL_MINUTES` environment variable. By default, the cleanup process runs every 60 minutes.

### Image Retention Policy

GameVault follows an image retention policy to determine which images should be removed. Images that meet the following criteria are eligible for deletion:

- Not in Use: Images that are no longer associated with any games or entities in the application.
- Exceed Retention Period: Images that are older than a specified number of days, as defined by the `IMAGE_GC_KEEP_DAYS` environment variable. By default, images older than 30 days are considered for deletion.

### Database Cleanup

During the image cleanup process, GameVault hard removes the images from the database, ensuring they are no longer referenced by any entities.

### Filesystem Cleanup

Unlike database cleanup, for now, GameVault refrains from deleting images from the filesystem. This decision is made to prevent potential data loss or unintended consequences, such as the inability to access images if a volume mapping issue occurs.

## Conclusion

The image handling in GameVault aims to strike a balance between availability, performance, and data integrity. By persisting images on the filesystem and employing an image cleanup process, GameVault ensures a reliable and efficient image management system within the application.
