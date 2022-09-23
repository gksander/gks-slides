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
// Do the same for spacing?
const defaultSpacing = defaultConfig.theme.spacing;
const spacingKeysToGrab = [
  "0",
  "0.5",
  "1",
  "2",
  "2.5",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "20",
  "24",
  "32",
];
const slideSpacing = spacingKeysToGrab.reduce((acc, key) => {
  acc[`slide-${key}`] = replaceRem(defaultSpacing[key]);
  return acc;
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        fmd: {
          red: "#F04D21",
          navy: "#1E2852",
          blue: "#364C99",
          white: "#FFFFFF",
          yellow: "#FFC951",
          sky: "#8BDDFD",
          gray: "#EBE5DA",
          grayDarken5: "#e7e0d4",
          grayDarken10: "#dbd0bc",
          grayDarken20: "#cbbb9f",
          lightGray: "#F9F7F3",
          cloud: "#D9D9D9",
          thunderCloud: "#888888",
          darkThunderCloud: "#525252",
        },
      },
      spacing: slideSpacing,
    },
    fontSize,
  },
  plugins: [],
};
