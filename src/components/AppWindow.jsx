import React from "react";
import clsx from "clsx";
import { ZoomableImage } from "./ZoomableImage";

export function AppWindow({
  src,
  alt,
  title = "gamevault.local",
  caption = undefined,
  className = undefined,
  imageClassName = undefined,
}) {
  return (
    <div
      className={clsx(
        "surface-panel gv-hover-lift overflow-hidden rounded-3xl",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-gv-line px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-gv-danger/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gv-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gv-success/70" />
        </div>
        <div className="flex min-w-0 flex-1 justify-center">
          <span className="truncate rounded-full border border-gv-line bg-gv-panel-soft px-3 py-1 text-[0.7rem] font-medium text-gv-muted">
            {title}
          </span>
        </div>
        <span className="hidden rounded-full border border-gv-line-strong bg-gv-accent/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gv-accent-cool sm:inline">
          {caption ?? "Live preview"}
        </span>
      </div>
      <div className="p-2 sm:p-3">
        <ZoomableImage
          src={src}
          alt={alt}
          className={clsx(
            "w-full rounded-xl border border-gv-line bg-gv-panel-strong shadow-(--shadow-card)",
            imageClassName,
          )}
        />
      </div>
    </div>
  );
}
