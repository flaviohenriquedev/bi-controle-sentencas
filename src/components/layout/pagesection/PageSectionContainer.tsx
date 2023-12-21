import React from "react";
import * as S from './style'
import {CommonInterface} from "@/interface/CommonInterface";
import {Header} from "./style";

interface Props extends CommonInterface{
    titulo?: string
    mostrarNovoCadastro?: boolean
    metodoAbrirFormulario?: () => void
}

export function PageSectionContainer({children, titulo, metodoAbrirFormulario}: Props) {
    return (
        <S.Container>
            {titulo && (
                <S.Header>
                    <S.Label>
                        {titulo}
                    </S.Label>
                    <S.NovoCadastro onClick={() => metodoAbrirFormulario && metodoAbrirFormulario()}>
                        Novo Cadastro
                    </S.NovoCadastro>
                </S.Header>
            )}
            {children}
        </S.Container>
    )
}
