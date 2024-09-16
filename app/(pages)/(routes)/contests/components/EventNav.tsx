"use client";

import { OutlineButton } from "@/components/models/EventButton";
const EventNav = () => {
  return (
    <>
     <div className="flex gap-2 flex-wrap">
                <OutlineButton className="rounded-full ">
                  Unmissable events
                </OutlineButton>
                <OutlineButton className="rounded-full ">
                  Dance competition
                </OutlineButton>
                <OutlineButton className="rounded-full">
                  Singing competition
                </OutlineButton>
              </div>
              </>
  )
}

export default EventNav