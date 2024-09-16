"use server";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import toast from "react-hot-toast";
import prisma from "@/prisma";

import { string, z } from "zod";
import { revalidatePath } from "next/cache";
import { JSX, ReactNode } from "react";

export interface EventData {
  map(
    arg0: (item: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  eventName: string;
  category: string;
  date: string;
  time: string;
  desc: string;
  language: string;
  eventImage: string[];
  isFeatured: boolean;
  // organiserId: string;
}

interface Event {
  id: number;
  attributes: EventData;
}
const Url = process.env.BASE_URL;

//

const schema = z.object({
  eventName: z.string().min(3),
  desc: z.string(),
  eventImage: z.array(z.string()),
  language: z.string(),
  eventdate: z.date(),
  eventTime: z.number(),
  street1: z.string(),
  street2: z.string(),
  city: z.string(),
  state: z.string(),
  nation: z.string(),
  pincode: z.number().refine((val) => !isNaN(Number(val)), {
    message: "Invalid pincode",
  }),
  category: z.string(),
  time: z.date(),
  isActive: z.boolean(),
  isFeatured: z.boolean(),
  promoCode: z.string(),
});

export type InitialStateOfEvent = {
  eventName?: string[];
  desc?: string[];
  eventImage?: string[];
  language: string[];
  eventdate: Date[];
  eventTime: number[];
  street1?: string[];
  street2?: string[];
  city?: string[];
  state?: string[];
  nation?: string[];
  pincode?: number[];
  category: string[];
  projectName?: string[];
  image?: string[];
  form?: string[];
};
export async function addEvent(
  formState: InitialStateOfEvent,
  formData: FormData
): Promise<InitialStateOfEvent> {
  const data = schema.safeParse({
    eventName: formData.get("eventName"),
    desc: formData.get("desc"),
    eventImage: formData.get("eventImages"),
    language: formData.get("language"),
    street1: formData.get("street1"),
    street2: formData.get("street2"),
    city: formData.get("city"),
    state: formData.get("state"),
    nation: formData.get("nation"),
    pincode: formData.get("pincode"),
    category: formData.get("category"),
  });
  if (!data.success) {
    // return data.error.flatten().fieldErrors;
  }
  console.log(data);
  redirect("/organizers/1");
}

// class Event {
const createEvent = async (data: any) => {
  const { user }: any = await auth();
  console.log(user);
  const id: string = user?.id;
  console.log(id, "userId");
  let addressData = {
    street1: data.street1,
    street2: data.street2,
    city: data.city,
    state: data.state,
    nation: data.nation,
    pincode: data.pincode,
  };
  console.log(addressData);
  const organizer = await prisma.organiser.findUnique({
    where: {
      userId: id,
    },
  });
  const organizerId = organizer?.id || "";
  const evedata: EventData = {
    // organiserId: organizerId,
    eventName: data.eventName as string,
    desc: data.desc as string,
    eventImage: data.eventImages as Array<string>,
    language: data.language as string,
    date: data.date as string,
    time: data.time as string,
    category: data.category,
    isFeatured: data.isFeatured as boolean,
    map: function (arg0: (item: any) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    },
  };

  if (!organizerId) {
    throw new Error("un authorised")
    // toast.error("un authorised,please request the Admin to contect the events..");
  }

  const res = await prisma.event.create({
    data: {
      organiserId: organizerId,
      ...evedata,
    },
  });

  const address = await prisma.address.create({
    data: {
      ...addressData,
      eventid: res.id,
    }
  });
console.log({address})
  // toast.success("Event created Successfully");
  redirect("/dashboard");
  return res;
};
const getEvents = async () => {
  const res = await prisma.event.findMany({});
  return res;
};

const getEvent = async (id: string) => {
  const res = await prisma.event.findMany({
    where: {
      id,
    },
  });
  return res;
};

const getFeaturedEvents = async () => {
  const res = await prisma.event.findMany({
    where: {
      isFeatured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res;
};

const getActiveEvents = async () => {
  const res = await prisma.event.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res;
};

const saveToggleEvent = async (eventId: string) => {
  const { user }: any = await auth();
  const id = user.user.id;

  const isLiked = await prisma.savedEvents.findUnique({
    where: {
      userId: id,
      eventId: eventId,
    },
  });
  if (!isLiked) {
    const likeEvent = await prisma.savedEvents.create({
      data: {
        userId: id,
        eventId: eventId,
      },
    });
    return "event saved to Your list ...";
  } else {
    const likeEvent = await prisma.savedEvents.delete({
      where: {
        userId: id,
        eventId: eventId,
      },
    });
    return "event unsaved ...";
  }
};

const getTicket = async ({ params }: any) => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: "",
      eventId: "",
    },
  });
  return ticket;
};
export {
  createEvent,
  getActiveEvents,
  getEvent,
  getEvents,
  getFeaturedEvents,
  getTicket,
};

export async function fetchEvent(id: string) {
  const res = await fetch(
    `https://apiv4.maasta.in/api/events/${id}?populate=*`,
    { method: "GET" }
  );

  const eventData: Event = await res.json();

  return eventData;
}


export async function addTickets(
  formData: FormData
) {
  

  console.log(formData, "data");
  if (!data.success) {
 throw new Error("")
  } else {
    const res=''
//     const ticketData = {
//       class: data.data.class,
//       spec: data.data.specification,
//       price: parseInt(data.data.price),
//       totalSlot: parseInt(data.data.totalSlot),
//     };
//     // Placeholder for actual API call or processing logic
//     const res = await prisma.ticket.create({
//       data: {
//         eventId: " ",
//         ...ticketData,
//       },
//     });
// console.log(res)
    if (!res) {
      // return { ...formState, errors: { error: "Failed to submit data" } };
    }
    console.log(res, "res");
    return res;
  }
}
