import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  console.log("im hiided by post man...");
  return new NextResponse("haii da");
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { eventId: string } }
) => {
  console.log("hai");
  const eventId = params.eventId;
  const body = await req.json();
  console.log(body, "body");
  if (!eventId) {
    return new NextResponse("create event ", { status: 400 });
  }
  const isEvent = await prisma.event.findUnique({
    where: {
      id: params.eventId,
    },
  });
  if (!isEvent) {
    throw new NextResponse("eventNot found");
  }
  const addTicket = await prisma.ticket.create({
    data: {
     eventId,
     ...body
    },
  });
  console.log(addTicket);
  const updateEvent = await prisma.event.update({
    where: {
      id: params.eventId,
    },
    data: {
      tickets: {
        connect: {
          id: addTicket?.id,
        },
      },
    },
  });
  console.log({updateEvent})
  return new NextResponse("event ticket created successfully");
};
