/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "997px",
      },
      colors: {
        text: {
          default: "var(--ifm-font-color-base)",
          light: "var(--ifm-font-color-light)",
          inverse: "var(--ifm-font-color-base-inverse)",
        },
        primary: {
          lightest: "var(--ifm-color-primary-lightest)",
          lighter: "var(--ifm-color-primary-lighter)",
          light: "var(--ifm-color-primary-light)",
          default: "var(--ifm-color-primary)",
          dark: "var(--ifm-color-primary-dark)",
          darker: "var(--ifm-color-primary-darker)",
          darkest: "var(--ifm-color-primary-darkest)",
        },
        background: {
          default: "var(--ifm-background-color)",
          dark: "var(--ifm-background-surface-color)",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
