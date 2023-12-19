export class Empresa {
    constructor(
        public id: number = 0,
        public cnpj: string = '',
        public nome: string = '',
        public usuarioTransacaoId: number = 0,
        public ativo: boolean = true
    ) {}
}
