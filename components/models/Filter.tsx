import { ChevronDownIcon } from "lucide-react";
import React, { memo } from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import dynamic from "next/dynamic";

const FilterButton = dynamic(
  () => import("./EventButton").then((b) => b.FilterButton),
  { ssr: false }
);

interface Iprops {
  base: string;
  list: string[];
  handleSelectFilter: any;
  isOpen: boolean;
}
// eslint-disable-next-line react/display-name
const Filter: React.FC<Iprops> = memo(
  ({ base, list,
     handleSelectFilter,
     isOpen }) => {
    console.log(isOpen, "isopen");
    
    function handleClick() {
      throw new Error("Function not implemented.");
    }

    return (
      <Accordion.Root
        className="md:max-w-[400px] hidden md:block w-full  rounded-xl overflow-hidden border border-gray-200"
        type="single"
        collapsible
      >
        <AccordionItem value={base}>
          <AccordionTrigger
            onClick={()=>handleClick()}
            className={`w-full bg-transparent flex-1 gap-2 text-xs md:text-base flex justify-start hover:text-orange-500  hover:bg-transparent
           ${isOpen ? "text-orange-500" : "text-black"}`}
          >
            {base}
          </AccordionTrigger>
          <AccordionContent className="p-3">
            <div className="flex flex-wrap gap-1 md:gap-2">
              {list.map((i, index) => (
                <FilterButton
                  key={index}
                  onClick={() =>
                     handleSelectFilter(i, base)
                    }
                >
                  {i}
                </FilterButton>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
    );
  }
);
export default Filter;
// eslint-disable-next-line react/display-name
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex flex-1 items-center justify-between  h-[50px] p-0">
      <Accordion.Trigger
        className={classNames(
          "w-[70%] h-[100%] group flex gap-[2px] cursor-default items-center font-semibold    !text-[12px] lg:text-lg leading-none pl-[5px] capitalize",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <ChevronDownIcon
          className=" ease-[cubic-bezier(0.5,_0,_0.5,_1)] !text-xs transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
          size={15}
        />
        {children}
      </Accordion.Trigger>
      <button className="w-[30%] h-[100%] text-gray-600 text-[8px] lg:text-xs">close</button>
    </Accordion.Header>
  )
);
// eslint-disable-next-line react/display-name
const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

// eslint-disable-next-line react/display-name
const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
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
  )
);
