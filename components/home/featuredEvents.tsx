import dynamic from "next/dynamic";
const EventCard = dynamic(() => import("@/components/models/eventCard"));

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

interface EventData {
  event_name: string;
  type_of_event: string;
  event_categories: string;
  start_date: string;
  end_date: string;
  mode: string;
  price_worth: number;
  uploads: boolean;
  event_id: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured: boolean;
}

type Event = {
  id: number;
  attributes: EventData;
};

const FeaturedEvents = (eventData: { eventData: any }) => {
  
  const data = eventData.eventData.data as Event[];
  return (
    <>
      <div className="w-full flex flex-col gap-6 justify-center relative">
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-[26px] font-bold text-center text-[#910AD0] xl:text=[48px] lg-text-[46px] md:text-[44px] sm:text-[38px]">
            Featured events
          </h2>
          <p className="text-[13px] font-medium text-center text-[#333333] xl:w-[520px] xl:text-[20px] lg-text-[20px] lg-w-[520px] mx-auto md:w-[468px] md:text-[18px] sm:w-[362px] sm:text-[16px]">
            Unlock your potential and let your talent shine with us. Embrace
            your journey of self-discovery
          </p>
        </div>
        <div className="w-full h-auto flex">
          <Carousel className="w-[95%] md:w-[87%] mx-auto">
            <CarouselContent className="flex gap-3">
              {data.map((event: Event, index) => (
                <CarouselItem key={index} className={`gap-3 basis-1/ `}>
                  <div className="w-full flex justify-center">
                    <EventCard event={event} width={270} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" hidden md:flex top-1/2 bg-[#910AD0] text-[#FFFFFF] transform -translate-y-1/2" />
            <CarouselNext className=" hidden md:flex top-1/2 bg-[#910AD0] text-[#FFFFFF] transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FeaturedEvents;
