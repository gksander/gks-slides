import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { DeckWrapper } from "../components/DeckWrapper";
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
import { Deck } from "../components/Deck";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossOrigin="anonymous"
      ></link>
      {/* Google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      <DeckWrapper>
        <Component
          {...pageProps}
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
    </>
  );
}

const ComponentMap = {
  "side-by-side": (props: any) => <div className="flex">{props.children}</div>,
  left: (props: any) => <div>{props.children}</div>,
  right: (props: any) => <div>{props.children}</div>,
  tip: () => <div>HERES A TIP</div>,
  noop: () => null,
};

export default MyApp;
