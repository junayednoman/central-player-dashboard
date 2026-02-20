import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type EarningCardProps = {
  imageUrl: string;
  name: string;
  date: string;
  status: string;
  badgeClassName?: string;
};

export function EarningCard({
  imageUrl,
  name,
  date,
  status,
  badgeClassName = "bg-[#6C5DD3] text-white",
}: EarningCardProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={imageUrl}
        alt={name}
        width={40}
        height={40}
        className="rounded-full object-cover border border-border"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-medium text-foreground">{name}</span>
          <Badge
            variant="secondary"
            className={`${badgeClassName} capitalize text-xs`}
          >
            {status.toLowerCase()}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </div>
  );
}
