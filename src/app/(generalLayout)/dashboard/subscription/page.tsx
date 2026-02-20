import AContainer from "@/components/AContainer";
import { Metadata } from "next";
import SubscriptionContainer from "./_components/SubscriptionContainer";

export const metadata: Metadata = {
  title: "Subscription",
};

const SubscriptionPage = () => {
  return (
    <main>
      <AContainer>
        <SubscriptionContainer />
      </AContainer>
    </main>
  );
};

export default SubscriptionPage;
