"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { monthNames } from "@/lib/utils";

interface Props {
  id: string;
  width: number;
  eventImage: string;
  priceWorth: string;
  totalSlot: string;
  start_date: string;
  event_name: string;
  description: string;
  Address: string;
}

const EventCard = ({ event }: any) => {
  const router = useRouter();

  return (
    <div
      typeof="button"
      className="flex flex-col justify-center gap-1 sm:gap-1 md:gap-1 lg:gap-2 xl:gap-2 shadow-lg rounded-[20px] w-[210px] h-[326px] sm:w-[208px] sm:h-[345px] md:w-[240px] md:h-[380px] lg:w-[250px] lg:h-[410px] xl:w-[260px] xl:h-[420px] 2xl:w-[260px] 2xl:h-[420px] min-w-[210px] min-h-[326px] max-w-[270px] max-h-[420px] pt-0"
    >
      <div
        className="flex flex-col gap-1 p-2 h-full w-full"
        onClick={() => {
          router.push(`contests/${event.id}`);
        }}
      >
        {/* Image Section */}
        <div className="relative w-[190px] aspect-square xl:w-[240px] xl:h-[240px] lg:w-[230px] lg:h-[230px] md:w-[216px] md:h-[216px] sm:w-[184px] sm:h-[184px] m-auto">
          <Image
            src={event.attributes?.cover_image?.data[0]?.attributes?.url}
            alt={"jpeg"}
            fill
            className="absolute aspect-square rounded-2xl top-0 bottom-0 left-0 right-0 object-cover"
            // xl:w-[240px] xl:h-[240px] lg:w-[230px] lg:h-[230px] md:w-[96%] md:h-[96%] sm:w-[94%] sm:h-[94%]"
          />
          <div className="flex flex-row justify-between absolute p-3 w-full top-2 md:top-3">
            <div className="flex flex-row items-center bg-[#FFF] rounded-3xl px-3 py-1 gap-2">
              <Image
                src={"/icons/price.png"}
                className="relative w-[12px] h-[12px]"
                width={16}
                height={16}
                alt="Logo"
              />
              <p className="text-[10px] text-[#000] font-bold xl:text-[13px] xl:mt-0 lg:text-[13px] md:text-[12px] lg:mt-1 md:mt-1 mt-1">
                ₹{event.attributes.Tickets?.price_worth}
              </p>
            </div>
            <div className="bg-[#FFF] p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#F12449"
                className="w-4 h-4 xl:w-6 xl:h-6 lg:w-6 lg:h-6 sm:w-5 sm:h-5"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[-16px] w-11 h-11 xl:w-14 xl:h-14 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-11 sm:h-11 rounded-[50%] p-2 xl:p-3 lg:pl-3 xl:bottom-[-18px] lg:bottom-[-22px] md:bottom-[-9%] right-3 bg-[#FFF] shadow-md shadow-orange-200 aspect-square flex justify-center items-center">
            <p className="text-[9px] font-bold xl:text-[13px] lg:text-[11px] md:text-[10px] mt-1">
              ₹{event.attributes?.Tickets?.price}
            </p>
          </div>
        </div>
        {/* Content Section */}
        <div className="w-full flex flex-col gap-1 pt-4 sm:pt-4 md:pt-5 lg:pt-4 xl:pt-4 h-[79px] sm:h-[98px] md:h-[92px] lg:h-[86px] xl:h-[90px]">
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/icons/online.png"
                alt={"svg"}
                width={15}
                height={15}
                className=""
              />
              <p className="text-[#000] text-[7px] xl:text-xs lg:text-[10px] md:text-[10px]">
                {new Date(event) > new Date() ? "available" : "not available"}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/icons/attendies.svg"
                alt={"svg"}
                width={18}
                height={18}
                className=""
              />
              <p className="text-textColor-100 text-[7px] xl:text-xs lg:text-xs md:text-[10px]">
                {event.attributes?.Tickets?.total_slots}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/icons/calendar.png"
                alt={"svg"}
                width={18}
                height={18}
                className="h-[70%] aspect-square"
              />
              <p className="text-textColor-100 text-[7px] xl:text-xs lg:text-xs md:text-[10px]">
                {new Date(event.attributes.start_date).getDate()}{" "}
                {monthNames[new Date(event.attributes.start_date).getMonth()]}{" "}
                {new Date(event.attributes.end_date).getMonth()}{" "}
                {monthNames[new Date(event.attributes.end_date).getMonth()]}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center md:justify-start md:h-[50px] lg:[60px] xl:h-[60px] py-auto">
            <p className="text-[12px] h-auto xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[#333333] font-semibold">
              {event.attributes?.event_name} - {event.attributes?.Address?.city}
            </p>
            <p className="text-[10px] xl:text-md lg:text-md md:text-[11px] sm:text-[11px] text-[#333333]/62 font-light">
              {event.attributes.description}
            </p>
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-tr from-orange-600 to-orange-400 rounded-b-xl text-sm text-[#FFF] font-bold p-2 xl:p-4 lg:p-4 md:p-3 xl:text-lg lg:text-md">
        Join now
      </button>
    </div>
    //  style={{ width: props.width }}
    // <div
    //   typeof="button"
    //   className="flex flex-col gap-1 shadow-lg rounded-b-xl sm:w-[40%] md:w-[48%] lg:w-[29%] xl:w-[30%] 2xl:w-[23.5%] min-w-[220px] max-w-[270px] "
    // >
    //   <div
    //     className="flex flex-col gap-1  p-2 h-full w-full"
    //     onClick={() => {
    //       router.push(`contests/${event.id}`);
    //     }}
    //   >
    //     {/* Image Section */}
    //     <div
    //       className="relative w-full aspect-square"
    //       style={{ minHeight: 250 }}
    //     >
    //       <Image
    //         src={
    //           event.attributes.cover_image.data[0].attributes.url
    //         }
    //         alt={"jpeg"}
    //         fill
    //         className="absolute aspect-square rounded-2xl top-0 bottom-0 left-0 right-0 object-cover"
    //       />
    //       <div className="flex flex-row justify-between absolute p-3 w-full">
    //         <div className="flex flex-row items-center bg-[#FFF] rounded-3xl px-3 py-1 gap-2">
    //           <Image
    //             src={"/icons/price.png"}
    //             className="relative"
    //             width={15}
    //             height={15}
    //             alt="Logo"
    //           />
    //           <p className="text-sm text-[#000] font-bold">
    //             ₹{event?.attributes.price_worth}
    //           </p>
    //         </div>
    //         <div className="bg-[#FFF] p-2 rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="#F12449"
    //             className="w-6 h-6"
    //           >
    //             <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    //           </svg>
    //           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    //             <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    //           </svg> */}
    //         </div>
    //       </div>
    //       <div
    //         className="absolute -bottom-6 right-3 bg-[#FFF] shadow-md shadow-orange-200 p-4 aspect-square flex justify-center items-center"
    //         style={{ borderRadius: "50%" }}
    //       >
    //         <p className="text-md font-bold ">
    //           ₹{event.attributes.Tickets.price}
    //         </p>
    //       </div>
    //     </div>
    //     {/* Content Section */}
    //     <div className="flex flex-row items-center gap-3 mt-5">
    //       <div className="flex flex-row items-center gap-1">
    //         <Image
    //           src="/icons/online.png"
    //           alt={"svg"}
    //           width={15}
    //           height={15}
    //           className=""
    //         />
    //         <p className=" text-[#000] text-[12px] md:text-xs ">
    //           {new Date(event.attributes.start_date) > new Date()
    //             ? "available"
    //             : "not available"}
    //         </p>
    //       </div>
    //       <div className="flex flex-row items-center gap-1">
    //         <Image
    //           src="/icons/attendies.svg"
    //           alt={"svg"}
    //           width={20}
    //           height={20}
    //           className=""
    //         />
    //         <p className=" text-textColor-100 text-xs">
    //           {event.attributes.Tickets.total_slots}
    //         </p>
    //       </div>
    //       <div className="flex flex-row items-center gap-1">
    //         <Image
    //           src="/icons/calendar.png"
    //           alt={"svg"}
    //           width={20}
    //           height={20}
    //           className="h-[70%] aspect-square"
    //         />
    //         <p className=" text-textColor-100 text-xs">
    //           {new Date(event.attributes.start_date).getDate()}{" "}
    //           {monthNames[new Date(event.attributes.start_date).getMonth()]}{" "}
    //           {new Date(event.attributes.end_date).getMonth()}{" "}
    //           {monthNames[new Date(event.attributes.end_date).getMonth()]}
    //         </p>
    //       </div>
    //     </div>
    //     <div>
    //       <p className="text-lg  text-[#333333] font-semibold">
    //         {event.attributes.event_name} - {event.attributes.Address.state}
    //       </p>
    //       <p className="text-sm   text-[#333333]/62 font-light">
    //         {event.attributes.description}
    //       </p>
    //     </div>
    //   </div>
    //   <button className="bg-orange-500 rounded-b-xl text-[#FFF] p-3 lg:p-4">
    //     Join now
    //   </button>
    // </div>

    //   <div typeof="button" className="flex flex-col gap-1 shadow-lg rounded-xl w-[220px] sm:w-[245px] md:w-[230px] lg:w-[250px] xl:w-[260px]  ">
    //   <div className="flex flex-col gap-1 p-2 h-full w-full" onClick={() => {
    //     router.push(`contests/${event.id}`)
    //   }}>
    //     {/* Image Section */}
    //     <div className="relative w-full aspect-square md:h-[94%]" style={{ minHeight: 200 }}>

    //       <Image src={event.attributes.cover_image.data[0].attributes.url} alt={"jpeg"} fill className="absolute aspect-square rounded-2xl top-0 bottom-0 left-0 right-0 object-contain md:h-[94%]" />

    //       <div className="flex flex-row justify-between absolute p-3 w-full top-2 md:top-3">
    //         <div className="flex flex-row items-center bg-[#FFF] rounded-3xl px-3 py-1 gap-2">
    //           <Image src={"/icons/price.png"} className="relative" width={15} height={15} alt="Logo" />
    //           <p className="text-[12px] text-[#000] font-bold xl:text-md lg:text-md">₹{event.attributes.price_worth}</p>
    //         </div>
    //         <div className="bg-[#FFF] p-2 rounded-full">
    //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F12449" className="w-4 h-4 xl:w-6 xl:h-6 lg:w-6 lg:h-6">
    //             <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    //           </svg>
    //         </div>
    //       </div>

    //       <div className="absolute bottom-[-11px] xl:bottom-[-18px] lg:bottom-[-16px] right-3 bg-[#FFF] shadow-md shadow-orange-200 p-2 aspect-square flex justify-center items-center xl:p-4 lg:p-4 md:p-3" style={{ borderRadius: "50%" }}>
    //         <p className="text-[11px] font-bold xl:text-lg lg:text-lg md:text-md">₹{event.attributes.Tickets.price}</p>
    //       </div>
    //     </div>
    //     {/* Content Section */}
    //     <div className="flex flex-row items-center gap-3 md:gap-2 mt-2 xl:mt-5 lg:mt-5 md:mt-4">
    //       <div className="flex flex-row items-center gap-1  ">
    //         <Image src="/icons/online.png" alt={"svg"} width={15} height={15} className="" />
    //         <p className="text-[#000] text-[7px] xl:text-xs lg:text-xs md:text-[10px]">   {new Date(event.attributes.start_date) > new Date()
    //               ? "available"
    //               : "not-available"}</p>
    //       </div>
    //       <div className="flex flex-row items-center gap-1">
    //         <Image src="/icons/attendies.svg" alt={"svg"} width={20} height={20} className="" />
    //         <p className="text-textColor-100 text-[9px] xl:text-xs lg:text-xs md:text-[10px]" >{event.attributes.Tickets.total_slots}</p>
    //       </div>
    //       <div className="flex flex-row items-center gap-1">
    //         <Image src="/icons/calendar.png" alt={"svg"} width={20} height={20} className="h-[70%] aspect-square" />
    //         <p className="text-textColor-100 text-[9px] xl:text-xs lg:text-xs md:text-[10px]" >
    //           {new Date(event.attributes.start_date).getDate()}{" "}
    //           {new Date(event.attributes.start_date).getMonth()}{" "}
    //           {new Date(event.attributes.end_date).getDate()}{" "}
    //           {new Date(event.attributes.end_date).getMonth()}{" "}
    //         </p>
    //       </div>
    //     </div>
    //     <div className="gap-1">
    //       <p className="text-[12px] xl:text-lg lg:text-lg md:text-[14px] sm:text-[14px] text-[#333333] font-semibold">
    //       {event.attributes.event_name} - {event.attributes.Address.state}
    //       </p>
    //       <p className="text-[10px] xl:text-md lg:text-md md:text-[12px] sm:text-[12px] text-[#333333]/62 font-light">{event.attributes.description} </p>
    //     </div>
    //   </div>
    //   <button className="bg-orange-500 rounded-b-xl text-sm text-[#FFF] font-bold p-2 xl:p-4 lg:p-4 md:p-3 xl:text-lg lg:text-md"  onClick={() => {
    //     router.push(`contests/${event.id}`)}}>
    //     Join now
    //   </button>
    // </div>
  );
};

export default EventCard;
