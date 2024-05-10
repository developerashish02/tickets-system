import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userDetails) => ({
        url: "/users",
        method: "POST",
        body: userDetails,
      }),
    }),

    signIn: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useSignUpMutation, useSignInQuery } = signUpApi;
