import * as S from './style'
import {HTMLAttributes} from "react";
import {ButtonType} from "@/types/BbuttonType";

interface Props extends HTMLAttributes<HTMLButtonElement>{
    identifier?: string | JSX.Element
    type?: ButtonType
}

export function Button({identifier, type = 'info', onClick, className} : Props) {
    return (
        <S.ButtonStyle
            typebutton={type}
            onClick={onClick}
            className={className}>
            {identifier}
        </S.ButtonStyle>
    )
}
