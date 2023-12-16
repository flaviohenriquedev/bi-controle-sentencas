import {RouteType} from "@/types/RouteType";
import {MdOutlineAdminPanelSettings} from "react-icons/md";

interface Props {
    routes: RouteType[]
}

export function Menu({routes}: Props) {
    function renderMenu() {
        return routes.map(route => {
            return <li key={route.label}>
                <div className={`flex items-center gap-2 w-full `}>
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
    function renderSubMenu() {
        return <ul className={`pl-8`}>
            {
                routes.map(route => (
                    <li key={route.label}>{route.label}</li>
                ))
            }
        </ul>
    }

    return (
        <>{renderSubMenu()}</>
    )
}
