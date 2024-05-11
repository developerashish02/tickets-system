import React, { useState } from "react";
import TicketDetails from "../TicketDetails";
import ReplayForm from "../ReplayForm";
import useGetUser from "../../Hooks/useGetUser";
import DropdownForm from "../DropdownForm";
import { useSignInQuery } from "../../services/SignUpApi";

const Ticket = ({ ticket, userInfo }) => {
  const [replay, setReplay] = useState(false);
  const {
    data: techSupport,
    isSuccess: techIsSuccess,
    isLoading,
  } = useSignInQuery();

  const techTeam =
    techIsSuccess &&
    techSupport?.filter((user) => user?.role === "tech-support");

  const handleOpenForm = (e) => {
    setReplay(!replay);
  };

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
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

      {userInfo.role === "admin" && (
        <DropdownForm
          techTeam={techTeam}
          userId={userInfo?.id}
          ticketId={ticket?.id}
        />
      )}
      {userInfo.role !== "admin" && replay && <ReplayForm moreInfo={ticket} />}
    </div>
  );
};

export default Ticket;
