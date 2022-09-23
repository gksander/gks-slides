import * as React from "react";
import { CardProps } from "./util/BaseCard";

export type Props = React.PropsWithChildren<{
  className?: string;
  style?: object;
}>;

export type GenericComponent<P extends Props = Props> = React.FC<P>;

export type DeckTheme = {
  card: GenericComponent<CardProps>;

  nodes: {
    h1?: GenericComponent;
    h2?: GenericComponent;
    h3?: GenericComponent;
    a?: GenericComponent;
    img?: GenericComponent;
    li?: GenericComponent;
    ul?: GenericComponent;
    ol?: GenericComponent;
    p?: GenericComponent;
    pre?: GenericComponent;
    strong?: GenericComponent;
  };

  directives?: {
    h1?: GenericComponent;
    img?: GenericComponent<
      Props & {
        src: string;
        width?: string;
        rounded?: "none" | "medium" | "full";
        shadow?: "none" | "medium" | "large";
      }
    >;
    columns?: GenericComponent;
    column?: GenericComponent<
      Props & {
        grow?: "true" | "false";
        shrink?: "true" | "false";
        width?: string;
      }
    >;
  };

  head?: React.ReactNode;
  fontFamily?: string;
};
