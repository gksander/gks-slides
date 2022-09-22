import { visit } from "unist-util-visit";
import { remove } from "unist-util-remove";

export const sectionize = () => {
  return (tree) => {
    let cards = [],
      sectionItems = [];

    for (const node of tree.children) {
      if (node.type === "thematicBreak") {
        cards.push([...sectionItems]);
        sectionItems.length = 0;
      } else {
        sectionItems.push(node);
      }
    }
    if (sectionItems.length > 0) cards.push([...sectionItems]);

    /**
     * Turn cards children-array into actual `section` items
     */
    cards = cards.map((items, i) => ({
      type: "card",
      children: items,
      data: {
        hName: "card",
        // pass through number of cards and current index
        hProperties: { numCards: cards.length, i },
      },
    }));

    /**
     * Search for any ::config directives in each card and pass those props
     *  on to the Card component
     */
    cards.forEach((card) => {
      visit(
        card,
        (node) => {
          if (node.data?.hName === "config") {
            Object.assign(card.data.hProperties, node.data.hProperties);
            return true;
          }
        },
        (node) => {
          remove(card, { cascade: true }, (i) => i === node);
        }
      );
    });

    /**
     * Build out our deck component. We'll collect deck props to pass in to the deck
     */
    const deckProps = {};
    visit(tree, (node) => {
      if (node.data?.hName === "deckConfig" && node.data?.hProperties) {
        Object.assign(deckProps, node.data.hProperties);
      }
    });

    const deck = {
      type: "deck",
      children: cards,
      data: {
        hName: "deck",
        hProperties: deckProps,
      },
    };

    tree.children = [deck];
  };
};
