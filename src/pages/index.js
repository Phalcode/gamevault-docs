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
            href="https://www.microsoft.com/en-us/p/crackpipe/9pmjlf08x8p0"
            target="_blank"
          >
            Download
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
      description="A decentralized gaming platform for alternatively obtained games"
    >
      <HomepageHeader />
      <main>
        <div class="marquee">
          <marquee>
            COMING SOON - COMING SOON - COMING SOON - COMING SOON - COMING SOON
            - COMING SOON - COMING SOON - COMING SOON - COMING SOON - COMING
            SOON - COMING SOON - COMING SOON - COMING SOON - COMING SOON -
            COMING SOON - COMING SOON - COMING SOON - COMING SOON - COMING SOON
            - COMING SOON
          </marquee>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
