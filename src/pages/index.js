import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import * as Swetrix from "swetrix";
import { Faqs } from "../components/Faqs";
import { PrimaryFeatures } from "../components/Features";
import { Hero } from "../components/Hero";

export default function Home() {
  Swetrix.init("K6k7j6GHClhh");
  Swetrix.trackViews();
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="the self-hosted gaming platform for drm-free games"
    >
      <noscript>
        <img
          src="https://api.swetrix.com/log/noscript?pid=K6k7j6GHClhh"
          alt=""
        />
      </noscript>
      <main>
        <section className="bg-background-dark">
          <Hero />
        </section>
        <PrimaryFeatures />
        <Faqs />
        <div className="bg-background-dark py-6">
          <p className="text-center text-xs text-text-light opacity-50">
            * In case you're wondering, all depicted games on this website are
            placeholders and not real
          </p>
        </div>
      </main>
    </Layout>
  );
}
