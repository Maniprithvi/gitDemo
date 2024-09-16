// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Input } from "@/components/ui/input";
// const data = [
//   {
//     id: 1,
//     topProvider: true,
//     logo: "<img src='logo-url' alt='logo'/>",
//     totalCost: "£1.49",
//     fees: "£7.30",
//     rate: "£7.30",
//     paymentOptions: ["PayPal", "Cash", "Bank Transfer"],
//     speed: "1-2 Days",
//     features: ["3 free transfers", "Huge amount of currencies"],
//     brand: "eToro",
//   },
//   {
//     id: 2,
//     topProvider: false,
//     logo: "<img src='logo-url' alt='logo'/>",
//     totalCost: "No Fee",
//     fees: "£7.30",
//     rate: "£7.30",
//     paymentOptions: ["Credit Card", "Debit Card", "Bank Transfer"],
//     speed: "1-2 Days",
//     features: ["3 free transfers", "Huge amount of currencies"],
//     brand: "OtherBrand",
//   },
//   // More providers
// ];

// const eventData = [
//   {
//     id: 1,
//     eventImage: "/event/1.avif",
//     rating: "4.5",
//     eventDetails: {
//       eventName: "Yuvan Concert 1",
//       eventDescription:
//         "Enjoy the magic of YSR vintage songs with amazing performances...",
//       isFeatured: true,
//     },
//     address: {
//       address: "123 Music Avenue, City 1",
//     },
//     eventprice: {
//       winningAmt: "12000",
//       constOfjoin: "500",
//       totalSlot: "1000",
//     },
//     resevationDeatils: {
//       filledSlot: "300",
//       overAllCollection: "19000",
//     },
//   },
//   {
//     id: 2,
//     eventImage: "/event/2.avif",
//     rating: "4.7",
//     eventDetails: {
//       eventName: "Yuvan Concert 2",
//       eventDescription:
//         "A thrilling experience with YSR's timeless classics...",
//       isFeatured: true,
//     },
//     address: {
//       address: "456 Harmony Road, City 2",
//     },
//     eventprice: {
//       winningAmt: "15000",
//       constOfjoin: "600",
//       totalSlot: "1200",
//     },
//     resevationDeatils: {
//       filledSlot: "500",
//       overAllCollection: "30000",
//     },
//   },
//   {
//     id: 3,
//     eventImage: "/event/3.avif",
//     rating: "4.8",
//     eventDetails: {
//       eventName: "Yuvan Concert 3",
//       eventDescription: "Relive the golden era with YSR's evergreen hits...",
//       isFeatured: true,
//     },
//     address: {
//       address: "789 Melody Street, City 3",
//     },
//     eventprice: {
//       winningAmt: "18000",
//       constOfjoin: "700",
//       totalSlot: "1500",
//     },
//     resevationDeatils: {
//       filledSlot: "800",
//       overAllCollection: "56000",
//     },
//   },
//   {
//     id: 4,
//     eventImage: "/event/4.avif",
//     rating: "4.6",
//     eventDetails: {
//       eventName: "Yuvan Concert 4",
//       eventDescription: "YSR's unforgettable hits live in concert...",
//       isFeatured: true,
//     },
//     address: {
//       address: "321 Rhythm Lane, City 4",
//     },
//     eventprice: {
//       winningAmt: "20000",
//       constOfjoin: "800",
//       totalSlot: "1800",
//     },
//     resevationDeatils: {
//       filledSlot: "1200",
//       overAllCollection: "96000",
//     },
//   },
//   {
//     id: 5,
//     eventImage: "/event/1.avif",
//     rating: "4.9",
//     eventDetails: {
//       eventName: "Yuvan Concert 5",
//       eventDescription: "A night of YSR's best compositions...",
//       isFeatured: true,
//     },
//     address: {
//       address: "654 Melody Boulevard, City 5",
//     },
//     eventprice: {
//       winningAmt: "25000",
//       constOfjoin: "1000",
//       totalSlot: "2000",
//     },
//     resevationDeatils: {
//       filledSlot: "1500",
//       overAllCollection: "150000",
//     },
//   },
//   {
//     id: 6,
//     eventImage: "/event/3.avif",
//     rating: "4.4",
//     eventDetails: {
//       eventName: "Yuvan Concert 6",
//       eventDescription: "Experience the musical genius of YSR...",
//       isFeatured: true,
//     },
//     address: {
//       address: "987 Harmony Drive, City 6",
//     },
//     eventprice: {
//       winningAmt: "10000",
//       constOfjoin: "400",
//       totalSlot: "900",
//     },
//     resevationDeatils: {
//       filledSlot: "450",
//       overAllCollection: "18000",
//     },
//   },
//   {
//     id: 7,
//     eventImage: "/event/4.avif",
//     rating: "4.3",
//     eventDetails: {
//       eventName: "Yuvan Concert 7",
//       eventDescription: "YSR's classics come to life on stage...",
//       isFeatured: true,
//     },
//     address: {
//       address: "852 Symphony Street, City 7",
//     },
//     eventprice: {
//       winningAmt: "17000",
//       constOfjoin: "700",
//       totalSlot: "1300",
//     },
//     resevationDeatils: {
//       filledSlot: "700",
//       overAllCollection: "49000",
//     },
//   },
//   {
//     id: 8,
//     eventImage: "/event/2.avif",
//     rating: "4.8",
//     eventDetails: {
//       eventName: "Yuvan Concert 8",
//       eventDescription: "Celebrate the legacy of YSR with his greatest hits...",
//       isFeatured: true,
//     },
//     address: {
//       address: "159 Crescendo Court, City 8",
//     },
//     eventprice: {
//       winningAmt: "22000",
//       constOfjoin: "900",
//       totalSlot: "1700",
//     },
//     resevationDeatils: {
//       filledSlot: "900",
//       overAllCollection: "81000",
//     },
//   },
//   {
//     id: 9,
//     eventImage: "/event/3.avif",
//     rating: "4.5",
//     eventDetails: {
//       eventName: "Yuvan Concert 9",
//       eventDescription: "A magical night with YSR's timeless music...",
//       isFeatured: true,
//     },
//     address: {
//       address: "753 Aria Avenue, City 9",
//     },
//     eventprice: {
//       winningAmt: "13000",
//       constOfjoin: "500",
//       totalSlot: "1100",
//     },
//     resevationDeatils: {
//       filledSlot: "600",
//       overAllCollection: "30000",
//     },
//   },
//   {
//     id: 10,
//     eventImage: "/event/3.avif",
//     rating: "4.6",
//     eventDetails: {
//       eventName: "Yuvan Concert 10",
//       eventDescription: "YSR's enchanting melodies performed live...",
//       isFeatured: true,
//     },
//     address: {
//       address: "456 Melody Lane, City 10",
//     },
//     eventprice: {
//       winningAmt: "14000",
//       constOfjoin: "600",
//       totalSlot: "1200",
//     },
//     resevationDeatils: {
//       filledSlot: "700",
//       overAllCollection: "42000",
//     },
//   },
// ];

