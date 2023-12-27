import axios from "axios";

const auth = {token: false};

export const setToken = (token: boolean) => {
  auth.token = token;
};

const endpoints = {
  production: "https://bi-controle-sentencas-api.vercel.app/",
  develop:
    "http://localhost:3001/",
};

export const baseURL =  endpoints.develop;

export const axiosInstance = (params: any) =>
  axios({
    baseURL,
    ...params,
    headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiaWF0IjoxNzAyODMzODk5LCJleHAiOjIwNjI4MzM5Mjl9.d4W1gUlJcqKuaG0NmuiVRWInyFmmUd6qoVaYoB3Qjjs`},
  });
