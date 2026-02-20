import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModerationContentItem } from "./moderation.mock";

type ModerationContentCardProps = {
  item: ModerationContentItem;
  showDetailsAction: boolean;
};

const ModerationContentCard = ({
  item,
  showDetailsAction,
}: ModerationContentCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-black">
      <div className="relative aspect-[16/10]">
        <Image src={item.imageUrl} alt={item.authorName} fill className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/15" />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black">
            <Play className="h-4 w-4 fill-current" />
          </span>
        </div>

        {showDetailsAction && item.isReported && (
          <div className="absolute right-3 top-3">
            <Link
              href={`/dashboard/content-moderation/${item.id}`}
              className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black"
            >
              View details
            </Link>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-3">
          <p className="text-sm text-white">{item.description}</p>
          <p className="line-clamp-1 text-xs text-[#D0B53D]">
            {item.hashtags.join(" ")}
          </p>
          <div className="flex items-center gap-3 text-xs text-[#D5D5D5]">
            <span>{item.timeAgo}</span>
            <span>◉</span>
            <span>{item.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModerationContentCard;
