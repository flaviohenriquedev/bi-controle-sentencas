import tw from 'tailwind-styled-components'

export const Container = tw.div`
    flex
    flex-col
    w-screen
    h-screen
`

export const Header = tw.header`
    flex
    w-screen
    h-16
    bg-base-100
`

export const Sidemenu = tw.aside`
    fixed
    
    flex
    flex-col
    w-32
    h-screen
    bg-base-300
`

export const Content = tw.div`
    w-full
    h-full
    
    bg-blue-700
`
