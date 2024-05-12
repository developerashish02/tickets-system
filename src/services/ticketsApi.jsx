import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ticketsApi = createApi({
  reducerPath: "ticketsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Tickets", "Response", "Assigned"],
  endpoints: (builder) => ({
    createTicket: builder.mutation({
      query: (ticketsData) => ({
        url: "/tickets",
        method: "POST",
        body: ticketsData,
      }),
      invalidatesTags: ["Tickets"],
    }),

    getUsersTickets: builder.query({
      query: (userId) => `/tickets`,
      providesTags: ["Tickets", "Assigned"],
    }),

    getUsersTicketRely: builder.query({
      query: (userId) => `/ticket-replies`,
      providesTags: ["Response"],
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
      invalidatesTags: ["Tickets"],
    }),

    assignedTicket: builder.mutation({
      query: (data) => ({
        url: "/tickets-assigned",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Assigned"],
    }),

    getAssignedTicket: builder.query({
      query: () => "/tickets-assigned",
      providesTags: ["Assigned"],
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
  useAssignedTicketMutation,
  useGetAssignedTicketQuery,
} = ticketsApi;
