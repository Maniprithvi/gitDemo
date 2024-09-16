import * as React from "react";
import { cn } from "@/lib/utils";

const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "font-bold xl:text-[40px] md:text-[30px] text-[25px] py-[12px]",
      className
    )}
    {...props}
  />
));
Heading.displayName = "Heading";

const Secondary = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-medium text-[#333333] xl:text-[18px] lg:text-[18px] mx-auto md:text-[16px] text-[14px]",
      className
    )}
    {...props}
  />
));
Secondary.displayName = "Secondary";

const Small = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-normal leading-loose text-[#333333]  text-[12px]  lg:text-base md:line-clamp-[15]",
      className
    )}
    {...props}
  />
));
Small.displayName = "Small";



export { Heading, Secondary, Small };
