import { visit } from "unist-util-visit";

/**
 * Turn our directives into nodes with properties that can be picked up by MDX on the React side.
 */
export const directives = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective" || node.type === "leafDirective") {
        const data = node.data || (node.data = {});

        // Deck config
        if (node.name === "deckConfig") {
          data.hName = "deckConfig";
          data.hProperties = node.attributes || {};
        }
        // Card-level config
        else if (node.name === "config") {
          data.hName = "config";
          data.hProperties = node.attributes || {};
        }
        // The rest of the directives
        else {
          data.hName = "directive";
          data.hProperties = {
            componentName: node.name,
            ...(node.attributes || {}),
          };
        }
      }
    });
  };
};
