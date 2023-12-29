'use client'

import "react-toastify/dist/ReactToastify.css";
import {PageSectionContainer} from "@/components/layout/pagesection/PageSectionContainer";

export default function DashboardComponente() {
    return (
        <PageSectionContainer>
            <iframe title="Visão BI - Processos"
                    width="1140"
                    height="541.25"
                    src="https://app.powerbi.com/reportEmbed?reportId=527cc0cc-8215-4601-94e9-814226add4e4&autoAuth=true&ctid=ca8944da-59ce-42b9-ae96-3b16184c97d5"
                    frameBorder="0"
                    allowFullScreen={true}>
            </iframe>
        </PageSectionContainer>
    );
}
