import React, {Suspense} from "react";
import {PageLayout} from "@/components/layout/pagelayout";
import Loading from "@/app/manager/cadastros/naturezas/loading";

export default function NaturezasLayout({children}: { children: React.ReactNode }) {
    return (
        <PageLayout.Container>
            <Suspense fallback={<Loading/>}>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
            </Suspense>
        </PageLayout.Container>
    )
}
