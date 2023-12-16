import {RouteType} from "@/types/RouteType";

interface Props {
    routes: RouteType[]
}
export function Menu({routes} : Props) {
    function renderMenu() {
        return routes.map(route => {
            return <li key={route.label}>
                {route.label}

                {route.submenu && <Submenu routes={route.submenu} />}
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
        return  <ul>
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
