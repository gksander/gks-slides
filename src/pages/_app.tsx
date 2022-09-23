import * as React from "react";
import "../styles/globals.css";
import "../themes/gks.css";
import "../themes/formidable.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossOrigin="anonymous"
      ></link>
      {/* Google fonts, load in JetBrains Mono for all themes. Individual themes need to load their own specific fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
