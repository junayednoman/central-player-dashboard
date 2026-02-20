import AContainer from "@/components/AContainer";
import { Metadata } from "next";
import { moderationMockData } from "../_components/moderation.mock";
import ModerationDetailsContainer from "../_components/ModerationDetailsContainer";

type ContentModerationDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Reported Content Details",
};

const ContentModerationDetailsPage = async ({
  params,
}: ContentModerationDetailsPageProps) => {
  const { id } = await params;
  const contentItem = moderationMockData.find((item) => item.id === id);

  return (
    <main>
      <AContainer>
        {contentItem ? (
          <ModerationDetailsContainer item={contentItem} />
        ) : (
          <div className="rounded-2xl border border-border p-10 text-center text-muted-foreground">
            Content not found
          </div>
        )}
      </AContainer>
    </main>
  );
};

export default ContentModerationDetailsPage;
