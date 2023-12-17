import * as S from './style'
import {HTMLAttributes, ReactNode} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    withIndex?: boolean
}
export function TableRow({children, onDoubleClick, withIndex = true} : Props) {
    return (
        <S.Row onDoubleClick={onDoubleClick}>
            {children}
        </S.Row>
    )
}
