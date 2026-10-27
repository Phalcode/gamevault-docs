// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
const { themes } = require("prism-react-renderer");
const lightTheme = themes.oneLight;
const darkTheme = themes.oneDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GameVault",
  tagline: "Your Games. Your Server. Your Rules.",
  favicon: "img/logo.svg",
  url: "https://gamevau.lt/",
  baseUrl: "/",
  organizationName: "Phalcode",
  projectName: "gamevault-docs",
  onBrokenLinks: "throw",
  stylesheets: [
    {
      href: "https://rsms.me/inter/inter.css",
      type: "text/css",
    },
  ],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://rsms.me",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#11101e",
        media: "(prefers-color-scheme: dark)",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#e2e1ef",
        media: "(prefers-color-scheme: light)",
      },
    },
  ],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html", "htm"],
        redirects: [
          {
            from: "/gamevault-plus",
            to: "/docs/gamevault-plus/introduction",
          },
          {
            from: "/license",
            to: "/docs/license-contribute",
          },
          {
            from: "/docs/client-docs/setup",
            to: "/docs/getting-started/connect-to-server",
          },
          {
            from: "/docs/client-docs/gui",
            to: "/docs/clients/gamevault-1/using",
          },
          {
            from: "/docs/clients/gamevault-1/gui",
            to: "/docs/clients/gamevault-1/using",
          },
          {
            from: "/docs/client-docs/how-to-use",
            to: "/docs/clients/gamevault-2/using",
          },
          {
            from: "/docs/client-docs/data",
            to: "/docs/clients/gamevault-1/data",
          },
          {
            from: "/docs/client-docs/themes",
            to: "/docs/clients/gamevault-1/themes",
          },
          {
            from: "/docs/client-docs/updating-client",
            to: "/docs/clients/gamevault-2/updating",
          },
          {
            from: "/docs/clients/legacy-windows",
            to: "/docs/clients/gamevault-1/overview",
          },
          {
            from: "/docs/web-ui/overview",
            to: "/docs/clients/gamevault-2/web-ui",
          },
          {
            from: "/docs/web-ui",
            to: "/docs/clients/gamevault-2/web-ui",
          },
          {
            from: "/docs/advanced-usage/early-access-program",
            to: "/docs/early-access",
          },
          {
            from: "/docs/beta-program",
            to: "/docs/early-access",
          },
          {
            from: "/docs/advanced-usage/linux-client",
            to: "/docs/clients/gamevault-2/linux",
          },
          {
            from: "/docs/advanced-usage/steamdeck",
            to: "/docs/clients/gamevault-2/linux",
          },
          {
            from: "/docs/clients/gamevault-1/linux-wine",
            to: "/docs/clients/gamevault-2/linux",
          },
          {
            from: "/docs/clients/legacy-windows/linux-wine",
            to: "/docs/clients/gamevault-2/linux",
          },
          {
            from: "/docs/clients/gamevault-1/steamdeck",
            to: "/docs/clients/gamevault-2/linux",
          },
          {
            from: "/docs/clients/legacy-windows/steamdeck",
            to: "/docs/clients/gamevault-2/linux",
          },
          {
            from: "/docs/advanced-usage/failt2ban",
            to: "/docs/advanced/fail2ban",
          },
          {
            from: "/docs/server-docs/websockets",
            to: "/docs/advanced/websockets",
          },
          {
            from: "/docs/server-docs/setup/truenas-scale-legacy",
            to: "/docs/server/setup/truenas-scale",
          },
          {
            from: "/docs/help",
            to: "/docs/faq",
          },
          {
            from: "/docs/help/troubleshooting",
            to: "/docs/troubleshooting",
          },
          {
            from: "/docs/help/faq",
            to: "/docs/faq",
          },
          {
            from: "/docs/help/early-access",
            to: "/docs/early-access",
          },
          {
            from: "/docs/help/license-contribute",
            to: "/docs/license-contribute",
          },
          {
            from: "/docs/help/beta-program",
            to: "/docs/early-access",
          },
        ],
        /** @type {(existingPath: string) => string[] | undefined} */
        createRedirects(existingPath) {
          if (existingPath.startsWith("/docs/clients/gamevault-1/")) {
            return [
              existingPath.replace(
                "/docs/clients/gamevault-1/",
                "/docs/clients/legacy-windows/",
              ),
            ];
          }
          if (existingPath.startsWith("/docs/server/")) {
            return [
              existingPath.replace("/docs/server/", "/docs/server-docs/"),
            ];
          }
          if (existingPath.startsWith("/docs/advanced/")) {
            return [
              existingPath.replace("/docs/advanced/", "/docs/advanced-usage/"),
            ];
          }
          return undefined;
        },
      },
    ],
    require.resolve("@cmfcmf/docusaurus-search-local"),
    tailwindPlugin,
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/phalcode/gamevault-docs/tree/master",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/phalcode/gamevault-docs/tree/master",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/og-gamevault.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "gaming, self-hosted, drm-free, game library, gamevault, homelab",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      navbar: {
        logo: {
          alt: "GameVault",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
        },
        title: "GameVault",
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Documentation",
          },
          { to: "/download", label: "Download", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            label: "GameVault+",
            to: "/docs/gamevault-plus/introduction",
            position: "left",
          },
          {
            type: "html",
            position: "right",
            value:
              '<a class="gv-nav-icon" href="https://github.com/phalcode" target="_blank" rel="noreferrer" aria-label="GameVault on GitHub"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12.1c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6a11.5 11.5 0 0 0 7.9-10.9A11.5 11.5 0 0 0 12 .5Z"/></svg></a>',
          },
          {
            type: "html",
            position: "right",
            value:
              '<a class="gv-nav-icon" href="https://discord.gg/NEdNen2dSu" target="_blank" rel="noreferrer" aria-label="GameVault on Discord"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.2a18.3 18.3 0 0 0-5.5 0L8.6 3a19.8 19.8 0 0 0-4.9 1.4C.6 9.1-.3 13.7.2 18.2a19.9 19.9 0 0 0 6 3l1.2-1.9a12.6 12.6 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4a12.6 12.6 0 0 1-2 1l1.2 1.9a19.9 19.9 0 0 0 6-3c.6-5.2-.9-9.8-3.5-13.8ZM8 15.3c-1.2 0-2.1-1.1-2.1-2.4S6.8 10.5 8 10.5s2.1 1.1 2.1 2.4-.9 2.4-2.1 2.4Zm8 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.1 1.1 2.1 2.4-.9 2.4-2.1 2.4Z"/></svg></a>',
          },
          {
            label: "Support us",
            href: "https://gamevau.lt/docs/intro#support-us",
            position: "right",
            className: "gv-nav-pill",
          },
        ],
      },
      footer: {
        logo: {
          src: "img/phalcode_bright.png",
          srcDark: "img/phalcode_dark.png",
          height: "32px",
          href: "https://phalco.de",
        },
        links: [
          {
            title: "Shortcuts",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Set Up a Server",
                to: "/docs/server/setup",
              },
              {
                label: "Troubleshooting",
                to: "/docs/troubleshooting",
              },
              {
                label: "Download",
                to: "/download",
              },
            ],
          },
          {
            title: "Development",
            items: [
              {
                label: "Roadmap",
                href: "https://github.com/orgs/Phalcode/projects/4",
              },
              {
                label: "Repositories",
                href: "https://github.com/orgs/Phalcode/repositories?q=gamevault",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "Reddit",
                href: "https://reddit.com/r/Phalcode",
              },
              {
                label: "Lemmy",
                href: "https://lemmy.world/c/phalcode",
              },
              {
                label: "Discord",
                href: "https://discord.gg/NEdNen2dSu",
              },
            ],
          },
          {
            title: "Support us",
            items: [
              {
                label: "Get GameVault+",
                href: "/docs/gamevault-plus/introduction",
              },
              {
                label: "GitHub Sponsors",
                href: "https://github.com/sponsors/Phalcode",
              },
              {
                href: "https://ko-fi.com/phalcode",
                label: "Ko-Fi",
              },
              {
                href: "https://liberapay.com/phalcode",
                label: "Liberapay",
              },
              {
                href: "https://www.paypal.me/phalcode",
                label: "PayPal",
              },
            ],
          },
          {
            title: "Legals",
            items: [
              {
                label: "License",
                href: "/docs/license-contribute",
              },
              {
                label: "Legal Notice",
                href: "https://phalco.de/legal",
              },
              {
                label: "Privacy Policy",
                href: "https://phalco.de/privacy",
              },
              {
                label: "Terms of Service",
                href: "https://phalco.de/tos",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://phalco.de">Phalcode®</a> - All Rights Reserved.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme,
        additionalLanguages: ["bash", "json", "yaml", "docker", "ini"],
      },
    }),
};

module.exports = config;
