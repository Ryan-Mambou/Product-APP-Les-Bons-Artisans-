import httpService from "./httpService";

export const register = async (user) => {
  return await httpService.post("/user/register", user);
};

export const login = async (user) => {
  return await httpService.post("/user/login", user);
};
