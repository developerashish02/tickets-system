import { useGetUsersTicketRelyQuery } from "../services/ticketsApi";
import useGetUser from "./useGetUser";

const useGetTechSupportReply = (id) => {
  const userDetails = useGetUser();
  if (userDetails === null) return [];
  const { data: replies, isSuccess, isError } = useGetUsersTicketRelyQuery(id);

  const userReplies =
    isSuccess &&
    replies?.filter(
      (user) => user?.userId === userDetails?.id && user?.ticketId === id
    );

  return isSuccess && userReplies ? userReplies : [];
};

export default useGetTechSupportReply;
