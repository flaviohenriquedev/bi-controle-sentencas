import * as S from './style'

interface Props {
    title: string
}
export function PageLayoutHeader ({title} : Props) {
    return (
        <S.Header>
            <label>{title}</label>
        </S.Header>
    )
}
