import OG from "@/components/OG";
import { OutlineButton } from "@/components/models/EventButton";
import DashBoardCard from "@/components/models/dashBoardCard";
import dynamic from "next/dynamic";
import { Poller_One } from "next/font/google";

// const DashBoard = dynamic(() => import('@/components/dashBoard'));
const HowItWorks = dynamic(() => import("@/components/home/howItWorks"));
const UnleashTalents = dynamic(
  () => import("@/components/home/unleashTalents")
);
// const FeaturedEvents = dynamic(() => import('@/components/home/featuredEvents'));
const BecomeOrganizer = dynamic(
  () => import("@/components/home/becomeOrganizer")
);
const Magazines = dynamic(() => import("@/components/home/magazines"));
const UpcomingEvents = dynamic(
  () => import("@/components/home/upcomingEvents")
);
const NewsLetter = dynamic(() => import("@/components/models/NewsLetter"));

const poller_one = Poller_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Page = async () => {
  const data = await getEventData();
  const ogTitle = "Maasta Platform for Talents";
  const ogDescription =
    "Join the Maasta community of passionate individuals who believe in the power of creativity, talent, and collaborations.";
  const ogImage = "https://www.maasta.in/og-image.jpg"; // Update with your actual OG image URL
  const ogUrl = "/";

  return (
    <>
      {/* <OG
        title={ogTitle}
        description={ogDescription}
        image={ogImage}
        url={ogUrl}
      /> */}
      <div className="w-full flex flex-col justify-center gap-10 sm:gap-14 md:gap-14 lg:gap-16 xl:gap-30 bg-[url(/images/top-bg.png)] bg-no-repeat bg-[length:100%_13%] sm:bg-[length:100%_12%] md:bg-[length:100%_16%] xl:bg-[length:100%_18%] pt-[25%] sm:pt-[14%] md:pt-[11%] lg:pt-[9%] xl:pt-[7%]">
        <div className="flex flex-col gap-3 xl:gap-4 md:gap-4 sm:gap-4">
          <p
            className={`${poller_one.className} text-[28px] leading-normal xl:text-[46px] lg:text-[44px] md:text-[36px] sm:text-[36px] xs:text-[32px] xxs:text-[28px] md:leading-normal xs:leading-tight text-[#FFFFFF] text-center font-bold`}
          >
            Maasta platform for talents
          </p>

          <p className="text-[14px] w-[75%] min-w-[270px] xl:w-[530px] xl:text-[18px] lg:w-[518px] lg:text-[18px] md:w-[458px] md:text-[16px] sm:w-[406px] sm:text-[13px] text-sm text-[#FFFFFF] text-wrap font-Poppins font-medium text-center leading-normal mx-auto">
            We&apos;re a community of passionate individuals who believe in the
            power of creativity, talent, and collaborations
          </p>

          <OutlineButton className="min-w-[140px] text-[15px] w-auto h-auto rounded-[53px] font-Poppins text-center text-[#FF5C00] md:text-[18px] sm:text-[16px] font-bold xl:px-14 lg:px-14 md:px-14 sm:px-12 py-4 mx-auto mt-3 md:mt-2">
            Join a contest
          </OutlineButton>

          <DashBoardCard />
        </div>
        {/* REMAINING DASNOARD PAGES  */}
        <HowItWorks />
        <UnleashTalents />
        <UpcomingEvents eventData={data} />
        {/* <FeaturedEvents eventData={data} /> */}
        <BecomeOrganizer />
        <Magazines />
        <NewsLetter />
      </div>
    </>
  );
};
export const getEventData = async () => {
  const res = await fetch("https://apiv4.maasta.in/api/events?populate=*", {
    method: "GET",
  });
  const eventData: Event = await res.json();
  return eventData;
};

export default Page;
