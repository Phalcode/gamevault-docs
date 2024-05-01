import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import ImgLibrary from "@site/static/img/features/library.png";
import ImgMicrosoftStore from "@site/static/img/features/microsoftstore.png";
import ImgAuth from "@site/static/img/features/admin.png";
import ImgSocial from "@site/static/img/features/community.png";
import ImgEnrichments from "@site/static/img/features/game.png";
import ImgGithub from "@site/static/img/features/github.png";

const FeatureList = [
  {
    title: "🎮 Browse Your Games",
    img: ImgLibrary,
    description: (
      <>
        Browse your server's beautifully organized library to download, install
        and play your collection of video games of all kinds!
      </>
    ),
  },
  {
    title: "👯 Build Your Community",
    img: ImgAuth,
    description: (
      <>
        Share your platform with your friends and family so they can enjoy your
        library, too. Administrate your users and games.
      </>
    ),
  },
  {
    title: "⏱️ Track Your Progress",
    img: ImgSocial,
    description: (
      <>
        See how long you or your friends have been playing a game, find out what
        they are and keep track of what you've already completed or abandoned.
      </>
    ),
  },
  {
    title: "🔎 Automatic Metadata Enrichment",
    img: ImgEnrichments,
    description: (
      <>
        GameVault automatically enriches your game with all the juicy
        information and and images from the largest video game database.
      </>
    ),
  },
  {
    title: "📦 Easy To Install",
    img: ImgMicrosoftStore,
    description: (
      <>
        There's no need to compile anything. Our application is officially
        available in the{" "}
        <a href="https://www.microsoft.com/store/apps/9PCKDV76GL75">
          Microsoft Store
        </a>
        .{" "}
        <a href="/docs/server-docs/setup">
          Setting up a server using our Docker image
        </a>{" "}
        is just as easy!
      </>
    ),
  },
  {
    title: "👥 Join The Movement",
    img: ImgGithub,
    description: (
      <>
        <a target="_blank" href="https://discord.gg/NEdNen2dSu">
          Join our growing community
        </a>{" "}
        , star us on GitHub, or even <a href="/docs/contribute">contribute</a>{" "}
        to our source-available project! Everyone can help!
      </>
    ),
  },
];

function Feature({ title, img, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img alt={title} className="rounded-xl" src={img} />
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
