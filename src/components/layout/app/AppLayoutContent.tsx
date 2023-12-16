import React from "react";
import * as S from './style'

export function AppLayoutContent({children}: { children: React.ReactNode }) {
    return (
        <S.Content>
            {children}
        </S.Content>
    )
}
