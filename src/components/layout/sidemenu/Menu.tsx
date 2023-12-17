'use client'

import {RouteType} from "@/types/RouteType";
import {useRouter} from "next/navigation";

interface Props {
    routes: RouteType[]
}

export function Menu({routes}: Props) {

    const navigation = useRouter();

    function handleClick(route: RouteType) {
        return route.href ? navigation.push(route.href) : ''
    }

    function renderMenu() {
        return routes.map(route => {
            return <li key={route.label} className={`hover:cursor-pointer`}>
                <div className={`flex items-center gap-2 w-full `}
                     onClick={() => handleClick(route)}>
                    <div>
                        {route.icon}
                    </div>
                    <div>
                        {route.label}
                    </div>
                </div>

                {route.submenu && <Submenu routes={route.submenu}/>}
            </li>
        })
    }

    return (
        <ul>
            {renderMenu()}
        </ul>
    )
}

function Submenu({routes}: Props) {
    const navigation = useRouter();

    function handleClick(route: RouteType) {
        return route.href ? navigation.push(route.href) : ''
    }

    function renderSubMenu() {
        return <ul className={`pl-8`}>
            {
                routes.map(route => (
                    <li key={route.label}
                        onClick={() => handleClick(route)}
                        className={`hover:cursor-pointer`}>{route.label}</li>
                ))
            }
        </ul>
    }

    return (
        <>{renderSubMenu()}</>
    )
}
