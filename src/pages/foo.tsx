import * as React from "react";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { GetStaticProps } from "next";
import { bundleMDX } from "mdx-bundler";
import remarkDirective from "remark-directive";
import shikiTwoSlash from "remark-shiki-twoslash";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import { getMDXComponent } from "mdx-bundler/client";
import { Card } from "../components/Card";
import { H1 } from "../components/h1";
import { H2 } from "../components/h2";
import { H3 } from "../components/h3";
import { Pre } from "../components/pre";
import { P } from "../components/p";
import { Ol } from "../components/ol";
import { Ul } from "../components/ul";
import { Li } from "../components/li";
import { Strong } from "../components/strong";
import { Img } from "../components/img";
import { A } from "../components/a";
import { stripFrontmatter } from "../remark/stripFrontmatter";
import { directives } from "../remark/directives";
import { sectionize } from "../remark/sectionize";
import { DeckWrapper } from "../components/DeckWrapper";

export default function Foo({ code, ...rest }: { code: string }) {
  console.log(rest);
  const Component = getMDXComponent(code);

  return (
    <DeckWrapper>
      <Component
        components={{
          card: Card,
          h1: H1,
          h2: H2,
          h3: H3,
          pre: Pre,
          p: P,
          ol: Ol,
          ul: Ul,
          li: Li,
          strong: Strong,
          img: Img,
          a: A,
          directive: ({
            componentName,
            ...rest
          }: React.PropsWithChildren<{ componentName: string }>) => {
            const Component =
              // @ts-ignore
              ComponentMap[componentName] || ComponentMap.noop;
            return <Component {...rest} />;
          },
        }}
      />
    </DeckWrapper>
  );
}

const ComponentMap = {
  "side-by-side": (props: any) => <div className="flex">{props.children}</div>,
  left: (props: any) => <div>{props.children}</div>,
  right: (props: any) => <div>{props.children}</div>,
  tip: () => <div>HERES A TIP</div>,
  noop: () => null,
};

export const getStaticProps: GetStaticProps = async () => {
  const source = await fs.readFile(
    path.join(process.cwd(), "./src/posts/trash.md"),
    "utf-8"
  );

  let yankedFrontmatter = {};
  const result = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      yankedFrontmatter = frontmatter;

      options.remarkPlugins = [
        stripFrontmatter,
        remarkDirective,
        directives,
        ...(options.remarkPlugins ?? []),
        [shikiTwoSlash, { theme: "one-dark-pro" }],
        remarkMath,
        sectionize,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeRaw,
        rehypeKatex,
      ];

      return options;
    },
  });

  return {
    props: {
      code: result.code,
      frontmatter: yankedFrontmatter,
    },
  };
};
