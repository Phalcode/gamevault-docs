import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import { ImageZoomProvider } from "../components/image-zoom/ImageZoomProvider";

/**
 * The docs sidebar is fully expanded, so the page you are reading can be far
 * below the fold. Keep the active entry in view whenever the user navigates or
 * opens the mobile drawer.
 */
const SCROLLABLE_CONTAINERS = [
  ".theme-doc-sidebar-container .gv-sidebar-nav",
  ".navbar-sidebar__item",
];

function revealActiveSidebarItem() {
  for (const selector of SCROLLABLE_CONTAINERS) {
    const containers = Array.from(document.querySelectorAll(selector));
    for (const container of containers) {
      const active =
        container.querySelector('.menu__link--active[aria-current="page"]') ??
        container.querySelector(".menu__link--active");
      if (!active) {
        continue;
      }
      const containerBox = container.getBoundingClientRect();
      const activeBox = active.getBoundingClientRect();
      const offset = activeBox.top - containerBox.top;
      const target =
        container.scrollTop +
        offset -
        (container.clientHeight - activeBox.height) / 2;
      container.scrollTop = Math.max(0, target);
    }
  }
}

function ActiveSidebarItemScroller() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reveal = () => {
      try {
        revealActiveSidebarItem();
      } catch {
        // Never let sidebar polish break navigation.
      }
    };

    const frame = window.requestAnimationFrame(reveal);
    const afterDrawerAnimation = window.setTimeout(reveal, 400);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(afterDrawerAnimation);
    };
  }, [pathname]);

  useEffect(() => {
    const handleNavbarToggle = (event) => {
      if (
        !(event.target instanceof Element) ||
        !event.target.closest(".navbar__toggle")
      ) {
        return;
      }
      window.setTimeout(() => {
        try {
          revealActiveSidebarItem();
        } catch {
          // Ignore.
        }
      }, 400);
    };

    document.addEventListener("click", handleNavbarToggle);
    return () => document.removeEventListener("click", handleNavbarToggle);
  }, []);

  return null;
}

export default function Root({ children }) {
  return (
    <ImageZoomProvider>
      <ActiveSidebarItemScroller />
      {children}
    </ImageZoomProvider>
  );
}
