import React, { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function DemoSection() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="demo" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gv-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-8 -z-10 h-72 w-[46rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(100,89,223,0.18),transparent_70%)] blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <SectionHeading
              align="left"
              eyebrow="Live demo"
              title={
                <>
                  Ready to <span className="gv-gradient-text">explore?</span>
                </>
              }
              description="Experience GameVault firsthand in our public demo. No installation required. Use the credentials to log in and explore the library, metadata, community and admin views."
              className="mx-auto lg:mx-0"
            />
            <div className="mt-8">
              <Button
                href="https://demo.gamevau.lt"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto"
              >
                Launch the demo
                <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="surface-panel overflow-hidden rounded-3xl font-mono text-sm shadow-(--shadow-shell)">
              <div className="flex items-center gap-3 border-b border-gv-line px-4 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-gv-danger/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gv-warning/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gv-success/70" />
                </div>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gv-muted">
                  demo credentials
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <p className="mb-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-gv-muted">
                    Username
                  </p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("demo", "user")}
                    className="flex w-full items-center justify-between gap-3 rounded-xl border border-gv-line bg-gv-panel-strong px-3.5 py-3 text-left transition-colors hover:border-gv-line-strong hover:bg-gv-panel-soft"
                  >
                    <code className="text-base font-bold text-gv-accent-cool">
                      demo
                    </code>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gv-muted">
                      {copiedField === "user" ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>

                <div>
                  <p className="mb-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-gv-muted">
                    Password
                  </p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("demodemo", "pass")}
                    className="flex w-full items-center justify-between gap-3 rounded-xl border border-gv-line bg-gv-panel-strong px-3.5 py-3 text-left transition-colors hover:border-gv-line-strong hover:bg-gv-panel-soft"
                  >
                    <code className="text-base font-bold text-gv-accent-cool">
                      demodemo
                    </code>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gv-muted">
                      {copiedField === "pass" ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>

                <p
                  className="min-h-4 text-[0.7rem] text-gv-muted"
                  aria-live="polite"
                >
                  {copiedField
                    ? `Copied ${copiedField === "user" ? "username" : "password"} to the clipboard.`
                    : "Click a value to copy it."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
