"use client";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import EventForm from "./events/eventForm";

interface Props {
  handlePortfolioWorkModal: () => void;
}

const EventMultiForm = ({ handlePortfolioWorkModal }: Props) => {
  const eventCategory = [
    {
      id: 1,
      category: "Comedy",
      imgSrc: "/icons/comedy.svg",
    },
    {
      id: 2,
      category: "Exhibition",
      imgSrc: "/icons/exhibition.svg",
    },
    {
      id: 3,
      category: "Concert",
      imgSrc: "/icons/concert.svg",
    },
    {
      id: 4,
      category: "Expo",
      imgSrc: "/icons/expo.svg",
    },
    {
      id: 5,
      category: "Sports",
      imgSrc: "/icons/sports.svg",
    },
    {
      id: 6,
      category: "Shows",
      imgSrc: "/icons/show.svg",
    },
    {
      id: 7,
      category: "Comedy",
      imgSrc: "/icons/comedy.svg",
    },
    {
      id: 8,
      category: "Exhibition",
      imgSrc: "/icons/exhibition.svg",
    },
    {
      id: 9,
      category: "Concert",
      imgSrc: "/icons/concert.svg",
    },
    {
      id: 10,
      category: "Expo",
      imgSrc: "/icons/expo.svg",
    },
    {
      id: 11,
      category: "Sports",
      imgSrc: "/icons/sports.svg",
    },
    {
      id: 12,
      category: "Shows",
      imgSrc: "/icons/show.svg",
    },
  ];
  const handleModel = () => {
    handlePortfolioWorkModal();
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] fixed inset-0 flex justify-center align-center backdrop-filter bg-gray-800 opacity-95 z-10">
        <div className="w-[45%] min-w-[300px] max-w-[550px] h-auto   border-box fixed top-[17%] bg-white opacity-150 p-3 md:p-5 xl:p-10 lg:p-8  rounded-xl">
          <div className="relative flex flex-col pb-1 border-b border-gray-300 gap-2">
            <div className="w-full flex flex-row justify-end">
              <button onClick={handleModel} className="text-3xl cursor-pointer">
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </div>
            <h2 className="text-xl text-left font-bold font-sans">
              Add your Event
            </h2>
          </div>
          <div className="">
            <EventForm handleModal={handleModel} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventMultiForm;
