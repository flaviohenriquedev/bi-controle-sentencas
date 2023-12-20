import tw from 'tailwind-styled-components'

interface Props {
    alignment?: "left" | "center" | "right"
}

export const Table = tw.table`
    bg-base-100
    w-full
    border
    border-base-300
    rounded-lg
    overflow-auto
    table-pin-rows
    table-pin-cols
`

export const Header = tw.thead`
    bg-base-200
`

export const Body = tw.tbody`

`

export const Footer = tw.tfoot`

`

export const Row = tw.tr`
    group
`

export const Title = tw.th`
    text-[10pt]
    text-base-content
    border-2
    border-base-100
`

export const Value = tw.td`
    text-[9pt]
    px-2
    border
    border-base-200
    
    group-hover:cursor-pointer
    group-hover:bg-primary-focus
    group-hover:text-primary-content
`

export const ValueContent = tw.div<Props>`
        ${(p) => p.alignment === "left" ? "justify-start" :
    p.alignment === "center" ? "justify-center" :
        p.alignment === "right" ? "justify-end" : "justify-start"}
        
    flex
    w-full
`
