'use client'

import * as S from './style'
import {RouteType} from "@/types/RouteType";
import {Menu} from "@/components/layout/sidemenu/Menu";
import {useContext, useState} from "react";
import {SideMenuContext} from "@/context/app/SideMenuContext";
import { IoIosMenu } from "react-icons/io";


interface Props {
    routes: RouteType[]
}

export function AppLayoutSideMenu({routes}: Props) {
    const [expandido, setExpandido] = useState<boolean>(true)
    const {expanded, setExpanded} = useContext(SideMenuContext)

    function renderMenu() {
        return routes.map((route) => {
            return (
                <Menu
                    key={route.label}
                    description={route.label && route.label}
                    icon={route.icon}
                    href={route.href}
                    submenu={route.submenu}
                />
            );
        });
    }
    return (
        <S.Sidemenu expandido={expanded}>
            <div className={`flex ${expanded ? 'justify-end' : 'justify-center' } items-center w-full`}>
                <button onClick={() => setExpanded(!expanded)}
                        className={`flex justify-center items-center w-8 h-8 p-1 bg-base-100 text-base-content rounded-full`}><IoIosMenu size={25}/></button>
            </div>

            {/*<div className={`${expandido ? 'block' : 'hidden'} flex w-full gap-1`}>*/}
            {/*    <input placeholder={`Buscar Menu`}/>*/}
            {/*</div>*/}

            {renderMenu()}
        </S.Sidemenu>
    )
}
