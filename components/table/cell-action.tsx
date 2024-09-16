"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

import { OragniserColumn, BookingDataColumn } from "./column";
// import { AlertModel } from "@/components/models/alert-model";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Trash,
  Copy,
  Edit
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CellActionProps {
  data: OragniserColumn;
}
interface CellActionBookingDataProps {
  data: BookingDataColumn;
}

export const CellActionAdmin: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(data, "data from table");
  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.post(`/api/organiser/${data.id}`);
      toast.success("Organiser approved successfully");
      if (window) {
        window.location.reload();
      }
    } catch (err: any) {
      toast.error("error", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {data.isVerified == true ? (
        <Button className="bg-gray-700 ">Approved</Button>
      ) : (
        <Button className="bg-orange-500 " onClick={() => onConfirm()}>
          Approve
        </Button>
      )}
    </>
  );
};

export const CellActionEvents: React.FC<CellActionBookingDataProps> = ({
  data,
}) => {
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/categories/${data.id}`);
      toast.success("Categories deleted successfully");
      router.refresh();
    } catch (err) {
      toast.error(
        "Make sure you removed all Products using this Category first"
      );
    } finally {
      setLoading(false);
    }
  };

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Category Id Copied to the  clipBoard.");
  };

  return (
    <>
      {/* <AlertModel
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={onConfirm}
          loading={loading}
        /> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
            io
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/${params.userId}/`)}>
            <Edit className="mr-2 h-4 w-4" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
