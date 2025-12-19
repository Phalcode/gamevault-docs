import { Container } from "./Container";

import ImgCommunity from "@site/static/img/features/community.png";
import ImgGame from "@site/static/img/features/game.png";
import ImgMetadata from "@site/static/img/features/gamesettings_custom_metadata.png";
import ImgLibrary from "@site/static/img/features/library.png";
import ImgStars from "@site/static/img/features/stars.png";
import ImgStore from "@site/static/img/features/store.png";

const features = [
  {
    title: "Your Personal Game Cloud",
    description:
      "Host your entire DRM-free collection on your own hardware. Experience a stunning interface that brings the convenience of Steam to your homelab, giving you total ownership of your gaming legacy.",
    image: ImgLibrary,
  },
  {
    title: "Multi-User & Social",
    description:
      "Turn your server into a private gaming center. Share access with friends and family, manage user accounts, and build your own gaming community with ease and full control.",
    image: ImgCommunity,
  },
  {
    title: "Playtime & Progress Tracking",
    description:
      "Keep track of your gaming journey with detailed playtime statistics. Monitor your progress, manage your backlog, and see what your community is playing in real-time.",
    image: ImgGame,
  },
  {
    title: "Automatic Metadata Enrichment",
    description:
      "No more manual editing. GameVault automatically fetches high-quality cover art, descriptions, and metadata to keep your collection looking stunning and professional.",
    image: ImgMetadata,
  },
  {
    title: "Easy Installation",
    image: ImgStore,
    description: (
      <>
        Built for self-hosters. Install the client from the{" "}
        <a href="https://www.microsoft.com/store/apps/9PCKDV76GL75" className="text-primary-default hover:underline">
          Microsoft Store
        </a>{" "}
        and deploy your server in minutes with our <a href="/docs/server-docs/setup" className="text-primary-default hover:underline">easy setup guide</a> for any environment.
      </>
    ),
  },
  {
    title: "Community Driven",
    image: ImgStars,
    description: (
      <>
        Built by gamers, for gamers.{" "}
        <a target="_blank" href="https://discord.gg/NEdNen2dSu" className="text-primary-default hover:underline">
          Join our Discord
        </a>{" "}
        to help shape the future of the project, or explore the source code on GitHub to contribute.
      </>
    ),
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden py-20 sm:py-32 bg-background-default"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-text-default sm:text-4xl md:text-5xl">
            Take back control of your{" "}
            <span className="text-primary-default">gaming collection</span>
          </h2>
          <p className="mt-6 text-lg tracking-tight text-text-light">
            GameVault is the ultimate ecosystem for the modern self-hoster.
            Built for performance, reliability, and total ownership of your digital library.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-background-dark/50 shadow-2xl ring-1 ring-text-default/10 transition-all duration-500 hover:ring-primary-default/50 hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className="relative h-64">
                <img
                  src={feature.image}
                  alt={feature.title}
                  data-zoomable
                  className="zoomable cursor-zoom-in h-full w-full object-cover object-center rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-default/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-bold tracking-tight text-text-default">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-text-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
