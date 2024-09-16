import { auth } from "@/auth";
import prisma from "@/prisma";

import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { eventId: string; organiserId: string } },
  type: any
) => {
  try {
    const organiserId = params.organiserId;
    const eventId = params.eventId;
    const data: any = req.body;

    const { user }: any = await auth();
    const id = user.user.id;

    if (!user) {
      return new NextResponse("un athendicated", { status: 400 });
    }

    const isOrganiser = await prisma.organiser.findUnique({
      where: {
        userId: id,
        id: organiserId,
      },
    });

    if (!isOrganiser) {
      return new NextResponse("un authorised", { status: 400 });
    }
    const updateEvent = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        ...data,
      },
    });

    return NextResponse.json(updateEvent, { status: 200 });
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(err.message, { status: 400 });
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { eventId: string } },
  type: any
) => {
  try {
    const { user }: any = await auth();
    const id = user.user.id;

    const eventId = params.eventId;
    const data = req.body;

    if (!user) {
      return new NextResponse("un authendicated", { status: 400 });
    }

    const isEvent = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
    });
    if (!isEvent) {
      return new NextResponse("Event not found", { status: 400 });
    }

    if (user) {
    //   const bookEvent = await prisma.bookedEvents.create({
    //     data: {
    //       userId: id,
    //       eventId: isEvent?.id,
    //       bookingDetails: " initial ",
    //     },
    //   });
    }
    return new NextResponse("booking successfully", { status: 200 });
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(err.message, { status: 400 });
  }
};
