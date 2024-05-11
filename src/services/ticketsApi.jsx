import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ticketsApi = createApi({
  reducerPath: "ticketsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    createTicket: builder.mutation({
      query: (ticketsData) => ({
        url: "/tickets",
        method: "POST",
        body: ticketsData,
      }),
    }),

    getUsersTickets: builder.query({
      query: (userId) => `/tickets`,
    }),

    getUsersTicketRely: builder.query({
      query: (userId) => `/ticket-replies`,
    }),

    getUserTicket: builder.query({
      query: (ticketId) => `/tickets/${ticketId}`,
    }),

    markAsResolved: builder.mutation({
      query: (ticketId) => ({
        url: `/tickets/${ticketId}`,
        method: "PATCH",
        body: { isResolved: true },
      }),
    }),

    addReplyToTicket: builder.mutation({
      query: (updatedTicket) => ({
        url: "/ticket-replies",
        method: "POST",
        body: updatedTicket,
      }),
    }),
  }),
});

export const {
  useCreateTicketMutation,
  useGetUsersTicketsQuery,
  useAddReplyToTicketMutation,
  useGetUserTicketQuery,
  useMarkAsResolvedMutation,
  useGetUsersTicketRelyQuery,
} = ticketsApi;
