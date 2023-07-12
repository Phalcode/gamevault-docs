import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import ImgLibrary from "@site/static/img/features/library.png";
import ImgMicrosoftStore from "@site/static/img/features/microsoftstore.png";
import ImgAuth from "@site/static/img/features/adminview.png";
import ImgSocial from "@site/static/img/features/communitytab.png";
import ImgEnrichments from "@site/static/img/features/gameview.png";
import ImgOpenSource from "@site/static/img/features/opensource.png";

const FeatureList = [
  {
    title: "🎮 Build Your Game Library and Share It with Friends!",
    img: ImgMicrosoftStore,
    description: (
      <>
        Keep your game collection organized and share your favorite titles with
        your friends with our easy-to-use platform. There's no need to compile
        anything. Our client application is officially available in the{" "}
        <a href="https://www.microsoft.com/store/apps/9PCKDV76GL75">
          Microsoft Store
        </a>
      </>
    ),
  },
  {
    title: "🔒 Total Control Over Your Games and Access!",
    img: ImgAuth,
    description: (
      <>
        Unlike cloud-based gaming platforms, our self-hosted platform gives you
        complete control over who can download and play your games.
      </>
    ),
  },
  {
    title: "🕹️ Stay Connected with Friends and Track Your Playtime!",
    img: ImgSocial,
    description: (
      <>
        With social features, you can stay connected with friends and track your
        playtime to know what they're playing and discover new games to play.
      </>
    ),
  },
  {
    title: "🔍 Easily Browse, Sort and Filter Your Game Library!",
    img: ImgLibrary,
    description: (
      <>
        Our sleek and intuitive interface makes it easy to browse, sort and
        filter your game library, so you never get lost in your collection.
      </>
    ),
  },
  {
    title: "📈 Unleash the Full Power of Crackpipe with Metadata Enrichment!",
    img: ImgEnrichments,
    description: (
      <>
        Add juicy metadata to your games with our powerful metadata enrichment
        tool, and unlock the full potential of Crackpipe.
      </>
    ),
  },
  {
    title: "👥 Join Our Community and Contribute to Our Project!",
    img: ImgOpenSource,
    description: (
      <>
        Become part of our growing community and contribute to our source-available
        project, and enjoy endless features and capabilities.
      </>
    ),
  },
];

function Feature({ title, img, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={img}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
