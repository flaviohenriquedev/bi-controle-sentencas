import React from "react";
import {PageLayout} from "@/components/layout/pagelayout";

export default function NaturezasLayout({children}: { children: React.ReactNode }) {
    return (
        <PageLayout.Container>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}
