import {AppLayout} from "@/components/layout/app";
import React from "react";
import * as S from './style'

export default function ManagerLayout({children}: { children: React.ReactNode }) {
    return (
        <AppLayout.Container>
            <AppLayout.Header/>
            <S.SidemenuAndContent>
                <AppLayout.Sidemenu/>
                <AppLayout.Content>
                    {children}
                </AppLayout.Content>
            </S.SidemenuAndContent>
        </AppLayout.Container>
    )
}
