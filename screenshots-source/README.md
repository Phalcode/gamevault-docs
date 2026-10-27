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

The star chart in `static/img/features/stars.webp` is generated instead of
captured. Open this URL and save the SVG as a 1600 px wide WebP:

```text
https://api.star-history.com/svg?repos=Phalcode/gamevault-backend,Phalcode/gamevault-app,Phalcode/gamevault-frontend&type=Date
```
