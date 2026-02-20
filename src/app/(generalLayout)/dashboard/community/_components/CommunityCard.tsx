import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CommunityCard() {
  return (
    <Link
      href={"/dashboard/community/rj7348ff3u8ufd44545"}
      className="flex items-center justify-between p-4 rounded-lg border border-border  transition-colors"
    >
      <div className="flex gap-2">
        {/* Profile Image */}
        <Image
          src={"https://payload-marketing.moonpay.com/api/media/file/vibe.jpg"}
          alt={"Sarah Johnson"}
          width={50}
          height={50}
          className="rounded-full mr-3"
        />

        <div className="flex flex-col">
          Vibe Coding
          <p className="text-sm text-muted-foreground">1254 members</p>
        </div>

        <div>
          <Badge variant="default" className="bg-primary text-white">
            Group
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <p className="text-sm font-medium">Details</p>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </Link>
  );
}
