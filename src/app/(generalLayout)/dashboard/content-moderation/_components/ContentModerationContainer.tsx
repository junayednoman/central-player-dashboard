"use client";

import { useEffect, useMemo, useState } from "react";
import PageTitle from "@/components/others/PageTitle";
import { APagination } from "@/components/ui/APagination";
import ModerationContentGrid from "./ModerationContentGrid";
import ModerationSearchAndTabs from "./ModerationSearchAndTabs";
import { ModerationCategory, moderationMockData } from "./moderation.mock";

const PAGE_SIZE = 6;

const ContentModerationContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] =
    useState<ModerationCategory>("all");

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return moderationMockData.filter((item) => {
      const matchesCategory =
        activeCategory === "all"
          ? true
          : activeCategory === "reported"
            ? item.isReported
            : item.category === activeCategory;

      const matchesSearch =
        !query ||
        item.authorName.toLowerCase().includes(query) ||
        (item.authorEmail ?? "").toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredItems.slice(start, start + PAGE_SIZE);
  }, [filteredItems, currentPage]);

  return (
    <section className="space-y-6">
      <PageTitle
        title="Content Moderation"
        subTitle="View and manage all user accounts, track active users, and monitor business registrations for a seamless platform experience."
      />

      <ModerationSearchAndTabs
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ModerationContentGrid
        items={paginatedItems}
        showDetailsAction={activeCategory === "reported"}
      />

      <div className="border-t border-border pt-4">
        <APagination
          totalItems={filteredItems.length}
          itemsPerPage={PAGE_SIZE}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default ContentModerationContainer;
