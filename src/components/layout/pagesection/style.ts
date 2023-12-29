import tw from 'tailwind-styled-components'

type Props = {
    tipo?: 'salvar' | 'cancelar' | 'novo'
}

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
    flex
    items-center
    pl-2
    bg-primary
    text-primary-content
    h-10
    w-full
    rounded-lg
    font-bold
`

export const Botao = tw.div<Props>`
    
    ${(p) => (p.tipo === 'novo' ? 'bg-info text-info-content' :
    p.tipo === 'salvar' ? 'bg-success text-success-content' :
        p.tipo === 'cancelar' ? 'bg-warning text-warning-content' :
            'bg-info text-info-content')}

    text-center
    p-2
    w-52
    rounded-lg
    
    hover:cursor-pointer
`

export const FormContainer = tw.div`
    bg-base-200
    rounded-lg
    p-2
    mb-9
`
