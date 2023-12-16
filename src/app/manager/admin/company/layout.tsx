import {PageLayout} from "@/components/layout/page";
import React from "react";

export default function AdminCompanyLayout ({children} : {children : React.ReactNode}) {
    return (
        <PageLayout.Container>
            <PageLayout.Header />
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}
