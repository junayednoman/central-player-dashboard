import { Metadata } from "next";
import AContainer from "@/components/AContainer";
import SupportMessagesContainer from "./_components/SupportMessagesContainer";

export const metadata: Metadata = {
  title: "Support Messages",
};

const SupportMessagesPage = () => {
  return (
    <main>
      <AContainer>
        <SupportMessagesContainer />
      </AContainer>
    </main>
  );
};

export default SupportMessagesPage;
