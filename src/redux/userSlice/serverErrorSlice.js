// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userServerError: false,
// };

// const userServerError = createSlice({
//   name: "permissions",
//   initialState,
//   reducers: {
//     setServerError: (state, action) => {
//       state.userServerError = action.payload;
//     }
//   },
// });

// export const { setServerError } = userServerError.actions;

// export default userServerError.reducer;




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: null,
};

const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

export const { setLoggedUser } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;

