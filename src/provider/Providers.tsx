"use client";

import React from "react";
import {ThemeProvider} from "next-themes";
import {SideMenuContextProvider} from "@/context/app/SideMenuContext";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <SideMenuContextProvider>
                {children}
            </SideMenuContextProvider>
        </ThemeProvider>
    )
}
