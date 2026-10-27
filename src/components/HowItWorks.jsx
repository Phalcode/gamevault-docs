import React from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Run the server",
    body: "Deploy GameVault Server with Docker. Postgres or SQLite, a folder for your games, and you are done.",
    href: "/docs/server/setup",
    linkLabel: "Server setup",
  },
  {
    number: "02",
    title: "Add your games",
    body: "Drop installers and portable builds into the files volume. GameVault indexes them and pulls metadata and artwork from IGDB.",
    href: "/docs/server/adding-games",
    linkLabel: "Adding games",
  },
  {
    number: "03",
    title: "Play anywhere",
    body: "Install GameVault 2 on Windows, Linux or macOS, or open the Web UI in a browser. Your library follows your account.",
    href: "/download",
    linkLabel: "Download",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <Container className="relative">
        <SectionHeading
          id="how-it-works-title"
          eyebrow="How it works"
          title="Server, games, play"
          description="Three steps from a folder of installers to a private game library."
        />

        <ol className="mt-12 grid list-none gap-5 p-0 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="surface-panel gv-hover-lift group relative flex flex-col rounded-3xl p-6"
            >
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-12 hidden h-px w-5 bg-linear-to-r from-gv-line-strong to-transparent sm:block"
                />
              ) : null}
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gv-line-strong bg-gv-accent/10 font-mono text-sm font-bold text-gv-accent-cool">
                  {step.number}
                </span>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gv-muted">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-gv-text">
                {step.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[0.95rem] leading-7 text-gv-muted">
                {step.body}
              </p>
              <a
                href={step.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gv-accent-cool no-underline transition-colors hover:text-gv-accent-strong"
              >
                {step.linkLabel}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
