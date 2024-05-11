import React from "react";
import Ticket from "../Dashboard/Ticket";
import { useGetUsersTicketsQuery } from "../../services/ticketsApi";
import useGetUser from "../../Hooks/useGetUser";
import { useSignInQuery } from "../../services/SignUpApi";

const AdminDashboard = () => {
  const {
    data: tickets,
    isLoading,
    isSuccess,
    isError,
  } = useGetUsersTicketsQuery();



  const userInfo = useGetUser();

  if (isLoading) {
    return <h1>Lading.......</h1>;
  }

  return (
    <div className="w-full h-full bg-[#E7E7E7] p-4 mx-auto">
      <h1>Admin Dashboard</h1>
      <div>
        {isSuccess &&
          tickets?.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} userInfo={userInfo} />
          ))}
      </div>

      {isError && <p>Something went wrong..</p>}
    </div>
  );
};

export default AdminDashboard;
