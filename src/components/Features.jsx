import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ZoomableImage } from "./ZoomableImage";

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
      "Host your entire DRM-free collection on your own hardware. Experience a stunning interface that brings the convenience of Steam to your homelab. Access your library with GameVault 2 on Windows, Linux and macOS, or through the built-in Web UI.",
    image: ImgLibrary,
    tag: "Library",
  },
  {
    title: "Multi-User & Social",
    description:
      "Turn your server into a private gaming center. Share access with friends and family, manage user accounts, and build your own gaming community with ease and full control.",
    image: ImgCommunity,
    tag: "Community",
  },
  {
    title: "Playtime & Progress Tracking",
    description:
      "Keep track of your gaming journey with detailed playtime statistics. Monitor your progress, manage your backlog, and see what your community is playing in real-time.",
    image: ImgGame,
    tag: "Tracking",
  },
  {
    title: "Automatic Metadata Enrichment",
    description:
      "No more manual editing. GameVault automatically fetches high-quality cover art, descriptions, and metadata to keep your collection looking stunning and professional.",
    image: ImgMetadata,
    tag: "Metadata",
  },
  {
    title: "Easy Installation",
    image: ImgStore,
    tag: "Setup",
    description: (
      <>
        Built for self-hosters.{" "}
        <a href="/download" className="text-gv-accent-cool hover:underline">
          Download the client
        </a>{" "}
        for Windows, Linux or macOS, and deploy your server in minutes with our{" "}
        <a
          href="/docs/server/setup"
          className="text-gv-accent-cool hover:underline"
        >
          easy setup guide
        </a>{" "}
        for any environment.
      </>
    ),
  },
  {
    title: "Community Driven",
    image: ImgStars,
    tag: "Open",
    description: (
      <>
        Built by gamers, for gamers.{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/NEdNen2dSu"
          className="text-gv-accent-cool hover:underline"
        >
          Join our Discord
        </a>{" "}
        to help shape the future of the project, or explore the source code on
        GitHub to contribute.
      </>
    ),
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="GameVault features"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <Container className="relative">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Take back control of your{" "}
              <span className="gv-gradient-text">gaming collection</span>
            </>
          }
          description="GameVault is the ultimate ecosystem for the modern self-hoster. Built for performance, reliability, and total ownership of your digital library."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="surface-panel gv-hover-lift group relative flex h-full flex-col overflow-hidden rounded-[1.5rem]"
            >
              <div className="relative h-56 overflow-hidden">
                <ZoomableImage
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gv-panel via-transparent to-transparent"
                />
                <span className="absolute left-4 top-4 rounded-full border border-gv-line bg-gv-panel-soft/80 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gv-muted backdrop-blur-xl">
                  {feature.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-gv-text">
                  {feature.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-7 text-gv-muted">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
