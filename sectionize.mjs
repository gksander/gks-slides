import { visit } from "unist-util-visit";
import { remove } from "unist-util-remove";

export const sectionize = () => {
  return (tree) => {
    let sections = [],
      sectionItems = [];

    for (const node of tree.children) {
      if (node.type === "thematicBreak") {
        sections.push([...sectionItems]);
        sectionItems.length = 0;
      } else {
        sectionItems.push(node);
      }
    }
    sections.push([...sectionItems]);

    /**
     * Turn sections children-array into actual `section` items
     */
    sections = sections.map((items, i) => ({
      type: "section",
      children: items,
      data: {
        hName: "section",
        // pass through number of sections and current index
        hProperties: { numSlides: sections.length, i },
      },
    }));

    /**
     * Now, we'll also pluck out any JSON-parsable text items and pass those
     *  to the section component.
     * This is a poor-man's way of adding metadata to a slide.
     */
    sections.forEach((section) => {
      visit(
        section,
        (node) => {
          if (node.type !== "text") return false;
          try {
            Object.assign(section.data.hProperties, JSON.parse(node.value));
            return true;
          } catch {}
          return false;
        },
        (item) => {
          remove(section, { cascade: true }, (i) => i === item);
        }
      );
    });

    tree.children = sections;
  };
};
