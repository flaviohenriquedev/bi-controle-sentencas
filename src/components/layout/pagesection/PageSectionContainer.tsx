import React from "react";
import * as S from './style'

export function PageSectionContainer({children} : {children: React.ReactNode}) {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}
