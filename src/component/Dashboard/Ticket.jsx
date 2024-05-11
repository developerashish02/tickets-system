import React, { useState } from "react";
import TicketDetails from "../TicketDetails";
import ReplayForm from "../ReplayForm";
import useGetUser from "../../Hooks/useGetUser";
import DropdownForm from "../DropdownForm";

const Ticket = ({ ticket, userInfo }) => {
  const [replay, setReplay] = useState(false);

  const handleOpenForm = (e) => {
    // e.preventDefault();
    setReplay(!replay);
  };

  return (
    <div className="bg-white p-4 m-4 shadow-md rounded-md w-8/12">
      <TicketDetails moreInfo={ticket} />

      <div className="flex items-center justify-between">
        <div className="flex space-x-4 items-center my-2">
          <span>{userInfo?.username}</span>
        </div>

        <p
          className="font-bold text-blue-500 underline cursor-pointer"
          onClick={handleOpenForm}
        >
          Open Tickets
        </p>
      </div>

      {userInfo.role === "admin" && <DropdownForm />}
      {userInfo.role !== "admin" && <ReplayForm moreInfo={ticket} />}
    </div>
  );
};

export default Ticket;
