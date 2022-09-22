import * as React from "react";
import { CardProps } from "./util/BaseCard";

export type Props = React.PropsWithChildren<{
  className?: string;
  style?: object;
}>;

type GenericComponent<P = Props> = React.FC<P>;

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

  directives?: {};

  head?: React.ReactNode;
  fontFamily?: string;
};
