import type {Metadata} from 'next'
import './globals.css'
import React from "react";
import {Providers} from "@/provider/Providers";

export const metadata: Metadata = {
    title: 'BI Controle',
    description: 'BI Controle',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>
            <Providers>
                {children}
            </Providers>
            </body>
        </html>
    )
}
