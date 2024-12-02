import { Container } from "./Container";

import ImgCommunity from "@site/static/img/features/community.png";
import ImgGame from "@site/static/img/features/game.png";
import ImgMetadata from "@site/static/img/features/gamesettings_custom_metadata.png";
import ImgLibrary from "@site/static/img/features/library.png";
import ImgStars from "@site/static/img/features/stars.png";
import ImgStore from "@site/static/img/features/store.png";

const features = [
  {
    title: "Organize Your Game Library",
    description:
      "Bring all your DRM-free games together in one place with a sleek library that makes browsing and playing games effortless.",
    image: ImgLibrary,
  },
  {
    title: "Share with Friends and Family",
    description:
      "Open your library up for friends and family to enjoy. Manage users, share access, and enjoy a connected gaming experience.",
    image: ImgCommunity,
  },
  {
    title: "Track Your Progress",
    description:
      "Monitor your playtime and keep track of what you've finished or plan to revisit later.",
    image: ImgGame,
  },
  {
    title: "Enrich Your Library Automatically",
    description:
      "Say goodbye to blank covers and missing details! GameVault can automatically enrich metadata, art, and details from various sources.",
    image: ImgMetadata,
  },
  {
    title: "Set Up with Ease",
    image: ImgStore,
    description: (
      <>
        Install the GameVault Client directly from the{" "}
        <a href="https://www.microsoft.com/store/apps/9PCKDV76GL75">
          Microsoft Store
        </a>{" "}
        and <a href="/docs/server-docs/setup">set up a server</a> in just a few
        clicks.
      </>
    ),
  },
  {
    title: "Join The Movement",
    image: ImgStars,
    description: (
      <>
        <a target="_blank" href="https://discord.gg/NEdNen2dSu">
          Join our growing community
        </a>{" "}
        , star us on GitHub, or even <a href="/docs/license-contribute">contribute</a>{" "}
        to our source-available project! Everyone can help!
      </>
    ),
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden py-16"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-text-default sm:text-4xl md:text-5xl">
            A{" "}
            <span className="relative whitespace-nowrap text-primary-darker">
              <svg
                version="1.1"
                viewBox="0 0 800 400"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-8 left-0 w-[6em] stroke-primary-default opacity-30"
              >
                <path
                  d="m48.879 228.7c16.592 7.1749 69.208 44.993 99.552 43.049 30.344-1.9432 50.673-53.363 82.511-54.709 31.839-1.3453 74.589 45.291 108.52 46.637 33.931 1.3453 62.481-36.771 95.067-38.565 32.586-1.7937 70.553 28.102 100.45 27.803 29.895-0.29895 65.77-24.664 78.924-29.596"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="15"
                />
              </svg>

              <span className="relative">must have</span>
            </span>{" "}
            for selfhosting gamers
          </h2>
          <p className="mt-6 text-xl">
            GameVault isn't just a library — It's your personal gaming platform.
            <br />
            Built for gamers, by gamers, with everything you need to organize,
            share, and enjoy your DRM-free videogame collection.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={
                "bg-primary-light rounded-xl p-0 shadow-lg transform transition-all hover:scale-105 h-80"
              }
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mx-auto mb-4 w-full h-48 rounded-t-xl"
                />
                <div className="absolute bottom-0 w-full h-32 p-4 bg-primary-light rounded-b-xl">
                  <h3 className="text-lg font-semibold text-text-inverse ita">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-inverse">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
