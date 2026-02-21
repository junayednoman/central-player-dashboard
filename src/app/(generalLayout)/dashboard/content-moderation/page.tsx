import AContainer from "@/components/AContainer";
import { Metadata } from "next";
import ContentModerationContainer from "./_components/ContentModerationContainer";

export const metadata: Metadata = {
  title: "Moderation",
};

const ContentModerationPage = () => {
  return (
    <main>
      <AContainer>
        <ContentModerationContainer />
      </AContainer>
    </main>
  );
};

export default ContentModerationPage;
