import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUserDetails: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUserDetails } = userSlice.actions;

export default userSlice.reducer;
