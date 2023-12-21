'use client'

import React from "react";
import {CommonInterface} from "@/interface/CommonInterface";

interface Props extends CommonInterface{
    className?: string
}

export function PageSectionForm({children, className} : Props) {
    return (
        <form onSubmit={(e) => e.preventDefault()}
            className={className}>
            {children}
        </form>
    )
}
