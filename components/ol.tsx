import { Props } from "./types";
import * as React from "react";

export const Ol = (props: Props) => (
  <ol {...props} className={`${props.className} mb-4 list-decimal ml-6`} />
);
