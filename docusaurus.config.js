// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GameVault",
  tagline: "Your Games. Your Server. Your Rules.",
  favicon: "img/logo.png",
  url: "https://gamevau.lt/",
  baseUrl: "/",
  organizationName: "Phalcode",
  projectName: "gamevault-docs",
  onBrokenLinks: "throw",
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
            to: "/docs/help/license-contribute",
          },
          {
            from: "/docs/client-docs/setup",
            to: "/docs/getting-started/connect-to-server",
          },
          {
            from: "/docs/client-docs/gui",
            to: "/docs/clients/gamevault-1/gui",
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
            to: "/docs/help/early-access",
          },
          {
            from: "/docs/help/beta-program",
            to: "/docs/help/early-access",
          },
          {
            from: "/docs/advanced-usage/linux-client",
            to: "/docs/clients/gamevault-1/linux-wine",
          },
          {
            from: "/docs/advanced-usage/steamdeck",
            to: "/docs/clients/gamevault-1/steamdeck",
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
            from: "/docs/troubleshooting",
            to: "/docs/help/troubleshooting",
          },
          {
            from: "/docs/license-contribute",
            to: "/docs/help/license-contribute",
          },
        ],
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
    require.resolve("docusaurus-plugin-image-zoom"),
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
          src: "img/logo.png",
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
            label: "GitHub",
            href: "https://github.com/phalcode",
            position: "right",
          },
          {
            label: "Discord",
            href: "https://discord.gg/NEdNen2dSu",
            position: "right",
          },
          {
            label: "Support us",
            href: "https://gamevau.lt/docs/intro#support-us",
            position: "right",
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
                to: "/docs/help/troubleshooting",
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
                href: "/docs/help/license-contribute",
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
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://phalco.de">Phalcode</a> - All Rights Reserved.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme,
        additionalLanguages: ["bash", "json"],
      },
      zoom: {
        selector: ".zoomable, [data-zoomable]",
        config: {
          background: {
            light: "#e2e1ef",
            dark: "#171528",
          },
        },
      },
    }),
};

module.exports = config;
