import React from "react";
import { Container } from "./Container";

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
      className="relative overflow-hidden bg-background-default py-16 sm:py-24"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-title"
            className="font-display text-3xl tracking-tight text-text-default sm:text-4xl"
          >
            Server, games, play
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Three steps from a folder of installers to a private game library.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col rounded-2xl bg-background-dark/50 p-6 ring-1 ring-primary-default/30"
            >
              <span className="text-sm font-semibold text-primary-default">
                {step.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-text-default">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-base text-text-light">
                {step.body}
              </p>
              <a
                href={step.href}
                className="mt-5 text-sm font-semibold text-primary-default hover:underline"
              >
                {step.linkLabel}
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
