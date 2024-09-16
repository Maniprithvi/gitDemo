
"use client"

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import dynamic from "next/dynamic";
const FeaturedCard = dynamic(() => import("../models/FeaturedCard"));

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface HowItWorksProps {}
interface HowItWorksProps {}

const HowItWorks: React.FC<HowItWorksProps> = () => {
  const workimgCardData = [
    {
      img: "/images/Being Creative_1.svg",
      content: "Select from our exciting lineup of events and experiences",
    },
    {
      img: "/images/strategy-6.svg",
      content: "Reserve your spot by booking a ticket or registering",
    },
    {
      img: "/images/treasure-chest-1.svg",
      content:
        "Show up on the event day, immerse yourself in the experience, and create lasting memories",
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full flex flex-col gap-10 justify-center  pt-[10%]">
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-[26px] font-bold text-center text-[#910AD0] xl:text-[48px] lg-text-[46px] md:text-[44px] sm:text-[38px]">
          How it Works
        </h2>
        <p className="text-[13px] font-medium text-center text-[#333333] xl:w-[520px] xl:text-[20px] lg-text-[20px] lg-w-[520px] mx-auto md:w-[468px] md:text-[18px] sm:w-[362px] sm:text-[16px]">
          Pick your event, book your spot, and let the fun begin. It&apos;s that
          easy to make memories with us!
        </p>
      </div>
      <div className="p-3 md:w-full lg:w-[65%] mx-auto  justify-center md:flex xl:gap-5 2xl:gap-10 hidden gap-4">
        {workimgCardData.map((item) => (
          <FeaturedCard
            key={item.content}
            img={item.img}
            content={item.content}
          />
        ))}
      </div>
      <div className="w-full mx-auto block md:hidden ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-md p-0  mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="p-0 mx-auto">
            {workimgCardData.map((item, i) => (
              <CarouselItem key={i} className="p-0 flex justify-center">
                <FeaturedCard img={item.img} content={item.content} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HowItWorks;
