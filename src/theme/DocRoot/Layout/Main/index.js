import React from "react";
import clsx from "clsx";

export default function DocRootLayoutMain({
  hiddenSidebarContainer,
  children,
}) {
  return (
    <main
      className={clsx(
        "gv-doc-main",
        hiddenSidebarContainer && "gv-doc-main--enhanced",
      )}
    >
      <div className="container padding-top--md padding-bottom--lg">
        {children}
      </div>
    </main>
  );
}
