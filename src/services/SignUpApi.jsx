import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const signUpApi = createApi({
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
  }),
});

export const { useSignUpMutation } = signUpApi;
export default signUpApi.reducer;
