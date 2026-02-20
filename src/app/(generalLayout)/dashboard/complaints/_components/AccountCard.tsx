import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Lock } from "lucide-react";
import Image from "next/image";
import { AccountComplainDetailsModal } from "./modal/AccountDetailsModal";
import { AAlertDialog } from "@/components/modal/AAlertDialog";

export function AccountCard() {
  const handleDelete = () => {};
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-border  transition-colors">
      <div className="flex gap-2">
        {/* Profile Image */}
        <Image
          src={"https://randomuser.me/api/portraits/men/23.jpg"}
          alt={"Sarah Johnson"}
          width={50}
          height={50}
          className="rounded-full mr-3"
        />

        <div className="flex flex-col">
          <h3 className="font-medium text-foreground">Sarah Johnson</h3>
          <p className="text-sm text-muted-foreground">
            johnsonsarah@gmail.com
          </p>
        </div>

        <div>
          <Badge variant="default" className="bg-primary text-white">
            Personal
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-2">
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
          onRestrictDelete={() => console.log("User restricted & post deleted")}
        >
          <Button className="w-9">
            <Eye />
          </Button>
        </AccountComplainDetailsModal>
        <AAlertDialog onAction={handleDelete}>
          <Button className="bg-destructive w-9 hover:bg-destructive">
            <Lock />
          </Button>
        </AAlertDialog>
      </div>
    </div>
  );
}
