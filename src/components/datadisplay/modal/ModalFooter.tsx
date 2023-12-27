import * as S from './style'
import {ReactNode} from "react";
import {Footer} from "./style";

interface ModalFooterProps {
    children: ReactNode
}
export function ModalFooter({children} : ModalFooterProps) {
    return (
        <S.Footer>
            {children}
        </S.Footer>
    )
}
