import Image from "next/image";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";

import image from "@/public/images/popUp.png";
import { Button } from "@/components/ui/button";

interface IPopup {
  title: string;
  message: string;
  buttonText: string;
}
const PopUp: React.FC<IPopup> = ({ title, message, buttonText }) => {
  return (
    <>
      <Card className="w-[350px] md:w-[800px]  h-[480px] md:h-[420px] md:p-[-2] border-none outline-none relative rounded">
        <Image
          src={image}
          alt=""
          className="w-full h-full  z-10 outline-none border-none rounded"
        />
        <Button
          variant={"outline"}
          className="bg-gray-100 rounded-full absolute p-6 h-auto md:left-[46%] -top-8 left-[35%]"
        >
          <X className="text-gray-500 hover:text-gray-800 font-md font-bold" />
        </Button>
        <div className="absolute top-[15%] left-[2%] md:left-[10%] text-center md:w-[80%] w-[90%] m-2">
          <h3 className="text-2xl md:text-4xl leading-25 md:font-extrabold mb-5 text-lime-100 capitalize text-wrap ">
            Enjoy the 50% off on today
          </h3>
          <p className="leading-30  text-xl md:2xl text-white lg:mb-4 mb-6 tracking-wide line-clamp-5 ">
            In Tailwind CSS, you can set the minimum width of an element by
            using the following utilities: min-w-0 min-w-full min-w-min
            min-w-max min-w-fit To set the maximum width for an element, use
            max-w- Value can be 0, xs, sm, md, lg, xl, etc.{" "}
          </p>
          <Button className="md:w-[40%] w-[65%] h-auto rounded-full text-xl bg-white text-black p-3 font-bold ">
            Grab It Now..
          </Button>
        </div>
      </Card>
    </>
  );
};

export default PopUp;
