import tw from 'tailwind-styled-components'

export const Container = tw.div`
    flex
    flex-col
    w-screen
    h-screen
`

export const Header = tw.header`
    flex
    w-full
    min-h-[4rem]
`

export const LogoContainer = tw.div`
    flex
    justify-center
    items-center
    min-w-[15rem]
`

export const Sidemenu = tw.aside`
    flex
    flex-col
    min-w-[15rem]
    h-full
    p-1
    gap-5
    bg-base-300
`

export const Content = tw.div`
    w-full
    h-full
`
