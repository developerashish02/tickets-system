import React, { useState } from "react";
import TicketDetails from "../TicketDetails";
import ReplayForm from "../ReplayForm";
import useGetUser from "../../Hooks/useGetUser";
import DropdownForm from "../DropdownForm";
import { useSignInQuery } from "../../services/SignUpApi";
import { Link } from "react-router-dom";

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

        <div className="flex space-x-4">
          {userInfo?.role !== "admin" && (
            <p
              className="font-bold text-white  cursor-pointer bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-400"
              onClick={handleOpenForm}
            >
              Reply Ticket
            </p>
          )}

          {userInfo?.role === "user"}
        </div>
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
