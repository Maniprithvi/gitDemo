"use client"

import { FilledButton } from "@/components/models/EventButton"
import { Accordion } from "@radix-ui/react-accordion"
import { useState } from "react"

import Filter from '@/components/models/Filter'
import { omit,types } from "@/lib/data"

const Filters = () => {
    const [selectedFilters, setSelectedFilters] = useState({});
  const [openFilterIndex, setOpenFilterIndex] = useState<number | null>(null);
 
  const handleSelectFilter = (key:any, value:any) => {
    setSelectedFilters((prev:any) => {
      console.log({pre:prev[key],value})
      if (prev[key] && prev[key].includes(value)) {
        const updatedValues = prev[key].filter((item:any) => item !== value);
        console.log({updatedValues},"previous key")
        return updatedValues.length > 0 ? { ...prev, [key]: updatedValues } : omit(prev, key);
      } else {
       const val= { ...prev, [key]: prev[key] ? [...prev[key], value] : [value] };
       console.log({val},"newkey")
        return val
      }
    });
  };
  return (
  <>
   <Accordion  type="single" collapsible className="w-full">
   {types.map((type:any,index:any) => {
        const key = type.key
        const values = type.values
        return (
          <>
            <Filter
              key={index}
              base={key}
              list={values}
              handleSelectFilter={handleSelectFilter}
              isOpen={index == index}
            />
          </>
        );
      })}
          </Accordion> 
       <FilledButton onClick={()=>''}>Apply Filter</FilledButton>
  </>
  )
}

export default Filters