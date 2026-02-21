"use client";

import { Input } from "@/components/ui/input";
import {
  ModerationCategory,
  moderationCategoryOptions,
} from "./moderation.mock";

type ModerationSearchAndTabsProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeCategory: ModerationCategory;
  onCategoryChange: (category: ModerationCategory) => void;
};

const ModerationSearchAndTabs = ({
  searchTerm,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: ModerationSearchAndTabsProps) => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <Input
        name="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by name or email"
        className="h-11 w-full max-w-[280px]"
      />

      <div className="flex flex-wrap items-center gap-2">
        {moderationCategoryOptions.map((option) => {
          const isActive = option.value === activeCategory;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onCategoryChange(option.value)}
              className={`rounded-xl border px-6 py-2 text-sm transition-colors ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-transparent text-foreground hover:border-primary/50"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ModerationSearchAndTabs;
