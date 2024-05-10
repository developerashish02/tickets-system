import React, { useState } from "react";
import useGetUser from "../../Hooks/useGetUser";
import TicketDetails from "../TicketDetails";
import { Link } from "react-router-dom";
import ReplayForm from "../ReplayForm";

const Ticket = ({ ticket, userInfo }) => {
  const [replay, setReplay] = useState(false);
  return (
    <div className="bg-white p-4 m-4 shadow-md rounded-md w-8/12">
      <TicketDetails moreInfo={ticket} />

      <div className="flex items-center justify-between">
        <div className="flex space-x-4 items-center my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://imgs.search.brave.com/INxZ1HlsxtfR-5xtNfavRgMyJ0wiVETft-WsJxJE2Jo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/Nzg1MTU3NC9waG90/by9wcm9maWxlLW9m/LXlvdW5nLXdvbWFu/cy1mYWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1GQjIy/UmIwM3NZZkNiTl9M/MmNoQ2psNHVTN2JU/VTdWN1U5WEUySEZx/SFpRPQ"
            alt="profile"
          />
          <span>{userInfo?.username}</span>
        </div>

        <p
          className="font-bold text-blue-500 underline cursor-pointer"
          onClick={() => setReplay(!replay)}
        >
          Open Tickets
        </p>
      </div>

      {replay && <ReplayForm moreInfo={ticket} />}
    </div>
  );
};

export default Ticket;
