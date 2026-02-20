"use client";
import AContainer from "@/components/AContainer";
import PageTitle from "@/components/others/PageTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EarningCard } from "./EarningCard";
import { Input } from "@/components/ui/input";
import { AFilterSelect } from "@/components/form/AFilterSelect";
import { useState } from "react";
import { earningTypeOptions } from "@/data/global.data";
import { APagination } from "@/components/ui/APagination";

const earnings = [
  {
    id: "1",
    name: "Skate Night NYC",
    date: "Oct 12, 2025",
    status: "Online",
    ticketPrice: "$50.00",
    totalSales: "$127.4k",
    totalEarnings: "$102.3k",
    imageUrl: "https://payload-marketing.moonpay.com/api/media/file/vibe.jpg",
  },
  {
    id: "2",
    name: "Neon Jungle Rave – Miami",
    date: "Nov 08, 2025",
    status: "Online",
    ticketPrice: "$85.00",
    totalSales: "$89.2k",
    totalEarnings: "$71.5k",
    imageUrl: "https://payload-marketing.moonpay.com/api/media/file/vibe.jpg",
  },
  {
    id: "3",
    name: "Sunset Rooftop Yoga",
    date: "Sep 28, 2025",
    status: "Online",
    ticketPrice: "$35.00",
    totalSales: "$12.8k",
    totalEarnings: "$11.9k",
    imageUrl: "https://payload-marketing.moonpay.com/api/media/file/vibe.jpg",
  },
  {
    id: "4",
    name: "Tech Summit 2025",
    date: "Dec 05–07, 2025",
    status: "Online",
    ticketPrice: "$299.00",
    totalSales: "$412.3k",
    totalEarnings: "$338.9k",
    imageUrl: "https://payload-marketing.moonpay.com/api/media/file/vibe.jpg",
  },
  {
    id: "5",
    name: "Halloween Silent Disco",
    date: "Oct 31, 2025",
    status: "Online",
    ticketPrice: "$45.00",
    totalSales: "$68.7k",
    totalEarnings: "$57.2k",
    imageUrl: "https://payload-marketing.moonpay.com/api/media/file/vibe.jpg",
  },
  {
    id: "6",
    name: "Art & Wine Evening",
    date: "Nov 22, 2025",
    status: "Online",
    ticketPrice: "$65.00",
    totalSales: "$23.1k",
    totalEarnings: "$20.4k",
    imageUrl: "https://payload-marketing.moonpay.com/api/media/file/vibe.jpg",
  },
  {
    id: "7",
    name: "Crypto Night LA",
    date: "Jan 17, 2026",
    status: "Online",
    ticketPrice: "$150.00",
    totalSales: "$198.5k",
    totalEarnings: "$162.8k",
    imageUrl: "https://payload-marketing.moonpay.com/api/media/file/vibe.jpg",
  },
];

const EarningContainer = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;
  const [earningType, setEarningType] = useState<string>("my");
  return (
    <AContainer>
      <PageTitle
        title="Earning management"
        subTitle="Review your earnings from events and also track your commissions from the e-commerce product sales."
      />
      <div className="flex items-center gap-4 justify-end">
        <Input
          name="search"
          placeholder="Search by product ..."
          className="w-[250px] h-11"
        />
        <AFilterSelect
          onChange={setEarningType}
          placeholder={"user type"}
          value={earningType}
          options={earningTypeOptions}
          className="w-[100px]!"
        />
      </div>

      <div className="rounded-lg border border-border overflow-hidden mt-6">
        <Table>
          <TableHeader>
            <TableRow className="h-16 border-b border-border/70 bg-card hover:bg-card">
              <TableHead className="py-6 pl-6 pr-8 text-foreground font-semibold text-base">
                Event name
              </TableHead>
              <TableHead className="py-6 px-8 text-foreground font-semibold text-base">
                Ticket Cost
              </TableHead>
              <TableHead className="py-6 px-8 text-foreground font-semibold text-base">
                Total Sales
              </TableHead>
              <TableHead className="py-6 pr-6 text-right text-foreground font-semibold text-base">
                Total Earnings
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {earnings.map((event) => (
              <TableRow
                key={event.id}
                className="border-b border-border/50 h-20 hover:bg-transparent"
              >
                <TableCell className="py-6 pl-6 pr-8 font-medium">
                  <EarningCard
                    imageUrl={event.imageUrl}
                    name={event.name}
                    date={event.date}
                    status={event.status}
                  />
                </TableCell>

                <TableCell className="py-6 px-8 font-medium text-foreground/90">
                  {event.ticketPrice}
                </TableCell>

                <TableCell className="py-6 px-8 font-medium text-foreground/90">
                  {event.totalSales}
                </TableCell>

                <TableCell className="py-6 pr-6 text-right font-semibold">
                  {event.totalEarnings}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
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

export default EarningContainer;
