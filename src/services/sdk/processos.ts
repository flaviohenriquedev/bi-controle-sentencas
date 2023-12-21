import {axiosInstance} from "@/services";
import {Processo} from "@/class/Processo";

export const getProcessos = async (processo: Processo) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/processos" + (processo.numeroProcessoInicial && "?filtro=" + processo.numeroProcessoInicial),
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const salvarProcesso = async (processo: Processo) => {
  try {   
    const res = await axiosInstance({
      method: processo.id ? "put" : "post",
      url: "/processos" + (processo.id ? "/" + processo.id : ""),
      data: {
        numeroProcessoInicial: processo.numeroProcessoInicial,
        dataIntimacao: processo.dataIntimacao,
        dataSentenca: processo.dataSentenca,
        dataPagamento: processo.dataPagamento,
        dataInicioBeneficio: processo.dataInicioBeneficio,
        dataInicioPagamentoBeneficio: processo.dataInicioPagamentoBeneficio,
        banco: processo.banco,
        numeroProcessoRPV: processo.numeroProcessoRPV,
        valorRPV: parseFloat(processo.valorRPV),
        valorHonorarios: parseFloat(processo.valorHonorarios),
        numeroProcessoSucumbencia: processo.numeroProcessoSucumbencia,
        valorHonorariosSucumbenciais: parseFloat(processo.valorHonorariosSucumbenciais),
        numeroProcessoAdministrativo: processo.numeroProcessoAdministrativo,
        valorHonorariosProcessoAdministrativo: parseFloat(processo.valorHonorariosProcessoAdministrativo),
        numeroProcessoTRF: processo.numeroProcessoTRF,
        valorRendaMensalInicial: parseFloat(processo.valorRendaMensalInicial),
        observacoes: processo.observacoes,
        naturezaId: processo.naturezaId,
        comarcaId: processo.comarcaId,
        clienteId: processo.clienteId,
        empresaId: processo.empresaId,
        advogadoId: processo.advogadoId,
      },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const excluirProcesso = async (id: number) => {
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
