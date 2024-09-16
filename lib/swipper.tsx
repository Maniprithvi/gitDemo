// "use client"

// import EventCard from "@/components/models/eventCard";
// import React,{useEffect,useState,useRef} from "react"
// import { Scrollbar, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide, useSwiper, } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const Swipper = () => {
      
//   const swiperRef = useRef();
//   const ref = useSwiper();

//  const [slide,setSlide]=useState(0);
//  const [viewportWidth, setViewportWidth] = useState(
//   typeof window !== "undefined" ? window.innerWidth : 300
// );  const cardWidth = 300; 
//   console.log("hi");
//   const updateViewportWidth = () => {
//     setViewportWidth(window.innerWidth);
//   };
//   // for updating screen resolution in state
//   useEffect(() => {
//     window.addEventListener("resize", updateViewportWidth);
//     return () => {
//       console.log(slide,"before render");
//       window.removeEventListener("resize", updateViewportWidth);
//     };
//   }, []); 

//   // calculate the slide per view
//  const calculateSlidePerview =(screenWidth:number)=>{
//   const cardsInView = (screenWidth / cardWidth);
//   // console.log("card in view ",cardsInView)
//   return Number(cardsInView.toFixed(2));
//  }

//  useEffect(()=>{
//   setSlide(Math.round(calculateSlidePerview((viewportWidth))))
//   console.log(slide, "cards in view Port ")
//   console.log(viewportWidth,"view Port width")
//  },[viewportWidth])

//  const getValue=()=>{
//       const props:any={}
//       props[viewportWidth]={
//             slidesPerView:slide,
//             spaceBetween:20 
//       }
//       return props;
//  }
//   return (
//     <div>
//           <div className="w-full h-auto flex">
//       <button className="hidden md:block" onClick={() => swiperRef.current.slidePrev()}>
//     Go to prev Slide
//   </button>
//      {viewportWidth}
//       <Swiper
//       onSwiper={(swiper:any) => {
//         swiperRef.current = swiper }}
 
//       modules={[ Scrollbar, A11y]}
//       zoom={false}
//       breakpoints={getValue()}
     
//     >   
//       <div className="w-[80%] h-auto mx-auto p-5" >
//       <SwiperSlide zoom={false}><EventCard width={300} /></SwiperSlide>
//       <SwiperSlide><EventCard width={300} /></SwiperSlide>
//       <SwiperSlide><EventCard width={300}/></SwiperSlide>
//       <SwiperSlide><EventCard width={300}/></SwiperSlide>
//       <SwiperSlide><EventCard width={300}/></SwiperSlide>
//       <SwiperSlide><EventCard width={300}/></SwiperSlide>
//       <SwiperSlide><EventCard width={300}/></SwiperSlide>
//       <SwiperSlide><EventCard width={300}/></SwiperSlide>
//       <SwiperSlide><EventCard width={300}/></SwiperSlide>
//       </div>
//   </Swiper >
//   <button className="hidden md:block" onClick={() => swiperRef.current.slideNext()}>
//         Go to Next Slide
//       </button>
//       </div>
//     </div>
//   )
// }

// export default Swipper