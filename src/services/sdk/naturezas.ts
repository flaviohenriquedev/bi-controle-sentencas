import { axiosInstance } from "./axiosIntance";
import {Natureza} from "@/class/Natureza";

export const getNaturezas = async (natureza: Natureza) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/naturezas" + (natureza.descricao && "?filtro=" + natureza.descricao),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getNaturezasAutoComplete = async (natureza: Natureza) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/naturezas/auto-complete" + (natureza.descricao && "?filtro=" + natureza.descricao),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarNatureza = async (natureza: Natureza) => {
  try {
    const res = await axiosInstance({
      method: natureza.id ? "put" : "post",
      url: "/naturezas" + (natureza.id ? "/" + natureza.id : ""),
      data: { descricao: natureza.descricao },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirNatureza = async (id: number) => {
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

export const ativarNatureza = async (id: number) => {
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

export const inativarNatureza = async (id: number) => {
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
