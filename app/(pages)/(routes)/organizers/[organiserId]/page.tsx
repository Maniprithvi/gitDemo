"use client"

import Image from "next/image";
import {useRouter} from "next/navigation"
import React, { useState } from "react"
import homepage from "@/public/images/home.png"
import profile from "@/public/images/profile.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import  PortfolioAddWorkModal from "@/components/ui/PortfolioWorkModal"
// import  PortfolioAddWorkModal from "@/components/ui/multi"
const  HomePage = () => {

    const router = useRouter();
    const[isAddWorkModalVisible,setAddWorkModal]=useState(false)
    const handlePortfolioWorkModal=()=>{
        setAddWorkModal(!isAddWorkModalVisible)
    }
  return (
    <>
      <div className="text-sm md:m-20">
        <div className="py-5">
          <button onClick={()=>router.push("/")}><FontAwesomeIcon icon={faLessThan} />  back to home page</button>
        </div>
        <>
          <div className="relative flex flex-col items-center">
            <div className="h-[350px] w-full">
              <Image
                src={homepage}
                className="object-cover h-full w-full rounded-lg"
                alt="image"
                loading='lazy'
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
                    Versatile actor with authentic performances, a magnetic
                    screen presence, and a dedication to pushing creative
                    boundaries for a lasting impact in entertainment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        <div className="box-border grid grid-cols-1 sm:grid-cols-3 w-full gap-x-5 p-2 mt-[230px] md:mt-40 gap-y-5">
          <div className="sm:col-span-3 border border-gray-300 rounded-md col-span-3 md:col-span-2  w-full flex flex-col  gap-y-4 p-3 ">
            <div onClick={handlePortfolioWorkModal}>
              <p className="font-bold text-xl text-violet-800">Portfolio</p>
              <div className="flex gap-5 flex-wrap mt-2">
                {[1, 2, 3].map((item) => {
                  return (
                    <>
                      <div className="w-[100px] h-[100px] bg-gray-400"></div>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="font-bold text-xl text-violet-800">Achievment</p>
              <div className="flex gap-5 mt-2 flex-wrap">
                {[1, 2, 3].map((item) => {
                  return (
                    <>
                      <div className="w-[100px] h-[100px] bg-gray-400"></div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1  rounded-md border border-gray-300    w-full flex flex-col  gap-y-10 py-4 px-3 ">
            <div className="w-full ">
              <p className="font-bold text-xl text-violet-800">
                Reached out me for
              </p>
              <div className="flex gap-2 flex-wrap mt-5">
                {[
                  "game Designing",
                  "3D animation",
                  "animation",
                  "art direction",
                  "designing",
                ].map((item) => {
                  return (
                    <>
                      <button className="border-2 rounded-md p-1 border-orange-400 font-sans">
                        {item}
                      </button>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="font-bold text-xl text-violet-800">skills</p>
              <div className="flex gap-2 flex-wrap mt-5">
                {["game designing", "unreal engine"].map((item) => {
                  return (
                    <>
                      <button className="border-2 border-orange-400  rounded-md font-sans  p-1 ">
                        {item}
                      </button>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between gap-x-4">
              <p className="font-bold text-xl text-violet-800">
                contact information
              </p>
              <button className="text-orange-400">edit</button>
            </div>
          </div>
        </div>
      </div>
      {isAddWorkModalVisible && <PortfolioAddWorkModal handlePortfolioWorkModal={handlePortfolioWorkModal}></PortfolioAddWorkModal>}
    </>
  );
}
export default  HomePage
