import axios from "axios";

const DEV = process.env.NODE_ENV === "development";

export const BASE_URL = DEV
  ? "https://yuklesin.mansuruyar.com/"
  : "https://yuklesin.mansuruyar.com/";
const API_URL = BASE_URL + "api/";

const api_key =
  "BcLtGGL9Ad2ChkvEF2ng7nHv46xWBNgNwL7Be4DUK8j3e8RkpH63r4bjnxwDkTcaA8y3AX4AjuX9b6hpZRyvennUDFUbweuLnQZkVfHwXYE99Hm2ErrGbZpS4mrWCe9j";

export const IMAGE_URL = "http://localhost:3000/";

const axiosInstance = axios.create({
  baseURL: API_URL
});

// axiosInstance.defaults.headers.Accept = "application/json";
// axiosInstance.defaults.baseURL = API_URL;
// axiosInstance.defaults.headers["api_key"] = api_key;
// axiosInstance.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axiosInstance.defaults.headers["Access-Control-Allow-Headers"] = "*";

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("yuklesin_token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err: any) => {}
);
axiosInstance.interceptors.response.use(
  (response: any) => {
    //console.log('axios response', response)
    return response;
  },
  (err: any) => {
    return err?.response?.data;
  }
);
