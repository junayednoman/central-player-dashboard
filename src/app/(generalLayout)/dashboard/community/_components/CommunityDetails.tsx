"use client";
import { useState } from "react";
import { AFilterSelect } from "@/components/form/AFilterSelect";
import { userTypeOptions } from "@/data/global.data";
import { Input } from "@/components/ui/input";
import { APagination } from "@/components/ui/APagination";
import { AccountCard } from "../../complaints/_components/AccountCard";

const Users = () => {
  const [userType, setUserType] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;

  return (
    <div>
      <div className="flex items-center gap-4 justify-end">
        <Input name="search" placeholder="Search..." className="w-[250px]" />
        <AFilterSelect
          onChange={setUserType}
          placeholder={"user type"}
          value={userType}
          options={userTypeOptions}
          className="!w-[110px]"
        />
      </div>
      <div className="space-y-4 mt-10">
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </div>
      <APagination
        totalItems={100}
        itemsPerPage={limit}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Users;
