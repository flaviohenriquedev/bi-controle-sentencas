import React from "react";
import * as S from './style'

interface Props {
    children: React.ReactNode,
    title?: string
}

export function PageSectionContainer({children, title}: Props) {
    return (
        <S.Container>
            {title && (
                <S.Title>
                    {title}
                </S.Title>
            )}
            {children}
        </S.Container>
    )
}