// const EventTable = () => {
//   const [countryFrom, setCountryFrom] = useState("uk");
//   const [currency, setCurrency] = useState("gbp");
//   const [countryTo, setCountryTo] = useState("pk");
//   const [amount, setAmount] = useState(2000);
//   const [providers, setProviders] = useState(eventData);

//   const fetchComparisonData = () => {
//     const apiEndpoint = `https://api.example.com/money-transfers?from=${countryFrom}&to=${countryTo}&currency=${currency}&amount=${amount}`;
//     fetch(apiEndpoint)
//       .then((response) => response.json())
//       .then((data) => setProviders(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   };

//   useEffect(() => {
//     fetchComparisonData();
//   }, []);

//   return (
//     <section className="container mx-auto p-6 bg-white shadow-md mt-6">
//       <div className="flex justify-evenly items-center">
//         <label
//           htmlFor="country-from"
//           className="w-full sm:w-auto sm:mr-4 mb-2 sm:mb-0 font-semibold"
//         >
//          Eventname:
//         </label>
//         <Input
//           placeholder="Filter Events..."
//           // value={(eventData.getColumn("email")?.getFilterValue() as string) ?? ""}
//           onChange={(event) =>''
//             // table.getColumn("email")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm outline-none"
//         />
//         <label
//           htmlFor="currency"
//           className="w-full sm:w-auto sm:mr-4 mb-2 sm:mb-0"
//         >
//           Rating:
//         </label>
//         <select
//           id="currency"
//           value={currency}
//           onChange={(e) => setCurrency(e.target.value)}
//           className="w-full sm:w-auto border border-gray-300 p-1 rounded mb-2 sm:mb-0"
//         >
//           <option value="1">1</option>
//           <option value="1">2</option>
//           <option value="1">3</option>
//           <option value="1">4</option>
//           <option value="1">5</option>
//         </select>
//         <label
//           htmlFor="country-to"
//           className="w-full sm:w-auto sm:mr-4 mb-2 sm:mb-0"
//         >
//         location:
//         </label>
//         <select
//           id="country-to"
//           value={countryTo}
//           onChange={(e) => setCountryTo(e.target.value)}
//           className="w-full sm:w-auto border border-gray-300 p-2 rounded mb-2 sm:mb-0"
//         >
//           <option value="in">india</option>
//           {/* More options */}
//         </select>
//         {/* <label
//           htmlFor="amount"
//           className="w-full sm:w-auto sm:mr-4 mb-2 sm:mb-0"
//         >
//           Amount:
//         </label> */}
//         {/* <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} className="w-full sm:w-auto border border-gray-300 p-2 rounded mb-2 sm:mb-0" /> */}
//         <button
//           onClick={fetchComparisonData}
//           className="w-full sm:w-auto bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
//         >
//           Apply filter
//         </button>
//       </div>
//       <div className="space-y-4 mt-6">
//         <div className="grid grid-cols-12 bg-gray-200 p-3 rounded-lg shadow">
//           <div className="col-span-2 font-semibold">Image</div>
//           <div className="col-span-3 font-semibold">Event Details</div>
//           <div className="col-span-2 font-semibold">Address</div>
//           <div className="col-span-2 font-semibold">Event Price</div>
//           <div className="col-span-2 font-semibold">Reservation Details</div>
//           <div className="col-span-1 font-semibold">Action</div>
//         </div>
        
