import http from "./httpService";
import config from "../config.json";

export const getMovies = async () => {
  try {
    const movies = await http.get(`${config.API_ENDPOINT}/movies`);
    return movies.data;
  } catch (error) {
    console.log(error);
  }
};
