import Layout from "@theme/Layout";
import React from "react";
import { Button } from "../components/Button";

const RELEASES = "https://github.com/Phalcode/gamevault-frontend/releases";
const LATEST = `${RELEASES}/latest/download`;
const STORE = "https://www.microsoft.com/store/apps/9PCKDV76GL75";

const platforms = [
  {
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
    <div className="flex h-full flex-col rounded-2xl bg-background-dark/60 p-6 ring-1 ring-primary-default/40">
      <h3 className="text-xl font-semibold text-text-default">
        {platform.name}
      </h3>
      <p className="mt-1 text-sm text-text-light">{platform.detail}</p>
      <div className="mt-6 flex flex-col gap-3">
        <Button href={platform.primary.href} className="w-full">
          {platform.primary.label}
        </Button>
        {platform.secondary ? (
          <Button
            href={platform.secondary.href}
            variant="outline"
            className="w-full ring-primary-default/60 text-text-default hover:ring-primary-default"
          >
            {platform.secondary.label}
          </Button>
        ) : null}
      </div>
      <ul className="mt-6 space-y-2 text-sm text-text-light">
        {platform.notes.map((note) => (
          <li key={note} className="flex gap-2">
            <span aria-hidden="true" className="text-primary-light">
              •
            </span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Download() {
  return (
    <Layout
      title="Download GameVault"
      description="Download the GameVault 2 desktop client for Windows, Linux and macOS, or use the Web UI in your browser."
    >
      <main className="bg-background-default">
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">
            GameVault 2 · Public beta
          </p>
          <h1 className="mt-3 text-4xl font-bold text-text-default sm:text-5xl">
            Download GameVault
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            The cross-platform desktop client for Windows, Linux and macOS.
            Bring your own server and play your DRM-free library anywhere.
          </p>
          <p className="mt-4 text-sm text-text-light">
            Prefer the browser? Open your server's address to use the{" "}
            <a href="/docs/web-ui/overview">Web UI</a> — nothing to install.
          </p>
        </section>

        <section
          aria-label="Downloads by platform"
          className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-10">
          <h2 className="text-2xl font-semibold text-text-default">
            After installation
          </h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-text-light">
            <li className="!ml-0">
              Start GameVault and add your server. See{" "}
              <a href="/docs/getting-started/connect-to-server">
                Connect to a server
              </a>
              .
            </li>
            <li className="!ml-0">
              Pick download and installation folders under Settings → Downloads.
            </li>
            <li className="!ml-0">
              Download a game and install it. Details are in{" "}
              <a href="/docs/clients/gamevault-2/using">Using GameVault</a>.
            </li>
            <li className="!ml-0">
              Running into problems? Check{" "}
              <a href="/docs/help/troubleshooting">Troubleshooting</a> or the{" "}
              <a href={RELEASES}>release notes</a>.
            </li>
          </ol>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-10">
          <h2 className="text-2xl font-semibold text-text-default">
            GameVault 2 or the legacy client?
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-primary-default/30">
            <table className="table w-full min-w-[640px] text-left text-sm">
              <thead className="bg-background-dark/60 text-text-default">
                <tr>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">GameVault 2</th>
                  <th className="px-4 py-3 font-semibold">
                    Legacy Windows app
                  </th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="border-t border-primary-default/20">
                  <td className="px-4 py-3">Platforms</td>
                  <td className="px-4 py-3">Windows, Linux, macOS</td>
                  <td className="px-4 py-3">Windows 10/11</td>
                </tr>
                <tr className="border-t border-primary-default/20">
                  <td className="px-4 py-3">Status</td>
                  <td className="px-4 py-3">Public beta</td>
                  <td className="px-4 py-3">Feature-complete, maintenance</td>
                </tr>
                <tr className="border-t border-primary-default/20">
                  <td className="px-4 py-3">Multiple game versions</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-t border-primary-default/20">
                  <td className="px-4 py-3">GameVault+ features</td>
                  <td className="px-4 py-3">Planned</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-t border-primary-default/20">
                  <td className="px-4 py-3">Updates</td>
                  <td className="px-4 py-3">Built-in updater</td>
                  <td className="px-4 py-3">Microsoft Store or manual</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">
            GameVault 2 uses a different installation format. Games installed
            with the legacy client have to be downloaded again. See{" "}
            <a href="/docs/getting-started/migrating-from-gamevault-1">
              Migrating from GameVault 1
            </a>{" "}
            and the full{" "}
            <a href="/docs/clients/feature-parity">feature comparison</a>.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-14">
          <h2 className="text-2xl font-semibold text-text-default">
            Legacy Windows app
          </h2>
          <p className="mt-3 max-w-3xl text-text-light">
            The original Windows client is still available and remains the only
            client with full GameVault+ support. Install it from the Microsoft
            Store, or read the{" "}
            <a href="/docs/clients/legacy-windows/installation">
              legacy installation guide
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={STORE} className="w-full sm:w-auto">
              Open Microsoft Store
            </Button>
            <Button
              href="/docs/clients/legacy-windows/overview"
              variant="outline"
              className="ring-primary-default/60 text-text-default hover:ring-primary-default"
            >
              Legacy documentation
            </Button>
          </div>
        </section>

        <section className="border-t border-primary-default/20 bg-background-dark py-10">
          <div className="mx-auto max-w-5xl px-6 text-sm text-text-light">
            <p>
              Our binaries are not code-signed. Windows SmartScreen and macOS
              Gatekeeper may warn on the first start; the installers above come
              directly from <a href={RELEASES}>GitHub Releases</a>.
            </p>
            <p className="mt-2">
              Looking for older versions or checksums? Every build is listed on
              the <a href={RELEASES}>releases page</a>.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
