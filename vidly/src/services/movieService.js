import http from "./httpService";
import { API_ENDPOINT } from "../config.json";

export const getMovies = () => {
  return http.get(`${API_ENDPOINT}/movies`);
};

export const deleteMovie = (id) => {
  return http.delete(`${API_ENDPOINT}/movies/${id}`);
};
