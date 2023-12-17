'use client'

import React from "react";

interface Props {
    children: React.ReactNode
}

export function PageSectionForm({children} : Props) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {children}
        </form>
    )
}
