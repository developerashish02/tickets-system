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
  }),
});

export const { useCreateTicketMutation } = ticketsApi;
