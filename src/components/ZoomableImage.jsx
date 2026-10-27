import React from "react";
import clsx from "clsx";
import { useImageZoom } from "./image-zoom/ImageZoomProvider";

/**
 * Image that opens the shared GameVault lightbox.
 *
 * @param {Object} props
 * @param {string} props.src
 * @param {string=} props.alt
 * @param {string=} props.title
 * @param {string=} props.className
 * @param {boolean=} props.zoom
 */
export function ZoomableImage({
  src,
  alt,
  title,
  className,
  zoom = true,
  ...props
}) {
  const { openImage } = useImageZoom();
  const enabled = zoom !== false;

  return (
    <img
      {...props}
      src={src}
      alt={alt || ""}
      title={title}
      data-gv-zoom={enabled ? "" : undefined}
      data-gv-zoom-title={title}
      data-gv-zoom-disabled={enabled ? undefined : "true"}
      className={clsx(enabled && "gv-zoomable", className)}
      onClick={(event) => {
        if (!enabled) return;
        event.preventDefault();
        event.stopPropagation();
        openImage({
          element: /** @type {HTMLImageElement} */ (event.currentTarget),
          src,
          alt,
          title,
        });
      }}
    />
  );
}
