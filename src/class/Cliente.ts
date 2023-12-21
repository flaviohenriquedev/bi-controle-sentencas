export class Cliente {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public cpf: string = '',
        public usuarioTransacaoId: number = 0
    ) {
    }
}
