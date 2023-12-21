'use client'

import {RouteType} from "@/types/RouteType";
import {useRouter} from "next/navigation";
import {useContext, useState} from "react";
import {SubMenu} from "@/components/layout/sidemenu/Submenu";
import * as S from './style'
import {SideMenuContext} from "@/context/app/SideMenuContext";
import {MdExpandMore} from "react-icons/md";

interface Props {
    submenu?: RouteType[]
    description: string;
    icon?: JSX.Element;
    href?: string;
}

export function Menu({submenu, href, icon, description}: Props) {

    const route = useRouter();
    const [menuListClosed, setMenuListClosed] = useState(true);
    const {expanded, sideMenuEntered} = useContext(SideMenuContext)

    function renderSubMenuItem(routes: RouteType[]) {
        return routes.map((route) => (
            <SubMenu
                key={route.label}
                description={route.label}
                href={route.href}
            >
                {route.submenu && renderSubMenuItem(route.submenu)}
            </SubMenu>
        ));
    }

    function handleClick() {
        if (submenu) {
            setMenuListClosed(!menuListClosed);
        } else if (href) {
            route.push(
                href.startsWith("/") ? href : "/" + href
            );
        }
    }
    return (
        <S.SideMenuItem expanded={!menuListClosed} id="side_menu_item">
            <S.SideMenuItemHeader id="side_menu_item_header" onClick={() => handleClick()} expanded={!menuListClosed}>
                <div className="flex justify-between items-center">
                    <S.IconContainer id="side_menu_icon">{icon}</S.IconContainer>
                    <S.DescriptionContainer expanded={expanded || sideMenuEntered}>
                        {description}
                    </S.DescriptionContainer>
                </div>
                {(expanded || sideMenuEntered) && submenu && submenu.length > 0 && (
                    <S.ExpandIcon expanded={!menuListClosed}>
                        <MdExpandMore/>
                    </S.ExpandIcon>
                )}
            </S.SideMenuItemHeader>

            {submenu && (expanded || sideMenuEntered) && (
                <S.SideMenuSubList closed={menuListClosed}>
                    {renderSubMenuItem(submenu)}
                </S.SideMenuSubList>
            )}
        </S.SideMenuItem>
    );
}
