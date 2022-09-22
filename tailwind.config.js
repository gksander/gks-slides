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
const spacingKeysToGrab = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
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
      },
      spacing: slideSpacing,
    },
    fontSize,
  },
  plugins: [],
};
