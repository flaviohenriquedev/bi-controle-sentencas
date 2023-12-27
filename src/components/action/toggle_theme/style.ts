import tw from 'tailwind-styled-components'

interface ListProps {
    openList: boolean
}

export const Container = tw.div`
    relative
    flex
    flex-col
    flex-nowrap
    w-24
    
    hover:cursor-pointer
`

export const Span = tw.span`
    flex
    items-center
    justify-center
    p-2
`

export const List = tw.ul<ListProps>`
    
    ${(p) => p.openList ? "visible opacity-100" : "invisible opacity-0"}

    absolute
    flex
    flex-col
    
    h-96
    mt-10
    p-3
    text-[9pt]
    gap-2
    right-0
    bg-base-200
    rounded-lg
    overflow-y-scroll
    scrollbar-thin
    scrollbar-thumb-secondary
    shadow
    
    transition-all
    duration-200
`

export const ListItem = tw.li`

`
