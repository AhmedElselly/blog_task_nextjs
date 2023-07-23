import { api } from "./baseUrl";
import cookie from 'js-cookie';

export const login = async (values) => {
  const res = await api.post(`/users/login`, values);
  return res;
};

export const register = async (values) => {
  const res = await api.post(`/users/register`, values);
  return res;
};


export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, JSON.stringify(value));
  }
};

export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key);
  }
};

export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const isAuthenticated = () => {
  if (process.browser) {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

export const authenticate = (data, next) => {
  setLocalStorage("user", data);
  setCookie("token", data);
  next();
};

export const logout = async () => {
  if (localStorage.getItem("user")) {
    removeCookie("token");
    removeLocalStorage("user");
  }
};