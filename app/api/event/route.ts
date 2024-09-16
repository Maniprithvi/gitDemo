import { auth } from "@/auth";
import prisma from "@/prisma";
import { Address } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

const eve = {
  DANCE: "dance_compitition",
  SINGING: "singing_compitition",
  UNMISSABLE: "unmissable",
};

const obj = {
  FEATURED: "",
  ACTIVE: "",
};

export const POST = async (
  req: NextRequest
  // { params }: { params: { organiserId: string } }
) => {
  try {
    const user = await auth();
    console.log(user, "from post");
    console.log("haii");

    const data = await req.json();
    console.log(data);
    const isOrganiser = await prisma.organiser.findUnique({
      where: {
        userId: user?.user?.id,
      },
    });
    if (!isOrganiser) {
      return new NextResponse("un Authorised access", { status: 400 });
    }
    const eveData = {
      category: data.category,
      eventName: data.eventName,
      desc: data.desc,
      language: data.language,
      isFeatured: data.isFeatured,
      time: data.time,
      date: data.date,
      eventImage: data.eventImages,
    };

    const event = await prisma.event.create({
      data: {
        organiserId: isOrganiser.id,
        ...eveData,
      },
    });
    console.log(typeof event.id, "evnt");

    let addressData = {
      street1: data?.street1,
      street2: data?.street2,
      city: data?.city,
      state: data?.state,
      nation: data?.nation,
      pincode: data?.pincode,
    };

    let address = await prisma.address.create({
      data: {
        ...addressData,
      },
    });

    console.log({ address }, "address");

    const updateEvent = await prisma.event.update({
      where: {
        id: event.id,
      },
      data: {
        addressId: address.id,
      },
    });
    console.log({ updateEvent }, "updated");
    return new NextResponse("event created successFully");
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(err.message, { status: 500 });
  }
};
