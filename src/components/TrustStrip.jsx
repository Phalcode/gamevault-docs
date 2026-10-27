import React from "react";
import { Container } from "./Container";

const links = [
  { href: "https://github.com/Phalcode", label: "GitHub" },
  {
    href: "https://hub.docker.com/r/phalcode/gamevault-backend",
    label: "Docker Hub",
  },
  { href: "https://discord.gg/NEdNen2dSu", label: "Discord" },
  { href: "https://reddit.com/r/Phalcode", label: "Reddit" },
  { href: "https://lemmy.world/c/phalcode", label: "Lemmy" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Community and project links"
      className="border-y border-gv-line bg-gv-shell/50"
    >
      <Container className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 py-4 text-sm text-gv-muted">
        <span className="mr-2 font-semibold text-gv-text">
          Built by a small team since 2023
        </span>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gv-line bg-gv-panel-soft px-3 py-1 font-medium text-gv-muted no-underline transition-colors hover:border-gv-line-strong hover:text-gv-text"
          >
            {link.label}
          </a>
        ))}
      </Container>
    </section>
  );
}
