import { DeckTheme, GenericComponent, Props } from "./themeTypes";
import * as React from "react";
import clsx from "clsx";

const h1 = ({
  children,
  align = "left",
}: Props & { align?: "center" | "left" | "right" }) => {
  return (
    <h1
      className={clsx("text-4xl font-medium mb-slide-4", {
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right",
      })}
    >
      {children}
    </h1>
  );
};

const h2 = (props: Props) => (
  <h2
    {...props}
    className={`${props.className} text-2xl font-medium mb-slide-5`}
  />
);

const h3 = (props: Props) => (
  <h3
    {...props}
    className={`${props.className} text-xl font-medium mb-slide-5`}
  />
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
  <ol
    {...props}
    className={`${props.className} mb-slide-4 list-decimal ml-slide-6`}
  />
);

const ul = (props: Props) => (
  <ul
    {...props}
    className={`${props.className} mb-slide-4 list-disc ml-slide-6`}
  />
);

const li = (props: Props) => (
  <li {...props} className={`${props.className} mb-slide-2`} />
);

const strong = (props: Props) => (
  <strong {...props} className={`${props.className} text-primary-500`} />
);

// TODO: This one is kind of involved. How much do we abstract out? How will Shiki theming work?
const pre = (props: Props) => {
  return (
    <div
      className="rounded-lg print:overflow-hidden border-2 mb-slide-5 code-block"
      // style={props.style}
    >
      <div className="p-2 flex gap-2">
        <div className="w-slide-2.5 h-slide-2.5 rounded-full bg-gradient-to-tr from-red-500 to-red-400"></div>
        <div className="w-slide-2.5 h-slide-2.5 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-400"></div>
        <div className="w-slide-2.5 h-slide-2.5 rounded-full bg-gradient-to-tr from-green-500 to-green-400"></div>
      </div>
      <pre {...props} style={{}} />
    </div>
  );
};

const p = (props: Props) => (
  <p {...props} className={`${props.className} mb-slide-4`} />
);

const FancyImg: NonNullable<DeckTheme["directives"]>["img"] = ({
  src,
  width,
  rounded = "medium",
  shadow = "medium",
  ...rest
}) => {
  return (
    <div className="mb-slide-5">
      <img
        src={src}
        {...rest}
        style={{ width }}
        className={clsx("mx-auto aspect-square object-cover object-center", {
          "rounded-none": rounded === "none",
          rounded: rounded === "medium",
          "rounded-full": rounded === "full",
          "shadow-none": shadow === "none",
          shadow: shadow === "medium",
          "shadow-lg": shadow === "large",
        })}
      />
    </div>
  );
};

const columns: GenericComponent = (props) => (
  <div
    {...props}
    className={clsx(props.className, "w-full flex gap-x-slide-5 items-center")}
  />
);

const column: NonNullable<DeckTheme["directives"]>["column"] = ({
  grow,
  shrink,
  width,
  ...rest
}) => (
  <div
    {...rest}
    className={clsx(rest.className, {
      "flex-grow": grow === "true",
      "flex-shrink-0": shrink === "false",
    })}
    style={{ width, ...rest.style }}
  />
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
  directives: {
    h1,
    img: FancyImg,
    columns,
    column,
  },
};
