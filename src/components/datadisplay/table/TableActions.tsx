import * as S from './style'
import {MdDeleteOutline} from "react-icons/md";

interface Props {
    metodoExcluir?: (id: any) => void
    alignment?: "left" | "center" | "right"
    classname?: string
}

export function TableActions({metodoExcluir, alignment = "center", classname}: Props) {
    return (
        <S.Value className={classname}>
            <S.ValueContent onClick={metodoExcluir} alignment={alignment}>
                <MdDeleteOutline/>
            </S.ValueContent>
        </S.Value>
    )
}
