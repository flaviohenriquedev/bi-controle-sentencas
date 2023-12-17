import tw from 'tailwind-styled-components'

interface ContainerProps {
    width?: string;
}

export const Container = tw.div<ContainerProps>`
    ${(p) => p.width ? p.width : "flex-1"}
    flex
    flex-col
    gap-1
`

export const Label = tw.label`
    flex
    gap-1
    items-center
`

export const LabelSpan = tw.span`
    label-text
    text-[8pt]
    pl-1
`
