
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const FilledButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    // type={type}
    className={cn(
      "rounded-xl p-3 md:p-5 font-semibold text-xs  md:text-base sm:py-2  bg-gradient-to-tr text-white from-orange-600 to-orange-400 active:text-white",
      className
    )}
    {...props}
  />
));

FilledButton.displayName = "FilledButton";

const OutlineButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(
      "rounded-xl text-sm  md:p-5 p-3 font-bold lg:text-normal  bg-white text-orange-500 border border-orange-500  hover:bg-gradient-to-tr hover:text-white active:text-white active:bg-gradient-to-tr from-orange-600 to-orange-400",
      className
    )}
    {...props}
  />
));

OutlineButton.displayName = "OutlineButton";

const FilterButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(
      "p-3 md:p-5 text-[10px] lg:text-[14px] rounded-none bg-transparent hover:bg-gradient-to-tr border border-orange-500 text-orange-500 active:bg-gradient-to-tr from-orange-600 to-orange-400 active:text-white hover:text-white",
      className
    )}
    {...props}
  />
));

FilterButton.displayName = "FilterButton";

export { FilledButton, OutlineButton, FilterButton };
