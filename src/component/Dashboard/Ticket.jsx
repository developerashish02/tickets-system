import React from "react";
import useGetUser from "../../Hooks/useGetUser";

const Ticket = ({ ticket }) => {
  const { date, description, "ticket-name": ticketName, id } = ticket;
  const { data } = useGetUser();
  const { username } = data;

  console.log("data", data);

  console.log(ticket, "ticket");
  return (
    <div className="bg-white p-4 m-4 shadow-md rounded-md w-8/12">
      <div className="mb-2 flex space-x-2 items-center">
        <p className="rounded-full bg-yellow-500 h-4 w-4"></p>

        <h1 className="font-extrabold">Tickets# {id} </h1>

        <p className="text-right font-bold"> {date}</p>
      </div>

      <p className="font-medium text-base mb-2">{ticketName} </p>

      <p className="text-sm">{description}</p>

      <hr className="my-4" />

      <div className="flex space-x-4 items-center my-2">
        <img
          className="h-10 w-10 rounded-full"
          src="https://imgs.search.brave.com/INxZ1HlsxtfR-5xtNfavRgMyJ0wiVETft-WsJxJE2Jo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/Nzg1MTU3NC9waG90/by9wcm9maWxlLW9m/LXlvdW5nLXdvbWFu/cy1mYWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1GQjIy/UmIwM3NZZkNiTl9M/MmNoQ2psNHVTN2JU/VTdWN1U5WEUySEZx/SFpRPQ"
          alt="profile"
        />
        <span>{username}</span>
      </div>
    </div>
  );
};

export default Ticket;
