import React from "react";
import * as S from './style'
import {CommonInterface} from "@/interface/CommonInterface";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

interface Props extends CommonInterface{
    titulo?: string
    objetoNovoCadastro?: AcoesFormularioType
    objetoSalvarCadastro?: AcoesFormularioType
    objetoCancelarCadastro?: AcoesFormularioType
}

export function PageSectionContainer({
                                         children,
                                         titulo,
                                         objetoNovoCadastro,
                                         objetoSalvarCadastro,
                                         objetoCancelarCadastro
                                     }: Props) {
    return (
        <S.Container>
            {titulo && (
                <S.Header>
                    <S.Label>
                        {titulo}
                    </S.Label>

                    <S.Botao tipo={`novo`}
                             onClick={() => objetoNovoCadastro && objetoNovoCadastro.funcao(objetoNovoCadastro.valor)}>
                        Novo Cadastro
                    </S.Botao>

                    {objetoNovoCadastro && objetoNovoCadastro.valor && (
                        <>
                            <S.Botao tipo={`salvar`} onClick={() => objetoSalvarCadastro && objetoSalvarCadastro.funcao(objetoSalvarCadastro.valor)}>
                                Salvar
                            </S.Botao>

                            <S.Botao tipo={`cancelar`} onClick={() => objetoCancelarCadastro && objetoCancelarCadastro.funcao(objetoCancelarCadastro.valor)}>
                                Cancelar
                            </S.Botao>
                        </>
                    )}
                </S.Header>
            )}
            {children}
        </S.Container>
    )
}
