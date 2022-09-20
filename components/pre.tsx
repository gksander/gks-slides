import { Props } from "./types";
import * as React from "react";

export const Pre = (props: Props) => {
  return (
    <div
      className="rounded-lg overflow-hidden border-2 mb-5 code-block"
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
