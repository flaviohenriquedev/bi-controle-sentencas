import { axiosInstance } from "./axiosIntance";

export const getAndamentos = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/andamentos" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAndamentosAutoComplete = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/andamentos/auto-complete" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarAndamento = async ({ cadastro }) => {
  try {
    const res = await axiosInstance({
      method: cadastro.id ? "put" : "post",
      url: "/andamentos" + (cadastro.id ? "/" + cadastro.id : ""),
      data: { descricao: cadastro.descricao },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirAndamento = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "delete",
      url: "/andamentos/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ativarAndamento = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/andamentos/ativar/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const inativarAndamento = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/andamentos/inativar/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
