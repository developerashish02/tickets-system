import React from "react";

const TicketDetails = ({ moreInfo }) => {
  const {
    date,
    description,
    "ticket-name": ticketName,
    id,
    isResolved,
  } = moreInfo;
  return (
    <div>
      <div className="mb-2 flex space-x-2 items-center">
        <div>
          <p className="rounded-full bg-yellow-500 h-4 w-4"></p>
        </div>

        <div className="flex justify-between  w-full">
          <div className="flex space-x-8 items-center">
            <h1 className="font-extrabold">Tickets# {id} </h1>
            {isResolved ? (
              <span className="bg-green-300 px-3 py-2 rounded-md text-sm font-semibold">
                Resolved
              </span>
            ) : (
              <span className="bg-yellow-300 px-3 py-2 rounded-md text-sm font-semibold">
                On Going
              </span>
            )}
          </div>
          <p className="text-base font-semibold"> {date}</p>
        </div>
      </div>

      <p className="font-medium text-base mb-2">{ticketName} </p>

      <p className="text-sm">{description}</p>

      <hr className="my-4" />
    </div>
  );
};

export default TicketDetails;
