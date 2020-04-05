import http from "./httpService";
import { API_ENDPOINT } from "../config.json";

export const getMovie = (id) => {
  return http.get(`${API_ENDPOINT}/movies/${id}`);
};

export const getMovies = () => {
  return http.get(`${API_ENDPOINT}/movies`);
};

export const deleteMovie = (id) => {
  return http.delete(`${API_ENDPOINT}/movies/${id}`);
};

export const saveMovie = (movie) => {
  const obj = {
    title: movie.title,
    genreId: movie.genre._id,
    numberInStock: +movie.numberInStock,
    dailyRentalRate: +movie.dailyRentalRate,
  };

  if (movie._id) {
    return http.put(`${API_ENDPOINT}/movies/${movie._id}`, obj);
  }

  console.log(obj);
  return http.post(`${API_ENDPOINT}/movies`, obj);
};
