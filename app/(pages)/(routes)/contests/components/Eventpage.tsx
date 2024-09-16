"use client";
import Image from 'next/image';
import contest from '@/public/images/Rectangle 124.png'
import heartIcon from "@/public/icons/Group 50.png";
import prizeIcon from "@/public/icons/price.png";
import { FilledButton } from '@/components/models/EventButton';
import { FilterButton } from '@/components/models/EventButton';
import  wp from "@/public/icons/wp.png";
import google from '@/public/icons/google.png'
import profile from "@/public/images/profile.png";
import facebook from "@/public/icons/fb.png";
import twitter from "@/public/icons/twitter.png";
import NewsLetter from '@/components/models/NewsLetter';
import { CalendarDays, Users,MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';


import { monthNames} from '@/lib/utils';
import { useRouter } from 'next/navigation';

const Eventpage = ({event}:any) => {
  
  
     const router = useRouter();
    router.prefetch(`contests/${event.data.id}`)
  return (
   <>
      <div className="w-full relative p-2 sm:p-5 lg:p-10 xl:p-20">
          <div className="box-border relative grid grid-cols-1 xl:grid-cols-3 md:gap-x-4 gap-y-4 p-1 sm:p-3 md:px-10   w-full">
         
            <div className="xl:col-span-2 col-span-1 relative flex flex-col  h-auto w-full">
              <div className="relative ">
                <Image
                  alt=""
                  className="rounded-md object-cover w-full"
                  src={event.data.attributes.cover_image.data[0].attributes.url}
                  width={500}
                  height={500}
                  priority
                  style={{ height: "400px" }}
                ></Image>
                <div className="box-border absolute top-0 grid grid-cols-2 content-between p-3 md:p-10 w-full h-full">
                  <div className="bg-white flex items-center md:gap-x-4 gap-x-2 h-full rounded-full p-2 w-max">
                    <Image
                      className="inline h-4 w-4 md:w-6 md:h-6"
                      src={prizeIcon}
                      alt=""
                    ></Image>
                    <p className="inline">${event.data.attributes.Tickets.price_worth}</p>
                  </div>
                  <div className="flex w-full flex-row-reverse">
                    <Image alt="" className="w-10 h-10" src={heartIcon}></Image>
                  </div>
                  <div className="w-full text-center text-yellow-700 col-span-2">
                    <h1 className="text-3xl">
                      {''}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col h-max w-full ">
              <div className="w-full flex flex-col h-full  mx-auto p-5 md:p-3 lg:p-4 border border-gray-200 rounded-lg gap-y-2  md:gap-y-3 lg:gap-y-4 ">
                <div className="box-border  flex justify-between md:py-2  py-1">
                  <div>
                    {" "}
                    {new Date('') > new Date()
                      ? "available"
                      : "not available"}
                  </div>
                  <div>
                    Entry fee{" "}
                    <span className="text-orange-500 text-xl font-bold">
                      @ {event.data.attributes.Tickets.price}
                     </span>
                  </div>
                </div>
                <div className="">
                  <div className="py-2 ">
                    <h2 className="text-2xl font-sans font-bold">
                      {event.data.attributes.event_name}
                    </h2>
                  </div>
                  <div className="lg:font-sm">
                    {/* {event.data.attributes.description} */}
                    Get ready for the Kids' Dance Championship! Watch young talents light up the stage with their incredible moves. It's a dance extravaganza you won't want to miss!
                  </div>
                </div>
                <div className="box-border flex flex-col gap-y-2 py-3 ">
                  <p className="flex gap-3 items-center">
                    <MapPin size={25} fillRule="inherit" />
                    {event.data.attributes.Address.city +
                      event.data.attributes.Address.state}
                  </p>
                  <p className="flex gap-3 items-center">
                    <Users size={25} /> {event.data.attributes.Tickets.total_slots}
                    attendees
                  </p>
                  <p className="flex gap-3 items-center">
                    <CalendarDays size={25} />
                    {new Date(event.data.attributes.start_date).getDate()}{' '}
                    {
                      monthNames[
                        new Date(event.data.attributes.start_date).getMonth()
                      ]
                    }{" "}
                    {new Date(event.data.attributes.end_date).getMonth()}{" "}
                    {monthNames[new Date(event.data.attributes.end_date).getMonth()]}
                  </p>
                </div>
                <div className="w-full text-center p-1 md:p-2 lg:p-3 ">
                  <FilledButton>Join Now</FilledButton>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border relative grid grid-cols-1 md:grid-cols-3  gap-y-5 md:gap-x-5 p-3 md:px-10   w-full">
            <div className="col-span-2 relative flex flex-col gap-y-5 ">
              <div className="box-border w-full flex flex-col gap-y-4 p-4 rounded-xl border border-orange-500">
                <div className="flex  justify-between">
                  <p className="text-xs md:text-sm">
                    Get 10% OFF. Use CODE: MAS2023 when booking your tickets
                  </p>
                  <FilterButton
                    className="rounded-md "
                    title="share"
                  ></FilterButton>
                </div>
                <div className="md:flex-row flex flex-col gap-y-4 justify-between">
                  <p className="text-xs md:text-sm">
                    Maximum discount of ₹1000{" "}
                  </p>
                  <p className="text-xs md:text-sm text-yellow-700">
                    *Terms & Conditions apply
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col h-max  gap-y-5 lg:gap-y-6 2xl:gap-y-8">
              <div className="p-4  w-full h-max justify-between rounded-lg flex flex-col gap-2 border border-gray-200">
                <h2 className="font-bold font-sans py-3  text-xl">
                  Sharing is enjoying
                </h2>
    
                <div className="p-1 md:py-3 ">
                  <div className="flex flex-row gap-6">
                    <span>
                      <Image
                        src={google}
                        width={40}
                        height={40}
                        alt=""
                        className=""
                      />
                    </span>
                    <span>
                      <Image
                        src={facebook}
                        width={40}
                        height={40}
                        alt=""
                        className=" "
                      />
                    </span>
                    <span>
                      <Image
                        src={twitter}
                        width={40}
                        height={40}
                        alt=""
                        className=""
                      />
                    </span>
                    <span>
                      <Image
                        src={wp}
                        width={40}
                        height={40}
                        alt=""
                        className=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border  relative grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5  p-3 md:p-10   w-full">
            <div className=" md:col-span-2 col-span-3">
              <hr className="text-gray-200 w-full" />
              <div className="mt-10 flex flex-col gap-y-5">
                <h1 className="text-2xl font-bold font-sans ">Description</h1>
                <div className=" leading-loose text-base lg:text-lg">
                  Event List: 25M, 50M, 100M, 400 M, Ball collection, Hurdles
                  Ru, Medicine Ball Throw, Shot Put, All participant will get
                  participate Certificate & Medal All winners will be awarded
                  with Medals & merit certficate Given Individuval Championship
                  Given Trophy All participants school id cad, School Bonfide
                  any Date of birth mention id card compulsary Final Decision by
                  officials For
                  <h1>
                    <span className="font-bold ">
                      {" "}
                      Enquiry : 97919 92253/ 9600018168
                    </span>
                  </h1>
                </div>
                <hr className="text-gray-200 w-full" />
                <div>
                  <h1 className="text-2xl font-bold font-sans">
                    Cancellation and Refunds
                  </h1>
                </div>
                <p>Check this document for Cancellation and Refunds</p>
              </div>
            </div>
            <>
            <div className="md:col-span-1 col-span-3 w-full gap-y-3 md:gap-x-3  p-3 md:p-10   h-max rounded-lg mt-5 md:mt-0 border border-gray-200 px-4">
              <h1 className="font-bold font-sans text-xl">Event Organizer</h1>
              <div onClick={() => router.push(`/organizers/:${1}`)}>
                <div className=" flex md:items-center justify-start px-2 md:px-0 gap-5 p-4">
                  <Image
                    src={profile}
                    className="w-[18%] rounded-full aspect-square"
                    alt=""
                  />
                  <p className="font-semibold text-xl">Jayachandran K</p>
                </div>
              </div>
            </div>
            </>
            <div className="col-span-3 flex md:py-20 justify-center">
              <NewsLetter />
            </div>
          </div>
        </div>
        <div className="md:hidden  fixed bottom-0 bg-purple-600 w-full h-max flex justify-between items-center p-4 px-8 z-10">
            <p className="text-white font-bold">${event.data.attributes.Tickets.price}</p>
            <Button className="rounded-md border-none bg-white text-orange-500">
              Buy now
            </Button>
          </div>      
        </>
  )
}

export default Eventpage