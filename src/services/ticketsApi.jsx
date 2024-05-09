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
  }),
});

export const { useCreateTicketMutation, useGetUsersTicketsQuery } = ticketsApi;
