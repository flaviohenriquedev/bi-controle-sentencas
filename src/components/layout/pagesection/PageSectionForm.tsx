'use client'

import React from "react";
import {CommonInterface} from "@/interface/CommonInterface";
import * as S from './style'

interface Props extends CommonInterface{
    className?: string
}

export function PageSectionForm({children, className} : Props) {
    return (
        <S.FormContainer className={className}>
            <form onSubmit={(e) => e.preventDefault()}>
                {children}
            </form>
        </S.FormContainer>
    )
}
