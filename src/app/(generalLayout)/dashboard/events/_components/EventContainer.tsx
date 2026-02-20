"use client";
import AContainer from "@/components/AContainer";
import PageTitle from "@/components/others/PageTitle";
import { EventCard } from "./EventCard";
import { APagination } from "@/components/ui/APagination";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import EventModal from "./CreateEventModal";
import { Button } from "@/components/ui/button";
const EventContainer = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;
  return (
    <AContainer>
      <PageTitle
        title="Event management"
        subTitle="Create, edit, and manage both online and offline events, including scheduling, tracking, and participant management"
      />

      <div className="flex items-center gap-3 my-6 justify-end">
        <Input
          name="search"
          placeholder="Search..."
          className="w-[250px] h-11"
        />
        <EventModal>
          <Button className="h-11 px-8 rounded-md">Create Event</Button>
        </EventModal>
      </div>

      <div className="space-y-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      {/* pagination */}
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

export default EventContainer;
