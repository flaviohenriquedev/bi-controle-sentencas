export class Andamento {
    constructor(
        public id: number = 0,
        public descricao: string = '',
        public usuarioTransacaoId: number = 0,
        public ativo: boolean = true
    ) {
    }
}
