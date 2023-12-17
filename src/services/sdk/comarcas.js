import { axiosInstance } from "./axiosIntance";

export const getComarcas = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/comarcas" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getComarcasAutoComplete = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/comarcas/auto-complete" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarComarca = async ({ cadastro }) => {
  try {
    const res = await axiosInstance({
      method: cadastro.id ? "put" : "post",
      url: "/comarcas" + (cadastro.id ? "/" + cadastro.id : ""),
      data: {
        municipio: cadastro.municipio,
        estado: cadastro.estado,
        descricao: cadastro.descricao,
        tipo: cadastro.tipo,
      },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirComarca = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "delete",
      url: "/comarcas/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ativarComarca = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/comarcas/ativar/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const inativarComarca = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/comarcas/inativar/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
