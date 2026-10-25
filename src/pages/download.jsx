import Layout from "@theme/Layout";
import React from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PlatformIcon } from "../components/PlatformIcon";

const RELEASES = "https://github.com/Phalcode/gamevault-frontend/releases";
const LATEST = `${RELEASES}/latest/download`;
const STORE = "https://www.microsoft.com/store/apps/9PCKDV76GL75";

const platforms = [
  {
    id: "windows",
    name: "Windows",
    detail: "Windows 10 and 11 · x64",
    primary: {
      label: "Download installer",
      href: `${LATEST}/GameVault-windows-x64-latest-setup.exe`,
    },
    notes: [
      "NSIS installer, no administrator rights required",
      "SmartScreen: choose More info → Run anyway",
    ],
  },
  {
    id: "linux",
    name: "Linux",
    detail: "Most distributions · x64",
    primary: {
      label: "Download AppImage",
      href: `${LATEST}/GameVault-linux-x64-latest.AppImage`,
    },
    secondary: {
      label: "Download .deb",
      href: `${LATEST}/GameVault-linux-x64-latest.deb`,
    },
    notes: [
      "Run chmod +x on the AppImage before the first start",
      "Debian/Ubuntu: sudo apt install ./GameVault-*.deb",
    ],
  },
  {
    id: "macos",
    name: "macOS",
    detail: "Apple Silicon · arm64",
    primary: {
      label: "Download .dmg",
      href: `${LATEST}/GameVault-macos-arm64-latest.dmg`,
    },
    notes: [
      "Right-click → Open on the first start (Gatekeeper)",
      "Intel Macs are not supported by the published build",
    ],
  },
];

