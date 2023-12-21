import React from "react";
import {PageLayout} from "@/components/layout/pagelayout";

export default function ClientsLayout({children}: { children: React.ReactNode }) {
    return (
        <PageLayout.Container>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}
