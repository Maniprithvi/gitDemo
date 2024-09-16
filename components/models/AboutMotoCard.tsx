import React from "react";

interface IMOtoProps {
  title: string;
  desc: string;
}

const AboutMotoCard: React.FC<IMOtoProps> = ({ title, desc }) => {
  return (
    <>
      <div className="w-full aspect-[16/3] h-[50%] bg-transparent text-center p-4 flex flex-col md:flex-row justify-center items-center gap-x-8  ">
        <h1 className="w-full md:w-[30%] p-2 text-xl lg:text-3xl font-bold capitalize">
          {title}
        </h1>
        <p className="w-full md:w-[40%]  md:text-start  text-xs lg:text-sm">
          {desc}
        </p>
      </div>
    </>
  );
};

export default AboutMotoCard;
