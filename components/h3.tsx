import { Props } from "./types";
import * as React from "react";

export const H3 = (props: Props) => (
  <h3 {...props} className={`${props.className} text-xl font-medium mb-5`} />
);
