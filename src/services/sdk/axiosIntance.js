import axios from "axios";

const auth = {};

export const setToken = (token) => {
  auth.token = token;
};

const endpoints = {
  production: "https://bi-controle-sentencas-api.vercel.app/",
  develop:
    "http://localhost:3001/",
};

export const baseURL =
  endpoints?.[process.env.REACT_APP_API_ENV] ||
  process.env.REACT_APP_CUSTOM_URL ||
  endpoints.develop;

export const axiosInstance = (params) =>
  axios({
    baseURL,
    ...params,
    headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiaWF0IjoxNzAyODMzODk5LCJleHAiOjIwNjI4MzM5Mjl9.d4W1gUlJcqKuaG0NmuiVRWInyFmmUd6qoVaYoB3Qjjs`},
  });
