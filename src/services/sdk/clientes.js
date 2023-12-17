import { axiosInstance } from "./axiosIntance";

export const getClientes = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/clientes" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getClientesAutoComplete = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/clientes/auto-complete" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarCliente = async ({ cadastro }) => {
  try {
    const res = await axiosInstance({
      method: cadastro.id ? "put" : "post",
      url: "/clientes" + (cadastro.id ? "/" + cadastro.id : ""),
      data: { 
              nome: cadastro.nome,
              cpf: cadastro.cpf
            },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirCliente = async ({ id }) => {
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
