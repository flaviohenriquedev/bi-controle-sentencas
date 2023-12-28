import tw from 'tailwind-styled-components'


interface ButtonProps {
    type: "close" | "minimalizer"
}

export const Container = tw.div`
    fixed
    
    flex
    justify-center
    items-start
    w-screen
    h-screen
    z-50
    top-0
    left-0
    right-0
    bottom-0
    py-20
    px-10
    backdrop-blur-sm
    bg-base-200/30
    invisible
    opacity-0
    
    transition-all
    duration-300

`

export const Children = tw.div`
    flex
    flex-col
    items-center
    w-auto
    h-auto
    gap-8
    max-h-[100%]
    p-5
    rounded-lg
    bg-base-100
    
    shadow-md
    shadow-base-200
`

export const Button = tw.div<ButtonProps>`

    ${(p) => p.type === "close" ? "bg-primary" :
    p.type === "minimalizer" ? "bg-secondary" : ""}

    flex
    items-center
    justify-center
    w-7
    h-7
    rounded-full
    font-bold
    text-base-100
    
    hover:cursor-pointer
`

export const Content = tw.div`
`

export const Footer = tw.footer`
    flex
    flex-1
    justify-end
    items-center
    gap-2
    w-full
`

export const Result = tw.div`
    flex
    justify-center
    w-full
    overflow-x-scroll
`
