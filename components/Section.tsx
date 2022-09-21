import * as React from "react";
import { Props } from "./types";
import { useSlideSize } from "./DeckWrapper";
import { toBlob } from "html-to-image";

export const Section = ({
  children,
  numSlides,
  i,
}: Props & { numSlides: number; i: number }) => {
  const { slideWidth, slideHeight, isPrinting } = useSlideSize();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const slideRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(0);
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const [isCapturingSlide, setIsCapturingSlide] = React.useState(false);
  const isPrintingOrCapturing = isPrinting || isCapturingSlide;

  const measure = React.useCallback(() => {
    if (!containerRef.current || !slideWidth || !slideHeight) return;
    const { clientWidth: width, clientHeight: height } = containerRef.current;

    let scale,
      left = 0,
      top = 0;
    // Fill height
    if ((slideHeight / slideWidth) * width > height) {
      scale = height / slideHeight;
      left = (width - scale * slideWidth) / 2;
    }
    // Else, fill width
    else {
      scale = width / slideWidth;
      top = (height - scale * slideHeight) / 2;
    }

    setScale(scale);
    setLeft(left);
    setTop(top);
  }, [slideWidth, slideHeight]);

  const captureSlide = React.useCallback(async () => {
    if (!slideRef.current) return;

    setIsCapturingSlide(true);
    await wait(500);

    const blob = await toBlob(slideRef.current);
    if (blob) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
    }

    setIsCapturingSlide(false);
  }, []);

  React.useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <section className="h-screen print:h-auto p-0 sm:p-2 md:p-4 print:p-0 snap-start">
      <div className="w-full h-full" ref={containerRef}>
        {/* This is the actual Section slide/card */}
        <div
          ref={slideRef}
          className="w-[8.5in] h-[8.5in] break-after-page transform-none text-gray-100 relative slide shadow-xl print:shadow-none"
          style={{
            transform: !isPrintingOrCapturing
              ? `translate(${left}px, ${top}px) scale(${scale})`
              : "initial",
            transformOrigin: "top left",
          }}
          onClick={(e) => {
            if (e.metaKey) captureSlide();
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-stone-800">
            {/* Background wave */}
            <div className="w-full h-full bg-gradient-to-tr from-stone-800 to-stone-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute bottom-0 inset-x-0 text-stone-800"
              >
                <path
                  className="fill-current"
                  d="M0,192L48,208C96,224,192,256,288,240C384,224,480,160,576,128C672,96,768,96,864,106.7C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          {/* headshot/signature in background */}
          <div className="absolute bottom-0 inset-x-0 flex justify-between items-end">
            <div
              className={`page-count p-3 text-sm ${
                isPrintingOrCapturing && "invisible"
              }`}
            >
              {+i + 1} of {numSlides}
            </div>
            <div className="pb-3 text-xs text-center font-bold tracking-wide">
              @gksander
            </div>
            <div className="flex justify-end">
              <div
                style={{ backgroundImage: "url(/img/headshot-bw.png)" }}
                className="bg-contain bg-bottom bg-no-repeat w-20 h-20"
              ></div>
            </div>
          </div>

          {/* Actual content */}
          <div className="absolute inset-0 z-10 p-4 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
