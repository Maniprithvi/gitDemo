import dynamic from "next/dynamic";
import Image from "next/image";
import React, { lazy, Suspense } from "react";

// Dynamic imports for components
const AboutMoto = dynamic(() => import("@/components/about/AboutMoto"));
const NewsLetter = dynamic(() => import("@/components/models/NewsLetter"));
const AboutFeature = dynamic(() => import("@/components/about/AboutFeature"));
const AboutForm = lazy(() => import("@/components/about/AboutForm"));
import SEO from "@/components/Seo";

const Heading = dynamic(() =>
  import("@/components/models/texts").then((mod) => mod.Heading)
);
const Secondary = dynamic(() =>
  import("@/components/models/texts").then((mod) => mod.Secondary)
);
const Small = dynamic(() =>
  import("@/components/models/texts").then((mod) => mod.Small)
);

// Dynamic imports for images
import src from "@/public/images/About/Rectangle 116.png";
import emoji from "@/public/images/About/emoji.png";
import organizerImage from "@/public/images/About/Rectangle 121.png";
// import Social from "@/components/socialShare";
import prisma from "@/prisma";

const renderLoader = () => <p>Loading</p>;

const page = async () => {
  const isEmail = async (email: string) => {
    try {
      const user = await prisma.user.findMany({
        where: {
          email: email as string,
        },
      });
      return user;
    } catch (error) {
      return null;
    }
  };
  const desc = "its a platform for events and culturels manage and enjoy ";

  return (
    <>
      <SEO
        title={"About"}
        description={desc}
        image={"/public/"} // If post has a specific image, otherwise the default image is used
        url={`https://maasta.in/about`}
      />
      <Suspense fallback={renderLoader()}>
        <div className="w-[97%] h-[100%] bg-transparent mx-auto  flex flex-col md:gap-10 gap-5 mt-20 md:mt-24 ">
          {/* crafting memories */}
          <div className="w-full grid grid-cols-2 md:grid-cols-5 p-7 md:p-10  gap-2  md:gap-5 justify-center ">
            <div className="col-span-2 md:col-span-2 lg:col-span-2 aspect-[9/10] sm:max-w-[450px] max-w-[820px]  mx-auto relative w-full h-full">
              {/* Main image */}
              <div className="relative h-[90%] w-[90%] rounded-2xl mx-auto">
                <Image
                  src={src}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  priority
                />
              </div>

              {/* Emojis */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[14%]">
                  <Image
                    src={emoji}
                    alt=""
                    width={50}
                    height={50}
                    className="absolute -top-[5%] left-[10%]"
                  />
                  <Image
                    src={emoji}
                    alt=""
                    width={50}
                    height={50}
                    className="absolute bottom-[13%] -right-[3%]"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-3  text-center md:text-start md:pl-2 row-span-1 justify-center flex flex-col gap-2 md:gap-3">
              <Heading className="text-primaryText">
                Crafting Memories, Making Moments
              </Heading>
              <Small>
                We are more than just event planners; we&apos;re memory weavers
                and moment makers. With a passion for turning dreams into
                reality, our event management company specializes in creating
                experiences that linger in your heart long after the day is
                done. From elegant weddings to electrifying corporate
                gatherings, we orchestrate events that are as unique as you are.
                Join us on a journey where creativity knows no bounds, and every
                occasion becomes an extraordinary tale waiting to be told.
                Welcome to Maasta, where your moments matter most
              </Small>
            </div>
          </div>

          {/* talentFeatures */}
          <div className="w-full h-auto flex flex-col">
            <div className="flex flex-col md:w-[60%] text-center md:mx-auto">
              <Heading className="text-primaryText">
                Platform for talents
              </Heading>
              <Secondary className="">
                Unlock your potential and let your talent shine with us...
              </Secondary>
            </div>
            <div className="w-full">
              <AboutFeature />
            </div>
          </div>

          {/* about moto */}
          <AboutMoto />

          {/* join organizer */}
          <div className="w-full h-auto flex flex-col gap-5 md:gap-10 items-center ">
            <div className="flex flex-col md:gap-4 md:w-[60%] text-center px-5">
              <Heading className="text-primaryText">Join Us</Heading>
              <Secondary className="">
                Whether you&apos;re an artist, filmmaker, musician, or just
                passionate about media...
              </Secondary>
            </div>

            <div className="w-[90%] mx-auto  md:w-full md:h-[80dvh]  lg:h-[80%] lg:w-[86%] flex lg:flex-row lg:justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="w-full md:w-[50%] lg:w-[50%] h-full md:justify-end hidden md:inline-flex ">
                <Image
                  src={organizerImage}
                  alt="Organizer Image"
                  className="w-full h-full object-cover rounded-l-2xl"
                  priority
                />
              </div>
              <div className="w-full h-max md:w-[50%] lg:w-[50%] md:py-2 px-2 py-3 lg:px-3 my-auto">
                <AboutForm />
              </div>
            </div>
          </div>

          <div className="w-full py-10 lg:mx-auto">
            <NewsLetter />
          </div>
          <div className="w-full py-10 lg:mx-auto">{/* <Social /> */}</div>
        </div>
      </Suspense>
    </>
  );
};

export default page;
