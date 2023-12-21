export class Comarca {
    constructor(
        public id: number = 0,
        public municipio: string = '',
        public estado: string = '',
        public descricao: string = '',
        public tipo: string = '',
        public usuarioTransacaoId: number = 0,
        public ativo: boolean = true
    ) {
    }
}
