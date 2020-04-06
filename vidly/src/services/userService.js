import http from "./httpService";
import { API_ENDPOINT } from "../config.json";

export const register = (user) => {
  return http.post(`${API_ENDPOINT}/users`, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
};
