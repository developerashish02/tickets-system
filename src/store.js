import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./services/SignUpApi";
import userSlice from "./actions/userSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    signUpApi: signUpReducer,
  },
});

export default appStore;
