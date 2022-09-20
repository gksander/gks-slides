import { Props } from "./types";
import * as React from "react";

export const P = (props: Props) => (
  <p {...props} className={`${props.className} mb-4`} />
);
