import ImgLibrary from "@site/static/img/features/library.png";
import Link from "@docusaurus/Link";
import React from "react";
import * as Swetrix from "swetrix";
import { AppWindow } from "./AppWindow";
import { Button } from "./Button";
import { Container } from "./Container";

const proofPoints = [
  "Free & self-hosted",
  "Docker in 5 minutes",
  "Windows · Linux · macOS · Web",
];

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(141,132,255,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(141,132,255,0.075)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_55%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-22rem] -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(100,89,223,0.32),transparent_65%)] blur-3xl"
      />

      <Container className="pb-16 pt-14 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="text-center lg:col-span-7 lg:text-left">
            <div className="mb-7 flex justify-center lg:justify-start">
              <Link
                href="https://demo.gamevau.lt"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-gv-line-strong bg-gv-accent/10 px-4 py-1.5 text-sm font-semibold text-gv-accent-cool no-underline transition-colors hover:bg-gv-accent/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gv-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gv-accent" />
                </span>
                Explore the live demo
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                </svg>
              </Link>
            </div>

            <h1 className="text-4xl font-black leading-[1.03] tracking-[-0.05em] text-gv-text sm:text-6xl lg:text-7xl">
              Your Games.
              <br />
              <span className="gv-gradient-text">Your Server.</span>
              <br />
              Your Rules.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gv-muted sm:text-xl lg:mx-0">
              The self-hosted Steam alternative for DRM-free games. Run the
              server on your NAS, mini PC or VPS and play from Windows, Linux,
              macOS or the browser.
            </p>

            <ul
              aria-label="GameVault at a glance"
              className="mt-6 flex list-none flex-wrap justify-center gap-2 p-0 lg:justify-start"
            >
              {proofPoints.map((point) => (
                <li key={point} className="data-chip">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button
                href="/download"
                size="lg"
                onClick={() =>
                  Swetrix.track({
                    ev: "download_click",
                    meta: { location: "hero" },
                  })
                }
                className="w-full sm:w-auto"
              >
                Download GameVault
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
              <Button
                href="/docs/intro"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore the docs
              </Button>
            </div>

            <p className="mt-5 text-sm font-medium text-gv-muted">
              GameVault 2 is available for Windows, Linux and macOS as a public
              beta, plus the Web UI in your browser.
            </p>
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
            <div className="absolute inset-0 bg-primary-default/10 blur-[100px] rounded-full" />
            <img
              src="/img/logo.png"
              className="max-h-[24rem] w-full object-contain animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] nozoom relative z-10"
              alt="GameVault Logo"
            />
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <AppWindow
            src={ImgLibrary}
            alt="GameVault 2 library view"
            title="gamevault.local · Library"
            caption="GameVault 2"
            className="mx-auto max-w-6xl"
          />
        </div>
      </Container>
    </div>
  );
}
