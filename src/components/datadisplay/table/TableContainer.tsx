import * as S from "./style";
import {CommonInterface} from "@/app/interface/CommonInterface";

interface Props extends CommonInterface{}

export function TableContainer({ children }: Props) {
    return <S.Table>{children}</S.Table>;
}
