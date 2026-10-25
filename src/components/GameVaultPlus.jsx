import React from "react";
import { Button } from "./Button";
import { Container } from "./Container";

const benefits = [
  {
    title: "Cloud saves",
    body: "Back up savegames through your server and continue on another machine, powered by Ludusavi.",
  },
  {
    title: "Themes",
    body: "Premium themes and custom themes, so the client matches your setup.",
  },
  {
    title: "Integrations",
    body: "Steam library sync, Discord Rich Presence and the Playnite extension.",
  },
  {
    title: "Multiple profiles",
    body: "Stay signed in to several servers on one device and switch without typing credentials again.",
  },
];

export function GameVaultPlus() {
  return (
    <section
      id="gamevault-plus"
      aria-labelledby="gamevault-plus-title"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#cfa344]/40 to-transparent"
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gv-gold">Optional subscription</p>
            <h2
              id="gamevault-plus-title"
              className="mt-3 text-3xl font-bold tracking-[-0.04em] text-gv-text sm:text-4xl"
            >
              Support development with{" "}
              <span className="text-gv-gold">GameVault+</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gv-muted">
              GameVault is free. GameVault+ is the optional subscription that
              funds development and adds a few extras. From €4.99 per month.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                href="/docs/gamevault-plus/introduction"
                color="gold"
                className="shadow-lg"
              >
                Explore GameVault+
              </Button>
              <a
                href="/docs/clients/feature-parity#gamevault"
                className="text-sm font-semibold text-gv-accent-cool no-underline hover:text-gv-accent-strong"
              >
                What is still missing in GameVault 2?
              </a>
            </div>
            <p className="mt-4 text-sm text-gv-muted">
              GameVault+ currently requires GameVault 1. Support for GameVault 2
              is planned.
            </p>
          </div>
          <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="surface-panel gv-hover-lift rounded-[1.25rem] p-5"
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-gv-gold"
                  />
                  <h3 className="text-base font-semibold text-gv-text">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-gv-muted">
                  {benefit.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
