import * as S from './style'
import {ReactNode} from "react";

interface ModalContentProps {
    children: ReactNode
}
export function ModalContent({children} : ModalContentProps) {
    return (
        <S.Content>
            {children}
        </S.Content>
    )
}
