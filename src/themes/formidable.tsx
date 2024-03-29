import * as React from "react";
import { DeckTheme, Props } from "./themeTypes";
import { BaseCard, CardProps } from "./util/BaseCard";

const card = (props: CardProps) => {
  const fSize = { width: 83, height: 109 } as const;

  return (
    <BaseCard
      {...props}
      className="theme__formidable"
      renderContents={({
        children,
        cardWidth,
        cardHeight,
        i,
        numCards,
        isCapturing,
      }) => (
        <React.Fragment>
          {/* Background */}
          <div className="absolute inset-0 bg-fmd-gray text-fmd-white">
            {/* Formidable F	*/}
            <svg
              viewBox={`0 0 ${fSize.width} ${fSize.height}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-slide-6 absolute bottom-slide-5 left-slide-5"
            >
              <path
                d="M72.8664 38.1057L82.7628 20.8114C83.0738 20.2679 83.0738 19.6023 82.7628 19.0588L72.3664 0.890117C72.3625 0.88224 72.3546 0.874363 72.3507 0.862547C72.3231 0.815285 72.2916 0.768022 72.2562 0.720759C72.2444 0.705005 72.2326 0.68925 72.2208 0.673496C72.1775 0.622294 72.1342 0.571093 72.0909 0.52383C72.0869 0.519892 72.0869 0.519892 72.0869 0.515953C72.0397 0.46869 71.9846 0.421427 71.9334 0.382042C71.9176 0.370226 71.9019 0.35841 71.8862 0.346594C71.8429 0.315086 71.7996 0.283577 71.7523 0.256007C71.7366 0.24813 71.7248 0.240253 71.709 0.228437C71.587 0.161481 71.4571 0.106341 71.3193 0.0669557C71.3036 0.0630172 71.2878 0.0590786 71.2681 0.05514C71.2169 0.0433243 71.1618 0.0315086 71.1067 0.0236314C71.087 0.0196929 71.0713 0.0157543 71.0516 0.0157543C70.9808 0.00787715 70.9099 0 70.839 0H12.161C12.0901 0 12.0153 0.00393857 11.9484 0.0157543C11.9287 0.0196929 11.913 0.0196929 11.8933 0.0236314C11.8382 0.0315086 11.7831 0.0433243 11.7319 0.05514C11.7161 0.0590786 11.6964 0.0630172 11.6807 0.0669557C11.5429 0.106341 11.413 0.161481 11.291 0.228437C11.2752 0.236314 11.2634 0.244192 11.2516 0.252069C11.2044 0.279639 11.1611 0.311147 11.1178 0.342656C11.102 0.354472 11.0863 0.366287 11.0705 0.378103C11.0154 0.421427 10.9643 0.464752 10.917 0.515953L10.9131 0.519892C10.8658 0.567154 10.8225 0.618356 10.7792 0.673496C10.7674 0.68925 10.7556 0.705005 10.7438 0.720759C10.7084 0.768022 10.6769 0.815285 10.6493 0.862547C10.6454 0.870425 10.6375 0.878302 10.6336 0.890117L0.23324 19.0588C-0.0777467 19.6023 -0.0777467 20.2679 0.23324 20.8114L10.3974 38.5744V96.8377C10.3974 96.9086 10.4013 96.9834 10.4131 97.0504C10.4171 97.0701 10.4171 97.0858 10.421 97.1055C10.4289 97.1606 10.4407 97.2158 10.4525 97.267C10.4564 97.2827 10.4604 97.3024 10.4643 97.3182C10.5037 97.456 10.5588 97.586 10.6257 97.7081C10.6336 97.7239 10.6415 97.7357 10.6493 97.7475C10.6769 97.7948 10.7084 97.8381 10.7399 97.8814C10.7517 97.8972 10.7635 97.9129 10.7753 97.9287C10.8186 97.9838 10.8619 98.035 10.9131 98.0823L10.917 98.0862C10.9643 98.1335 11.0154 98.1768 11.0705 98.2201C11.0863 98.2319 11.102 98.2438 11.1178 98.2556C11.165 98.291 11.2123 98.3225 11.2595 98.3501C11.2674 98.354 11.2752 98.3619 11.287 98.3659L29.4502 108.768C29.7219 108.921 30.025 109 30.3281 109C30.6312 109 30.9343 108.921 31.2059 108.768L49.3691 98.3659C49.377 98.3619 49.3849 98.354 49.3967 98.3501C49.4439 98.3225 49.4912 98.291 49.5384 98.2556C49.5542 98.2438 49.5699 98.2319 49.5857 98.2201C49.6368 98.1768 49.688 98.1335 49.7352 98.0902C49.7392 98.0862 49.7392 98.0862 49.7431 98.0862C49.7904 98.0389 49.8376 97.9838 49.877 97.9326C49.8888 97.9169 49.9006 97.9011 49.9124 97.8853C49.9439 97.842 49.9754 97.7987 50.0029 97.7514C50.0108 97.7357 50.0187 97.7239 50.0265 97.7081C50.0974 97.586 50.1486 97.456 50.1879 97.3182C50.1919 97.3024 50.1958 97.2867 50.1998 97.267C50.2116 97.2158 50.2234 97.1606 50.2312 97.1055C50.2352 97.0858 50.2391 97.0701 50.2391 97.0504C50.247 96.9795 50.2549 96.9086 50.2549 96.8377V76.2114H70.843C70.9138 76.2114 70.9886 76.2074 71.0555 76.1956C71.0752 76.1917 71.091 76.1917 71.1107 76.1878C71.1658 76.1799 71.2209 76.1681 71.2721 76.1562C71.2878 76.1523 71.3075 76.1484 71.3232 76.1444C71.461 76.105 71.5909 76.0499 71.713 75.9829C71.7287 75.9751 71.7405 75.9672 71.7563 75.9554C71.8035 75.9278 71.8468 75.8963 71.8901 75.8648C71.9058 75.853 71.9216 75.8412 71.9373 75.8293C71.9924 75.786 72.0436 75.7427 72.0909 75.6954C72.0948 75.6915 72.0948 75.6915 72.0948 75.6876C72.142 75.6403 72.1853 75.5891 72.2247 75.5379C72.2365 75.5221 72.2483 75.5064 72.2601 75.4906C72.2956 75.4434 72.327 75.3961 72.3546 75.3488C72.3585 75.341 72.3664 75.3331 72.3704 75.3213L82.7668 57.1487C83.0778 56.6052 83.0778 55.9395 82.7668 55.396L72.8664 38.1057ZM59.4152 54.5098H30.4147C29.9856 54.4902 29.5526 54.6201 29.2022 54.9116C29.1904 54.9234 29.1786 54.9352 29.1668 54.947C29.1393 54.9707 29.1078 54.9982 29.0802 55.0219C29.0802 55.0219 29.0802 55.0219 29.0763 55.0258C28.7574 55.3448 28.5567 55.7859 28.5567 56.2743V85.4119L13.9206 93.7932V39.8702H67.7882L59.4152 54.5098ZM46.7199 93.7971L32.0838 85.4158V60.528L46.7199 75.1755V93.7971ZM59.4152 18.1726H23.5809L15.2039 3.52896H67.7961L59.4152 18.1726ZM23.5809 21.7015H59.4152L67.7922 36.3451H15.2039L23.5809 21.7015ZM70.8351 34.557L62.47 19.9371L70.8351 5.31707L79.2003 19.9371L70.8351 34.557ZM12.161 5.31707L20.5261 19.9371L12.161 34.557L3.79581 19.9371L12.161 5.31707ZM30.3242 105.207L15.7117 96.8377L30.3242 88.4682L44.9366 96.8377L30.3242 105.207ZM49.2156 72.6864L34.5835 58.0427H59.4113L67.7922 72.6864H49.2156ZM70.8351 70.8982L62.47 56.2783L70.8351 41.6583L79.2003 56.2783L70.8351 70.8982Z"
                fill="red"
              />
            </svg>

            <svg
              viewBox={`0 0 ${cardWidth} ${cardHeight}`}
              className="absolute inset-0"
              strokeWidth={cardWidth / 350}
            >
              {/* top-left line */}
              {(() => {
                const size = cardWidth / 20;
                const a = Math.PI / 4;

                return (
                  <line
                    x1={5 * Math.cos(a + Math.PI)}
                    y1={size - 5 * Math.sin(a + Math.PI)}
                    x2={size + 5 * Math.cos(a)}
                    y2={-5 * Math.sin(a)}
                    className="stroke-current"
                  />
                );
              })()}

              {/* middle-left line */}
              {(() => {
                const down = cardHeight / 2.2;
                const len = cardWidth / 6;
                const a = Math.PI / 4;

                return (
                  <line
                    x1={5 * Math.cos(a + Math.PI)}
                    y1={down - 5 * Math.sin(a + Math.PI)}
                    x2={len * Math.cos(a)}
                    y2={down - len * Math.sin(a)}
                    className="stroke-current"
                  />
                );
              })()}

              {/* top-right line */}
              {(() => {
                const down = cardHeight / 9;
                const len = cardWidth / 12;
                const a = (5 * Math.PI) / 4;

                return (
                  <line
                    x1={cardWidth + 5 * Math.cos(a + Math.PI)}
                    y1={down - 5 * Math.sin(a + Math.PI)}
                    x2={cardWidth + len * Math.cos(a)}
                    y2={down - len * Math.sin(a)}
                    className="stroke-current"
                  />
                );
              })()}

              {/* bottom-right line	*/}
              {(() => {
                const size = cardWidth / 10;
                const a = (5 * Math.PI) / 4;

                return (
                  <line
                    x1={cardWidth + 5 * Math.cos(a + Math.PI)}
                    y1={cardHeight - size - 5 * Math.sin(a + Math.PI)}
                    x2={cardWidth - size + 5 * Math.cos(a)}
                    y2={cardHeight - 5 * Math.sin(a)}
                    className="stroke-current"
                  />
                );
              })()}

              {/* bottom-right circle	*/}
              {(() => {
                const down = cardHeight - cardWidth / 10;
                const r = cardWidth / 40;

                return (
                  <circle
                    cx={cardWidth}
                    cy={down}
                    r={r}
                    className="stroke-current fill-transparent"
                  />
                );
              })()}
            </svg>
          </div>

          {numCards > 0 && (
            <div
              className={`absolute bottom-slide-5 right-slide-5 text-sm text-fmd-blue font-bold leading-none ${
                isCapturing && "invisible"
              }`}
            >
              {+i + 1} of {numCards}
            </div>
          )}

          <div className="absolute inset-0 p-slide-5 text-fmd-navy">
            {children}
          </div>
        </React.Fragment>
      )}
    />
  );
};

const strong = (props: Props) => (
  <strong {...props} className={`${props.className} text-fmd-red`} />
);

export const formidable: DeckTheme = {
  card,
  nodes: {
    strong,
  },
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
