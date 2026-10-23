import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React from "react";
import * as Swetrix from "swetrix";
import { DemoSection } from "../components/DemoSection";
import { Faqs } from "../components/Faqs";
import { PrimaryFeatures } from "../components/Features";
import { FinalCta } from "../components/FinalCta";
import { GameVaultPlus } from "../components/GameVaultPlus";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { TrustStrip } from "../components/TrustStrip";

export default function Home() {
  Swetrix.init("K6k7j6GHClhh");
  Swetrix.trackViews();
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="The Ultimate Self-Hosted Gaming Platform"
      description="Host your own DRM-free game library, track your stats, and share the experience with friends. It's like having your own personal Steam, but you're the one in control."
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GameVault",
            applicationCategory: "GameApplication",
            operatingSystem: "Windows, Linux, macOS, Web",
            url: "https://gamevau.lt/",
            description:
              "Self-hosted platform for DRM-free game libraries with a desktop client and Web UI.",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
          })}
        </script>
      </Head>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <noscript>
        <img
          src="https://api.swetrix.com/log/noscript?pid=K6k7j6GHClhh"
          alt=""
        />
      </noscript>
      <main id="main-content">
        <section className="bg-background-dark">
          <Hero />
        </section>
        <TrustStrip />
        <HowItWorks />
        <PrimaryFeatures />
        <DemoSection />
        <GameVaultPlus />
        <Faqs />
        <FinalCta />
        <div className="bg-background-dark pb-8">
          <p className="px-6 text-center text-xs text-text-light/60">
            All depicted games on this website are placeholders and not real.
          </p>
        </div>
      </main>
    </Layout>
  );
}
