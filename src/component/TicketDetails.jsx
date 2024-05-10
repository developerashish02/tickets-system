import React from "react";

const TicketDetails = ({ moreInfo }) => {
  const { date, description, "ticket-name": ticketName, id } = moreInfo;
  return (
    <div>
      <div className="mb-2 flex space-x-2 items-center">
        <p className="rounded-full bg-yellow-500 h-4 w-4"></p>

        <h1 className="font-extrabold">Tickets# {id} </h1>

        <p className="text-right font-bold"> {date}</p>
      </div>

      <p className="font-medium text-base mb-2">{ticketName} </p>

      <p className="text-sm">{description}</p>

      <hr className="my-4" />
    </div>
  );
};

export default TicketDetails;
