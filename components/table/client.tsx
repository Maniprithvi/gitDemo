"use client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { organiserColumns, OragniserColumn ,BookingDataColumn,bookingDataColumn} from "./column";

interface OrganiserClientProps {
  data: OragniserColumn[];
}



export const OrganiserClient: React.FC<OrganiserClientProps> = ({ data }) => {

  return (
    <>
      <div className="">
        <div className="w-full flex items-center justify-between ">
          {/* <Heading
          title={`categories (${data.length})`}
          description="Manage categories for your store"
        /> */}
          {/* <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button> */}
        </div>
        <Separator />
        <DataTable searchKey="name" columns={organiserColumns} data={data} />
        {/* <Heading title="API" description="API calls for categories" /> */}
        {/* <Separator /> */}
      </div>
    </>
  );
};

interface EventTicketProps {
  data: BookingDataColumn[];
}
export const EventTicketTable: React.FC<EventTicketProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="">
        <div className="w-full flex items-center justify-between ">
       <h1>Tickets booked by</h1>
        </div>
        <Separator />
        <DataTable searchKey="name" columns={bookingDataColumn} data={data} />
      
      </div>
    </>
  );
};
