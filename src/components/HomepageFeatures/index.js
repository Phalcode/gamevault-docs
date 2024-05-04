import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import ImgLibrary from "@site/static/img/features/library.png";
import VideoLibrary from "@site/static/video/features/library.mp4";
import ImgAdmin from "@site/static/img/features/admin.png";
import VideoAdmin from "@site/static/video/features/admin.mp4";
import ImgCommunity from "@site/static/img/features/community.png";
import VideoCommunity from "@site/static/video/features/community.mp4";
import ImgGame from "@site/static/img/features/game.png";
import VideoGame from "@site/static/video/features/game.mp4";
import ImgInstallation from "@site/static/img/features/installation.png";
import VideoInstallation from "@site/static/video/features/installation.mp4";
import ImgGithub from "@site/static/img/features/github.png";

const FeatureList = [
  {
    title: "👯 Build Your Community",
    img: ImgAdmin,
    video: VideoAdmin,
    description: (
      <>
        Share your platform with your friends and family so they can enjoy your
        library, too. Administrate your users and games.
      </>
    ),
  },
  {
    title: "🎮 Browse Your Games",
    img: ImgLibrary,
    video: VideoLibrary,
    description: (
      <>
        Browse your server's beautifully organized library to download, install
        and play your collection of video games of all kinds!
      </>
    ),
  },
  {
    title: "⏱️ Track Your Progress",
    img: ImgCommunity,
    video: VideoCommunity,
    description: (
      <>
        See how long you or your friends have been playing a game, find out what
        they are and keep track of what you've already completed or abandoned.
      </>
    ),
  },
  {
    title: "🔎 Automatic Metadata Enrichment",
    img: ImgGame,
    video: VideoGame,
    description: (
      <>
        GameVault automatically enriches your game with all the juicy
        information and and images from the largest video game database.
      </>
    ),
  },
  {
    title: "📦 Easy To Use",
    img: ImgInstallation,
    video: VideoInstallation,
    description: (
      <div>
        <a href="https://www.reddit.com/r/github/s/BhVD6gIscZ">
          You don't give a fuck about the fucking code?
        </a>
        <br />
        Our application is officially available in the{" "}
        <a href="https://www.microsoft.com/store/apps/9PCKDV76GL75">
          Microsoft Store
        </a>
        . Also, {""}
        <a href="/docs/client-docs/how-to-use.md#2-installing-the-game">
          installing games
        </a>
        {" and "}
        <a href="/docs/server-docs/setup">
          setting up a server using our Docker image
        </a>{" "}
        and is just as easy!
      </div>
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

function Feature({ title, img, video, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {video ? (
          <video
            className="w-full max-w-screen-sm rounded-xl zoomable"
            muted
            autoPlay
            loop
            src={video}
          />
        ) : (
          <img className="rounded-xl" alt={title} src={img} />
        )}
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
