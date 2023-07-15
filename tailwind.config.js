/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("./tailwind-config/colors");
const base = require("./tailwind-config/base");
const sizes = require("./tailwind-config/sizes");

module.exports = {
  mode: "jit",
  purge: ["./dist/index.html", "./src/**/*.{html, js}"],
  content: [],
  plugins: [
    plugin(function ({ addBase }) {
      addBase(base);
    }),
  ],
  theme: {
    colors: colors,
    extend: {
      width: sizes.width,
      height: sizes.height,
    },
    screens: {
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    container: {
      padding: "15px",
      center: true,
    },
  },
};
