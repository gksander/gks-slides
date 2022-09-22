import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { remove } from "unist-util-remove";

export const stripFrontmatter: Plugin = () => (tree) => {
  visit(tree, (node) => {
    if (node.type === "yaml") {
      remove(tree, { cascade: true }, (i) => i === node);
    }
  });
};
