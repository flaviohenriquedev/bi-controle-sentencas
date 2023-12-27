"use client";

import React from "react";
import {ThemeProvider} from "next-themes";
import {SideMenuContextProvider} from "@/context/app/SideMenuContext";
import {AuthProvider} from "@/context/auth/AuthContext";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <AuthProvider>
        <ThemeProvider>
            <SideMenuContextProvider>
                {children}
            </SideMenuContextProvider>
        </ThemeProvider>
        </AuthProvider>
    )
}
