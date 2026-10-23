import React from "react";
import * as Swetrix from "swetrix";
import { Button } from "./Button";
import { Container } from "./Container";

export function FinalCta() {
  const trackDownload = () =>
    Swetrix.track({ ev: "download_click", meta: { location: "final_cta" } });

  const trackDemo = () =>
    Swetrix.track({ ev: "demo_click", meta: { location: "final_cta" } });

  return (
    <section className="bg-background-dark py-16 sm:py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl tracking-tight text-text-default sm:text-4xl">
          Ready to host your own library?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-text-light">
          Free, self-hosted and no account required. Bring your game files and
          your own hardware.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href="/download"
            onClick={trackDownload}
            className="w-full sm:w-56 py-4 text-lg shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Download GameVault
          </Button>
          <Button
            href="https://demo.gamevau.lt"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            onClick={trackDemo}
            className="w-full sm:w-56 py-4 text-lg ring-primary-default/50 text-text-default hover:ring-primary-default"
          >
            Try the demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
