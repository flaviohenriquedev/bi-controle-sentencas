import { axiosInstance } from "./axiosIntance";
import {Cliente} from "@/class/Cliente";

export const getClientes = async (cliente: Cliente) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/clientes" + (cliente.nome && "?filtro=" + cliente.nome),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getClientesAutoComplete = async (cliente: Cliente) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/clientes/auto-complete" + (cliente.nome && "?filtro=" + cliente.nome),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarCliente = async (cliente: Cliente) => {
  try {
    const res = await axiosInstance({
      method: cliente.id ? "put" : "post",
      url: "/clientes" + (cliente.id ? "/" + cliente.id : ""),
      data: { 
              nome: cliente.nome,
              cpf: cliente.cpf
            },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirCliente = async (id: number) => {
  try {
    const res = await axiosInstance({
      method: "delete",
      url: "/clientes/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
