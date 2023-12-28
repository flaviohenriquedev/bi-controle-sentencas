import tw from 'tailwind-styled-components'
import {ButtonType} from "@/types/BbuttonType";

type Props = {
    typebutton: ButtonType
}

export const ButtonStyle = tw.button<Props>`

    ${p =>
    p.typebutton === 'info' ? 'btn-info'
        : p.typebutton === 'success' ? 'btn-success'
            : p.typebutton === 'warning' ? 'btn-warning'
                : p.typebutton === 'error' ? 'btn-error'
                    : 'bg-info text-info-content'}

    btn 
    flex
    items-center
    justify-center
    px-2
    py-1
    rounded-lg
    min-w-[5rem]
`
