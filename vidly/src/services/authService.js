import http from "./httpService";
import { API_ENDPOINT } from "../config.json";

export const login = (email, password) => {
  return http.post(`${API_ENDPOINT}/auth`, { email, password });
};
