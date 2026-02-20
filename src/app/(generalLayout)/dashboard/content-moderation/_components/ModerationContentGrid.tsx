import ModerationContentCard from "./ModerationContentCard";
import { ModerationContentItem } from "./moderation.mock";

type ModerationContentGridProps = {
  items: ModerationContentItem[];
  showDetailsAction: boolean;
};

const ModerationContentGrid = ({
  items,
  showDetailsAction,
}: ModerationContentGridProps) => {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-border p-10 text-center text-muted-foreground">
        No content found for this filter.
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ModerationContentCard
          key={item.id}
          item={item}
          showDetailsAction={showDetailsAction}
        />
      ))}
    </div>
  );
};

export default ModerationContentGrid;
