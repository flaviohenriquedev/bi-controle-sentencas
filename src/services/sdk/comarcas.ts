import {axiosInstance} from "./axiosIntance";
import {Comarca} from "@/class/Comarca";

export const getComarcas = async (comarca: Comarca) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/comarcas" + (comarca.descricao && "?filtro=" + comarca.descricao),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getComarcasAutoComplete = async (comarca: Comarca) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/comarcas/auto-complete" + (comarca.descricao && "?filtro=" + comarca.descricao),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarComarca = async (comarca: Comarca) => {
  try {
    const res = await axiosInstance({
      method: comarca.id ? "put" : "post",
      url: "/comarcas" + (comarca.id ? "/" + comarca.id : ""),
      data: {
        municipio: comarca.municipio,
        estado: comarca.estado,
        descricao: comarca.descricao,
        tipo: comarca.tipo,
      },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirComarca = async (id: number) => {
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

export const ativarComarca = async (id: number) => {
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

export const inativarComarca = async (id: number) => {
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
