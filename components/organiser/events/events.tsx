"use client";
import React, { useState } from "react";
import Image from "next/image";
import EventMultiForm from "./eventForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface events {
  events: any;
}

const Events = ({ events }: events) => {
  const session = useSession();
  const userId = session.data?.user?.id;
  const [isAddEvent, setAddEvent] = useState(false);
  const router = useRouter();
  const handleEvent = () => {
    console.log("im clicked by form");
    setAddEvent((prev) => !prev);
  };

  return (
    <>
      <p className="font-bold text-xl text-violet-800">Event</p>
      <div className="flex gap-5 flex-wrap">
        {events && events !== undefined ? (
          events.map((item: any) => {
            // console.log(item);
            return (
              <div
                className="w-[150px] h-[140px] bg-gray-400 rounded-lg"
                key={item.id}
                onClick={() => {
                  console.log(item.id);
                  router.push(`/${userId}/${item.id}`);
                }}
              >
                <Image
                  width={150}
                  height={150}
                  className="w-full h-full"
                  alt={item.eventName}
                  src={item.eventImage[0]}
                />
                <h3 className="text-center ">{item.eventName}</h3>
              </div>
            );
          })
        ) : (
          <div className="">you dont have a Event create It..</div>
        )}
        <div
          onClick={handleEvent}
          className="w-[140px] h-[140px] flex flex-col justify-center items-center bg-[#FFB084] bg-opacity-10 border-2 border-[#FF5C00] border-solid gap-4 rounded-lg text-center text-[#FF5C00] text-[20px] p-2 cursor-pointer"
        >
          <Image
            src="images/icons/add-circle-svgrepo-com.svg"
            alt="Add Icon"
            width={28}
            height={28}
          />
          <span>Add</span>
        </div>
      </div>
      {isAddEvent && (
        <>
          <div className="fixed inset-0  bg-gray-800 opacity-95"></div>
          <div className="border-box fixed inset-x-1/4 top-40 bg-white opacity-150 p-10 rounded-xl h-max flex flex-col">
            <div className="absolute top-5 right-5 " onClick={handleEvent}>
              <FontAwesomeIcon className="text-3xl" icon={faCircleXmark} />
            </div>
            <EventMultiForm handleModal={handleEvent}></EventMultiForm>
          </div>
        </>
      )}
    </>
  );
};

export default Events;
