import React from "react";
import {PageLayout} from "@/components/layout/pagelayout";

export default function RelatoriosLayout({children}: { children: React.ReactNode }) {
    return (
        <PageLayout.Container>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}
