import { axiosInstance } from "./axiosIntance";
import {Advogado} from "@/class/Advogado";

export const getAdvogados = async (advogado: Advogado) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/advogados" + (advogado.nome && "?filtro=" + advogado.nome),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAdvogadosAutoComplete = async (advogado: Advogado) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/advogados/auto-complete" + (advogado.nome && "?filtro=" + advogado.nome),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarAdvogado = async (advogado: Advogado) => {
  try {
    const res = await axiosInstance({
      method: advogado.id ? "put" : "post",
      url: "/advogados" + (advogado.id ? "/" + advogado.id : ""),
      data: { nome: advogado.nome },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirAdvogado = async (id: number) => {
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
