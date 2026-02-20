import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type AccountComplainDetailsModalProps = {
  children?: ReactNode;
  user: {
    name: string;
    role: string;
    avatar: string;
  };
  post: {
    content: string;
    stats: string;
  };
  reasons: string[];
  onRestrict?: () => void;
  onRestrictDelete?: () => void;
};

export function AccountComplainDetailsModal({
  children,
  user,
  post,
  reasons,
  onRestrict,
}: AccountComplainDetailsModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-black/30 backdrop-blur-[.8px]" />
      <DialogContent className="text-card-foreground bg-white border-border max-w-md p-6 rounded-lg">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <Image
              width={40}
              height={40}
              src={user.avatar}
              alt={`${user.name} profile`}
              className="rounded-full w-10 h-10"
            />
            <div>
              <div className="font-semibold text-accent-foreground">
                {user.name}
              </div>
              <div className="text-muted-foreground text-sm">{user.role}</div>
            </div>
          </div>
          <DialogDescription>
            <div className="bg-popover p-4 rounded-md">
              <p className="text-muted-foreground">{post.content}</p>
            </div>
            <div className="p-4 rounded-md border border-[#D9D9D9]">
              <h4 className="font-semibold text-destructive mb-2">
                ⚠️ Reason for Violation
              </h4>
              <ul className="space-y-2">
                {reasons.map((reason, idx) => (
                  <li
                    key={idx}
                    className="text-[#B54708] bg-[#FEF0C7] px-3 py-2 rounded-full"
                  >
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex space-x-2">
          <Button
            variant="destructive"
            className="bg-red-500 h-12 rounded-md hover:bg-red-600 w-full"
            onClick={() => {
              onRestrict?.();
              setOpen(false);
            }}
          >
            Restrict User
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
