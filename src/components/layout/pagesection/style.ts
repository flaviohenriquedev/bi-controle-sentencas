import tw from 'tailwind-styled-components'

export const Container = tw.section`
    w-full
    min-h-full
`

export const Header = tw.label`
    flex
    items-center
    w-full
    mb-4
    gap-2
`

export const Label = tw.label`
    bg-primary
    text-primary-content
    p-2
    w-full
    rounded-lg
`

export const NovoCadastro = tw.div`
    bg-success
    text-center
    text-success-content
    p-2
    w-52
    rounded-lg
    
    hover:cursor-pointer
`
