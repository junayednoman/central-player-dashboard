"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type ModerationViolationPanelProps = {
  reasons: string[];
};

const ModerationViolationPanel = ({ reasons }: ModerationViolationPanelProps) => {
  const onRemoveContent = () => {
    console.log("Content removed");
  };

  const onRemoveAndRestrict = () => {
    console.log("Content removed and user restricted");
  };

  return (
    <div className="rounded-2xl border border-border bg-black p-5">
      <h2 className="text-[34px] font-medium text-white">Community guidelines violated</h2>

      <div className="mt-5 space-y-3">
        {reasons.map((reason, index) => (
          <div
            key={`${reason}-${index}`}
            className="flex items-center gap-3 rounded-xl bg-[#4A3D05] px-4 py-3 text-lg text-[#EFC834]"
          >
            <Check className="h-4 w-4" />
            <span>{reason}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <Button
          variant="destructive"
          className="h-12 w-full rounded-xl text-base"
          onClick={onRemoveContent}
        >
          Remove Content
        </Button>

        <button
          type="button"
          onClick={onRemoveAndRestrict}
          className="w-full text-center text-base text-destructive"
        >
          Remove content & Restrict user
        </button>
      </div>
    </div>
  );
};

export default ModerationViolationPanel;
