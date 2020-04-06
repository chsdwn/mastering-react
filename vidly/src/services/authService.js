import jwtDecode from "jwt-decode";
import http from "./httpService";
import { API_ENDPOINT } from "../config.json";

const TOKEN_KEY = "token";

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};

export const getJwt = () => {
  return localStorage.getItem(TOKEN_KEY);
};

http.setJwt(getJwt());

export const login = async (email, password) => {
  const { data: jwt } = await http.post(`${API_ENDPOINT}/auth`, {
    email,
    password,
  });
  localStorage.setItem(TOKEN_KEY, jwt);
};

export const loginWithJwt = (jwt) => {
  localStorage.setItem(TOKEN_KEY, jwt);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
