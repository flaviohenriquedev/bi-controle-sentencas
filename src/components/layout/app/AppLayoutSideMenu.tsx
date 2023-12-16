import * as S from './style'
import {RouteType} from "@/types/RouteType";
import Link from "next/link";
import {Menu} from "@/components/layout/sidemenu/Menu";

interface Props {
    routes: RouteType[]
}

export function AppLayoutSideMenu({routes}: Props) {
    return (
        <S.Sidemenu>
            <div id={`menu`}>
                <Menu routes={routes} />
            </div>
        </S.Sidemenu>
    )
}
