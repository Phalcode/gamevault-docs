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
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
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
        <a
          href="https://www.producthunt.com/posts/crackpipe?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-crackpipe"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=400344&theme=neutral"
            alt="Crackpipe - Selfhosted&#0032;platform&#0032;for&#0032;&#0039;alternatively&#0032;obtained&#0039;&#0032;games | Product Hunt"
            id="producthunt"
            width="190"
          />
        </a>
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
