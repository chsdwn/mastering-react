import http from "./httpService";
import { API_ENDPOINT } from "../config.json";

const movieUrl = (id) => `${API_ENDPOINT}/movies/${id}`;

export const getMovie = (id) => {
  return http.get(movieUrl(id));
};

export const getMovies = () => {
  return http.get(`${API_ENDPOINT}/movies`);
};

export const deleteMovie = (id) => {
  return http.delete(movieUrl(id));
};

export const saveMovie = (movie) => {
  const obj = {
    title: movie.title,
    genreId: movie.genre._id,
    numberInStock: +movie.numberInStock,
    dailyRentalRate: +movie.dailyRentalRate,
  };

  if (movie._id) {
    return http.put(movieUrl(movie._id));
  }

  console.log(obj);
  return http.post(`${API_ENDPOINT}/movies`, obj);
};