function PlatformCard({ platform }) {
  return (
    <article className="surface-panel gv-hover-lift flex h-full flex-col rounded-[1.5rem] p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gv-line-strong bg-gv-accent/10 text-gv-accent-cool">
          <PlatformIcon platform={platform.id} />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-gv-text">
            {platform.name}
          </h3>
          <p className="text-sm text-gv-muted">{platform.detail}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <Button href={platform.primary.href} className="w-full">
          {platform.primary.label}
        </Button>
        {platform.secondary ? (
          <Button
            href={platform.secondary.href}
            variant="outline"
            className="w-full"
          >
            {platform.secondary.label}
          </Button>
        ) : null}
      </div>

      <ul className="mt-6 space-y-2.5 text-sm leading-6 text-gv-muted">
        {platform.notes.map((note) => (
          <li key={note} className="flex gap-2.5">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gv-accent-cool"
            />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Download() {
  return (
    <Layout
      title="Download GameVault"
      description="Download GameVault 2 for Windows, Linux and macOS, or use the Web UI in your browser."
    >
      <main>
        <section className="relative overflow-hidden pb-12 pt-16 sm:pt-20">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[-18rem] -z-10 h-[32rem] w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(100,89,223,0.22),transparent_70%)] blur-3xl"
          />
          <Container className="text-center">
            <p className="eyebrow justify-center">GameVault 2 · Public beta</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-gv-text sm:text-6xl">
              Download <span className="gv-gradient-text">GameVault</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gv-muted">
              GameVault 2 for Windows, Linux and macOS. Bring your own server
              and play your DRM-free library anywhere.
            </p>
            <p className="mt-4 text-sm text-gv-muted">
              Prefer the browser? The{" "}
              <a
                href="/docs/clients/gamevault-2/web-ui"
                className="font-semibold text-gv-accent-cool no-underline hover:underline"
              >
                Web UI
              </a>{" "}
              is GameVault 2 in your browser, with nothing to install.
            </p>
          </Container>
        </section>

        <section aria-label="Downloads by platform" className="pb-14">
          <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </Container>
        </section>

        <Container className="pb-12">
          <p className="text-center text-sm text-gv-muted">
            Early Access is open to everyone. Switch the update channel in the
            client, no application needed.{" "}
            <a
              href="/docs/early-access"
              className="font-semibold text-gv-accent-cool no-underline hover:underline"
            >
              How to switch channels
            </a>
            .
          </p>
        </Container>

        <Container className="pb-14">
          <div className="surface-panel rounded-[1.5rem] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-gv-text">
              After installation
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-gv-muted marker:text-gv-accent-cool">
              <li>
                Start GameVault and add your server. See{" "}
                <a
                  href="/docs/getting-started/connect-to-server"
                  className="text-gv-accent-cool no-underline hover:underline"
                >
                  Connect to a server
                </a>
                .
              </li>
              <li>
                Pick download and installation folders under Settings →
                Downloads.
              </li>
              <li>
                Download a game and install it. Details are in{" "}
                <a
                  href="/docs/clients/gamevault-2/using"
                  className="text-gv-accent-cool no-underline hover:underline"
                >
                  Using GameVault
                </a>
                .
              </li>
              <li>
                Running into problems? Check{" "}
                <a
                  href="/docs/troubleshooting"
                  className="text-gv-accent-cool no-underline hover:underline"
                >
                  Troubleshooting
                </a>{" "}
                or the <a href={RELEASES}>release notes</a>.
              </li>
            </ol>
          </div>
        </Container>

        <Container className="pb-14">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-gv-text">
            GameVault 2 or GameVault 1?
          </h2>
          <div className="mt-5 overflow-x-auto rounded-[1.25rem] border border-gv-line bg-gv-panel-soft">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gv-panel-strong">
                  <th className="px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gv-muted">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gv-muted">
                    GameVault 2
                  </th>
                  <th className="px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gv-muted">
                    GameVault 1
                  </th>
                </tr>
              </thead>
              <tbody className="text-gv-muted">
                {[
                  ["Platforms", "Windows, Linux, macOS", "Windows 10/11"],
                  ["Status", "Public beta", "Feature-complete, maintenance"],
                  ["Multiple game versions", "Yes", "No"],
                  ["GameVault+ features", "Planned", "Yes"],
                  ["Updates", "Built-in updater", "Microsoft Store or manual"],
                ].map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-gv-line transition-colors hover:bg-gv-accent/5"
                  >
                    <td className="px-4 py-3 font-medium text-gv-text">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-gv-muted">
            GameVault 2 uses a different installation format. Games installed
            with GameVault 1 have to be downloaded again. See{" "}
            <a
              href="/docs/getting-started/migrating-from-gamevault-1"
              className="text-gv-accent-cool no-underline hover:underline"
            >
              Migrating from GameVault 1
            </a>{" "}
            and the full{" "}
            <a
              href="/docs/clients/feature-parity"
              className="text-gv-accent-cool no-underline hover:underline"
            >
              feature comparison
            </a>
            .
          </p>
        </Container>

        <Container className="pb-16">
          <div className="surface-panel rounded-[1.5rem] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-gv-text">
              GameVault 1
            </h2>
            <p className="mt-3 max-w-3xl text-gv-muted">
              GameVault 1 is still available and remains the only client with
              full GameVault+ support. Install it from the Microsoft Store, or
              read the{" "}
              <a
                href="/docs/clients/gamevault-1/installation"
                className="text-gv-accent-cool no-underline hover:underline"
              >
                GameVault 1 installation guide
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={STORE}>Open Microsoft Store</Button>
              <Button
                href="/docs/clients/gamevault-1/overview"
                variant="outline"
              >
                GameVault 1 documentation
              </Button>
            </div>
          </div>
        </Container>

        <section className="border-t border-gv-line bg-gv-shell/50 py-10">
          <Container className="text-sm leading-6 text-gv-muted">
            <p>
              Our binaries are not code-signed. Windows SmartScreen and macOS
              Gatekeeper may warn on the first start; the installers above come
              directly from <a href={RELEASES}>GitHub Releases</a>.
            </p>
            <p className="mt-2">
              Looking for older versions or checksums? Every build is listed on
              the <a href={RELEASES}>releases page</a>.
            </p>
          </Container>
        </section>
      </main>
    </Layout>
  );
}
