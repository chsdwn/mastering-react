import http from "./httpService";
import config from "../config.json";

export const getMovies = () => {
  return http.get(`${config.API_ENDPOINT}/movies`);
};

export const deleteMovie = (id) => {
  return http.delete(`${config.API_ENDPOINT}/movies/${id}`);
};
