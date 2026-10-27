import Link from "@docusaurus/Link";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

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
            className="text-gv-accent-cool hover:underline"
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
            className="text-gv-accent-cool hover:underline"
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
      className="relative py-20 sm:py-28"
    >
      <Container className="relative">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description={
            <>
              Can’t find what you’re looking for? Reach out via{" "}
              <Link
                href="https://discord.gg/NEdNen2dSu"
                rel="noopener noreferrer"
                className="text-gv-accent-cool no-underline hover:underline"
              >
                Discord
              </Link>
              ,{" "}
              <Link
                href="https://github.com/Phalcode/gamevault-app/discussions"
                rel="noopener noreferrer"
                className="text-gv-accent-cool no-underline hover:underline"
              >
                GitHub
              </Link>
              , or{" "}
              <Link
                href="mailto:contact@phalco.de"
                className="text-gv-accent-cool no-underline hover:underline"
              >
                email
              </Link>
              .
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.flat().map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.15rem] border border-gv-line bg-gv-panel-soft px-5 py-4 transition-colors open:border-gv-line-strong open:bg-gv-panel-strong"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gv-text">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-gv-line text-gv-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[0.95rem] leading-7 text-gv-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
