"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { APagination } from "@/components/ui/APagination";
import AContainer from "@/components/AContainer";
import PageTitle from "@/components/others/PageTitle";
import Image from "next/image";

const CommunityDetailsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;

  return (
    <AContainer>
      <div className="flex items-center gap-2">
        <Image
          src={"https://payload-marketing.moonpay.com/api/media/file/vibe.jpg"}
          alt={"Sarah Johnson"}
          width={80}
          height={80}
          className="rounded-full mr-3"
        />
        <PageTitle title="Vibe Coding" subTitle="546 members" />
      </div>
      <div className="flex items-center gap-4 justify-end">
        <Input
          name="search"
          placeholder="Search by name, email..."
          className="w-[250px]"
        />
      </div>
      <div className="space-y-4 mt-6">
        {/* <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard /> */}
      </div>
      <APagination
        totalItems={100}
        itemsPerPage={limit}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        setCurrentPage={setCurrentPage}
      />
    </AContainer>
  );
};

export default CommunityDetailsPage;
