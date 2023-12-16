import {AppLayout} from "@/components/layout/applayout";
import React from "react";
import * as S from './style'
import {Routes} from '@/data/routes'
import {Providers} from "@/provider/Providers";

export default function ManagerLayout({children}: { children: React.ReactNode }) {
    return (
        <Providers>
            <AppLayout.Container>
                <AppLayout.Header/>
                <S.SidemenuAndContent>
                    <AppLayout.Sidemenu routes={Routes}/>
                    <AppLayout.Content>
                        {children}
                    </AppLayout.Content>
                </S.SidemenuAndContent>
            </AppLayout.Container>
        </Providers>
    )
}
