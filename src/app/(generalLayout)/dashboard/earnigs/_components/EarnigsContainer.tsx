"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, DollarSign, Search } from "lucide-react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { AFilterSelect } from "@/components/form/AFilterSelect";
import PageTitle from "@/components/others/PageTitle";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { APagination } from "@/components/ui/APagination";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { yearOptions } from "@/data/global.data";
import { cn } from "@/lib/utils";

type Role = "player" | "coach" | "scout";
type ScoutPlan = "gold" | "silver" | "standard";

type RowData = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: Role;
  plan?: ScoutPlan;
  amount: number;
};

const roleOptions = [
  { value: "player", label: "Player's subscribed" },
  { value: "coach", label: "Coach subscribed" },
  { value: "scout", label: "Scout's subscribed" },
];

const monthOptions = [
  { value: "january", label: "January" },
  { value: "february", label: "February" },
  { value: "march", label: "March" },
  { value: "april", label: "April" },
  { value: "may", label: "May" },
  { value: "june", label: "June" },
  { value: "july", label: "July" },
  { value: "august", label: "August" },
  { value: "september", label: "September" },
  { value: "october", label: "October" },
  { value: "november", label: "November" },
  { value: "december", label: "December" },
];

const rows: RowData[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "johnsonsarah@gmail.com",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/023/402/465/non_2x/man-avatar-free-vector.jpg",
    role: "player",
    amount: 200,
  },
  {
    id: "2",
    name: "John Carter",
    email: "johncarter@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/headshot-pleased-young-man_23-2148208948.jpg",
    role: "coach",
    amount: 260,
  },
  {
    id: "3",
    name: "Mike Reynolds",
    email: "mike.reynolds@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/smiley-man-sitting-front-view_23-2149915883.jpg",
    role: "scout",
    plan: "gold",
    amount: 320,
  },
  {
    id: "4",
    name: "Emily Scott",
    email: "emilyscott@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915909.jpg",
    role: "scout",
    plan: "silver",
    amount: 240,
  },
  {
    id: "5",
    name: "Liam Brooks",
    email: "liambrooks@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-man-portrait-isolated_23-2149152502.jpg",
    role: "scout",
    plan: "standard",
    amount: 200,
  },
  {
    id: "6",
    name: "Olivia Turner",
    email: "oliviaturner@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man_171337-1184.jpg",
    role: "player",
    amount: 180,
  },
  {
    id: "7",
    name: "Noah Bennett",
    email: "noahbennett@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/headshot-pleased-young-man_23-2148208948.jpg",
    role: "coach",
    amount: 280,
  },
  {
    id: "8",
    name: "Ava Coleman",
    email: "avacoleman@gmail.com",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/023/402/465/non_2x/man-avatar-free-vector.jpg",
    role: "player",
    amount: 210,
  },
  {
    id: "9",
    name: "Jacob Foster",
    email: "jacobfoster@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/headshot-pleased-young-man_23-2148208948.jpg",
    role: "coach",
    amount: 300,
  },
  {
    id: "10",
    name: "Mason Price",
    email: "masonprice@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/smiley-man-sitting-front-view_23-2149915883.jpg",
    role: "scout",
    plan: "gold",
    amount: 350,
  },
  {
    id: "11",
    name: "Sophia Bailey",
    email: "sophiabailey@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915909.jpg",
    role: "scout",
    plan: "silver",
    amount: 230,
  },
  {
    id: "12",
    name: "Isabella Woods",
    email: "isabellawoods@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-man-portrait-isolated_23-2149152502.jpg",
    role: "scout",
    plan: "standard",
    amount: 190,
  },
  {
    id: "13",
    name: "Lucas Hayes",
    email: "lucashayes@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man_171337-1184.jpg",
    role: "player",
    amount: 220,
  },
  {
    id: "14",
    name: "Mia Ward",
    email: "miaward@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/headshot-pleased-young-man_23-2148208948.jpg",
    role: "coach",
    amount: 270,
  },
  {
    id: "15",
    name: "Ethan Cooper",
    email: "ethancooper@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/smiley-man-sitting-front-view_23-2149915883.jpg",
    role: "scout",
    plan: "gold",
    amount: 340,
  },
  {
    id: "16",
    name: "Charlotte Reed",
    email: "charlottereed@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915909.jpg",
    role: "scout",
    plan: "silver",
    amount: 250,
  },
  {
    id: "17",
    name: "Amelia Cook",
    email: "ameliacook@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-man-portrait-isolated_23-2149152502.jpg",
    role: "scout",
    plan: "standard",
    amount: 210,
  },
  {
    id: "18",
    name: "Elijah Ross",
    email: "elijahross@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man_171337-1184.jpg",
    role: "player",
    amount: 205,
  },
];

