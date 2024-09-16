import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { eventId: string; ticketId: string } }
) => {
  const ticketId = params.ticketId;
  const eventId = params.eventId;

  const body = await req.json();

  const isEventTicket = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      tickets: true,
    },
  });
  console.log({ isEventTicket });
  // if (isEventTicket?.tickets.includes({id:ticketId as string})) {
  //     console.log('Ticket exists for the user');
  // };
  const updateTicket = await prisma.ticket.update({
    where: {
      eventId,
      id: ticketId,
    },
    data: {
      ...body,
    },
  });
  if (!updateTicket) {
    return new NextResponse("ticket not found");
  }
  console.log({ updateTicket });
  return new NextResponse("ticket updated successfully");
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { eventId: string; ticketId: string } }
) => {
  const ticketId = params.ticketId;
  const eventId = params.eventId;

  const updateTicket = await prisma.ticket.delete({
    where: {
      eventId,
      id: ticketId,
    },
  });
  return new NextResponse("ticket deleted..");
};
