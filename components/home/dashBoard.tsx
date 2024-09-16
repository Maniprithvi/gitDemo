import dynamic from "next/dynamic";

const DashBoardCard = dynamic(() => import("../models/dashBoardCard"));
import { Poller_One } from "next/font/google";

const poller_one = Poller_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const DashBoard = () => {
  return (
    <div
      className={
        "w-full flex flex-col justify-center bg-cover bg-no-repeat bg-center bg-[url(/images/top-bg.svg)] pb-[25%] py-10"
      }
    >
      <div className="flex flex-col gap-3 xl:gap-4 md:gap-4 sm:gap-4">
        <p
          className={`${poller_one.className} h-fit-content text-[28px] leading-normal xl:text-[46px] lg:text-[44px] md:text-[36px] sm:text-[36px] xs:text-[32px] xxs:text-[28px] md:leading-normal xs:leading-tight text-[#FFFFFF] text-center font-bold mt-4`}
        >
          Maasta platform for talents
        </p>

        <p className="text-[14px] w-[75%] min-w-[270px] xl:w-[530px] xl:text-[18px] lg:w-[518px] lg:text-[18px] md:w-[458px] md:text-[16px] sm:w-[406px] sm:text-[13px] xs:w-[270px] xs:text-[12px] xxs:w-[225px] xxs:text-[12px] text-sm text-[#FFFFFF] text-wrap font-Poppins font-medium text-center leading-normal xs:leading-normal mx-auto">
          We&apos;re a community of passionate individuals who believe in the
          power of creativity, talent, and collaborations
        </p>

        <button
          className={
            "min-w-[140px] text-[15px] w-auto h-auto rounded-[53px] bg-[#FFFFF] font-Poppins text-center text-[#FF5C00] md:text-[18px] bg-[#FFFFFF] sm:text-[16px] xs:text-[14px] xxs:text-[12px] font-bold xl:px-14 lg:px-14 md:px-14 sm:px-12 xs:px-8 xxs:px-10 py-4 mx-auto mt-3 md:mt-2"
          }
        >
          Join a contest
        </button>

        <DashBoardCard />
      </div>
    </div>
  );
};

export default DashBoard;
