import React from "react"
import Image from "next/image";
import {Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarDays, Circle, Trophy, Users } from "lucide-react";
import heartIcon from "@/public/icons/Group 50.png"
import eventImg from "@/public/images/Rectangle.png"


interface EventCardProps {
    Img: string;
    winningPrize: string;
    Cost: string;
    attendance: string;
    Date: string;
    Place: string;
    Description: string;
}

const Eventcard:React.FC<EventCardProps> = ({Img,winningPrize,Cost,attendance,Date,Place,Description}) => {
  return (
<>
   
   <Card  className="border-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-[84%] min-w-[320px] sm:w-[43%] lg:w-[32%]  xl:w-[23%] h-max rounded-2xl overflow-hidden flex flex-col gap-1 items-center pt-2 relative">
               <CardHeader color="blue-gray" className="p-0 w-[90%] md:w-[95%] aspect-square flex justify-center items-center">
                   <div className="w-full box-content relative flex flex-row z-10 rounded-lg">
                       <div className="flex justify-center absolute items-center p-2 bg-[#FFF] rounded-full top-4 left-4 gap-2 ">
                         <Trophy className="w-5 h-5  text-orange-400"fill="orange"/>
                           <p className="font-bold" style={{fontSize:"calc(12px + 0.2vw)"}}>{winningPrize}</p>
                       </div>
                       <div className="absolute w-[18%] p-1 aspect-square flex justify-center items-center bg-[#FFF] rounded-full shadow-md shadow-orange-200  -bottom-3 right-3"
                           >
                           <p className="font-semibold " style={{fontSize:"calc(12px + 0.2vw)"}}>₹ 50</p>
                       </div>
                       {/* <div className="bg-[#FFF] p-1 absolute top-2 right-3 rounded-full"> */}
                           <Image src={heartIcon} alt="card-image" className=" bg-white p-1 h-100 w-100 absolute top-4 right-4 rounded-full" />
                       {/* </div> */}
                       <Image src={eventImg} alt="card-image" width={100} height={100} className="w-full h-full p-0" />
                   </div>
               </CardHeader>
               <CardContent className="w-full flex flex-col p-0 gap-3 h-auto px-[5%] mt-5" >
                   <div className="flex justify-start  items-center gap-3  mt-1" style={{fontSize:"calc(12px + 0.5vw)"}}>
                       <div className="flex items-center gap-1">
                        <Circle className="h-2 w-2 md:w-3 md:h-3 border rounded-full border-green-200" fill="lightGreen"/>
                           <p className=" font-bold text-[#000] items-center"  style={{fontSize:"calc(10px + 0.2vw)"}}>Online</p>
                       </div>
                       <div className="flex items-center gap-1">
                          <Users className="h-2 w-2 md:h-3 md:w-3" />
                           <p className=" text-[#96999E] " style={{fontSize:"calc(10px + 0.2vw)"}} >{attendance}</p>
                       </div>
                       <div className="flex  gap-1 items-center">
                       <CalendarDays  className="h-5 w-5"/>
                           <p className=" text-[#96999E] "  style={{fontSize:"calc(10px + 0.2vw)"}}>{Date}</p>
                       </div>
                   </div>
                   <div className="text-start flex flex-col items-evenly gap-2 py-2 ">
                       <p className=" text-[#333333] font-semibold" style={{fontSize:"calc(18px + 0.2vw)"}}>{Place}</p>
                       <p className="w-full text-[#96999E] text-wrap leading-5" style={{fontSize:"calc(14px + 0.2vw)"}}>{Description}</p>
                   </div>
               </CardContent>
               <CardFooter className="w-[100%] p-0">
                   <Button className={"w-full text-[#FFF] text-md py-6 font-bold bg-gradient-to-l hover:bg-gradient-to-b from-orange-400 to-orange-600"}>
                       Join now
                   </Button>
               </CardFooter>
           </Card ></>
  )
}

export default Eventcard



// (<div className="flex flex-col gap-3 shadow-lg rounded-b-xl" style={{ width: props.width }}>
//       <div className="flex flex-col gap-3 p-3 h-full w-full">
//         {/* Image Section */}
//         <div className="relative w-full" style={{ minHeight: 250 }}>

//           <Image src={"/eventDummyImg.jpeg"} alt={"jpeg"} fill className="absolute rounded-2xl top-0 bottom-0 left-0 right-0 object-cover" />

//           <div className="flex flex-row justify-between absolute p-3 w-full">
//             <div className="flex flex-row items-center bg-[#FFF] rounded-3xl px-3 py-1 gap-2">
//               <Image src={"/icons/prize.svg"} className="relative" width={15} height={15} alt="Logo" />
//               <p className="text-sm text-[#000] font-bold">₹1000</p>
//             </div>
//             <div className="bg-[#FFF] p-2 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F12449" className="w-6 h-6">
//                 <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
//               </svg>
//               {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                 <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
//               </svg> */}

//             </div>
//           </div>

