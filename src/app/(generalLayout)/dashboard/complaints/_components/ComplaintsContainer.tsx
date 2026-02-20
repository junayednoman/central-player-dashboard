"use client";
import AContainer from "@/components/AContainer";
import { AFilterSelect } from "@/components/form/AFilterSelect";
import PageTitle from "@/components/others/PageTitle";
import { APagination } from "@/components/ui/APagination";
import { Input } from "@/components/ui/input";
import { complainTypeOptions } from "@/data/global.data";
import { useState } from "react";
import { AccountCard } from "./AccountCard";
import { ComplainPostCard } from "./ComplainPostCard";

const dummyData = {
  title: "Senior UI/UX Designer",
  description:
    "We are seeking a Senior UI/UX Designer to lead the design of intuitive and user-centric mobile applications. The ideal ,candidate should have a strong bac",
  views: "105K Views",
  timeAgo: "30 mins",
  imageUrl:
    "https://images.unsplash.com/photo-1661953118591-2f5be524698e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  imageAlt: "Nike Air shoe mobile app design mockup",
};

const ComplaintsContainer = () => {
  const [complainType, setComplainType] = useState<string>("account");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;
  return (
    <AContainer>
      <PageTitle
        title="Complaints & Actions"
        subTitle="Review and manage user-reported posts, enforce account restrictions, and maintain a safe, respectful environment for all users"
      />
      <div className="flex items-center gap-4 justify-end">
        <Input
          name="search"
          placeholder="Search..."
          className="w-[250px] h-11"
        />
        <AFilterSelect
          onChange={setComplainType}
          placeholder={"user type"}
          value={complainType}
          options={complainTypeOptions}
          className="w-[100px]!"
        />
      </div>
      {/* posts */}
      {complainType === "account" && (
        <div className="space-y-3 mt-6">
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </div>
      )}
      {complainType === "post" && (
        <div className="mt-6 grid grid-cols-4 gap-5">
          <ComplainPostCard data={dummyData} />
          <ComplainPostCard data={dummyData} />
          <ComplainPostCard data={dummyData} />
          <ComplainPostCard data={dummyData} />
          <ComplainPostCard data={dummyData} />
        </div>
      )}
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

export default ComplaintsContainer;
