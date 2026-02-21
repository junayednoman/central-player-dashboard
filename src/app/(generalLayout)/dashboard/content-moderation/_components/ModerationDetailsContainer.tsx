"use client";

import { Eye, Play } from "lucide-react";
import { useRef, useState } from "react";
import ModerationViolationPanel from "./ModerationViolationPanel";
import { ModerationContentItem } from "./moderation.mock";

type ModerationDetailsContainerProps = {
  item: ModerationContentItem;
};

const FALLBACK_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

const ModerationDetailsContainer = ({ item }: ModerationDetailsContainerProps) => {
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
    <section className="space-y-6">
      <div className="grid gap-5 xl:grid-cols-[1.05fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-border bg-black">
          <div className="group relative aspect-[16/11]">
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

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/15" />

            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black">
                  <Play className="h-5 w-5 fill-current" />
                </span>
              </button>
            )}

            <div
              className={`absolute inset-x-0 bottom-0 space-y-2 p-5 transition-opacity duration-200 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <p className="text-xl leading-snug text-white">{item.description}</p>
              <p className="text-base text-[#D0B53D]">{item.hashtags.join(" ")}</p>
              <div className="flex items-center gap-3 text-lg text-[#D5D5D5]">
                <span>{item.timeAgo}</span>
                <Eye className="h-4 w-4" />
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
    </section>
  );
};

export default ModerationDetailsContainer;
