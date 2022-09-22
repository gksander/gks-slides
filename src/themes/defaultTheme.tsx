import { DeckTheme, Props } from "./themeTypes";
import * as React from "react";

const h1 = ({ children }: Props) => (
  <h1 className="text-4xl font-medium mb-slide-2 leading-[3rem]">{children}</h1>
);

const h2 = (props: Props) => (
  <h2 {...props} className={`${props.className} text-2xl font-medium mb-5`} />
);

const h3 = (props: Props) => (
  <h3 {...props} className={`${props.className} text-xl font-medium mb-5`} />
);

const img = (props: Props & { src?: string }) => {
  let width;
  try {
    width = new URL(props.src || "").searchParams.get("width") || undefined;
  } catch {}

  return (
    <img
      {...props}
      className={`${props.className} mx-auto max-w-[75%] drop-shadow-lg drop-shadow-pink-200`}
      style={{ width }}
    />
  );
};

const a = (props: Props) => {
  return (
    <a {...props} className={`${props.className} underline text-primary-500`} />
  );
};

const ol = (props: Props) => (
  <ol {...props} className={`${props.className} mb-4 list-decimal ml-6`} />
);

const ul = (props: Props) => (
  <ul {...props} className={`${props.className} mb-4 list-disc ml-6`} />
);

const li = (props: Props) => (
  <li {...props} className={`${props.className} mb-2`} />
);

const strong = (props: Props) => (
  <strong {...props} className={`${props.className} text-primary-500`} />
);

// TODO: This one is kind of involved. How much do we abstract out? How will Shiki theming work?
const pre = (props: Props) => {
  return (
    <div
      className="rounded-lg print:overflow-hidden border-2 mb-5 code-block"
      // style={props.style}
    >
      <div className="p-2 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-red-500 to-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-green-500 to-green-400"></div>
      </div>
      <pre {...props} style={{}} />
    </div>
  );
};

const p = (props: Props) => (
  <p {...props} className={`${props.className} mb-4`} />
);

export const defaultTheme: Omit<DeckTheme, "card"> = {
  nodes: {
    h1,
    h2,
    h3,
    a,
    img,
    ol,
    ul,
    li,
    strong,
    pre,
    p,
  },
};
