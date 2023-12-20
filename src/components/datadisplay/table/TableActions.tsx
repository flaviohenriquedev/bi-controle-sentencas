import * as S from './style'
import {MdDeleteOutline} from "react-icons/md";

interface Props {
    metodoExcluir?: (id: any) => void
}

export function TableActions({metodoExcluir}: Props) {
    return (
        <S.Value>
            <div onClick={metodoExcluir}>
                <MdDeleteOutline/>
            </div>
        </S.Value>
    )
}
