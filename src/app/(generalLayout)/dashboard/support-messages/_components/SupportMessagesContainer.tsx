"use client";

import { useMemo, useState } from "react";
import { Info, Reply, Search, CheckCircle2, Mail } from "lucide-react";
import PageTitle from "@/components/others/PageTitle";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { APagination } from "@/components/ui/APagination";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

type SupportStatus = "open" | "resolved";

type SupportRow = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  subject: string;
  message: string;
  status: SupportStatus;
  date: string;
};

const initialRows: SupportRow[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "johnsonsarah@gmail.com",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/023/402/465/non_2x/man-avatar-free-vector.jpg",
    subject: "Subscription not updating",
    message:
      "I upgraded my plan but the dashboard still shows the old subscription.",
    status: "open",
    date: "Sep 18, 2025",
  },
  {
    id: "2",
    name: "John Carter",
    email: "johncarter@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/headshot-pleased-young-man_23-2148208948.jpg",
    subject: "Payment failed",
    message:
      "My card was charged but the payment failed in the app. Please check.",
    status: "open",
    date: "Sep 17, 2025",
  },
  {
    id: "3",
    name: "Mike Reynolds",
    email: "mike.reynolds@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/smiley-man-sitting-front-view_23-2149915883.jpg",
    subject: "Need invoice",
    message: "Can you send me an invoice for my last payment?",
    status: "resolved",
    date: "Sep 16, 2025",
  },
  {
    id: "4",
    name: "Emily Scott",
    email: "emilyscott@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915909.jpg",
    subject: "Account access issue",
    message: "I can’t access my account since yesterday. Please reset access.",
    status: "open",
    date: "Sep 15, 2025",
  },
  {
    id: "5",
    name: "Liam Brooks",
    email: "liambrooks@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/young-man-portrait-isolated_23-2149152502.jpg",
    subject: "Refund request",
    message: "I want to cancel and get a refund for this month.",
    status: "open",
    date: "Sep 14, 2025",
  },
  {
    id: "6",
    name: "Olivia Turner",
    email: "oliviaturner@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man_171337-1184.jpg",
    subject: "Profile update",
    message: "My profile image isn't updating after upload. Can you help?",
    status: "resolved",
    date: "Sep 13, 2025",
  },
  {
    id: "7",
    name: "Noah Bennett",
    email: "noahbennett@gmail.com",
    avatar:
      "https://img.freepik.com/free-photo/headshot-pleased-young-man_23-2148208948.jpg",
    subject: "Billing address change",
    message: "I need to update my billing address on file.",
    status: "open",
    date: "Sep 12, 2025",
  },
  {
    id: "8",
    name: "Ava Coleman",
    email: "avacoleman@gmail.com",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/023/402/465/non_2x/man-avatar-free-vector.jpg",
    subject: "App crashes",
    message: "The app crashes when I open the earnings page.",
    status: "open",
    date: "Sep 11, 2025",
  },
];

const statusBadgeClasses: Record<SupportStatus, string> = {
  open: "bg-amber-500 text-white border-transparent",
  resolved: "bg-emerald-500 text-white border-transparent",
};

const getMessageSummary = (message: string, maxLength = 70) => {
  if (message.length <= maxLength) return message;
  return `${message.slice(0, maxLength).trim()}...`;
};

const SupportMessagesContainer = () => {
  const [rows, setRows] = useState<SupportRow[]>(initialRows);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState<SupportRow | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const itemsPerPage = 6;

  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesStatus = row.status === "open";
      const matchesQuery =
        !query ||
        row.name.toLowerCase().includes(query) ||
        row.email.toLowerCase().includes(query) ||
        row.subject.toLowerCase().includes(query);

      return matchesStatus && matchesQuery;
    });
  }, [rows, search]);

  const paginatedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredRows.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredRows]);

  return (
    <section className="space-y-6">
      <PageTitle
        title="Support Messages"
        subTitle="Review and respond to user support requests from one place"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-[280px]">
          <Search className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          <Input
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, email, subject"
            className="h-11 border-border bg-card pl-9"
          />
        </div>
      </div>

      <div className="border-border/40 divide-border/40 divide-y rounded-lg border">
        {paginatedRows.map((row) => (
          <div
            key={row.id}
            className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5"
          >
            <div className="flex min-w-0 items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={row.avatar} alt={row.name} />
                <AvatarFallback>
                  {row.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 space-y-1">
                <p className="truncate text-sm font-medium text-foreground sm:text-base">
                  {row.name}
                </p>
                <p className="truncate text-xs text-muted-foreground sm:text-sm">
                  {row.email}
                </p>
                <p className="truncate text-sm font-medium text-foreground">
                  {row.subject}
                </p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {getMessageSummary(row.message)}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap sm:justify-end sm:gap-4">
              <Badge
                className={cn(
                  "rounded-md px-2 py-0.5 text-[11px] font-medium capitalize sm:text-xs",
                  statusBadgeClasses[row.status],
                )}
              >
                {row.status}
              </Badge>
              <span className="text-xs text-muted-foreground">{row.date}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRow(row);
                    setDetailsOpen(true);
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:text-foreground"
                  aria-label="View message details"
                >
                  <Info className="h-4 w-4" />
                </button>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    row.email,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:text-foreground"
                  aria-label={`Reply to ${row.email}`}
                >
                  <Reply className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() =>
                    setRows((prev) =>
                      prev.map((item) =>
                        item.id === row.id
                          ? { ...item, status: "resolved" }
                          : item,
                      ),
                    )
                  }
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:text-foreground"
                  aria-label="Mark as resolved"
                >
                  <CheckCircle2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {!filteredRows.length && (
          <div className="px-4 py-58 text-center text-sm text-muted-foreground">
            No support messages found.
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

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/35 backdrop-blur-[1px]" />
        <DialogContent className="max-w-[560px] rounded-2xl border border-border bg-card p-6">
          {selectedRow && (
            <DialogHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={selectedRow.avatar}
                    alt={selectedRow.name}
                  />
                  <AvatarFallback>
                    {selectedRow.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <DialogTitle className="truncate text-lg font-semibold text-foreground">
                    {selectedRow.name}
                  </DialogTitle>
                  <DialogDescription className="truncate text-sm text-muted-foreground">
                    {selectedRow.email}
                  </DialogDescription>
                </div>
              </div>

              <div className="grid gap-3 rounded-lg border border-border/70 bg-muted/20 p-4 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Status</span>
                  <Badge
                    className={cn(
                      "rounded-md px-2 py-0.5 text-[11px] font-medium capitalize sm:text-xs",
                      statusBadgeClasses[selectedRow.status],
                    )}
                  >
                    {selectedRow.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Date</span>
                  <span className="text-foreground">{selectedRow.date}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Subject</span>
                  <span className="text-foreground">{selectedRow.subject}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">
                  Full Message
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {selectedRow.message}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    selectedRow.email,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                >
                  <Mail className="h-4 w-4" />
                  Reply via Gmail
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setRows((prev) =>
                      prev.map((item) =>
                        item.id === selectedRow.id
                          ? { ...item, status: "resolved" }
                          : item,
                      ),
                    );
                    setDetailsOpen(false);
                  }}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Mark as resolved
                </button>
              </div>
            </DialogHeader>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SupportMessagesContainer;
