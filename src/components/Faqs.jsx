import Link from "@docusaurus/Link";
import { Container } from "./Container";

const faqs = [
  [
    {
      question: "Does GameVault combine my gaming platforms in one place?",
      answer:
        "No, GameVault is not for combining games from different platforms into one app. Rather, it's for managing your own gaming platform with your own game files hosted on your server.",
    },
    {
      question: "Is GameVault open-source?",
      answer:
        "No, GameVault is source-available, meaning the code is open for you to explore and modify for personal use. However, you may not use it for commercial purposes.",
    },
    {
      question: "Is GameVault a tool for piracy?",
      answer:
        "No, it isn't. GameVault is designed to manage legally obtained DRM-free games. While it can technically be used with illegally obtained games, we do not endorse or support piracy. We encourage users to comply with copyright laws. Unlawful use is strictly improper and unauthorized.",
    },
  ],
  [
    {
      question:
        "Does GameVault work with games from Steam, Epic Games, Microsoft, etc.?",
      answer:
        "Usually not. GameVault is made for games you own and only works with DRM-free games, either pure game files or installers. Most platforms use DRM, but there are exceptions like GOG and Humble Bundle that don’t.",
    },
    {
      question: "Is there a native client for Mac or Linux?",
      answer:
        "No, apart from emulation or community-maintained clients, there is currently no native Linux or Mac GameVault client application.",
    },
    {
      question: "Does GameVault have anything to do with gambling?",
      answer:
        "No, absolutely not. There's just a gambling app with a similar name on the market. If you're struggling with gambling addiction, please seek help.",
    },
  ],
  [
    {
      question: "Does GameVault stream games?",
      answer:
        "No, GameVault has nothing to do with streaming. It's simply an app to organize and browse your game library in a Steam-like experience and share it with your community.",
    },
    {
      question: "Does GameVault cost any money?",
      answer:
        "No, the core features of GameVault are and will always be free. However, we do offer a paid GameVault+ subscription for some additional extra features, which you can subscribe to if you'd like to continuously support our work.",
    },

    {
      question: "What was the former name of GameVault?",
      answer:
        "The first rule of GameVault is: you do not talk about the former name of GameVault.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-16"
    >
      <Container className="relative">
        <div className="mx-auto lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-text-light">
            If you can’t find what you’re looking for here, check out the{" "}
            <Link href="https://gamevau.lt/docs/intro">Docs</Link> or contact us via{" "}
            <Link href="https://discord.gg/NEdNen2dSu">Discord</Link>,{" "}
            <Link href="https://github.com/Phalcode/gamevault-app/discussions">
              GitHub
            </Link>
            , or <Link href="mailto:contact@phalco.de">Email</Link>
          </p>
        </div>
        <ul className="list-none mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="list-none flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-text-light">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
