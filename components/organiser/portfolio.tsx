"use client"
import React, { useState } from "react";
import Image from "next/image";
import PortfolioAddWorkModal from "./PortfolioWorkModal";

const Portfolio = () => {
  const [isAddWorkModalVisible, setAddWorkModalVisible] = useState(false);
  const handlePortfolioWorkModal = () => {
    setAddWorkModalVisible(!isAddWorkModalVisible);
  };
  return (
    <>
      <div>
        <p className="font-bold text-xl text-violet-800">Portfolio</p>
        <div className="flex gap-5 flex-wrap mt-2">
          {[1, 2, 3].map((item) => {
            return (
              <>
                <div className="w-[100px] h-[100px] bg-gray-400 rounded-lg"></div>
              </>
            );
          })}
          <div
            onClick={handlePortfolioWorkModal}
            className="w-[100px] h-[100px] flex flex-col justify-center items-center border-2 border-[#FF5C00] border-solid bg-[#FFB084] bg-opacity-10 gap-4 rounded-lg text-center text-[#FF5C00] text-[20px] p-2 cursor-pointer"
          >
            <Image
              src="/icons/add-circle-svgrepo-com.svg"
              alt="Add Icon"
              width={28}
              height={28}
            />
            <span>Add</span>
          </div>
        </div>
      </div>
      {isAddWorkModalVisible && (
        <PortfolioAddWorkModal
          handlePortfolioWorkModal={handlePortfolioWorkModal}
        />
      )}
    </>
  );
};

export default Portfolio;
