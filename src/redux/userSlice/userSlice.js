import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, setLoading, setError, clearUser } = userSlice.actions;

export default userSlice.reducer;
