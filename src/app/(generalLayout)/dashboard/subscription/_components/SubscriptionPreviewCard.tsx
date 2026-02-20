import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

type SubscriptionPreviewCardProps = {
  heading: string;
  price: string;
  tag: string;
  benefits: string[];
};

const SubscriptionPreviewCard = ({
  heading,
  price,
  tag,
  benefits,
}: SubscriptionPreviewCardProps) => {
  return (
    <div className="space-y-4">
      <div className="rounded-[26px] border border-[#0E8DFF] bg-black p-6">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="text-[42px] font-semibold leading-none text-white">
              EUR {price || "0.00"}
            </p>
            <p className="mt-2 text-base text-[#AEAEAE]">/ upload</p>
            <p className="mt-3 text-lg text-[#8C8C8C]">{heading}</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#3A2F05] px-3 py-1 text-xs text-[#F7C948]">
            <Crown className="h-3.5 w-3.5" />
            {tag || "Premium"}
          </span>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#332A04] text-[#D2A218]">
                <Check className="h-3 w-3" />
              </span>
              <p className="text-lg text-[#E7E7E7]">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <Button className="h-12 w-full rounded-2xl text-lg font-medium">
        Save changes
      </Button>
    </div>
  );
};

export default SubscriptionPreviewCard;
