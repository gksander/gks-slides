import { Props } from "./types";
import * as React from "react";

export const Ul = (props: Props) => (
  <ul {...props} className={`${props.className} mb-4 list-disc ml-6`} />
);
