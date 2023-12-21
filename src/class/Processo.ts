import {Natureza} from "@/class/Natureza";
import {Comarca} from "@/class/Comarca";
import {Cliente} from "@/class/Cliente";
import {Empresa} from "@/class/Empresa";
import {Advogado} from "@/class/Advogado";

export class Processo {
    constructor(
        public id: number = 0,
        public numeroProcessoInicial: string = '',
        public dataIntimacao: Date = new Date(),
        public dataSentenca: Date = new Date(),
        public dataPagamento: Date = new Date(),
        public dataInicioBeneficio: Date = new Date(),
        public dataInicioPagamentoBeneficio: Date = new Date(),
        public banco: string = '',
        public numeroProcessoRPV: number = 0,
        public valorRPV: string = '',
        public valorHonorarios: string = '',
        public numeroProcessoSucumbencia: number = 0,
        public valorHonorariosSucumbenciais: string = '',
        public numeroProcessoAdministrativo: number = 0,
        public valorHonorariosProcessoAdministrativo: string = '',
        public numeroProcessoTRF: number = 0,
        public valorRendaMensalInicial: string = '',
        public observacoes: string = '',
        public naturezaId: number = 0,
        public comarcaId: number = 0,
        public clienteId: number = 0,
        public empresaId: number = 0,
        public advogadoId: number = 0,
        public usuarioTransacaoId: number = 0,
        public natureza: Natureza = new Natureza(),
        public comarca: Comarca = new Comarca(),
        public cliente: Cliente = new Cliente(),
        public empresa: Empresa = new Empresa(),
        public advogado: Advogado = new Advogado()
    ) {
    }
}
