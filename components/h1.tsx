import { Props } from "./types";
import * as React from "react";

export const H1 = ({ children }: Props) => (
  <h1 className="text-4xl font-medium mb-5">{children}</h1>
);
