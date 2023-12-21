import {axiosInstance} from "./axiosIntance";
import {Andamento} from "@/class/Andamento";

export const getAndamentos = async (andamento: Andamento) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/andamentos" + (andamento.descricao && "?filtro=" + andamento.descricao),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAndamentosAutoComplete = async (andamento: Andamento) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/andamentos/auto-complete" + (andamento.descricao && "?filtro=" + andamento.descricao),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarAndamento = async (andamento: Andamento) => {
  try {
    const res = await axiosInstance({
      method: andamento.id ? "put" : "post",
      url: "/andamentos" + (andamento.id ? "/" + andamento.id : ""),
      data: { descricao: andamento.descricao },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirAndamento = async (id: number) => {
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

export const ativarAndamento = async (id: number) => {
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

export const inativarAndamento = async (id: number) => {
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
