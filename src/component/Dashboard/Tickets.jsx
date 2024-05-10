import React from "react";
import { useGetUsersTicketsQuery } from "../../services/ticketsApi";
import Ticket from "./Ticket";
import { NavLink } from "react-router-dom";
import useGetUser from "../../Hooks/useGetUser";

const Tickets = () => {
  const userInfo = useGetUser();

  const {
    data: tickets,
    isError,
    isLoading,
    isSuccess,
  } = useGetUsersTicketsQuery();

  const userTickets =
    isSuccess && tickets?.filter((user) => user?.userId == userInfo?.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading tickets</div>;
  }

  console.log(tickets, "tickets");

  return (
    <div className="w-full h-full bg-[#E7E7E7] p-4 mx-auto">
      <div className="flex justify-around">
        <h1 className="font-bold text-2xl"> Tickets</h1>
        <NavLink
          to="/create-ticket"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          Create Ticket
        </NavLink>
      </div>

      <div className="flex  flex-col items-center ">
        {userTickets?.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} userInfo={userInfo} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