const roleBadgeClasses: Record<Role, string> = {
  player: "bg-sky-500 text-white border-transparent",
  coach: "bg-emerald-500 text-white border-transparent",
  scout: "bg-red-500 text-white border-transparent",
};

const planBadgeClasses: Record<ScoutPlan, string> = {
  gold: "bg-yellow-400 text-black border-transparent",
  silver: "bg-slate-400 text-white border-transparent",
  standard: "bg-blue-500 text-white border-transparent",
};

const EarnigsContainer = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState<Role>("player");
  const [month, setMonth] = useState("september");
  const [year, setYear] = useState("2025");
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().setDate(new Date().getDate() - 6)),
    to: new Date(),
  });
  const itemsPerPage = 6;
  const currencyFormatter = useMemo(
    () => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    [],
  );

  const roleTotals = useMemo(
    () =>
      rows.reduce<Record<Role, number>>(
        (acc, row) => {
          acc[row.role] += row.amount;
          return acc;
        },
        { player: 0, coach: 0, scout: 0 },
      ),
    [],
  );

  const summaryCards = useMemo(
    () => [
      { role: "player" as const, title: "Player Subscription" },
      { role: "coach" as const, title: "Coach Subscription" },
      { role: "scout" as const, title: "Scout Subscription" },
    ],
    [],
  );

  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase();

    return rows.filter((row) => {
      const matchesRole = row.role === role;
      const matchesQuery =
        !query ||
        row.name.toLowerCase().includes(query) ||
        row.email.toLowerCase().includes(query);

      return matchesRole && matchesQuery;
    });
  }, [search, role]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, role, month, year]);

  const paginatedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredRows.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredRows]);

  const dateRangeLabel = useMemo(() => {
    if (!dateRange?.from) return "Pick date range";
    if (dateRange.from && !dateRange.to)
      return format(dateRange.from, "MMM dd, yyyy");

    return `${format(dateRange.from, "MMM dd, yyyy")} - ${format(
      dateRange.to as Date,
      "MMM dd, yyyy",
    )}`;
  }, [dateRange]);

  return (
    <section className="space-y-6">
      <PageTitle
        title="Earnings"
        subTitle="View and update your personal information, change passwords for a personalized experience"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.role}
            className="w-full rounded-2xl bg-linear-to-br from-zinc-800 to-zinc-900 p-5 shadow-md"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-[28px] leading-none font-semibold text-foreground sm:text-[30px]">
                {card.title}
              </h3>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-blue-500 transition hover:opacity-90"
                    aria-label="Select date range"
                  >
                    <CalendarDays className="h-4 w-4" />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto border-border bg-card p-0"
                  align="end"
                >
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    className="bg-card border-border"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="mt-4 flex items-center gap-2 text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span className="text-lg font-medium">
                {currencyFormatter.format(roleTotals[card.role])}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {dateRangeLabel}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-[260px]">
            <Search className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <Input
              name="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name or email"
              className="h-11 border-border bg-card pl-9"
            />
          </div>

          <AFilterSelect
            value={role}
            onChange={(value) => setRole(value as Role)}
            options={roleOptions}
            className="w-full sm:w-[190px]"
          />
        </div>

        <div className="flex items-center gap-3">
          <AFilterSelect
            value={month}
            onChange={setMonth}
            options={monthOptions}
            className="w-[130px]"
          />
          <AFilterSelect
            value={year}
            onChange={setYear}
            options={yearOptions}
            className="w-[90px]"
          />
        </div>
      </div>

      <div className="border-border/40 divide-border/40 divide-y rounded-lg border">
        {paginatedRows.map((row) => (
          <div
            key={row.id}
            className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={row.avatar} alt={row.name} />
                <AvatarFallback>
                  {row.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground sm:text-base">
                  {row.name}
                </p>
                <p className="truncate text-xs text-muted-foreground sm:text-sm">
                  {row.email}
                </p>
              </div>

              <div className="ml-1 flex items-center gap-2">
                <Badge
                  className={cn(
                    "rounded-md px-2 py-0.5 text-[11px] font-medium capitalize sm:text-xs",
                    roleBadgeClasses[row.role],
                  )}
                >
                  {row.role}
                </Badge>

                {row.plan && (
                  <Badge
                    className={cn(
                      "rounded-md px-2 py-0.5 text-[11px] font-medium capitalize sm:text-xs",
                      planBadgeClasses[row.plan],
                    )}
                  >
                    {row.plan}
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-lg font-medium text-foreground">${row.amount}</p>
          </div>
        ))}

        {!filteredRows.length && (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">
            No subscribed users found.
          </div>
        )}
      </div>

      {!!filteredRows.length && (
        <APagination
          totalItems={filteredRows.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
};

export default EarnigsContainer;
