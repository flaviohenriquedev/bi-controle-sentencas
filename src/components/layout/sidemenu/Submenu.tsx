import React, {useState} from "react";
import {useRouter} from "next/navigation";
import * as S from "./style";
import {MdOutlineSkipNext} from 'react-icons/md'
import {BsChevronDoubleDown} from 'react-icons/bs'

interface SubMenuProps {
    description: string;
    children: React.ReactNode;
    href?: string;
}

export const SubMenu = ({
                            description,
                            children,
                            href,
                        }: SubMenuProps) => {
    const route = useRouter();
    const [subMenuListClosed, setSubMenuListClosed] = useState(true);

    function handleClick() {
        if (href) {
            route.push(href.startsWith("/") ? href : "/" + href);
        } else {
            setSubMenuListClosed(!subMenuListClosed);
        }
    }

    return (
        <S.SideMenuSubItem onClick={() => handleClick()}>
            <S.SideMenuSubItemDescription>
                <S.SideMenuSubItemIcon>
                    {children ? <BsChevronDoubleDown color="base-100"/> : <MdOutlineSkipNext color="base-100"/>}
                </S.SideMenuSubItemIcon>
                <S.SideMenuSubItemTitle>
                    {children ? <strong>{description}</strong> : description}
                </S.SideMenuSubItemTitle>
            </S.SideMenuSubItemDescription>
            <S.SideSubMenuSubList closed={subMenuListClosed}>
                {children}
            </S.SideSubMenuSubList>
        </S.SideMenuSubItem>
    );
};
