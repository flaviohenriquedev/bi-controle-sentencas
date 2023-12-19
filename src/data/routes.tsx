import {RouteType} from "@/types/RouteType";
import {Icons} from "@/components/icons/Icons";

export const Routes: RouteType[] = [
    {
        label: "Administração",
        icon: Icons.admin,
        submenu: [
            {
                label: "Empresas",
                href: "/manager/admin/company"
            },
            {
                label: "Usuários",
                href: "/manager/admin/user"
            }
        ]
    },
    {
        label: "Cadastros",
        icon: Icons.admin,
        submenu: [
            {
                label: "Advogados",
                href: "/manager/admin/company"
            },
            {
                label: "Andamentos",
                href: "/manager/admin/user"
            },
            {
                label: "Clientes",
                href: "/manager/admin/user"
            },
            {
                label: "Comarcas",
                href: "/manager/admin/user"
            },
            {
                label: "Naturezas",
                href: "/manager/admin/user"
            },
            {
                label: "Relatórios",
                href: "/manager/admin/user"
            }
        ]
    },
]
