"use client";
import { useState } from "react";
import { AFilterSelect } from "@/components/form/AFilterSelect";
import { communityTypeOptions } from "@/data/global.data";
import { Input } from "@/components/ui/input";
import { APagination } from "@/components/ui/APagination";
import PageTitle from "@/components/others/PageTitle";
import AContainer from "@/components/AContainer";
import { CommunityCard } from "./CommunityCard";

const CommunityContainer = () => {
  const [userType, setUserType] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;

  return (
    <div>
      <AContainer>
        <PageTitle
          title="Community Engagement"
          subTitle="Manage user groups, track class activities, and nurture a collaborative engaging environment"
        />
        <div className="flex items-center gap-4 justify-end">
          <Input name="search" placeholder="Search..." className="w-[250px]" />
          <AFilterSelect
            onChange={setUserType}
            placeholder={"user type"}
            value={userType}
            options={communityTypeOptions}
            className="!w-[100px]"
          />
        </div>
        <div className="space-y-4 mt-10">
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
        <APagination
          totalItems={100}
          itemsPerPage={limit}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          setCurrentPage={setCurrentPage}
        />
      </AContainer>
    </div>
  );
};

export default CommunityContainer;
