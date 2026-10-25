import React from "react";
import clsx from "clsx";

export function SectionHeading({
  id = undefined,
  eyebrow = undefined,
  title,
  description = undefined,
  align = "center",
  className = undefined,
}) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        id={id}
        className="mt-3 text-3xl font-bold tracking-[-0.04em] text-gv-text sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-gv-muted">{description}</p>
      ) : null}
    </div>
  );
}
