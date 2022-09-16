import rehypeRaw from "rehype-raw";
import shikiTwoSlash from "remark-shiki-twoslash";
import nextMDX from "@next/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { sectionize } from "./sectionize.mjs";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      sectionize,
      [shikiTwoSlash.default, { theme: "one-dark-pro" }],
      remarkMath,
    ],
    rehypePlugins: [rehypeRaw, rehypeKatex],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,

  pageExtensions: ["ts", "tsx", "md", "mdx"],
});

export default nextConfig;
