import Table from "@/components/organiser/events/Table";
import { FilledButton, FilterButton } from "@/components/models/EventButton";
import heartIcon from "@/public/icons/Group 50.png";
import prizeIcon from "@/public/icons/price.png";
import { CalendarDays, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Tickets from "@/components/organiser/events/ticktes/tickets";
import prisma from "@/prisma";
import { Ticket } from "@prisma/client";

interface Props {
  params: {
    eventId: string;
  };
}
const page = async ({ params }: Props) => {
  const eventId = params.eventId;

  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      savedEvents: true,
      address: true
    },
  });
  console.log({ event });
  const images = event?.eventImage;
  let imageSrc;
  if (images) {
    imageSrc = images[images?.length - 1];
  }
  const ticktets: Ticket[] = await prisma.ticket.findMany({
    where: {
      eventId,
    },
  });
  console.log(Tickets, "ticket");
  return (
    <div className="w-full h-max flex flex-col mt-[100px]">
      {/* <h1 className="text-center">event booking list</h1> */}
      <div className="box-border relative grid grid-cols-1 xl:grid-cols-3 md:gap-x-4 gap-y-4 p-1 sm:p-3 md:px-10   w-full">
        <div className="xl:col-span-2 col-span-1 relative flex flex-col  h-auto w-full">
          <div className="relative ">
            {imageSrc && (
              <Image
                alt=""
                className="rounded-md object-cover w-full"
                src={imageSrc}
                width={500}
                height={500}
                priority
                style={{ height: "400px" }}
              />
            )}

            <div className="box-border absolute top-0 grid grid-cols-2 content-between p-3 md:p-10 w-full h-full">
              <div className="bg-white flex items-center md:gap-x-4 gap-x-2 h-full rounded-full p-2 w-max">
                <Image
                  className="inline h-4 w-4 md:w-6 md:h-6"
                  src={prizeIcon}
                  alt=""
                ></Image>
                <p className="inline">
                  {event?.category}
                  {/* ${event.data.attributes.Tickets.price_worth} */}
                </p>
              </div>
              <div className="flex w-full flex-row-reverse">
                <Image alt="" className="w-10 h-10" src={heartIcon}></Image>
              </div>
              <div className="w-full text-center text-yellow-700 col-span-2">
                <h1 className="text-3xl">{""}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col h-max w-full ">
          <div className="w-full flex flex-col h-full  mx-auto p-5 md:p-3 lg:p-4 border border-gray-200 rounded-lg gap-y-2  md:gap-y-3 lg:gap-y-4 ">
            <div className="box-border  flex justify-between md:py-2  py-1">
              <div>
                {" "}
                {new Date("") > new Date() ? "available" : "not available"}
              </div>
              <div>
                Entry fee{" "}
                <span className="text-orange-500 text-xl font-bold">
                  {/* @ {event.data.attributes.Tickets.price} */}
                  @150
                </span>
              </div>
            </div>
            <div className="">
              <div className="py-2 ">
                <h2 className="text-2xl font-sans font-bold">
                  {/* {event.data.attributes.event_name} */}
                </h2>
              </div>
              <div className="lg:font-sm">
                {/* {event.data.attributes.description} */}
                Get ready for the Kids' Dance Championship! Watch young talents
                light up the stage with their incredible moves. It's a dance
                extravaganza you won't want to miss!
              </div>
            </div>
            <div className="box-border flex flex-col gap-y-2 py-3 ">
              <p className="flex gap-3 items-center">
                <MapPin size={25} fillRule="inherit" />
                {/* {event.data.attributes.Address.city +
                   event.data.attributes.Address.state} */}
              </p>
              <p className="flex gap-3 items-center">
                <Users size={25} />
                attendees
              </p>
              <p className="flex gap-3 items-center">
                <CalendarDays size={25} />
                {event?.date}
              </p>
            </div>
            {/* <div className="w-full text-center p-1 md:p-2 lg:p-3 ">
              <FilledButton>Join Now</FilledButton>
            </div> */}
          </div>
        </div>
      </div>
      <div className="box-border relative grid grid-cols-1 md:grid-cols-3  gap-y-5 md:gap-x-5 p-3 md:px-10   w-full">
        <div className="col-span-2 relative flex flex-col gap-y-5 ">
          <div className="box-border w-full flex flex-col gap-y-4 p-4 rounded-xl border border-orange-500">
            <Tickets tickets={ticktets} />
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default page;
