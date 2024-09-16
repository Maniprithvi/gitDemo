import prisma from "@/prisma";
import React from "react";
import { format } from "date-fns";

import { OragniserColumn } from "@/components/table/column";
import { OrganiserClient } from "@/components/table/client";

const AdminPage = async () => {
  const oragniserdata = await prisma.organiser.findMany({
    select: {
      id: true,
      phoneNumber: true,
      message: true,
      user: true,
      isVerified: true,
      createdAt: true,
    },
  });

  const formattedData: OragniserColumn[] = oragniserdata.map((user) => ({
    id: user.id,
    name: user?.user?.name as string,
    email: user?.user?.email as string,
    message: user?.message as string,
    isVerified: user?.isVerified as boolean,
    phoneNumber: user?.phoneNumber as string,
    createdAt: format(user.createdAt, "MMMM do, yyyy"),
  }));
  console.log(oragniserdata, "organiserdata");
  console.log({ formattedData }, "formated");
  return (
    <div className="flex flex-col w-full mt-20 p-10">
      <div className="w-full p-5 h-[500px]"></div>
      AdminPage
      <OrganiserClient data={formattedData} />
    </div>
  );
};

export default AdminPage;
