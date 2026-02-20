"use client";

import { APagination } from "@/components/ui/APagination";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ModerationViolationPanel from "./ModerationViolationPanel";
import { ModerationContentItem } from "./moderation.mock";

type ModerationDetailsContainerProps = {
  item: ModerationContentItem;
};

const ModerationDetailsContainer = ({ item }: ModerationDetailsContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="space-y-6">
      <div className="grid gap-5 xl:grid-cols-[1.05fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-border bg-black">
          <div className="relative aspect-[16/11]">
            <Image src={item.imageUrl} alt={item.authorName} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black">
                <Play className="h-5 w-5 fill-current" />
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
              <p className="text-[34px] text-white">{item.description}</p>
              <p className="text-base text-[#D0B53D]">{item.hashtags.join(" ")}</p>
              <div className="flex items-center gap-3 text-xl text-[#D5D5D5]">
                <span>{item.timeAgo}</span>
                <span>◉</span>
                <span>{item.views}</span>
              </div>
            </div>
          </div>
        </div>

        <ModerationViolationPanel
          reasons={
            item.violationReasons ?? [
              "Your video is seen by verified scouts",
              "Your video is seen by verified scouts",
              "Your video is seen by verified scouts",
              "Your video is seen by verified scouts",
            ]
          }
        />
      </div>

      <div className="border-t border-border pt-4">
        <APagination
          totalItems={10}
          itemsPerPage={1}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default ModerationDetailsContainer;
