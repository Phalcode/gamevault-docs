import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import * as Swetrix from "swetrix";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <header className={clsx("hero", styles.heroBanner)}>
      <noscript>
        <img
          src="https://api.swetrix.com/log/noscript?pid=K6k7j6GHClhh"
          alt=""
          referrerpolicy="no-referrer-when-downgrade"
        />
      </noscript>
      <div className="container">
        <h1 className="hero__title">
          <img src="img/logo-text-and-image-sbs.png" alt="GameVault" />
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
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
            Download
          </a>
        </div>

        <br />
        <div className={styles.buttons}>
          <a href="https://www.producthunt.com/posts/gamevault" target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=400344&theme=neutral"
              alt="GameVault on ProductHunt"
              class="nozoom"
            />
          </a>
          <a href="https://discord.gg/NEdNen2dSu" target="_blank">
            <img
              src="/img/discord.svg"
              alt="Join us on Discord"
              class="nozoom"
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
      description="the self-hosted gaming platform for alternatively obtained games"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
