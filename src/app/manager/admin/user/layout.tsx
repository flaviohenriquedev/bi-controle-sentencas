import {PageLayout} from "@/components/layout/pagelayout";
import React from "react";

export default function UsuarioLayout ({children} : {children : React.ReactNode}) {
    return (
        <PageLayout.Container>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}
