// import Events from "./components/events";
// import Portfolio from "./components/portfolio";
// import Achievment from "./components/achivements";
// import BackButton from "./components/backButton";
// import UserCard from "./components/userCard";
// import prisma from "@/prisma";
// import { auth } from "@/auth";

// const HomePage = async () => {
//   const { user }: any = await auth();
//   console.log(user, "user");
//   const isOragniser = await prisma.organiser.findUnique({
//     where: {
//       userId: user?.id,
//     },
//   });
//   const events = await prisma.event.findMany({
//     where: {
//       organiserId: isOragniser?.id,
//     },
//   });
//   console.log(events);
//   return (
//     <>
//       <div className="text-sm md:m-20">
//         <div className="py-5">
//           <BackButton />
//         </div>

//         <div className="relative flex flex-col items-center">
//           <UserCard />
//         </div>

//         <div className="box-border grid grid-cols-1 sm:grid-cols-3 w-full gap-x-5 p-2 mt-[230px] md:mt-40 gap-y-5">
//           <div className="sm:col-span-3 border border-gray-300 rounded-md col-span-3 md:col-span-2  w-full flex flex-col  gap-y-4 p-3 ">
//             <div>
//               <Portfolio />
//             </div>
//             <div>
//               <Achievment />
//             </div>
//           </div>
//           <div className="col-span-3 md:col-span-1 rounded-md border border-gray-300 w-full flex flex-col gap-y-10 py-4 px-3 ">
//             <div className="w-full ">
//               <p className="font-bold text-xl text-violet-800">
//                 Reached out me for
//               </p>
//               <div className="flex gap-2 flex-wrap mt-5">
//                 {[
//                   "game Designing",
//                   "3D animation",
//                   "animation",
//                   "art direction",
//                   "designing",
//                 ].map((item) => {
//                   return (
//                     <>
//                       <button className="border-2 rounded-md p-1 border-orange-400 font-sans">
//                         {item}
//                       </button>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>
//             <div>
//               <p className="font-bold text-xl text-violet-800">skills</p>
//               <div className="flex gap-2 flex-wrap mt-5">
//                 {["game designing", "unreal engine"].map((item) => {
//                   return (
//                     <>
//                       <button className="border-2 border-orange-400  rounded-md font-sans  p-1 ">
//                         {item}
//                       </button>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="flex justify-between gap-x-4">
//               <p className="font-bold text-xl text-violet-800">
//                 contact information
//               </p>
//               <button className="text-orange-400">edit</button>
//             </div>
//           </div>
//           {/* EVENT SECTION */}
//           <div className="col-span-3 rounded-md border border-gray-300 w-full flex flex-col gap-y-4 py-4 px-3">
//             <Events events={events} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;
