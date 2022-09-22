import * as React from "react";
import { Props } from "./types";

export const A = (props: Props) => {
  return (
    <a {...props} className={`${props.className} underline text-primary-500`} />
  );
};
