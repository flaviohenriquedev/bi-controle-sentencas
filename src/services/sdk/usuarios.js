import { axiosInstance } from "./axiosIntance";

export const getUsuarios = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/usuarios" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarUsuario = async ({ cadastro }) => {
  try {
    const res = await axiosInstance({
      method: cadastro.id ? "put" : "post",
      url: "/usuarios" + (cadastro.id ? "/" + cadastro.id : ""),
      data: {
        nome: cadastro.nome,
        email: cadastro.email,
      },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirUsuario = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "delete",
      url: "/usuarios/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ativarUsuario = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/usuarios/ativar/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const inativarUsuario = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/usuarios/inativar/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const resetarSenhaUsuario = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/usuarios/resetar-senha/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const alterarSenhaUsuario = async ({ senhaAtual, novaSenha }) => {
  try {
    const res = await axiosInstance({
      method: "patch",
      url: "/usuarios/alterar-senha",
      data: {
        senhaAtual,
        novaSenha,
      },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
