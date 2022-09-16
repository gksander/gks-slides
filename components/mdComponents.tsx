import * as React from "react";
import Image from "next/image";
import Texture from "../assets/texture.jpg";

const pageSizeInches = 8.5; // inches

type Props = React.PropsWithChildren<{ className: string; style: object }>;
const Section = ({ children }: Props) => {
  return (
    <section className="w-[8.5in] h-[8.5in] break-after-page transform-none text-gray-100 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-stone-800">
        <div
          style={{ backgroundImage: "url(/panel.jpg)" }}
          className="w-full h-full bg-cover bg-center grayscale blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <div
          className="absolute right-0 bottom-0 bg-contain w-28 h-28 flex items-end z-20"
          style={{ backgroundImage: "url(/headshot-bw.png)" }}
        ></div>
      </div>
      {/* Actual content */}
      <div className="absolute inset-0 z-10 p-4 overflow-hidden">
        {children}
      </div>
    </section>
  );
};

const H1 = ({ children }: Props) => (
  <h1 className="text-4xl font-medium mb-4">{children}</h1>
);

const Pre = (props: Props & { className: string; style: object }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-xl" style={props.style}>
      <div className="p-2 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-red-500 to-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-green-500 to-green-400"></div>
      </div>
      <pre {...props} />
    </div>
  );
};

const P = (props: Props) => (
  <p {...props} className={`${props.className} mb-2`} />
);

const Ol = (props: Props) => (
  <ol {...props} className={`${props.className} mb-3 list-decimal ml-6`} />
);

const Ul = (props: Props) => (
  <ul {...props} className={`${props.className} mb-3 list-disc ml-6`} />
);

const Li = (props: Props) => (
  <li {...props} className={`${props.className} mb-2`} />
);

export const mdComponents = {
  section: Section,
  h1: H1,
  pre: Pre,
  p: P,
  ol: Ol,
  ul: Ul,
  li: Li,
};
