import * as React from "react";

type DeckWrapperProps = React.PropsWithChildren<{
  width: string;
  height: string;
  fontSize: string;
  codeFontSize: string;
}>;

export const DeckWrapper = ({
  children,
  width,
  height,
  fontSize,
  codeFontSize,
}: DeckWrapperProps) => {
  const offscreenSlideRef = React.useRef<HTMLDivElement>(null);
  const mainRef = React.useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = React.useState(0);
  const [slideHeight, setSlideHeight] = React.useState(0);
  const [isPrinting, setIsPrinting] = React.useState(false);

  const measure = React.useCallback(() => {
    if (!offscreenSlideRef.current) return;
    setSlideWidth(offscreenSlideRef.current.clientWidth);
    setSlideHeight(offscreenSlideRef.current.clientHeight);
  }, []);

  React.useEffect(() => {
    measure();
    window.addEventListener("resize", measure);

    const onBeforePrint = () => setIsPrinting(true);
    const onAfterPrint = () => setIsPrinting(false);

    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, []);

  // Register listener to use arrow keys to move up/down slides
  React.useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "ArrowDown") {
        evt.preventDefault();
        mainRef.current?.scrollBy({
          left: 0,
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
      if (evt.key === "ArrowUp") {
        evt.preventDefault();
        mainRef.current?.scrollBy({
          left: 0,
          top: -window.innerHeight,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const value = React.useMemo(
    () => ({ slideWidth, slideHeight, isPrinting }),
    [slideWidth, slideHeight, isPrinting]
  );

  return (
    <DeckContext.Provider value={value}>
      <main
        className={
          isPrinting
            ? ""
            : "bg-stone-500 snap-y snap-mandatory h-screen w-screen overflow-y-scroll"
        }
        style={{
          // @ts-ignore
          "--slide-font-size": fontSize || "inherit",
          "--code-font-size": codeFontSize || "inherit",
        }}
        ref={mainRef}
      >
        <div
          className="fixed -z-1 opacity-0"
          style={{
            width,
            height,
            top: `calc(-2 * ${height})`,
            left: `calc(-2 * ${width})`,
          }}
          ref={offscreenSlideRef}
        ></div>
        {children}
      </main>
    </DeckContext.Provider>
  );
};

const DeckContext = React.createContext({
  slideWidth: 0,
  slideHeight: 0,
  isPrinting: false,
});

export const useSlideSize = () => React.useContext(DeckContext);
