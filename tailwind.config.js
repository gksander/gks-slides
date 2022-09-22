const colors = require("tailwindcss/colors");
const defaultConfig = require("tailwindcss/defaultConfig");

// Have Tailwind use em instead of rem so we can adjust fontSize on a slide-by-slide basis
const fontSize = Object.assign({}, defaultConfig.theme.fontSize);
const replaceRem = (val) =>
  `calc(${val.replace("rem", "")} * var(--slide-font-size))`;
for (const key in fontSize) {
  const val = fontSize[key];
  fontSize[key] = [
    replaceRem(val[0]),
    { lineHeight: replaceRem(val[1].lineHeight) },
  ];
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
    fontSize,
  },
  plugins: [],
};
