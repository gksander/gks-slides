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

    tree.children = sections.map((items) => ({
      type: "section",
      children: items,
      data: {
        hName: "section",
      },
    }));
  };
};
