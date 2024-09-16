import { ChevronDownIcon } from "lucide-react";
import React, { memo } from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import dynamic from "next/dynamic";

const FilterButton = dynamic(() => import("./models/EventButton").then(b => b.FilterButton), { ssr: false });

interface Iprops {
  base: string;
  list: string[];
  handleSelectFilter: any;
  isOpen: boolean;
}

const Filter: React.FC<Iprops> = memo(({ base, list, handleSelectFilter, isOpen }) => {
  console.log(isOpen, "isopen");
  return (
    <Accordion.Root
      className="md:max-w-[400px] hidden md:block w-full rounded-xl overflow-hidden border border-gray-200"
      type="single"
      collapsible
    >
      <AccordionItem value={base}>
        <AccordionTrigger
          className={`w-full bg-transparent flex-1 gap-2 text-xs md:text-lg flex justify-start hover:text-orange-500 hover:bg-transparent
           ${isOpen ? "text-orange-500" : "text-black"}`}
        >
          {base}
        </AccordionTrigger>
        <AccordionContent className="p-3">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {list.map((i, index) => (
              <FilterButton key={index} onClick={() => handleSelectFilter(i, base)}>
                {i}
              </FilterButton>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
});

Filter.displayName = "Filter"; // Set display name for Filter component

export default Filter;

const AccordionTrigger = React.forwardRef(({ children, className, ...props }: any, forwardedRef: any) => (
  <Accordion.Header className="flex flex-1 items-center justify-between h-[70px]">
    <Accordion.Trigger
      className={classNames(
        "w-[70%] h-[100%] group flex cursor-default items-center font-medium leading-none pl-3 capitalize",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <ChevronDownIcon
        className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
      {children}
    </Accordion.Trigger>
    <button className="w-[30%] h-[100%] text-gray-600 text-sm">close</button>
  </Accordion.Header>
  ));
  AccordionTrigger.displayName ="AccordionTrigger"
  
  const AccordionItem = React.forwardRef(({ children, className, ...props }:any, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        ' mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 ',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ));

AccordionItem.displayName = "AccordionItem"; // Set display name for AccordionItem component

const AccordionContent = React.forwardRef(({ children, className, ...props }: any, forwardedRef: any) => (
  <Accordion.Content
    className={classNames(
      "h-max data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

AccordionContent.displayName = "AccordionContent"; // Set display name for AccordionContent component
