import Link from "@docusaurus/Link";
import { Container } from "./Container";

const faqs = [
  [
    {
      question: "Is GameVault a multi-platform launcher?",
      answer:
        "No. Unlike tools that aggregate existing stores, GameVault is a self-hosted ecosystem. It allows you to host, manage, and distribute your own DRM-free game files from your own private server.",
    },
    {
      question: "Does it support Steam or Epic Games?",
      answer:
        "GameVault is built specifically for DRM-free content (like that from GOG or Humble Bundle). Most major storefronts use proprietary DRM which is incompatible with independent hosting and distribution.",
    },
    {
      question: "Is GameVault free to use?",
      answer:
        "Yes, the core GameVault ecosystem is and will always be free. We offer GameVault+ as an optional premium subscription for users who want advanced features and wish to support the ongoing development of the platform.",
    },
    {
      question: "Is GameVault open-source?",
      answer:
        "GameVault is source-available. The code is transparent and open for personal modification, allowing you to customize the experience while protecting the project's future.",
    },
    {
      question: "Do I need a NAS or a dedicated server?",
      answer:
        "Any machine that runs Docker works: a NAS, mini PC, home server or VPS. You mainly need disk space for the game files; the server itself is lightweight.",
    },
    {
      question: "What does GameVault cost?",
      answer: (
        <>
          The server and clients are free. GameVault+ is optional and starts at
          €4.99 per month;{" "}
          <a
            href="/docs/gamevault-plus/introduction"
            className="text-primary-default hover:underline"
          >
            see what it includes
          </a>
          .
        </>
      ),
    },
  ],
  [
    {
      question: "Are there native Mac or Linux clients?",
      answer:
        "Yes. GameVault 2 is the desktop client for Windows, Linux and macOS, currently in public beta. GameVault 1 is still available for GameVault+ users, and the Web UI works in any browser.",
    },
    {
      question: "Does GameVault support game streaming?",
      answer:
        "No. GameVault focuses on library management and file distribution. It provides an interface to browse and download your games, but the games themselves run locally on your hardware for the best performance.",
    },
    {
      question: "What is your stance on piracy?",
      answer:
        "GameVault is built for the management of legally owned DRM-free content. We do not endorse or support piracy. We believe in digital ownership and supporting the developers who make the games we love.",
    },
    {
      question: "Is this related to gambling apps?",
      answer:
        "No. GameVault is a gaming utility. We have no affiliation with gambling platforms that may share a similar name. We are dedicated solely to game library management.",
    },
    {
      question: "Can my friends play on my server?",
      answer:
        "Yes. Create users, assign roles and enable parental control if needed. For access outside your network, expose the server through a reverse proxy or a VPN.",
    },
    {
      question: "What is still missing in GameVault 2?",
      answer: (
        <>
          GameVault+ is not available in GameVault 2 yet. The{" "}
          <a
            href="/docs/clients/feature-parity"
            className="text-primary-default hover:underline"
          >
            feature comparison
          </a>{" "}
          lists every gap and its tracking issue.
        </>
      ),
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-24 sm:py-32 bg-background-default"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-title"
            className="font-display text-4xl font-bold tracking-tight text-text-default sm:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-light">
            Can’t find what you’re looking for? Reach out via{" "}
            <Link
              href="https://discord.gg/NEdNen2dSu"
              rel="noopener noreferrer"
              className="text-primary-default underline underline-offset-4 hover:text-primary-light"
            >
              Discord
            </Link>
            ,{" "}
            <Link
              href="https://github.com/Phalcode/gamevault-app/discussions"
              rel="noopener noreferrer"
              className="text-primary-default underline underline-offset-4 hover:text-primary-light"
            >
              GitHub
            </Link>
            , or{" "}
            <Link
              href="mailto:contact@phalco.de"
              className="text-primary-default underline underline-offset-4 hover:text-primary-light"
            >
              Email
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {faqs.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6 lg:gap-8">
              {column.map((faq, faqIndex) => (
                <div
                  key={faqIndex}
                  className="rounded-xl bg-background-dark p-8 ring-1 ring-primary-default shadow-sm transition-all duration-300 hover:bg-background-dark/80"
                >
                  <h3 className="text-lg font-bold leading-7 text-text-default">
                    {faq.question}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-text-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
