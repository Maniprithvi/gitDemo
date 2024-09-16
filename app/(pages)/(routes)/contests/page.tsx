
import dynamic from "next/dynamic";

const ScrollArea = dynamic(() =>
  import("@/components/ui/scroll-area").then((s) => s.ScrollArea)
);
const NewsLetter = dynamic(() => import("@/components/models/NewsLetter"));
const Heading = dynamic(() =>
  import("@/components/models/texts").then((mod) => mod.Heading)
);
const Filters = dynamic(() => import("./components/Filter"));
const EventList = dynamic(() => import("./components/EventList"));
const EventNav = dynamic(() => import("./components/EventNav"));
const MobileDrawer = dynamic(() => import("@/components/models/MobileDrawer"));

import { getEvents } from "@/app/actions/events";
const Page = async () => {
  const eventData = await getEventData();

  const data = eventData.data;

  const events = await getEvents();
  console.log(events)

  return (
    <>
      <div className="  w-full mx-auto mt-24  xl:py-2 md:px-10 flex flex-col justify-center  overflow-hidden ">
        {/* <div className=' flex flex-col md:flex-row gap-3 relative  xxl:w-[90%]  lg:p-7'> */}
        <div className="w-full grid grid-cols-5 gap-5">
          <div
            className="col-span-1 hidden md:block  min-w-[140px] border-r-2 pr-4 "
            style={{ borderWidth: "80%" }}
          >
            <Heading className="">Filter</Heading>
            <div className="w-full flex flex-col gap-2 md:gap-5  ">
              <Filters />
            </div>
          </div>

          <ScrollArea className="md:col-span-4 col-span-5  h-[100vh] w-full rounded-md ">
            <div className="pl-2 w-full flex flex-col gap-2 lg:gap-6 md:gap-4  ">
              <div className="w-full flex flex-col p-5 md:p-0 ">
                {/* <h3 className='font-bold md:text-2xl text-xl py-5'>Events</h3> */}
                <Heading className="">Events</Heading>
                <EventNav />
              </div>
              <EventList eventData={data} />
            </div>
          </ScrollArea>
        </div>
        <div className="md:hidden w-full  col-span-5 z-10 ">
          {/* <MobileDrawer /> */}
        </div>
        <NewsLetter />
      </div>
    </>
  );
};

export const getEventData = async () => {
  const res = await fetch("https://apiv4.maasta.in/api/events?populate=*", {
    method: "GET",
  });
  const eventData: any = await res.json();
  return eventData;
};
export default Page;
