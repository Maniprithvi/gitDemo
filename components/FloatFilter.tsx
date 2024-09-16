// "use client";

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Filter, CircleX } from 'lucide-react'
// import { useDimensions, variants, sidebar } from "@/lib/useDimentions";
// import FilterSForMobile from "./mobileFilterItems";
// import { OutlineButton } from "./models/EventButton";

// export const FloatFilter = () => {
//   const [isOpen, setOpen] = useState(false);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);

//   const toggleOpen = () => {
//     setOpen((prev: any) => !prev);
//   };

//   return (

//     <motion.div
//       className="fixed bottom-[5%] right-[5%] rotate-180"
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       custom={height}
//       ref={containerRef}
//     >
//       <motion.div
//         className="absolute w-full top-0 bottom-0 left-0 bg-[#910AD0] rounded-2xl h-full overflow-hidden p-2 "
//         variants={sidebar} />
//       <motion.div
//         className="rotate-180 w-full h-auto flex justify-evenly p-5  flex-col"
//         variants={variants}>
//         <FilterSForMobile />
//         {isOpen && (
//           <motion.div style={{ padding: "5px" }} className="mx-auto">
//             <OutlineButton
//               className=" "
//               onClick={() => toggleOpen()}
//             >
//               Apply filter
//             </OutlineButton>
//           </motion.div>
//         )}
//       </motion.div>

//       <button
//         style={{
//           rotate: "180deg",
//           outline: "0",
//           border: "none",
//           cursor: "pointer",
//           position: "absolute",
//           top: "18px",
//           left: "19px",
//           width: "40px",
//           height: "40px",
//           borderRadius: "50%",
//           background: "transparent",
//           display: 'flex',
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//         onClick={toggleOpen}>

//         {isOpen ? <CircleX className="border-0  " fill="white" size={20} strokeWidth={1.75} /> : <Filter className="border-0  " fill="white" size={20} strokeWidth={1.75} />}
//       </button>
//     </motion.div>

//   )
// };
