import tw from 'tailwind-styled-components'

type Props = {
    expandido?: boolean
}

export const Container = tw.div`
    flex
    flex-col
    w-screen
    h-screen
`

export const Header = tw.header`
    fixed
    
    justify-between
    items-center
    
    flex
    w-full
    min-h-[4rem]
    max-h-[4rem]
    bg-base-200
`

export const LogoContainer = tw.div`
    flex
    justify-center
    items-center
    px-2
    gap-2
    rounded-lg
    
    hover:bg-base-100
    hover:cursor-pointer
`

export const Sidemenu = tw.aside<Props>`
    ${p => p.expandido ? 'min-w-[15rem]' : 'min-w-[4rem]' }
    
    fixed
    
    flex
    flex-col
    h-full
    gap-5
    bg-base-200
    rounded-lg
    mt-[5rem]
`

export const Content = tw.div<Props>`
    ${p => p.expandido ? 'ml-[15rem]' : 'ml-[4rem]' }

    w-full
    h-full
    pt-[5rem]
    px-2
    
    transition-all
    duration-200
`
