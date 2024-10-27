import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Container } from "./Container";

import ImgAdmin from "@site/static/img/features/admin.png";
import ImgCommunity from "@site/static/img/features/community.png";
import ImgGame from "@site/static/img/features/game.png";
import ImgInstallation from "@site/static/img/features/installation.png";
import ImgLibrary from "@site/static/img/features/library.png";

const features = [
  {
    title: "Browse Your Games",
    description:
      "Browse your server's beautifully organized library to download, install and play your collection of video games of all kinds!",
    image: ImgLibrary,
  },
  {
    title: "Build Your Community",
    description:
      "Share your platform with your friends and family so they can enjoy your library, too. Administrate your users and games.",
    image: ImgInstallation,
  },
  {
    title: "Track Your Progress",
    description:
      "See how long you or your friends have been playing a game, find out what they are and keep track of what you've already completed or abandoned.",
    image: ImgGame,
  },
  {
    title: "Automatic Metadata Enrichment",
    description:
      "GameVault automatically enriches your game with all the juicy information and and images from the largest video game database.",
    image: ImgAdmin,
  },
  {
    title: "Easy To Use",
    description:
      "There’s no need to compile any code! The app is readily available in the Microsoft Store. Plus, installing games and setting up a server is equally straightforward!",
    image: ImgCommunity,
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden py-16"
    >
      <Container className="relative py-10">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-text-default sm:text-4xl md:text-5xl">
            Lorem ipsum dolor sit amet.
            temporibus.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            excepturi beatae odio ipsum corporis dolorum possimus architecto,
            optio eum velit?
          </p>
        </div>
        <TabGroup className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        "text-white group relative rounded-xl p-4 m-4",
                        selectedIndex === featureIndex
                          ? "bg-black/80"
                          : "bg-black/50 hover:bg-black/60"
                      )}
                    >
                      <h3>
                        <Tab>
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-text-default sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <img
                        className="h-full nozoom"
                        src={feature.image}
                        alt={feature.title}
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  );
}
