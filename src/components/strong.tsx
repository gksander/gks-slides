import { Props } from "./types";
import * as React from "react";

export const Strong = (props: Props) => (
  <strong {...props} className={`${props.className} text-primary-500`} />
);
