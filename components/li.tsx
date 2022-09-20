import { Props } from "./types";
import * as React from "react";

export const Li = (props: Props) => (
  <li {...props} className={`${props.className} mb-2`} />
);
