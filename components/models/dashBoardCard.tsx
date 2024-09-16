"use client"
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Card } from "../ui/card";

type Props = {}

const DashBoardCard = (props: Props) => {
    return (
        <div className="w-full h-full flex items-center mt-6">
            <Swiper
                grabCursor={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                slidesPerView={4}
                // centeredSlides={true}
                spaceBetween={0}
                loop={true}
                modules={[Autoplay]}
                className={`w-[80%] xl:w-[76%] lg:w-[85%] md:w-[84%] sm:w-[64%] h-[320px] overflow-auto`}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    300: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    850: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                    1350: {
                        slidesPerView: 4,
                    }
                }}>
           <SwiperSlide style={{ width: "180px", display: "flex", justifyContent: "center" }}>
                    <Card className="mt-4 w-[180px] h-[230px] xl:w-[220px] xl:h-[290px] lg:w-[190px] lg:h-[260px] md:w-[184px] md:h-[245px] sm:w-[170px] sm:h-[230px] sm:p-1 flex items-center justify-center rounded-[27px] px-1 py-1 bg-gradient-to-t from-[#FFD6A5] to-[#FFFFFF] transform rotate-[-5deg]">
                        <div color="blue-gray" className="relative w-full h-full flex items-center justify-center rotate-[2deg]">
                            <Image src="/images/Rectangle_1.png" alt="card-image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="rounded-[27px]" />
                        </div>
                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ width: "180px", display: "flex", justifyContent: "center" }}>
                    <Card className="mt-4 w-[180px] h-[230px] xl:w-[220px] xl:h-[290px] lg:w-[190px] lg:h-[260px] md:w-[184px] md:h-[245px] sm:w-[170px] sm:h-[230px] flex items-center justify-center rounded-[27px] p-0 bg-gradient-to-t from-[#FFD6A5] to-[#FFFFFF] transform rotate-[4.4deg]">
                        <div color="blue-gray" className="relative w-full h-full flex items-center justify-center rotate-[-4.4deg]">
                            <Image src="/images/Rectangle_2.png" alt="card-image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="rounded-[27px]" />
                        </div>
                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ width: "180px", display: "flex", justifyContent: "center" }}>
                    <Card className="mt-4 w-[180px] h-[230px] xl:w-[220px] xl:h-[290px] lg:w-[190px] lg:h-[260px] md:w-[184px] md:h-[245px] sm:w-[170px] sm:h-[230px] sm:p-1 flex items-center justify-center rounded-[27px] px-1 py-1 bg-gradient-to-t from-[#FFD6A5] to-[#FFFFFF] transform rotate-[-5deg]">
                        <div color="blue-gray" className="relative w-full h-full flex items-center justify-center rotate-[2deg]">
                            <Image src="/images/Rectangle_3.png" alt="card-image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="rounded-[27px]" />
                        </div>
                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ width: "180px", display: "flex", justifyContent: "center" }}>
                    <Card className="mt-4 w-[180px] h-[230px] xl:w-[220px] xl:h-[290px] lg:w-[190px] lg:h-[260px] md:w-[184px] md:h-[245px] sm:w-[170px] sm:h-[230px] flex items-center justify-center rounded-[27px] p-0 bg-gradient-to-t from-[#FFD6A5] to-[#FFFFFF] transform rotate-[4.4deg]">
                        <div color="blue-gray" className="relative w-full h-full flex items-center justify-center rotate-[-4.4deg]">
                            <Image src="/images/Rectangle_4.png" alt="card-image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="rounded-[27px]" />
                        </div>
                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ width: "180px", display: "flex", justifyContent: "center" }}>
                    <Card className="mt-4 w-[180px] h-[230px] xl:w-[220px] xl:h-[290px] lg:w-[190px] lg:h-[260px] md:w-[184px] md:h-[245px] sm:w-[170px] sm:h-[230px] sm:p-1 flex items-center justify-center rounded-[27px] px-1 py-1 bg-gradient-to-t from-[#FFD6A5] to-[#FFFFFF] transform rotate-[-5deg]">
                        <div color="blue-gray" className="relative w-full h-full flex items-center justify-center rotate-[2deg]">
                            <Image src="/images/Rectangle_3.png" alt="card-image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="rounded-[27px]" />
                        </div>
                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ width: "180px", display: "flex", justifyContent: "center" }}>
                    <Card className="mt-4 w-[180px] h-[230px] xl:w-[220px] xl:h-[290px] lg:w-[190px] lg:h-[260px] md:w-[184px] md:h-[245px] sm:w-[170px] sm:h-[230px] flex items-center justify-center rounded-[27px] p-0 bg-gradient-to-t from-[#FFD6A5] to-[#FFFFFF] transform rotate-[4.4deg]">
                        <div color="blue-gray" className="relative w-full h-full flex items-center justify-center rotate-[-4.4deg]">
                            <Image src="/images/Rectangle_2.png" alt="card-image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="rounded-[27px]" />
                        </div>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DashBoardCard