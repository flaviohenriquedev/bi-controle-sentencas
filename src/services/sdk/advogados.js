import { axiosInstance } from "./axiosIntance";

export const getAdvogados = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/advogados" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAdvogadosAutoComplete = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/advogados/auto-complete" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarAdvogado = async ({ cadastro }) => {
  try {
    const res = await axiosInstance({
      method: cadastro.id ? "put" : "post",
      url: "/advogados" + (cadastro.id ? "/" + cadastro.id : ""),
      data: { nome: cadastro.nome },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirAdvogado = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "delete",
      url: "/advogados/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
