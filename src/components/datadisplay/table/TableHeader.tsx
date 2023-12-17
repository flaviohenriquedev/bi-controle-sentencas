import {ReactNode} from "react";
import * as S from './style'
import {CommonInterface} from "@/app/interface/CommonInterface";

interface Props extends CommonInterface {}

export function TableHeader({children}: Props) {
    return (
        <S.Header>
            {children}
        </S.Header>
    )
}
