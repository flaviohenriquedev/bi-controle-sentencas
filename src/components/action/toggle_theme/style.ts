import tw from 'tailwind-styled-components'

interface Props {
    dark: boolean
}

export const Container = tw.div<Props>`

    ${p => p.dark ? "justify-end" : "justify-start"}
    
    relative
    
    flex
    items-center
    w-10
    h-6
    bg-base-100
    rounded-lg
`

export const Circle = tw.div`
    absolute
    
    flex
    justify-center
    items-center
    w-5
    h-5
    rounded-full
    bg-primary
    
    hover:cursor-pointer
`
