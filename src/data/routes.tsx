import {RouteType} from "@/types/RouteType";
import {Icons} from "@/components/icons/Icons";

export const Routes: RouteType[] = [
    {
        label: "Administração",
        icon: Icons.administracao,
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
        icon: Icons.cadastro,
        submenu: [
            {
                label: "Advogados",
                href: "/manager/cadastros/advogados"
            },
            {
                label: "Andamentos",
                href: "/manager/cadastros/andamentos"
            },
            {
                label: "Clientes",
                href: "/manager/cadastros/clientes"
            },
            {
                label: "Comarcas",
                href: "/manager/cadastros/comarcas"
            },
            {
                label: "Naturezas",
                href: "/manager/cadastros/naturezas"
            },
            {
                label: "Relatórios",
                href: "/manager/cadastros/relatorios"
            }
        ]
    },
    {
        label: "Processos",
        icon: Icons.protocolo,
        href: "/manager/processos"
    },
]
