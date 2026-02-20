"use client";

import { ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { APagination } from "@/components/ui/APagination";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface TableData {
  id: string;
  productName: string;
  price: number;
  totalSales: string;
  clicks: string;
  clicksVariant: "success" | "warning" | "default";
  totalSalesAmount: string;
}

interface ProductTableProps {
  data?: TableData[];
}

const defaultData: TableData[] = [
  {
    id: "1",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "10k+ Clicks",
    clicksVariant: "success",
    totalSalesAmount: "$50k",
  },
  {
    id: "2",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "2k+ Clicks",
    clicksVariant: "warning",
    totalSalesAmount: "$50k",
  },
  {
    id: "3",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "0k+ Clicks",
    clicksVariant: "default",
    totalSalesAmount: "$50k",
  },
  {
    id: "4",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "0k+ Clicks",
    clicksVariant: "default",
    totalSalesAmount: "$50k",
  },
  {
    id: "5",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "0k+ Clicks",
    clicksVariant: "default",
    totalSalesAmount: "$50k",
  },
  {
    id: "6",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "0k+ Clicks",
    clicksVariant: "default",
    totalSalesAmount: "$50k",
  },
];

export function ProductTable({ data = defaultData }: ProductTableProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;

  return (
    <div>
      <div className="flex items-center gap-4 justify-end">
        <Input
          name="search"
          placeholder="Search by product ..."
          className="w-[250px] h-11"
        />
      </div>
      <div className="w-full rounded-lg border border-border overflow-hidden mt-6">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground py-4 px-6 text-base font-semibold">
                Products name
              </TableHead>
              <TableHead className="text-muted-foreground py-4 px-6 text-base font-semibold">
                Price
              </TableHead>
              <TableHead className="text-muted-foreground py-4 px-6 text-base font-semibold">
                Total Sales
              </TableHead>
              <TableHead className="text-muted-foreground py-4 px-6 text-base font-semibold">
                Clicks
              </TableHead>
              <TableHead className="text-muted-foreground py-4 px-6 text-base font-semibold">
                Total Sales
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                className="border-b border-border/50 hover:bg-transparent" // remove hover effect
              >
                <TableCell className="font-medium text-foreground py-3 px-5">
                  {row.productName}
                </TableCell>
                <TableCell className="text-foreground py-3 px-5">
                  ${row.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-foreground py-3 px-5">
                  {row.totalSales}
                </TableCell>
                <TableCell className="py-3 px-5">
                  <ClicksBadge variant={row.clicksVariant} label={row.clicks} />
                </TableCell>
                <TableCell className="text-foreground py-3 px-5">
                  {row.totalSalesAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* pagination */}
      <APagination
        totalItems={100}
        itemsPerPage={limit}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

interface ClicksBadgeProps {
  variant: "success" | "warning" | "default";
  label: string;
}

function ClicksBadge({ variant, label }: ClicksBadgeProps) {
  const variantStyles = {
    success: "text-emerald-400 border-emerald-500/30",
    warning: "text-red-400 border-red-500/30",
    default: "text-muted-foreground border-border",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium ${variantStyles[variant]}`} // py-2 adds vertical padding
    >
      <span>{label}</span>
      <ChevronDown className="h-3 w-3" />
    </div>
  );
}
