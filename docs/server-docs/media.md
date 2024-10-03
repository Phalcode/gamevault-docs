---
sidebar_position: 8
---

# Media

This page outlines how media like images and videos are handled within the backend application.

Here is the updated markdown table including the format names as a second column:

## Supported Formats

### Supported Image Formats

| Format  | Name                        | MIME Type                  |
| ------- | --------------------------- | -------------------------- |
| `.bmp`  | Bitmap Image                | `image/bmp`                |
| `.jpeg` | JPEG Image                  | `image/jpeg`               |
| `.png`  | Portable Network Graphics   | `image/png`                |
| `.tiff` | Tagged Image File Format    | `image/tiff`               |
| `.gif`  | Graphics Interchange Format | `image/gif`                |
| `.ico`  | Icon Format                 | `image/vnd.microsoft.icon` |

### Supported Audio Formats

| Format  | Name                      | MIME Type        |
| ------- | ------------------------- | ---------------- |
| `.mp3`  | MPEG Audio                | `audio/mpeg`     |
| `.wav`  | Waveform Audio            | `audio/wav`      |
| `.ogg`  | Ogg Vorbis                | `audio/ogg`      |
| `.aac`  | Advanced Audio Codec      | `audio/aac`      |
| `.flac` | Free Lossless Audio Codec | `audio/flac`     |
| `.wma`  | Windows Media Audio       | `audio/x-ms-wma` |
| `.amr`  | Adaptive Multi-Rate       | `audio/amr`      |
| `.mp4`  | MPEG-4 Audio              | `audio/mp4`      |

### Supported Video Formats

| Format  | Name                   | MIME Type          |
| ------- | ---------------------- | ------------------ |
| `.mp4`  | MPEG-4 Video           | `video/mp4`        |
| `.avi`  | Audio Video Interleave | `video/x-msvideo`  |
| `.mov`  | QuickTime              | `video/quicktime`  |
| `.wmv`  | Windows Media Video    | `video/x-ms-wmv`   |
| `.flv`  | Flash Video            | `video/x-flv`      |
| `.mkv`  | Matroska Video         | `video/x-matroska` |
| `.webm` | WebM Video             | `video/webm`       |
| `.mpeg` | MPEG Video             | `video/mpeg`       |
| `.3gp`  | 3GPP Multimedia File   | `video/3gpp`       |

## Media Persistence

GameVault stores media either by persisting them to the filesystem using the media directory (by default `/media`) or by saving a link to an external URL.

### Media that is stored on the filesystem

- `game_metadata.cover`: Game Box Arts
- `game_metadata.background`: Game Background Images
- `gamevault_user.avatar`: User Avatars
- `gamevault_user.background`: User Background Images

### Media that is stored as an external resource

- `game_metadata.url_screenshots`: Game Screenshots
- `game_metadata.url_trailers`: Game Trailers
- `game_metadata.url_gameplays`: Gameplay Videos

:::note
Note the `url_` prefix.
:::

### Duplicate Media

GameVault stores each media resource referenced in the database as one-to-one, with no media reuse. So it's normal to see duplicates.

## Media Garbage Collection

:::danger Potential data loss
Garbage collection **can result in data loss**, as it will **delete any files inside the media folder** without an association in the database. For example if you set up a new, empty database. It is advisable to regularly back up your media just to be safe. If you don't want to lose any data, you can disable garbage collection by setting the `MEDIA_GC_DISABLED` environment variable to `true`.
:::

GameVault regularly cleans up its media in the database and filesystem to keep things tidy. We call this process garbage collection.

You can control how often the garbage colletion happens by changing the value of `MEDIA_GC_INTERVAL_IN_MINUTES`.

During cleanup, GameVault first gets rid of all media in the database that aren't used. Afterwards, it deletes all media files in the media folder that don't match any database entries. So please don't put any files in the media folder that you don't want to be deleted.

### Turning off Garbage Collection

If you want to turn off this feature, you can disableit by setting the `MEDIA_GC_DISABLED` environment variable to `true`.
