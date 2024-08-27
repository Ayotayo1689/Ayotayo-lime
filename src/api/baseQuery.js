import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "./constants";
import jwtDecode from "jwt-decode";

const handleUnauthorizedError = () => {
  localStorage.clear();
  window.location.href = "/session-expired";
  // document.write("Session Expired")
  console.log("Session expired. Please log in again.");
};

const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  try {
    //  console.log( currentTime);
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);

    return true; // Treat decoding errors as token expiration
  }
};

export const BaseQuery = fetchBaseQuery({
  baseUrl: API.baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("token");
    // const token = getState()?.user?.userInfo?.data?.accessToken;
    // console.log(token)
    // console.log(getState());

    // console.log(headers);

    if (token) {
      if (isTokenExpired(token)) {
        handleUnauthorizedError();
      } else {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }

    // if (!headers.has("Authorization") && token) {
    //   headers.set("Authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});

export const { useGetExampleQuery } = BaseQuery;
