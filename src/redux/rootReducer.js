import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./userSlice/userSlice";
import PermissionsReducer from "./userSlice/permissionSlice";
import ForgotPpasswordReducer from "./forgotpasswordSlice/forgotpasswordSlice";
import EstateReducer from "./estateSlice/estateSlice";
import LoggedUserReducer from "./userSlice/serverErrorSlice";
import { communityApi } from "../api/example";
import serverErrorSlice from "./userSlice/serverErrorSlice";

export const rootReducer = combineReducers({
    user: UserReducer,
    permissions:PermissionsReducer,
    serverError:serverErrorSlice,
    loggedUser:LoggedUserReducer,
    estate: EstateReducer,
    forgotPassword: ForgotPpasswordReducer,
    [communityApi.reducerPath]: communityApi.reducer,
});
