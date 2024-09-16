"use client";

import { motion } from "framer-motion";
import { useState,useEffect, useCallback } from "react";
import { Menuvariants } from "@/lib/useDimentions"
import Filter from "./models/Filter";
import { types, omit } from "@/lib/data";

const FilterSForMobile = () => {

  const [selectedFilters, setSelectedFilters] = useState({});

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

  useEffect(() => {
    console.log(selectedFilters, "selected");
}, [selectedFilters]);

  return (
    <div className="flex flex-col gap-2">
  {types.map((type, index) => {
    const key = type.key;
    const values = type.values;
    return (
      <motion.div
      className="w-[230px] rounded-2xl border-none"
        key={index}
        style={{
          backgroundColor: "#ffff",
        }}
        variants={Menuvariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div key={index}>
          <Filter base={key} list={values} handleSelectFilter={handleSelectFilter} isOpen={false} />
        </div>
      </motion.div>
    );
  })}
</div>
  );
};

export default FilterSForMobile;

export const FilterItem = ({child}:{child:React.ReactNode}) => {

  return (
    <>
    <motion.div
    style={{
   backgroundColor:"#ffff ",
    listStyle: "none",
    cursor: "pointer"
  }}
      variants={Menuvariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
    {child}
    </motion.div>
    </>
  );
};
