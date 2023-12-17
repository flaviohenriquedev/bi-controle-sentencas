import { axiosInstance } from "./axiosIntance";

export const getDespachos = async ({ idCadastroPai }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/despachos/" + (idCadastroPai && idCadastroPai),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarDespacho = async ({ cadastro }) => {
  try {
    const res = await axiosInstance({
      method: cadastro.id ? "put" : "post",
      url: "/despachos" + (cadastro.id ? "/" + cadastro.id : ""),
      data: {
        dataDespacho: cadastro.dataDespacho,
        processoId: cadastro.processoId,
        andamentoId: cadastro.andamentoId,
        observacao: cadastro.observacao,
      },
    });

    return Promise.resolve(res);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const excluirDespacho = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "delete",
      url: "/despachos/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
