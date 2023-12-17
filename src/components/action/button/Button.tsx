import * as S from './style'
import {HTMLAttributes} from "react";
import {ButtonType} from "@/types/BbuttonType";

interface Props extends HTMLAttributes<HTMLButtonElement>{
    identifier?: string | JSX.Element
    type?: ButtonType
}

export function Button({identifier, type = 'info', onClick} : Props) {
    return (
        <S.ButtonStyle
            typebutton={type}
            onClick={onClick}>
            {identifier}
        </S.ButtonStyle>
    )
}
