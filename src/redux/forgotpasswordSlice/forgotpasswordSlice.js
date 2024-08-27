import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: {},
};

const forgotpasswordSlice = createSlice({
  name: "userEmail",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    }
  },
});


export const { setUserEmail } = forgotpasswordSlice.actions;

export default forgotpasswordSlice.reducer;
