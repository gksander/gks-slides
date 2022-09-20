import { Props } from "./types";
import * as React from "react";

export const Img = (props: Props & { src?: string }) => {
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
