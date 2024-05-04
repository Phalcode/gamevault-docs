/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "997px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
