import React, { InputHTMLAttributes } from "react";
import { Input as UIinput } from "../ui/input";
import { cn } from "@/lib/utils";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder: string;
  name: string;
}

const MyInput: React.FC<IInputProps> = ({
  placeholder,
  name,
  className,
  ...props
}) => {
  return (
    <>
      <label htmlFor="" className="text-[14px] md:text-[18px]">
        {name}
      </label>
      <UIinput
        {...props}
        placeholder={placeholder}
        className={cn("border-black ", className)}
      />
    </>
  );
};

export default MyInput;
