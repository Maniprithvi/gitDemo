import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "@/public/images/profile.png";
import homepage from "@/public/images/home.png";
import Image from "next/image";
import React from "react";

interface Cardprops {
  img: string;
  location: string;
  about: string;
  profile: string;
  name: string;
}

// const UserCard = ({ img, location, about,profile,name }: Cardprops) => {

const UserCard = () => {
  return (
    <>
      <div className="h-[350px] w-full">
        <Image
          src={homepage}
          className="object-cover h-full w-full rounded-lg"
          alt="image"
        ></Image>
      </div>
      <div className="rounded-lg border border-gray-300 box-border flex flex-col sm:flex-row md:flex-row absolute bottom-[-200px] sm:bottom-[-120px]  md:w-[80%] lg:w-[60%]  sm:h-[220px] items-center w-full bg-white gap-y-2  sm:gap-x-3">
        <div className="box-border sm:border-r border-gray-300 flex flex-col px-7 py-2 items-center gap-y-2">
          <div className="w-[100px] h-[100px] md:h-[150px] md:w-[150px] ">
            <Image
              src={profile}
              className="rounded-[50%] h-full w-full object-cover"
              alt=""
            ></Image>
          </div>
          <div className="flex flex-col md:flex-row md:text-lg text-gray-700 items-center gap-x-1">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>banglore</p>
          </div>
        </div>
        <div className="box-border border-t border-gray-200 sm:border-0 flex flex-col gap-y-2 p-2 sm:px-3 justify-center">
          <div>
            <p className="text-violet-500  md:text-xl font-bold">
              Jayachandran K
            </p>
            <p className="text-orange-400">Designer</p>
          </div>
          <div>
            <p>
              Versatile actor with authentic performances, a magnetic screen
              presence, and a dedication to pushing creative boundaries for a
              lasting impact in entertainment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
