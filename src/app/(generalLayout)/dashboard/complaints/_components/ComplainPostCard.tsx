"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Image from "next/image";
import { AccountComplainDetailsModal } from "./modal/AccountDetailsModal";
import { AAlertDialog } from "@/components/modal/AAlertDialog";

interface PostCardProps {
  description: string;
  views: string;
  timeAgo: string;
  imageUrl: string;
  imageAlt?: string;
}

export function ComplainPostCard({ data }: { data: PostCardProps }) {
  const {
    description,
    views,
    timeAgo,
    imageUrl,
    imageAlt = "Job preview",
  } = data;

  const onViewDetails = () => {};
  const handleDelete = () => {};
  return (
    <Card className="max-w-md overflow-hidden border-border p-0 pt-0 mt-0 gap-y-4 bg-transparent">
      {/* Image Section */}

      <div className="relative aspect-16/10 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4 pt-0">
        {/* Content Section */}
        <CardContent className="px-0">
          <p className="text-sm leading-relaxed text-foreground">
            {description}
          </p>
        </CardContent>

        {/* Footer Section */}
        <CardFooter className="flex-col gap-4 px-0 mt-3">
          {/* Stats Row */}
          <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Eye className="size-4" />
              <span>{views}</span>
            </div>
            <span>{timeAgo}</span>
          </div>

          {/* Action Buttons */}
          <div className="grid w-full grid-cols-2 gap-3">
            <AccountComplainDetailsModal
              user={{
                name: "Michael Epkot",
                role: "Flutter Developer",
                avatar:
                  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid&w=740&q=80",
              }}
              post={{
                content:
                  "Everyone on this platform is so stupid, it's embarrassing. You all suck and are a bunch of losers.",
                stats: "◉ 10K Views • 30 mins",
              }}
              reasons={[
                "Just to let you know this might be a problem",
                "Disrespectful and harmful behavior",
                "Violating platform's harassment policy",
              ]}
              onRestrict={() => console.log("User restricted")}
              onRestrictDelete={() =>
                console.log("User restricted & post deleted")
              }
            >
              <Button
                variant="outline"
                className="w-full h-11 bg-card hover:bg-secondary"
                onClick={onViewDetails}
              >
                View details
              </Button>
            </AccountComplainDetailsModal>
            <AAlertDialog onAction={handleDelete}>
              <Button variant="destructive" className="w-full h-11">
                Remove
              </Button>
            </AAlertDialog>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
