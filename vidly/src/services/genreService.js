import http from "./httpService";
import { API_ENDPOINT } from "../config.json";

export const getGenres = () => {
  return http.get(`${API_ENDPOINT}/genres`);
};