//         {/* flex flex-wrap items-center p-2 bg-gray-50 rounded-lg shadow gap-5 */}
//         {providers.map((provider) => (
//           <div
//             key={provider.id}
//             className="grid grid-cols-12 h-max py-3 rounded-lg shadow bg-gray-50 "
//           >
//             <div className="w-full h-full sm:w-auto flex flex-col items-between col-span-2 ">
//               {/* {provider.topProvider && <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Top Provider</div>} */}
//               <div className=" w-[70%] my-2 mx-auto">
//                 <Image
//                   width={10}
//                   height={10}
//                   src={provider.eventImage}
//                   alt=""
//                   className="w-full h-full aspect-[10/7]"
//                 />
//               </div>
//               <div className="rating text-yellow-500 mx-auto">★★★★★</div>
//             </div>
//             <div className="w-full sm:mr-4 mb-4 sm:mb-0 col-span-3 flex flex-col gap-5">
//               <div className="text-lg font-semibold">
//                 {provider.eventDetails.eventName}
//               </div>
//               <div className="w-full sm:w-auto flex-1 sm:mr-4 mb-4 sm:mb-0">
//                 <div>Description: {provider.eventDetails.eventDescription}</div>
//                 <div>
//                   is Featured:{" "}
//                   <span className="font-bold">
//                     {provider.eventDetails.isFeatured ? "yes" : "No"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full sm:w-auto flex-1 sm:mr-4 mb-4 sm:mb-0 col-span-2">
//               {/* {provider.features.map(feature => <div key={feature}>{feature}</div>)} */}
//               {provider.address.address}
//             </div>
//             <div className="w-full sm:w-auto flex-1 sm:mr-4 mb-4 sm:mb-0 col-span-2">
//               <div className="text-lg font-semibold">
//                 {provider.eventprice.winningAmt}
//               </div>
//               <div className="w-full sm:w-auto flex-1 sm:mr-4 mb-4 sm:mb-0">
//                 <div>cost: {provider.eventprice.constOfjoin}</div>
//                 <div>Total Slot: {provider.eventprice.totalSlot}</div>
//               </div>
//             </div>

//             <div className="w-full sm:w-auto flex-1 sm:mr-4 mb-4 sm:mb-0 col-span-2 ">
//               <div className="text-lg font-semibold">
//                 overAll collection:{" "}
//                 {provider.resevationDeatils.overAllCollection}
//               </div>
//               <div className="w-full sm:w-auto flex-1 sm:mr-4 mb-4 sm:mb-0">
//                 <div>sold slot: {provider.resevationDeatils.filledSlot}</div>
//               </div>
//             </div>
//             <div className="w-full sm:w-auto col-span-1">
//               <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
//                 more
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EventTable;
