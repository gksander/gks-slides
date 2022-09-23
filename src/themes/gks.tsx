import * as React from "react";
import { DeckTheme } from "./themeTypes";
import { BaseCard, CardProps } from "./util/BaseCard";

const card = (props: CardProps) => {
  return (
    <BaseCard
      {...props}
      className="theme__gks"
      renderContents={({ i, numCards, isPrintingOrCapturing, children }) => (
        <React.Fragment>
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
              className={`p-slide-3 text-sm font-bold ${
                isPrintingOrCapturing && "invisible"
              }`}
            >
              {+i + 1} of {numCards}
            </div>
            <div className="pb-slide-3 text-xs text-center font-bold tracking-wide">
              @gksander
            </div>
            <div className="flex justify-end">
              <div
                style={{ backgroundImage: "url(/img/headshot-bw.png)" }}
                className="bg-contain bg-bottom bg-no-repeat w-slide-20 h-slide-20"
              ></div>
            </div>
          </div>

          {/* Actual content */}
          <div className="absolute inset-0 z-10 p-slide-4 overflow-hidden">
            {children}
          </div>
        </React.Fragment>
      )}
    />
  );
};

export const gks: DeckTheme = {
  card,
  nodes: {},
  head: (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
    </React.Fragment>
  ),
  fontFamily: `'Montserrat', sans-serif`,
};
