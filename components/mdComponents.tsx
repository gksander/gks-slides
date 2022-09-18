import * as React from "react";

type Props = React.PropsWithChildren<{ className: string; style: object }>;

const Section = ({ children, ...rest }: Props) => {
  return (
    <section className="w-[8.5in] h-[8.5in] break-after-page transform-none text-gray-100 relative slide">
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
        <div className="page-count p-3 text-sm"></div>
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
    </section>
  );
};

const H1 = ({ children }: Props) => (
  <h1 className="text-4xl font-medium mb-5">{children}</h1>
);

const H2 = (props: Props) => (
  <h2 {...props} className={`${props.className} text-2xl font-medium mb-5`} />
);
const H3 = (props: Props) => (
  <h3 {...props} className={`${props.className} text-xl font-medium mb-5`} />
);

const Pre = (props: Props) => {
  return (
    <div
      className="rounded-lg overflow-hidden border-2 border-stone-700 mb-5"
      // style={props.style}
    >
      <div className="p-2 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-red-500 to-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-green-500 to-green-400"></div>
      </div>
      <pre {...props} style={{}} />
    </div>
  );
};

const P = (props: Props) => (
  <p {...props} className={`${props.className} mb-4`} />
);

const Ol = (props: Props) => (
  <ol {...props} className={`${props.className} mb-4 list-decimal ml-6`} />
);

const Ul = (props: Props) => (
  <ul {...props} className={`${props.className} mb-4 list-disc ml-6`} />
);

const Li = (props: Props) => (
  <li {...props} className={`${props.className} mb-2`} />
);

const Strong = (props: Props) => (
  <strong {...props} className={`${props.className} text-primary-500`} />
);

export const mdComponents = {
  section: Section,
  h1: H1,
  h2: H2,
  h3: H3,
  pre: Pre,
  p: P,
  ol: Ol,
  ul: Ul,
  li: Li,
  strong: Strong,
};
