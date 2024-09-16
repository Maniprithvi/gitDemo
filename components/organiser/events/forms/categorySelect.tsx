"use client";

import { useNewUserFormContext } from "@/app/actions/context/eventform";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { PiFilmReelFill } from "react-icons/pi";
import { FaRegFileAlt, FaVideo } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { MdOutlinePhoto } from "react-icons/md";
import { IoCameraSharp } from "react-icons/io5";
const category = [
  { name: "Show Reel", icon: <PiFilmReelFill /> },
  { name: "Sound", icon: <BsMusicNote /> },
  { name: "Music / Video", icon: <FaVideo /> },
  { name: "Photos", icon: <MdOutlinePhoto /> },
  { name: "cover", icon: <IoCameraSharp /> },
  { name: "Script / Lyrics", icon: <FaRegFileAlt /> },
];

interface Form1Props {
  setStep: () => void;
}

const CategorySelect: React.FC<Form1Props> = ({ setStep }) => {
  const formContext = useNewUserFormContext();

  const newUserFormSchema = z.object({
    category: z.string().min(1, "Category is required"),
  });
  const stepTwoForm = useForm<z.infer<typeof newUserFormSchema>>({
    resolver: zodResolver(newUserFormSchema),
    mode: "onChange",
    defaultValues: {
      category: formContext?.user?.category || "",
    },
  });

  const handleCategorySelect = (category: string) => {
    formContext.updateUserData({ category });
    setStep();
  };
  return (
    <div>
      <h2 className="text-xl text-left text-violet-500 font-medium font-sans">
        Please select your category
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-3 sm:gap-4 lg:gap-7 mt-5">
        {category.map((item) => (
          <div
            key={item.name}
            onClick={() => handleCategorySelect(item.name)}
            className="flex flex-col items-center rounded-md gap-y-2 lg:gap-y-4 justify-center border  border-orange-600 h-[90px] md:h-[120px] lg:h-[200px] cursor-pointer"
          >
            <p>
              <i className="text-[24px] sm:text-[30px] md:text-[35px]  lg:text-[40px] xl:text-[45px] text-orange-600">
                {item.icon}
              </i>
            </p>
            <p className="text-violet-800 text-xs sm:text-sm md:text-lg text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
