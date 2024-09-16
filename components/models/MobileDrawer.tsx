import { FilterIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Filter from "./Filter";
import { FilledButton } from "./EventButton";

const MobileDrawer = () => {
  return (
    // fixed bottom-0
    <div className="w-full  absolute bottom-0">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="w-full p-6 bg-primaryText text-white text-lg font-medium"
          >
            <FilterIcon className=" mr-2" fill="white" /> Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-white">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="p-0">
              <DrawerClose asChild>
                <Button className="w-10 p-0 h-10 bg-transparent text-gray-400 ">
                  <X className="" />
                </Button>
              </DrawerClose>
              <DrawerTitle className="mx-auto text-xl font-bold">
                Filters
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0 flex flex-col gap-3">
              <Filter
                base="day"
                list={[]}
                handleSelectFilter={undefined}
                isOpen={false}
              />
              <Filter
                base="language"
                list={[]}
                handleSelectFilter={undefined}
                isOpen={false}
              />
              <Filter
                base="Categories"
                list={[]}
                handleSelectFilter={undefined}
                isOpen={false}
              />
              <Filter
                base="Price"
                list={[]}
                handleSelectFilter={undefined}
                isOpen={false}
              />
            </div>
            <DrawerFooter>
              <FilledButton>Apply Filter</FilledButton>
              <FilledButton>Apply Filter</FilledButton>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
 


export default MobileDrawer;

