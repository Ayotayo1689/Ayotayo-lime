import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPermissions: null,
};

const userPermissions = createSlice({
  name: "permissions",
  initialState,
  reducers: {
    setPermissions: (state, action) => {
      state.userPermissions = action.payload;
    }
  },
});

export const { setPermissions } = userPermissions.actions;

export default userPermissions.reducer;
