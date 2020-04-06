import axios from "axios";

export const setJwt = (jwt) => {
  axios.defaults.headers.common["x-auth-token"] = jwt;
  console.log("jwt setted", jwt);
};

export default {
  delete: axios.delete,
  get: axios.get,
  post: axios.post,
  put: axios.put,
  setJwt,
};
