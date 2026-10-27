import React from "react";
import clsx from "clsx";
import { useImageZoom } from "../../../components/image-zoom/ImageZoomProvider";

const BADGE_PATTERN = /(img\.shields\.io|licensebuttons\.net|badgen\.net)/i;

export default function MDXImg(props) {
  const { openImage } = useImageZoom();
  const { className, title, zoom, ...rest } = props;
  const src = typeof rest.src === "string" ? rest.src : "";
  const isBadge = BADGE_PATTERN.test(src);
  const enabled =
    zoom !== false && !isBadge && rest["data-nozoom"] === undefined;

  const image = (
    <img
      decoding="async"
      loading="lazy"
      {...rest}
      title={title}
      data-gv-zoom={enabled ? "" : undefined}
      data-gv-zoom-title={title}
      data-gv-zoom-disabled={enabled ? undefined : "true"}
      className={clsx(enabled && "gv-zoomable", className)}
      onClick={(event) => {
        if (!enabled) return;
        if (/** @type {HTMLElement} */ (event.currentTarget).closest("a")) {
          return;
        }
        event.preventDefault();
        openImage({
          element: /** @type {HTMLImageElement} */ (event.currentTarget),
          src,
          alt: rest.alt,
          title,
        });
      }}
    />
  );

  if (!title) {
    return image;
  }

  return (
    <span className="gv-figure">
      {image}
      <span className="gv-figcaption">{title}</span>
    </span>
  );
}
