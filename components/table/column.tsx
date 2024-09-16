"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellActionAdmin } from "./cell-action";

export type OragniserColumn = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  isVerified: boolean;
  createdAt: string;
};

export type EventColumn = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  createdAt: string;
};

export type BookingDataColumn = {
  id: string;
  amount: number;
  bookingStatus: boolean;
  name: string;
  noSlots: number;
  bookingId: string;
};

// table headers
export const organiserColumns: ColumnDef<OragniserColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "message",
    header: "Message",
  },

  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "to verify",
    id: "actions",
    cell: ({ row }) => <CellActionAdmin data={row.original} />,
  },
];

export const bookingDataColumn: ColumnDef<BookingDataColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "bookingStatus",
    header: "BookingStatus",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "noSlots",
    header: "noSlots",
  },
  {
    accessorKey: "bookingId",
    header: "bookingId",
  },
];
