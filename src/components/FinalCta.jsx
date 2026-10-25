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
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-gv-line-strong bg-[linear-gradient(135deg,rgba(100,89,223,0.22),rgba(35,34,48,0.4)_45%,rgba(77,189,255,0.12))] px-6 py-14 text-center shadow-[var(--shadow-shell)] backdrop-blur-xl sm:px-12">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[-8rem] h-64 w-[32rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(141,132,255,0.35),transparent_70%)] blur-3xl"
          />
          <div className="relative">
            <p className="eyebrow justify-center">Get started</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-gv-text sm:text-4xl lg:text-5xl">
              Ready to host your own library?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gv-muted">
              Free and self-hosted. Bring your game files and your own hardware.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/download"
                onClick={trackDownload}
                size="lg"
                className="w-full sm:w-auto"
              >
                Download GameVault
              </Button>
              <Button
                href="https://demo.gamevau.lt"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                onClick={trackDemo}
                className="w-full sm:w-auto"
              >
                Try the demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
