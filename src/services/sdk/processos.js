import { axiosInstance } from "./axiosIntance";

export const getProcessos = async ({ filtro }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/processos" + (filtro && "?filtro=" + filtro),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarProcesso = async ({ cadastro }) => {
  try {   
    const res = await axiosInstance({
      method: cadastro.id ? "put" : "post",
      url: "/processos" + (cadastro.id ? "/" + cadastro.id : ""),
      data: {
        numeroProcessoInicial: cadastro.numeroProcessoInicial,
        dataIntimacao: cadastro.dataIntimacao,
        dataSentenca: cadastro.dataSentenca,
        dataPagamento: cadastro.dataPagamento,
        dataInicioBeneficio: cadastro.dataInicioBeneficio,
        dataInicioPagamentoBeneficio: cadastro.dataInicioPagamentoBeneficio,
        banco: cadastro.banco,
        numeroProcessoRPV: cadastro.numeroProcessoRPV,
        valorRPV: parseFloat(cadastro.valorRPV),
        valorHonorarios: parseFloat(cadastro.valorHonorarios),
        numeroProcessoSucumbencia: cadastro.numeroProcessoSucumbencia,
        valorHonorariosSucumbenciais: parseFloat(cadastro.valorHonorariosSucumbenciais),
        numeroProcessoAdministrativo: cadastro.numeroProcessoAdministrativo,
        valorHonorariosProcessoAdministrativo: parseFloat(cadastro.valorHonorariosProcessoAdministrativo),
        numeroProcessoTRF: cadastro.numeroProcessoTRF,
        valorRendaMensalInicial: parseFloat(cadastro.valorRendaMensalInicial),
        observacoes: cadastro.observacoes,              
        naturezaId: cadastro.naturezaId,
        comarcaId: cadastro.comarcaId,
        clienteId: cadastro.clienteId,
        empresaId: cadastro.empresaId,
        advogadoId: cadastro.advogadoId,
      },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirProcesso = async ({ id }) => {
  try {
    const res = await axiosInstance({
      method: "delete",
      url: "/processos/" + id,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
