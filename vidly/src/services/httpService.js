import axios from "axios";

import { getJwt } from "./authService";

axios.defaults.headers.common["x-auth-token"] = getJwt();

export default {
  delete: axios.delete,
  get: axios.get,
  post: axios.post,
  put: axios.put,
};
