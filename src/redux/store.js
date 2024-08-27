import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  REHYDRATE,
  PERSIST,
  persistReducer,
  FLUSH,
  persistStore,
  PURGE,
  REGISTER,
  PAUSE,
} from "redux-persist";
import { rootReducer } from "./rootReducer";
import { communityApi } from "../api/example";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "permissions", "estate", "forgotPassword", "loggedUser"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([communityApi.middleware]),
});

export const RootState = store.getState;
export const persistor = persistStore(store);
export const AppDispatch = store.dispatch;
export default store;
