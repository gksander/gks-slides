import * as React from "react";

type SlideWrapperProps = React.PropsWithChildren<{}>;

export const SlideWrapper = ({ children }: SlideWrapperProps) => {
  return <main className="slide-wrapper">{children}</main>;
};
