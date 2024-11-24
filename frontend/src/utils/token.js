import { jwtDecode } from "jwt-decode";

export const getToken = () => {
  const tokenData = localStorage.getItem("token");
  if (!tokenData) {
    return null;
  }

  try {
    const { data } = JSON.parse(tokenData);
    return data?.token || null;
  } catch (error) {
    console.error("Error parsing token:", error);
    return null;
  }
};

export const getDecodedToken = () => {
  const token = getToken();
  return jwtDecode(token);
};

export const deleteToken = () => {
  localStorage.removeItem("token");
};
