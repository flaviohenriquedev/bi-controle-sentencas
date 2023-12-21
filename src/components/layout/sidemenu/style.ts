import tw from "tailwind-styled-components";

interface SideMenuListInterface {
    closed: boolean;
}

interface SideMenuItemHeaderInterface  {
    expanded: boolean;
}

export const SideMenuItem = tw.li<SideMenuItemHeaderInterface>`
    
    ${(p) => p.expanded ? "bg-base-200 " : "" }

    group
    flex
    flex-col
    flex-nowrap
    relative
    rounded-lg
`;

export const SideMenuItemHeader = tw.h2<SideMenuItemHeaderInterface>`
    ${(p) => p.expanded ? "bg-base-200" : "hover:bg-base-200" }
    w-full
    h-8
    flex
    justify-between
    items-center
    rounded-lg
    
    hover:cursor-pointer
    
`;

export const IconContainer = tw.div`s
    ml-4
    mr-5
`;

export const ExpandIcon = tw.div<SideMenuItemHeaderInterface>`

    ${(p) => p.expanded ? "-rotate-180 " : "" }
    
    flex
    items-center
    justify-center
    mr-2
    
    transition-all
    duration-300
`

export const DescriptionContainer = tw.div<SideMenuItemHeaderInterface>`
    ${(p) => (p.expanded ? "text-[11pt]" : "text-[0]")}
    
    transition-all
    ease-in-out
`;

export const SideMenuSubList = tw.ul<SideMenuListInterface>`
    ${(p) => (p.closed ? "hidden" : "block")}
    ml-4
`;

export const SideMenuSubItem = tw.li`
    flex
    flex-col
    my-1
    pl-3
    py-1
    rounded-lg
    
    hover:cursor-pointer
    hover:bg-base-100
    transition-all duration-100 hover:translate-x-1
`;

export const SideMenuSubItemDescription = tw.div`
    flex
    items-center
    text-[9pt]
    hover:cursor-pointer
`;

export const SideMenuSubItemIcon = tw.h4`
    mr-2
`;

export const SideMenuSubItemTitle = tw.div`

`
export const SideSubMenuSubList = tw.ul<SideMenuListInterface>`
    ${(p) => (p.closed ? "hidden" : "block")}
`;

export const Flyout = tw.div`    
    absolute
    
    w-96
    ml-12
    opacity-0
    invisible
    shadow-md
    rounded-md
    py-1
    px-4
    -translate-x-5
    bg-base-200

    group-hover:opacity-100
    hover:cursor-pointer
    transform
    transition-all
    duration-200
    group-hover:translate-x-0
    group-hover:visible
`;

export const FlyoutTitle = tw.h1`
    
`;
