import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  estate: null,
};

const estateSlice = createSlice({
  name: "estate",
  initialState,
  reducers: {
    setEstate: (state, action) => {
      state.estate = action.payload;
    },
  },
});

export const { setEstate } = estateSlice.actions;
export default estateSlice.reducer;




