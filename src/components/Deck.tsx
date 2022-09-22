import * as React from "react";

type DeckProps = React.PropsWithChildren<{
  theme?: string;
  width?: string;
  height?: string;
}>;

export const Deck = ({ children, ...rest }: DeckProps) => {
  console.log(rest);
  return <>{children}</>;
};
