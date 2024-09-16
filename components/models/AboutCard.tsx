import React from "react";
import Image from "next/image";

interface IAboutProp {
  color: string;
  title: string;
  desc: string;
  img: string;
}

const AboutCard: React.FC<IAboutProp> = ({ color, title, desc, img }) => {
  return (
    <>
      <div
        className="w-[90%] sm:w-[70%] md:w-[47%] min-w-[300px] max-w-[370px] 2xl:max-w-[450px] aspect-[10/8.5] rounded-lg flex flex-col overflow-hidden p-1"
        style={{ backgroundColor: `${color}` }}
      >
        <div className=" w-full h-[70%] min-w-[300px] min-h-[110px] sm:h-[150px] md:h-[50%] flex justify-center items-center ">
          <div className="h-[80%] aspect-square rounded-full bg-gradient-to-b from-white to-transparent p-8 sm:p-8 md:p-6 xl:p-7 z-5">
            <Image
              src={img}
              className="w-full h-full z-1 hover:scale-110 transition ease-in delay-150"
              alt="talentPic"
              width={86}
              height={86}
            />
          </div>
        </div>
        <div className=" w-full flex flex-col h-[60%] md:h-[50%] text-center gap-1 px-3 py-1 md:py-2 sm:p-6">
          <h3 className="text-[1.2rem] font-semibold md:text-lg 2xl:text-xl">
            {title}
          </h3>
          <p className="text-[11px] font-normal sm:text-[12px] md:text-[12px] xl:text-[13px] 2xl:text-[13px] text-center md:tracking-normal mx-auto tracking-tight line-clamp-5">
            {desc}
          </p>
          {/* <Small className='line-clamp-5'>{desc}</Small> */}
        </div>
      </div>
    </>
  );
};

export default AboutCard;