import { Badge } from "@/components/ui/badge";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EditEventModal from "./EditEventModal";

export function EventCard() {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-border  transition-colors">
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
          Skate Night NYC
          <p className="text-sm text-muted-foreground">Oct 12, 2025</p>
        </div>

        <div>
          <Badge variant="default" className="bg-[#6C5DD3]">
            online
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <EditEventModal>
          <Button className="w-9">
            <Pencil />
          </Button>
        </EditEventModal>
      </div>
    </div>
  );
}
