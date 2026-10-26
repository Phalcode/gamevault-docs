# Screenshot sources

Full-resolution captures live here, outside `static/`, so they are not shipped
with the site. The versions referenced from the docs are optimised copies in
`static/img/screenshots/<date>/`.

To refresh them:

```bash
find static/img/screenshots/<date> -name '*.png' -delete   # if needed
magick source.png -strip -resize 1600x -quality 85 static/img/screenshots/<date>/Area/Name.webp
```

Keep the folder name as the capture date, and never commit the Windows
`:Zone.Identifier` sidecar files.
