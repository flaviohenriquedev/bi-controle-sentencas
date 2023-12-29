import axios from "axios";
import {Autenticacao} from "@/class/Autenticacao";

const auth: Autenticacao = new Autenticacao();

export const setToken = (token: string) => {
    auth.token = token
};

const endpoints = {
    production: "https://bi-controle-sentencas-api.vercel.app/",
    develop: "https://bi-controle-sentencas-api-git-develop-thiagordepaiva.vercel.app/",
    test: "http://localhost:3001"
};

export const baseURL = endpoints.test;

export const axiosInstance = (params: any) =>
    axios({
        baseURL,
        ...params,
        headers: {
            ...(auth.token && {
                Authorization: `Bearer ${auth.token}`,
            }),
        },
    });
