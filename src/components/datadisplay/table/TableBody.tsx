import * as S from './style'
import {CommonInterface} from "@/interface/CommonInterface";

interface TableBodyProps extends CommonInterface{}

export function TableBody({children}: TableBodyProps) {
    return (
        <S.Body>
            {children}
        </S.Body>
    )
}
