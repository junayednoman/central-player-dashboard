"use client";

import { Eye, Play } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { ModerationContentItem } from "./moderation.mock";

type ModerationContentCardProps = {
  item: ModerationContentItem;
  showDetailsAction: boolean;
};

const FALLBACK_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

const ModerationContentCard = ({
  item,
  showDetailsAction,
}: ModerationContentCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-black">
      <div className="group relative aspect-[16/10]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={item.imageUrl}
          controls={isPlaying}
          preload="none"
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={item.videoUrl ?? FALLBACK_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/15" />

        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black">
              <Play className="h-4 w-4 fill-current" />
            </span>
          </button>
        )}

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

        <div
          className={`absolute inset-x-0 bottom-0 space-y-1.5 p-3 transition-opacity duration-200 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <p className="text-sm text-white">{item.description}</p>
          <p className="line-clamp-1 text-xs text-[#D0B53D]">{item.hashtags.join(" ")}</p>
          <div className="flex items-center gap-2 text-xs text-[#D5D5D5]">
            <span>{item.timeAgo}</span>
            <span>◉</span>
            <Eye className="h-3.5 w-3.5" />
            <span>{item.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModerationContentCard;