//           <div className="absolute -bottom-4 right-3 bg-[#FFF] rounded-full shadow-md shadow-orange-200">
//             <p className="text-md font-bold my-4 mx-4">₹50</p>
//           </div>
//         </div>
//         {/* Content Section */}
//         <div className="flex flex-row items-center gap-3 mt-3">
//           <div className="flex flex-row gap-1">
//             <Image src="/icons/online.svg" alt={"svg"} width={15} height={15} className="" />
//             <p className="text-sm text-[#000]">Online</p>
//           </div>
//           <div className="flex flex-row gap-1">
//             <Image src="/icons/participant.svg" alt={"svg"} width={15} height={15} className="" />
//             <p className="text-sm text-textColor-100">350</p>
//           </div>
//           <div className="flex flex-row gap-1">
//             <Image src="/icons/calendar.svg" alt={"svg"} width={15} height={15} className="" />
//             <p className="text-sm text-textColor-100">Aug 11 - Sep 30</p>
//           </div>
//         </div>
//         <div>
//           <p className="text-lg text-[#333333] font-bold">Talent Show - Tamil Nadu</p>
//           <p className="text-md text-[#333333]/62 font-light">showcase your talent and fly!</p>
//         </div>
//       </div>
//       <button className="bg-gradient rounded-b-xl text-[#FFF] p-4">
//         Join now
//       </button>
//     </div> 
// )

// its created for mobile for 2col layout

// import React from "react";
// import Image from "next/image";
// import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
// // import prizeIcon from "../../public/icons/"
// import heartIcon from "../../public/icons/Group 50.png"
// import onlineIcon from "../../public/icons/Ellipse 3.png"
// import peopleIcon from "../../public/icons/fluent_people-32-filled.svg"
// import calendarIcon from "../../public/icons/solar_calendar-bold.png"
// // import offlineIcon from "../../public/icons/offline_Icon."
// interface EventCardProps {
//     eventImg: string;
//     eventPrize: string;
//     eventCost: string;
//     online?: boolean;
//     offline?: boolean;
//     attendance: string;
//     eventDate: string;
//     eventPlace: string;
//     eventDescription: string;
// }
// const EventCard: React.FC<EventCardProps> = ({ eventImg, eventPrize, eventCost, online, offline, attendance, eventDate, eventPlace, eventDescription }) => {
//     return (
//         <Card className="aspect-video w-[21%] h-fit-content rounded-[27px]">
//             <CardHeader color="blue-gray" className="w-full box-content p-[12px] mb-6">
//                 <div className="relative w-[315px] flex flex-row w-fit-content">
//                     <div className="flex flex-row items-center absolute mt-4 ml-4 bg-[#FFF] rounded-3xl px-3 py-2 gap-2">
//                         {/* <Image src={prizeIcon} alt="Logo" className="relative" width={15} height={15} /> */}
//                         <p className="text-sm text-[#000] fontalt="Logo"-bold">{eventPrize}</p>
//                     </div>
//                     <div className="absolute bottom-[12px] right-[12px] mb-[-34px] ml-14 item-end bg-[#FFF] rounded-full shadow-md shadow-orange-200">
//                         <p className="text-md font-bold my-4 mx-4">{eventCost}</p>
//                     </div>
//                     <div className="absolute top-4 right-4 bg-[#FFF] p-3 rounded-full">
//                         <Image src={heartIcon} alt="card-image" />
//                     </div>
//                     <Image src={eventImg} alt="card-image" width={315} height={298} />
//                 </div>
//             </CardHeader>
//             <CardContent className="p-3 mt-0">
//                 <div className="flex flex-row items-center gap-3 mb-3">
//                     {online && (
//                         <div className="flex flex-row gap-1">
//                         <Image src={onlineIcon} alt={"svg"} width={15} height={15} />
//                         <p className="text-xs font-bold text-[#000] mt-[2px]">online</p>
//                     </div>
//                     )}
//                     {offline && (
//                         <div className="flex flex-row gap-1">
//                         {/* <Image src={offlineIcon} alt={"svg"} width={15} height={15} /> */}
//                         <p className="text-xs font-bold text-[#DD2E44] mt-[2px]">offline</p>
//                     </div>
//                     )}
//                     <div className="flex flex-row gap-1">
//                         <Image src={peopleIcon} alt={"svg"} width={15} height={15} />
//                         <p className="text-xs text-[#96999E] mt-[2px]">{attendance}</p>
//                     </div>
//                     <div className="flex flex-row gap-1">
//                         <Image src={calendarIcon} alt={"svg"} width={15} height={15} />
//                         <p className="text-xs text-[#96999E] mt-[2px]">{eventDate}</p>
//                     </div>
//                 </div>
//                 <div className="flex-column gap-6 pr-6">
//                     <p className="text-lg text-[#333333] font-bold">{eventPlace||"smoemdwkejlwksdcjsdc"}</p>
//                     <p className="w-[296px] text-md text-[#96999E] text-wrap">{eventDescription ||"ndnwocowcwo"} </p>
//                 </div>
//             </CardContent>
//             <CardFooter className="p-0">
//                 <button className={"w-full rounded-b-[27px] text-[#FFF] text-lg font-bold p-4 bg-gradient-to-l from-[#FF8725] to-[#FF5C00]"}>
//                     Join now
//                 </button>
//             </CardFooter>
//         </Card >
//     );
// };
// export default EventCard;