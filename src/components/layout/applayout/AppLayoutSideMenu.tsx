import * as S from './style'
import {RouteType} from "@/types/RouteType";
import {Menu} from "@/components/layout/sidemenu/Menu";
import {ToggleTheme} from "@/components/action/toggle_theme/ToggleTheme";

interface Props {
    routes: RouteType[]
}

export function AppLayoutSideMenu({routes}: Props) {
    return (
        <S.Sidemenu>
            <div className={`flex w-full gap-1`}>
                <input placeholder={`Buscar Menu`}/>
            </div>
            <Menu routes={routes}/>
            <ToggleTheme/>
        </S.Sidemenu>
    )
}
