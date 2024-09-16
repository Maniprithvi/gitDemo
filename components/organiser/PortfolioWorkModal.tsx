"use Client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PiFilmReelFill } from "react-icons/pi";
import { FaRegFileAlt, FaVideo } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { MdOutlinePhoto } from "react-icons/md";
import { IoCameraSharp } from "react-icons/io5";
import { faArrowUpFromBracket, faCircleXmark, faVideo, faMusic, faImage } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { addPortfolio } from "@/app/actions/portfolio";
import router from "next/router";

interface Props {
  handlePortfolioWorkModal: () => void;
}

const category = [
  { name: "Show Reel", icon: <PiFilmReelFill /> },
  { name: "Sound", icon: <BsMusicNote /> },
  { name: "Music / Video", icon: <FaVideo /> },
  { name: "Photos", icon: <MdOutlinePhoto /> },
  { name: "cover", icon: <IoCameraSharp /> },
  { name: "Script / Lyrics", icon: <FaRegFileAlt /> },
];

const PortfolioAddWorkModal = ({ handlePortfolioWorkModal }: Props) => {
  var ref = useRef<HTMLInputElement>(null);
  var imageRef = useRef<File>();

  const data = new FormData();
  const [state, formAction] = useFormState(addPortfolio.bind(null, ""), { projectName: [], image: [], form: [] });
  const [uploadWorkWindow, setViewOfUploadWorkWindow] = useState(false);

  const handleUploadWindow = () => {
    setViewOfUploadWorkWindow(!uploadWorkWindow);
  };

  const handleImage = (event: any) => {
    if (imageRef.current) {
      imageRef.current = event.target.files[0];
    }
  };

  const handlePortfolioModalClose = () => {
    setViewOfUploadWorkWindow(false); // Reset uploadWorkWindow state
    handlePortfolioWorkModal();
  }

  const uploadImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();
    input.required = true;
    input.addEventListener("change", (event: any) => {
      imageRef.current = event.target.files[0];
    });
  };

  const onFocus = () => {
    if (ref.current) {
      ref.current.className += "border border-orange-600";
    }
  };

  const onFocusLeave = () => {
    if (ref.current) {
      ref.current.className = ref.current.className.replace("border border-orange-600", "");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 opacity-95"></div>
      <div className="border-box fixed inset-x-1/4 top-20 bg-white opacity-150 p-10 rounded-xl h-max">
        {uploadWorkWindow && (
          <div onClick={handleUploadWindow} className="py-5 cursor-pointer">{`< Back`}</div>
        )}
        <div className="relative flex justify-between items-center pb-5 border-b border-gray-300">
          <div>
            <h2 className="text-xl font-bold font-sans">Add your work</h2>
            {!uploadWorkWindow && (
              <p className="text-xl text-violet-500 mt-1">Please select your category</p>
            )}
          </div>
          <div onClick={handlePortfolioModalClose}>
            <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faCircleXmark} />
          </div>
        </div>
        {(!uploadWorkWindow && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-5">
              {category.map((item) => (
                <div  
                  key={item.name}
                  onClick={handleUploadWindow}
                  className="flex flex-col items-center rounded-md gap-y-4 justify-center border border-orange-600 h-[200px] cursor-pointer"
                >
                  <p>
                    <i className="text-[45px] text-orange-600">{item.icon}</i>
                  </p>
                  <p className="text-violet-800">{item.name}</p>
                </div>
              ))}
          </div>
        )) || (
            <form action={formAction}>
              <div className="mt-10 grid grid-cols-1 gap-y-10">
                <div>
                  <Input
                    ref={ref}
                    name="project name"
                    onFocus={onFocus}
                    onBlur={onFocusLeave}
                    type="text"
                    className="border-2 p-5"
                    placeholder="Add Project Name"
                  ></Input>
                </div>
                <div
                  onClick={uploadImage}
                  className="flex bg-orange-50 h-[150px] items-center place-content-center border border-orange-400 rounded-lg"
                >
                  <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-[20px] text-orange-600" />
                  <p className="text-orange-600 ml-1 font-bold">Upload Your Portfolio</p>
                </div>
                <div className="w-full text-center">
                  <button className="bg-gradient-to-b p-4 w-[200px] text-white rounded-lg from-orange-600 to-orange-400">
                    Add Photo
                  </button>
                </div>
              </div>
            </form>
          )}
      </div>
    </>
  );
};

export default PortfolioAddWorkModal;
