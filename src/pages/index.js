import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import * as Swetrix from "swetrix";
import styles from "./index.module.css";
import { useColorMode } from "@docusaurus/theme-common";

function HomepageHeaderText() {
  const { colorMode } = useColorMode();
  if (colorMode === "dark") {
    return (
      <img src="/img/logo-text-white.svg" className="h-16 nozoom" alt="Logo" />
    );
  }
  return (
    <img src="/img/logo-text-black.svg" className="h-16 nozoom" alt="Logo" />
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <noscript>
        <img
          src="https://api.swetrix.com/log/noscript?pid=K6k7j6GHClhh"
          alt=""
        />
      </noscript>
      <div className="container">
        <div className="flex flex-col justify-center items-center text-7xl font-semibold gap-4">
          <img src="/img/logo.png" className="h-48 nozoom" alt="Logo" />
          <HomepageHeaderText />
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className="grid sm:grid-cols-2 gap-4 lg:max-w-[50%] sm:mx-auto">
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Introduction
          </Link>

          <a
            className="button button--secondary button--lg"
            href="https://www.microsoft.com/store/apps/9PCKDV76GL75"
            target="_blank"
          >
            Download Client
          </a>
          <a
            className="inline-flex justify-center"
            href="https://www.producthunt.com/posts/gamevault"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=400344&theme=neutral"
              alt="GameVault on ProductHunt"
              className="nozoom"
            />
          </a>
          <a
            className="inline-flex justify-center"
            href="https://discord.gg/NEdNen2dSu"
            target="_blank"
          >
            <img
              src="/img/discord.svg"
              alt="Join us on Discord"
              className="nozoom"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  Swetrix.init("K6k7j6GHClhh");
  Swetrix.trackViews();
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="the self-hosted gaming platform for drm-free games"
    >
      <HomepageHeader />
      <main>
        <section>
          <br />
          <h2 id="heroTitle" className="text--center">
            Create your own gaming platform
          </h2>
          <h3 id="heroSubtitle" className="text--center">
            Do you have games on your server and need an application to
            download, install, share, launch and track them?
          </h3>
          <h3 id="heroSubtitle" className="text--center">
            Then you have come to the right place!
          </h3>
        </section>
        <HomepageFeatures />
        <p className="text--center text-xs font-bolder tracking-tighter">
          *all depicted games are placeholders and not real
        </p>
      </main>
    </Layout>
  );
}
