import {PageLayout} from "@/components/layout/pagelayout";
import React, {Suspense} from "react";
import Loading from "@/app/manager/admin/company/loading";

export default function AdminCompanyLayout ({children} : {children : React.ReactNode}) {
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
