"use client";

import { useMemo, useState } from "react";
import SubscriptionEditor from "./SubscriptionEditor";
import SubscriptionPreviewCard from "./SubscriptionPreviewCard";
import PageTitle from "@/components/others/PageTitle";

const defaultBenefits = [
  "Your video is seen by verified scouts",
  "First place scouts look for new talent",
  "Built for serious players chasing opportunities",
  "Up to 5x more likely to earn trial invites than the community feed",
  "Shown to scouts recruiting your age & position",
  "Track scout views and interest in your video",
];

const SubscriptionContainer = () => {
  const [activeRole, setActiveRole] = useState<
    "players" | "coaches" | "scouts"
  >("players");
  const [price, setPrice] = useState("14.99");
  const [tag, setTag] = useState("Premium");
  const [benefits, setBenefits] = useState<string[]>(defaultBenefits);

  const heading = useMemo(() => {
    if (activeRole === "coaches") return "For Coaches";
    if (activeRole === "scouts") return "For Scouts";
    return "For Players";
  }, [activeRole]);

  const addBenefit = (value: string) => {
    const nextValue = value.trim();
    if (!nextValue) return;
    setBenefits((prev) => [...prev, nextValue]);
  };

  const removeBenefit = (index: number) => {
    setBenefits((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <section className="space-y-6">
      <PageTitle
        title="Subscription Packages"
        subTitle="View and manage all user accounts, track active users, and monitor business registrations for a seamless platform experience."
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_1.05fr]">
        <SubscriptionPreviewCard
          price={price}
          tag={tag}
          benefits={benefits}
          heading={heading}
        />
        <SubscriptionEditor
          activeRole={activeRole}
          onRoleChange={setActiveRole}
          price={price}
          onPriceChange={setPrice}
          tag={tag}
          onTagChange={setTag}
          benefits={benefits}
          onAddBenefit={addBenefit}
          onRemoveBenefit={removeBenefit}
        />
      </div>
    </section>
  );
};

export default SubscriptionContainer;
