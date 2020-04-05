import http from "./httpService";
import config from "../config.json";

export const getGenres = async () => {
  try {
    const genres = await http.get(`${config.API_ENDPOINT}/genres`);
    return genres.data;
  } catch (error) {
    console.log(error);
  }
};
