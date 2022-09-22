import { DeckTheme, Props } from "./themeTypes";
import { BaseCard, CardProps } from "./util/BaseCard";

const h1 = (props: Props) => <h1 {...props} />;

const card = (props: CardProps) => {
  return (
    <BaseCard
      {...props}
      renderContents={({ children }) => (
        <div className="absolute inset-0 bg-stone-300 p-slide-3">
          {children}
        </div>
      )}
    />
  );
};

export const formidable: DeckTheme = {
  card,
  nodes: {},
};
