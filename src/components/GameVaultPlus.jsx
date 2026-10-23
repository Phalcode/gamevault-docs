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
      className="bg-background-default py-16 sm:py-24"
    >
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-default">
              Optional subscription
            </p>
            <h2
              id="gamevault-plus-title"
              className="mt-3 font-display text-3xl tracking-tight text-text-default sm:text-4xl"
            >
              Support development with GameVault+
            </h2>
            <p className="mt-4 text-lg text-text-light">
              GameVault is free. GameVault+ is the optional subscription that
              funds development and adds a few extras. From €4.99 per month.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                href="/docs/gamevault-plus/introduction"
                className="shadow-lg"
              >
                Explore GameVault+
              </Button>
              <a
                href="/docs/clients/feature-parity#gamevault"
                className="text-sm font-semibold text-primary-default hover:underline"
              >
                What is still missing in GameVault 2?
              </a>
            </div>
            <p className="mt-4 text-sm text-text-light">
              GameVault+ currently requires GameVault 1. Support for GameVault 2
              is planned.
            </p>
          </div>
          <ul className="grid list-none gap-4 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="rounded-2xl bg-background-dark/50 p-5 ring-1 ring-primary-default/25"
              >
                <h3 className="text-base font-semibold text-text-default">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-text-light">{benefit.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
