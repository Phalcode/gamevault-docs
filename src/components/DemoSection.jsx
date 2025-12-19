import React, { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

export function DemoSection() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="demo"
      className="relative overflow-hidden py-24 sm:py-32 bg-background-dark"
    >
      {/* Techy Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-default/30 to-transparent" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              
              <h2 className="font-display text-4xl font-black tracking-tight text-text-default sm:text-5xl uppercase">
                Ready to{" "}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-default to-primary-light pr-2">
                  Explore?
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-text-light opacity-80">
                Experience GameVault firsthand in our public demo. No
                installation required. Use the credentials provided to log in
                and explore all the features GameVault has to offer.
              </p>
              <div className="mt-10">
                <Button
                  href="https://demo.gamevau.lt"
                  target="_blank"
                  className="w-full sm:w-auto px-12 py-4 text-xl shadow-xl transition-all hover:scale-105 active:scale-95 hover:shadow-primary-default/30"
                >
                  Launch Demo
                </Button>
              </div>
            </div>

            <div className="relative group">
              {/* Clean Tech Credential Box */}
              <div className="rounded-2xl border border-white/10 p-6 font-mono text-sm shadow-2xl backdrop-blur-sm relative overflow-hidden ring-1 ring-primary-default">
                {/* Subtle Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:8px_8px]" />

                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-primary-default animate-pulse" />
                  <div className="text-[10px] text-text-light/40 uppercase tracking-widest">
                    Access_Credentials
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-[10px] text-primary-default/60 uppercase mb-2 tracking-tighter">
                      // Identity
                    </div>
                    <button
                      onClick={() => copyToClipboard("demo", "user")}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary-default/40 hover:bg-white/10 transition-all group/item"
                    >
                      <span className="text-text-light/50">Username</span>
                      <div className="flex items-center gap-3">
                        <code className="text-primary-light text-lg font-bold px-2">
                          demo
                        </code>
                        <span
                          className={`text-[10px] uppercase tracking-widest transition-all ${
                            copiedField === "user"
                              ? "text-primary-default opacity-100"
                              : "text-text-light/20 opacity-0 group-hover/item:opacity-100"
                          }`}
                        >
                          {copiedField === "user" ? "Copied!" : "Copy"}
                        </span>
                      </div>
                    </button>
                  </div>

                  <div>
                    <div className="text-[10px] text-primary-default/60 uppercase mb-2 tracking-tighter">
                      // Security_Key
                    </div>
                    <button
                      onClick={() => copyToClipboard("demodemo", "pass")}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary-default/40 hover:bg-white/10 transition-all group/item"
                    >
                      <span className="text-text-light/50">Password</span>
                      <div className="flex items-center gap-3">
                        <code className="text-primary-light text-lg font-bold px-2">
                          demodemo
                        </code>
                        <span
                          className={`text-[10px] uppercase tracking-widest transition-all ${
                            copiedField === "pass"
                              ? "text-primary-default opacity-100"
                              : "text-text-light/20 opacity-0 group-hover/item:opacity-100"
                          }`}
                        >
                          {copiedField === "pass" ? "Copied!" : "Copy"}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtle Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-default/20 to-primary-light/20 blur opacity-30 -z-10 rounded-2xl group-hover:opacity-50 transition-opacity" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
