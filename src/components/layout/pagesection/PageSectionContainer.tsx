import React from "react";
import * as S from './style'
import {CommonInterface} from "@/interface/CommonInterface";
import {TAcoesFormulario} from "@/components/pages/admin/company/EmpresaComponete";
import {Empresa} from "@/class/Empresa";

interface Props extends CommonInterface{
    titulo?: string
    objetoNovoCadastro?: TAcoesFormulario
    objetoSalvarCadastro?: TAcoesFormulario
    objetoCancelarCadastro?: TAcoesFormulario
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
                    {objetoNovoCadastro && objetoNovoCadastro.valor ? (
                        <>
                            <S.Botao tipo={`salvar`} onClick={() => objetoSalvarCadastro && objetoSalvarCadastro.funcao(objetoSalvarCadastro.valor)}>
                                Salvar
                            </S.Botao>

                            <S.Botao tipo={`cancelar`} onClick={() => objetoCancelarCadastro && objetoCancelarCadastro.funcao(objetoCancelarCadastro.valor)}>
                                Cancelar
                            </S.Botao>
                        </>
                    ) : (
                        <S.Botao tipo={`novo`} onClick={() => objetoNovoCadastro && objetoNovoCadastro.funcao(objetoNovoCadastro.valor)}>
                            Novo Cadastro
                        </S.Botao>
                    )}
                </S.Header>
            )}
            {children}
        </S.Container>
    )
}
