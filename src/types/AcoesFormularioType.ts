
export type AcoesFormularioType = {
    valor: any
    funcao: (() => void) | ((valor: any) => void);
}
