'use client'

import * as S from './style'
import {Avatar} from "@/components/datadisplay/avatar";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {AppLayoutTheme} from "@/components/layout/applayout/AppLayoutTheme";

export function AppLayoutHeader() {
    const route = useRouter()

    return (
        <S.Header>
            <S.LogoContainer onClick={() => route.push('/manager')}>
                <Image src={Logo} alt="logo" id="logo" width={60} height={60}/>
                <h1 className={`text-base-content font-bold text-[15pt] font-family: 'Roboto', sans-serif;`}>Escritório de Advocacia</h1>
            </S.LogoContainer>
            <div className={`flex items-center mr-4`}>
                <Avatar />
            </div>
        </S.Header>
    )
}
