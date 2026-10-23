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
      className="border-y border-primary-default/15 bg-background-default py-5"
    >
      <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-sm text-text-light">
        <span className="mr-2 font-semibold text-text-default">
          Built by a small team since 2023
        </span>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary-default/5 px-3 py-1 font-medium ring-1 ring-primary-default/15 transition-colors hover:text-primary-default hover:ring-primary-default/40"
          >
            {link.label}
          </a>
        ))}
      </Container>
    </section>
  );
}
