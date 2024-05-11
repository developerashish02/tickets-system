import React from "react";
import {
  useGetUsersTicketRelyQuery,
  useGetUserTicketQuery,
} from "../../services/ticketsApi";
import useGetUser from "../../Hooks/useGetUser";
import { useParams } from "react-router-dom";
import TicketDetails from "../TicketDetails";

const TicketResponseDetails = () => {
  const userDetails = useGetUser();
  const params = useParams();
  const { ticketId } = params;

  const {
    data: replies,
    isSuccess,
    isError,
    isLoading,
  } = useGetUsersTicketRelyQuery();

  const {
    data: ticket,
    isLoading: ticketLoading,
    isSuccess: ticketIsSuccess,
  } = useGetUserTicketQuery(ticketId);

  const userReplies =
    isSuccess &&
    replies?.filter(
      (user) => user?.userId === userDetails?.id && user?.ticketId === ticketId
    );
  console.log(userReplies, "ticket");

  return (
    <div className="w-full h-full bg-[#E7E7E7] p-4 mx-auto">
      <div className="bg-white m-4 px-8 py-6 rounded-md shadow-lg ">
        <div>
          {isSuccess && ticketIsSuccess && <TicketDetails moreInfo={ticket} />}
        </div>
        {userReplies.length > 0 && (
          <ul>
            <h1 className="font-semibold underline text-xl">
              Tickets Replays :
            </h1>
            {userReplies?.map((response) => (
              <div className="ml-8 my-2 shadow-md p-4 bg-gray-200 rounded-xl">
                <div className="flex justify-between">
                  <li>{response?.description}</li>
                  <span className="font-bold text-sm"> {response?.date} </span>
                </div>

                <p className="mt-2 font-bold"> {response?.userName} </p>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TicketResponseDetails;
