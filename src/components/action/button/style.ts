import tw from 'tailwind-styled-components'
import {ButtonType} from "@/types/BbuttonType";

type Props = {
    typebutton: ButtonType
}

export const ButtonStyle = tw.button<Props>`
    ${p =>
    p.typebutton === 'info' ? 'bg-info text-info-content'
        : p.typebutton === 'success' ? 'bg-success text-success-content'
            : p.typebutton === 'warning' ? 'bg-warning text-warning-content'
                : p.typebutton === 'error' ? 'bg-error text-error-content'
                    : 'bg-info text-info-content'}


    flex
    items-center
    justify-center
    px-2
    py-1
    rounded-lg
`
