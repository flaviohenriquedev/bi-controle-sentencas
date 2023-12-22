'use client'

import React, {useContext} from "react";
import * as S from './style'
import {SideMenuContext} from "@/context/app/SideMenuContext";

export function AppLayoutContent({children}: { children: React.ReactNode }) {
    const {expanded} = useContext(SideMenuContext)

    return (
        <S.Content expandido={expanded}>
            {children}
        </S.Content>
    )
}
