"use server"

import { auth } from "@/auth";
import prisma from "@/prisma";
import axios from "axios";

interface organiserForm {}

class Organiser {
  applyOrganiser = async ({ data }: { data: { data: organiserForm } }) => {
    const formdata = data;

    const { user }: any = await auth();
    const id = user.user.id;

    const applyOrganiser = await axios.post("");
  };

  createEvent = async (data: any) => {
    const eventData = data;
    const { user }: any = await auth();
    console.log(user)
    const id = user?.user?.id;

    const isOrganiser = await prisma.organiser.findUnique({ where: { id } });
    if (!isOrganiser) {
      return "un authorised access";
    }
    const event = await prisma.event.create({
      data: {
        organiserId: id,
        ...eventData,
      },
    });
    return "Event created Successfully";
  };

  updatedEvent = async (data: any) => {
    const eventData = data;
    const { user }: any = await auth();
    const id = user.user.id;

    const isOrganiser = await prisma.organiser.findUnique({ where: { id } });
    if (!isOrganiser) {
      return "un authorised access";
    }
    const event = await prisma.event.create({
      data: {
        organiserId: id,
        ...eventData,
      },
    });
    return "Event updated Successfully";
  };

  getBookedUsers = async (eventId: string) => {
    const { user }: any = await auth();
    const id = user.user.id;
    const isOrganiser = await prisma.organiser.findUnique({ where: { id } });
    if (!isOrganiser) {
      return "un authorised access";
    }

    const bookingData = await prisma.bookedEvents.findMany({
      where: {
        eventId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return bookingData;
  };
  
  getSavedUsers = async (eventId: string) => {
    const { user }: any = await auth();
    const id = user.user.id;
    const isOrganiser = await prisma.organiser.findUnique({ where: { id } });
    if (!isOrganiser) {
      return "un authorised access";
    }

    const bookingData = await prisma.savedEvents.findMany({
      where: {
        eventId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return bookingData;
  };
}

export const organiser = new Organiser();
