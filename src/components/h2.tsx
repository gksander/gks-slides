import { Props } from "./types";
import * as React from "react";

export const H2 = (props: Props) => (
  <h2 {...props} className={`${props.className} text-2xl font-medium mb-5`} />
);
