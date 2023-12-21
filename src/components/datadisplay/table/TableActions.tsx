import * as S from './style'
import {MdDeleteOutline} from "react-icons/md";

interface Props {
    metodoExcluir?: (id: any) => void
    alignment?: "left" | "center" | "right"
}

export function TableActions({metodoExcluir, alignment = "center"}: Props) {
    return (
        <S.Value>
            <S.ValueContent onClick={metodoExcluir} alignment={alignment}>
                <MdDeleteOutline/>
            </S.ValueContent>
        </S.Value>
    )
}
