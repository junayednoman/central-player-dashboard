"use client";

import { useState } from "react";
import { Check, Pencil, Plus, ShieldCheck, X } from "lucide-react";
import { Input } from "@/components/ui/input";

type RoleType = "players" | "coaches" | "scouts";

type SubscriptionEditorProps = {
  activeRole: RoleType;
  onRoleChange: (role: RoleType) => void;
  price: string;
  onPriceChange: (value: string) => void;
  tag: string;
  onTagChange: (value: string) => void;
  benefits: string[];
  onAddBenefit: (value: string) => void;
  onRemoveBenefit: (index: number) => void;
};

const roleTabs: { label: string; value: RoleType }[] = [
  { label: "For Players", value: "players" },
  { label: "For Coaches", value: "coaches" },
  { label: "For Scouts", value: "scouts" },
];

const SubscriptionEditor = ({
  activeRole,
  onRoleChange,
  price,
  onPriceChange,
  tag,
  onTagChange,
  benefits,
  onAddBenefit,
  onRemoveBenefit,
}: SubscriptionEditorProps) => {
  const [benefitInput, setBenefitInput] = useState("");

  return (
    <div className="rounded-[26px] border border-border bg-card p-6 pt-8">
      <div className="mb-8 flex items-center justify-center gap-8">
        {roleTabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => onRoleChange(tab.value)}
            className={`text-xl transition-colors ${
              activeRole === tab.value ? "text-primary" : "text-[#9AA1AE]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex h-14 items-center rounded-xl border border-[#333845] bg-[#1E1E22] px-4 transition-colors focus-within:border-primary/70">
          <ShieldCheck className="mr-3 h-4 w-4 text-[#9E9EA4]" />
          <Input
            value={price}
            onChange={(event) => onPriceChange(event.target.value)}
            placeholder="Enter Subscription price.."
            className="h-full border-0 bg-transparent px-0 text-lg text-white placeholder:text-[#8C8C90] focus-visible:ring-0"
          />
        </div>

        <div className="space-y-2">
          <p className="text-[28px] font-medium text-white">
            Enter Subscription Tag
          </p>
          <div className="inline-flex items-center gap-3 rounded-xl border border-border px-4 py-2.5">
            <span className="text-lg text-white">{tag}</span>
            <Pencil className="h-4 w-4 text-[#A2A2A7]" />
          </div>
          <Input
            value={tag}
            onChange={(event) => onTagChange(event.target.value)}
            placeholder="Update tag"
            className="h-11 border-border bg-transparent text-base text-white placeholder:text-[#8C8C90]"
          />
        </div>

        <div className="space-y-2.5">
          <p className="text-[28px] font-medium text-white">
            Enter Subscription Benefits
          </p>
          <div className="flex h-12 items-center rounded-xl bg-[#1E1E22] px-4">
            <Input
              value={benefitInput}
              onChange={(event) => setBenefitInput(event.target.value)}
              placeholder="Write here"
              className="h-full border-0 bg-transparent px-0 text-lg text-white placeholder:text-[#8C8C90] focus-visible:ring-0"
            />
            <button
              type="button"
              onClick={() => {
                onAddBenefit(benefitInput);
                setBenefitInput("");
              }}
              className="text-[#B4B4B8]"
              aria-label="Add benefit"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div
                key={`${benefit}-${index}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-[#C2C2C5]" />
                  <p className="text-base text-[#E5E7EB]">{benefit}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemoveBenefit(index)}
                  className="text-[#9CA3AF] transition-colors hover:text-white"
                  aria-label="Remove benefit"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionEditor;
