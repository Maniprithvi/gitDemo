import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import oragnizerPic from "../../public/images/organizer.png";

interface EventOrganizerCardProps {
  eventTitle?: string;
}

const EventOrganizerCard: React.FC<EventOrganizerCardProps> = ({
  eventTitle,
}) => {
  return (
    <Card
      className="mt-4 flex-row w-[519px] md:w-[519px] sm:w-[480px] xs:w-[400px]"
      style={{ height: "fit-content", borderRadius: "27px" }}
    >
      <CardHeader color="blue-gray" className="flex flex-col gap-2">
        <p className="text-xl font-bold text-[#333333]">Event Orgainzer</p>
      </CardHeader>
      <CardContent className="flex-row">
        <div className="flex flex-row  items-center gap-4">
          <div className="bg-[#FFF] rounded-full">
            <Image src={oragnizerPic} alt={"svg"} width={98} height={98} />
          </div>
          <p className="text-lg font-bold text-[#333333]">{eventTitle}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventOrganizerCard;
