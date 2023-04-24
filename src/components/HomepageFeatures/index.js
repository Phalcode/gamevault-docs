import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use 🤝",
    img: "/img/features/microsoftstore.png",
    description: (
      <>
        No need to compile shit. As a certified Microsoft Partner our Client
        Application is officially available for everyone in{" "}
        <a href="https://www.microsoft.com/en-us/p/crackpipe/9pmjlf08x8p0">
          the Microsoft Store
        </a>
        .
      </>
    ),
  },
  {
    title: "Your Platform - Your Rules 👑",
    img: "/img/features/auth.png",
    description: (
      <>
        No Cloud Bullshit. Everything is Selfhosted. It's your games and you can
        decide who can download and play them.
      </>
    ),
  },
  {
    title: "Social Features 👥",
    img: "/img/features/social.png",
    description: (
      <>
        Track your play times, keep up to date with what your friends are
        playing and mark completed games as finished.
      </>
    ),
  },
  {
    title: "Good Looking ✨",
    img: "/img/features/library.png",
    description: (
      <>
        Browse, Sort and Filter your game library using an epic user interface
      </>
    ),
  },
  {
    title: "Enriched with Metadata 📜",
    img: "/img/features/enrichments.png",
    description: (
      <>
        Unlock the full power of Crackpipe and{" "}
        <a href="https://rawg.io/login/?forward=developer">
          sign up for a free RAWG API Key
        </a>
        . Enrich all your games with juicy metadata.
      </>
    ),
  },
  {
    title: "Open Source 📂",
    img: "/img/features/opensource.png",
    description: (
      <>
        <a href="/docs/contribute">Contribute to our project</a> and extend the
        features and capabilities of this project!
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
