import jwtDecode from "jwt-decode";

export const decodeToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};
