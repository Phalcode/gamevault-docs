import ImgLibrary from "@site/static/img/features/library.png";
import Link from "@docusaurus/Link";
import React from "react";
import * as Swetrix from "swetrix";
import { Button } from "./Button";
import { Container } from "./Container";

const proofPoints = [
  "Free",
  "No account",
  "Docker in 5 minutes",
  "Windows · Linux · macOS · Web",
];

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background-default">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Background Glows */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-default to-primary-light opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <Container className="pb-16 pt-10 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              <a
                href="#demo"
                className="group relative inline-flex items-center gap-x-2 rounded-full bg-primary-default/10 px-4 py-1.5 text-sm font-medium leading-6 text-primary-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-darkest focus-visible:outline-offset-2 !no-underline"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-default opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-default"></span>
                </span>
                <span className="flex items-center gap-1.5">
                  Explore the Live Demo
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-y-0.5 translate-y-[0.5px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <h1 className="font-display text-4xl font-black tracking-tight text-text-default sm:text-6xl lg:text-7xl leading-[1.02]">
              Your Games.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-default via-primary-light to-primary-default drop-shadow-sm">
                Your Server.
              </span>
              <br />
              Your Rules.
            </h1>
            <p className="mt-8 text-lg sm:text-xl leading-8 text-text-light max-w-2xl mx-auto lg:mx-0">
              The self-hosted Steam alternative for DRM-free games. Run the
              server on your NAS, mini PC or VPS and access it from Windows,
              Linux, macOS or the browser.
            </p>
            <ul
              aria-label="GameVault at a glance"
              className="mt-5 flex flex-wrap list-none justify-center gap-2 lg:justify-start"
            >
              {proofPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-full bg-primary-default/10 px-3 py-1 text-xs font-medium text-primary-light ring-1 ring-primary-default/20"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-primary-light">
              GameVault 2 is available for Windows, Linux and macOS as a public
              beta, plus the Web UI in your browser.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                href="/download"
                onClick={() =>
                  Swetrix.track({
                    ev: "download_click",
                    meta: { location: "hero" },
                  })
                }
                className="w-full sm:w-56 py-4 text-lg shadow-xl transition-all hover:scale-105 active:scale-95 hover:shadow-primary-default/20"
              >
                Download
              </Button>
              <div className="w-full sm:w-56">
                <Button
                  href="/docs/intro"
                  variant="outline"
                  className="w-full py-4 text-lg ring-primary-default/50 text-text-default shadow-xl transition-all hover:scale-105 hover:ring-primary-default active:scale-95"
                >
                  Explore the docs
                </Button>
              </div>
            </div>
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

        <div className="mt-20 flow-root sm:mt-28 relative">
          <div className="rounded-2xl bg-background-dark/50 p-2 lg:rounded-3xl lg:p-4 backdrop-blur-sm">
            <div className="relative rounded-xl shadow-2xl group">
              <img
                src={ImgLibrary}
                loading="lazy"
                alt="GameVault Library Screenshot"
                data-zoomable
                className="zoomable cursor-zoom-in w-full rounded-xl bg-background-default shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
