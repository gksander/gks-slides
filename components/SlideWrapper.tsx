import * as React from "react";

type SlideWrapperProps = React.PropsWithChildren<{}>;

export const SlideWrapper = ({ children }: SlideWrapperProps) => {
  React.useEffect(() => {
    if (window === undefined) return;

    const num = document.querySelectorAll("section.slide").length;

    document
      .querySelectorAll<HTMLDivElement>("section.slide div.page-count")
      .forEach((node, i) => {
        node.innerText = `${i + 1} of ${num}`;
      });
  }, []);

  return <main className="slide-wrapper">{children}</main>;
};
