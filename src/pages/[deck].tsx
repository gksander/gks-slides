import * as React from "react";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { GetServerSideProps } from "next";
import { bundleMDX } from "mdx-bundler";
import remarkDirective from "remark-directive";
import shikiTwoSlash from "remark-shiki-twoslash";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import { getMDXComponent } from "mdx-bundler/client";
import { stripFrontmatter } from "../remark/stripFrontmatter";
import { directives } from "../remark/directives";
import { sectionize } from "../remark/sectionize";
import { DeckWrapper } from "../components/DeckWrapper";
import { gks } from "../themes/gks";
import { formidable } from "../themes/formidable";
import { defaultTheme } from "../themes/defaultTheme";
import { CardProps } from "../themes/util/BaseCard";
import Head from "next/head";
import { DeckTheme } from "../themes/themeTypes";

const themes = {
  gks,
  formidable,
};

export default function Deck({
  code,
  theme = "gks",
  width = "8.5in",
  height = "8.5in",
  fontSize = "0.24in",
  codeFontSize = fontSize,
}: {
  code: string;
  theme?: keyof typeof themes;
  width?: string;
  height?: string;
  fontSize?: string;
  codeFontSize?: string;
}) {
  const Component = getMDXComponent(code);
  const activeTheme: DeckTheme = {
    ...themes[theme],
    nodes: {
      ...defaultTheme.nodes,
      ...themes[theme].nodes,
    },
    directives: {
      ...defaultTheme.directives,
      ...themes[theme].directives,
    },
  };

  // themes[theme];

  return (
    <React.Fragment>
      {activeTheme.head}
      <DeckWrapper
        width={width}
        height={height}
        fontSize={fontSize}
        codeFontSize={codeFontSize}
        fontFamily={activeTheme.fontFamily || "sans-serif"}
      >
        <Component
          components={{
            card: (props: CardProps) =>
              React.createElement(activeTheme.card, {
                ...props,
                width,
                height,
              }),
            ...defaultTheme.nodes,
            ...activeTheme.nodes,
            directive: ({
              componentName,
              ...rest
            }: React.PropsWithChildren<{ componentName: string }>) => {
              if (
                activeTheme.directives &&
                componentName in activeTheme.directives
              ) {
                return React.createElement(
                  // @ts-ignore
                  activeTheme.directives[componentName],
                  rest
                );
              }
              return null;
            },
          }}
        />
      </DeckWrapper>
    </React.Fragment>
  );
}

const ComponentMap = {
  "side-by-side": (props: any) => <div className="flex">{props.children}</div>,
  left: (props: any) => <div>{props.children}</div>,
  right: (props: any) => <div>{props.children}</div>,
  tip: () => <div>HERES A TIP</div>,
  noop: () => null,
};

/**
 * On the server, we grab the MD file and parse it with mdx-bundler
 */
const deckBasePath = path.join(process.cwd(), "./src/decks");
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const filename = ctx.params?.deck || "";

  const source = await fs
    .readFile(path.join(deckBasePath, `${filename}.md`), "utf-8")
    .catch(() =>
      fs.readFile(path.join(deckBasePath, `${filename}.mdx`), "utf-8")
    )
    .catch(() => "");

  if (!source) {
    return {
      notFound: true,
    };
  }

  let yankedFrontmatter = {};
  const result = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      yankedFrontmatter = frontmatter;
      const shikiTheme = {
        gks: "one-dark-pro",
        formidable: "solarized-light",
      }[(frontmatter?.theme as string) || "gks"];

      options.remarkPlugins = [
        stripFrontmatter,
        remarkDirective,
        directives,
        ...(options.remarkPlugins ?? []),
        [shikiTwoSlash, { theme: shikiTheme }],
        remarkMath,
        sectionize,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypeRaw, { passThrough: ["mdxjsEsm", "mdxJsxFlowElement"] }],
        rehypeKatex,
      ];

      return options;
    },
  });

  ctx.res.setHeader("Access-Control-Allow-Origin", "*");

  return {
    props: {
      code: result.code,
      ...yankedFrontmatter,
    },
  };
};
