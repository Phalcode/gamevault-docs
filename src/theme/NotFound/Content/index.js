import React from "react";
import Link from "@docusaurus/Link";
import { Button } from "../../../components/Button";

export default function NotFoundContent({ className = undefined }) {
  return (
    <main className={className}>
      <div className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-10rem] -z-10 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(100,89,223,0.24),transparent_70%)] blur-3xl"
        />
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="eyebrow justify-center">404</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-gv-text sm:text-6xl">
            This page took a{" "}
            <span className="gv-gradient-text">wrong turn.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-gv-muted">
            The page you were looking for does not exist, was moved or is still
            being written. The library is safe, though.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/">Back to home</Button>
            <Button href="/docs/intro" variant="outline">
              Browse the docs
            </Button>
          </div>
          <p className="mt-8 text-sm text-gv-muted">
            Looking for a specific guide? Try the{" "}
            <Link
              href="/docs/faq"
              className="font-semibold text-gv-accent-cool no-underline hover:underline"
            >
              FAQ
            </Link>{" "}
            or the{" "}
            <Link
              href="/docs/troubleshooting"
              className="font-semibold text-gv-accent-cool no-underline hover:underline"
            >
              troubleshooting guide
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
