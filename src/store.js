import { configureStore } from "@reduxjs/toolkit";
import { ticketsApi } from "./services/ticketsApi";
import { signUpApi } from "./services/signUpApi";

const appStore = configureStore({
  reducer: {
    [ticketsApi.reducerPath]: ticketsApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signUpApi.middleware, ticketsApi.middleware),
});

export default appStore;
