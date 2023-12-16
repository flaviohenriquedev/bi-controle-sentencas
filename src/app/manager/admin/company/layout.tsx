import {PageLayout} from "../../../../components/layout/pagelayout";
import React from "react";

export default function AdminCompanyLayout ({children} : {children : React.ReactNode}) {
    return (
        <PageLayout.Container>
            <PageLayout.Header title={`Cadastro de Empresa`}/>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}
