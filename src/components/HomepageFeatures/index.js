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
        Browse through your servers beautifully organized library to download,
        install and and play your collection of videogames of all kinds!
      </>
    ),
  },
  {
    title: "👯 Build Your Community",
    img: ImgAuth,
    description: (
      <>
        Share your platform with your friends and loved ones, so they can also
        enjoy your library. Administrate your users and games.
      </>
    ),
  },
  {
    title: "⏱️ Track Your Progress",
    img: ImgSocial,
    description: (
      <>
        See how long you or your friends played a game, find out what they are
        playing and keep track what you've already completed or aborted.
      </>
    ),
  },
  {
    title: "🔎 Automatic Metadata Enrichment",
    img: ImgEnrichments,
    description: (
      <>
        GameVault automatically enriches your game with all the juicy
        information and pictures using the largest videogame database.
      </>
    ),
  },
  {
    title: "📦 Easy To Install",
    img: ImgMicrosoftStore,
    description: (
      <>
        There's no need to compile stuff. Our application is officially
        available in the{" "}
        <a href="https://www.microsoft.com/store/apps/9PCKDV76GL75">
          Microsoft Store
        </a>
        .{" "}
        <a href="/docs/server-docs/setup">
          Setting up a Server using our Docker Image
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
          Join our expanding community
        </a>
        , star us on GitHub, or even <a href="/docs/contribute">contribute</a>{" "}
        to our source-available project! Everybody can help!
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
