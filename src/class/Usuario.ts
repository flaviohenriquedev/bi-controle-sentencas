export class Usuario {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public email: string = '',
        public usuarioTransacaoId: number = 0,
        public ativo: boolean = true
    ) {
    }
}
