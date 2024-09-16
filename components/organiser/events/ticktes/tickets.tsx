"use client";
import React, { useState } from "react";
import { TicketForm } from "./addTicket";
import { Ticket } from "@prisma/client";
import { useParams } from "next/navigation";

interface TicketsProps {
  tickets: Ticket[] | null;
}

const Tickets: React.FC<TicketsProps> = ({ tickets }) => {
  const { eventId } = useParams();

  const [isAddEvent, setAddEvent] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const handleEvent = () => {
    setAddEvent((prev) => !prev);
    if (isAddEvent) {
      setSelectedTicket(null);
    }
  };

  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setAddEvent(true);
  };

  return (
    <>
      <div className="flex justify-evenly items-center gap-3">
        {tickets ? (
          tickets.map((ticket) => (
            <div
              className="w-[200px] aspect-square border border-red-300 flex flex-col justify-center items-center"
              onClick={() => handleTicketClick(ticket)}
              key={ticket.id}
            >
              <h1>Class: {ticket.class}</h1>
              <h3>Price: {ticket.price}</h3>
              <p>Specification: {ticket.specification}</p>
              <p>Total Slot: {ticket.totalSlot}</p>
              {/* <p>Promo Code: {ticket.promoCode}</p> */}
            </div>
          ))
        ) : (
          <div>
            <h4>your not created a ticket for your Event</h4>
          </div>
        )}
        <div
          className="w-[200px] aspect-square border border-red-300 flex flex-col justify-center items-center"
          onClick={handleEvent}
        >
          Add Tickets
        </div>
      </div>
      {isAddEvent && (
        <TicketForm initialData={selectedTicket} handleModel={handleEvent} />
      )}
    </>
  );
};

export default Tickets;
