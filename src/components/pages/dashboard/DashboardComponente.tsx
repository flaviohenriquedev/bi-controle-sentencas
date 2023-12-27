'use client'

import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Flex, Grid, GridItem, Heading} from "@chakra-ui/react";
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import {Bar, Pie} from "react-chartjs-2";

import {useAuth} from "@/context/auth/AuthContext";
import {authCheck} from "@/services";
import {PageSectionContainer} from "@/components/layout/pagesection/PageSectionContainer";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
];

export const data = {
    labels,
    datasets: [
        {
            label: "Valor Sentença",
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Valor Recebido",
            data: [2, 4, 6, 8, 10, 12, 14],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

export const dataPie = {
    labels,
    datasets: [
        {
            label: "Valor Sentença",
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

export default function DashboardComponente() {
    const [, {login: setAuth}] = useAuth();
    const [telaRenderizada, setTelaRenderizada] = useState(false);

    useEffect(() => {
        setTimeout(
            () => {
                authCheck()
                    .then(() => {
                    })
                    .catch((error) => {
                        if (error.response.status === 401) {
                            setAuth(false);
                        } else {
                            toast.error(error.message);
                        }
                    });
            },
            !telaRenderizada ? 0 : 100000
        );

        setTelaRenderizada(true);
    }, [setAuth, telaRenderizada]);

    return (
        <PageSectionContainer>
            <Flex direction={"column"}>
                <Flex
                    direction={"column"}
                    display={"flex"}
                    align={"center"}
                    justify={"center"}
                    bg={"blackALpha.600"}
                    h={"100%"}
                    w={"100%"}
                >
                    <Heading size={"lg"} mb={5}>
                        Dashboard
                    </Heading>
                    <Grid
                        h={"100%"}
                        w={"100%"}
                        templateRows="repeat(3, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        gap={4}
                    >
                        <GridItem rowSpan={1} colSpan={1}>
                            <Bar data={data}/>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                            <Bar data={data}/>
                        </GridItem>
                        <GridItem rowSpan={2} colSpan={1}>
                            <Pie data={data}/>
                        </GridItem>
                        <GridItem rowSpan={2} colSpan={1}>
                            <Pie data={dataPie}/>
                        </GridItem>
                    </Grid>
                </Flex>
            </Flex>
        </PageSectionContainer>
    );
}
