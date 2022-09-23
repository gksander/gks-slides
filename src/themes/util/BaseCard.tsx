import * as React from "react";
import { useCardSize } from "../../components/DeckWrapper";
import { toBlob } from "html-to-image";
import { Props } from "../themeTypes";

export type CardProps = Props & {
  numCards: number;
  i: number;
  fontSize?: string;
  codeFontSize?: string;
  width: string;
  height: string;
};

export const BaseCard = ({
  children,
  numCards,
  i,
  fontSize,
  codeFontSize,
  width,
  height,
  renderContents,
}: CardProps & {
  renderContents: (args: {
    isCapturing: boolean;
    isPrintingOrCapturing: boolean;
    i: number;
    numCards: number;
    children: React.ReactNode;
    cardWidth: number;
    cardHeight: number;
  }) => React.ReactNode;
}) => {
  const { cardWidth, cardHeight, isPrinting } = useCardSize();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const slideRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(0);
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const [isCapturingSlide, setIsCapturingSlide] = React.useState(false);
  const isPrintingOrCapturing = isPrinting || isCapturingSlide;

  const measure = React.useCallback(() => {
    if (!containerRef.current || !cardWidth || !cardHeight) return;
    const { clientWidth: width, clientHeight: height } = containerRef.current;

    let scale,
      left = 0,
      top = 0;
    // Fill height
    if ((cardHeight / cardWidth) * width > height) {
      scale = height / cardHeight;
      left = (width - scale * cardWidth) / 2;
    }
    // Else, fill width
    else {
      scale = width / cardWidth;
      top = (height - scale * cardHeight) / 2;
    }

    setScale(scale);
    setLeft(left);
    setTop(top);
  }, [cardWidth, cardHeight]);

  const captureSlide = React.useCallback(async () => {
    if (!slideRef.current) return;

    setIsCapturingSlide(true);
    await wait(500);

    const OUT_WIDTH = 2000;

    console.log(cardWidth, cardHeight);

    const blob = await toBlob(slideRef.current, {
      canvasWidth: OUT_WIDTH,
      canvasHeight: (cardHeight / cardWidth) * OUT_WIDTH,
    });
    if (blob) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
    }

    setIsCapturingSlide(false);
  }, [cardWidth, cardHeight]);

  React.useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <section
      className="h-screen print:h-auto p-0 sm:p-2 md:p-4 print:p-0 snap-start"
      style={{
        // @ts-ignore
        "--slide-font-size": fontSize || "inherit",
        "--code-font-size": codeFontSize || "inherit",
      }}
    >
      <div className="w-full h-full" ref={containerRef}>
        {/* This is the actual Section slide/card */}
        <div
          ref={slideRef}
          className="break-after-page transform-none text-gray-100 relative slide shadow-xl print:shadow-none text-base"
          style={{
            width,
            height,
            transform: !isPrintingOrCapturing
              ? `translate(${left}px, ${top}px) scale(${scale})`
              : "initial",
            transformOrigin: "top left",
          }}
          onClick={(e) => {
            if (e.metaKey) captureSlide();
          }}
        >
          {renderContents({
            isCapturing: isCapturingSlide,
            isPrintingOrCapturing,
            i,
            numCards,
            children,
            cardWidth,
            cardHeight,
          })}
        </div>
      </div>
    </section>
  );
};

const CAPTURE_SCALE = 2;

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
