import { axiosInstance } from "./axiosIntance";

export const getNaturezas = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/naturezas" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getNaturezasAutoComplete = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/naturezas/auto-complete" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarNatureza = async ({ cadastro }) => {
  try {
    const res = await axiosInstance({
      method: cadastro.id ? "put" : "post",
      url: "/naturezas" + (cadastro.id ? "/" + cadastro.id : ""),
      data: { descricao: cadastro.descricao },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirNatureza = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "delete",
      url: "/naturezas/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ativarNatureza = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/naturezas/ativar/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const inativarNatureza = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/naturezas/inativar/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
