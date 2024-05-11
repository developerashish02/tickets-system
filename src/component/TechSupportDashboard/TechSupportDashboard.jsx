import React from "react";
import Ticket from "../Dashboard/Ticket";
import {
  useGetAssignedTicketQuery,
  useGetUsersTicketsQuery,
} from "../../services/ticketsApi";
import useGetUser from "../../Hooks/useGetUser";

const TechSupportDashboard = () => {
  const {
    data: allAssignedTickets,
    isSuccess: assignedTicketsSuccess,
    isLoading: assignedTicketsLoading,
  } = useGetAssignedTicketQuery();

  const userInfo = useGetUser();
  const assignedMe =
    assignedTicketsSuccess &&
    allAssignedTickets?.filter((user) => user?.dropdown === userInfo?.id);

  const assignedTicketIds =
    assignedTicketsSuccess &&
    assignedMe?.map((assignment) => assignment?.ticketId);

  console.log(assignedTicketIds, "assignedTicketIds");

  const {
    data: tickets,
    isLoading,
    isSuccess,
    isError,
  } = useGetUsersTicketsQuery();

  const assignedTickets =
    assignedTicketsSuccess &&
    tickets?.filter((ticket) => assignedTicketIds.includes(ticket.id));

  console.log(assignedTickets, "assignedTickets");
  if (isLoading || assignedTicketsLoading) {
    return <h1>Lading.......</h1>;
  }

  return (
    <div className="w-full h-full bg-[#E7E7E7] p-4 mx-auto">
      <h1>Tech Dashboard</h1>
      <div>
        {isSuccess &&
          assignedTickets?.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} userInfo={userInfo} />
          ))}
      </div>

      {isError && <p>Something went wrong..</p>}
    </div>
  );
};

export default TechSupportDashboard;
