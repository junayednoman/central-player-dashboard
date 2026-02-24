import AContainer from "@/components/AContainer";
import { Metadata } from "next";
import EarnigsContainer from "./_components/EarnigsContainer";

export const metadata: Metadata = {
  title: "Earnigs",
};

const EarnigsPage = () => {
  return (
    <main>
      <AContainer>
        <EarnigsContainer />
      </AContainer>
    </main>
  );
};

export default EarnigsPage;
