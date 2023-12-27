import {HTMLAttributes, ReactNode} from "react";
import * as S from './style'
import {closeModal} from "../../../functions/functions";

interface ModalRootProps extends HTMLAttributes<HTMLInputElement> {
    id: string
    children: ReactNode
    title?: string
    loading?: boolean
    clearModal?: () => void
}

export function ModalContainer({id, children, title, loading = false, clearModal, className}: ModalRootProps) {

    function handleCloseModal() {
        closeModal(id);

        setTimeout(() => {
            clearModal && clearModal();
        }, 800);
    }

    return (
        <S.Container id={id}>
            <S.Children className={className}>
                <div className="flex items-center w-full bg-base-200 rounded-lg px-2">
                    <div className="flex justify-start w-full">
                        {title}
                    </div>
                    <div className="flex items-center justify-end w-full h-10 gap-2"
                    >
                        <S.Button type="close" onClick={() => handleCloseModal()}>
                            X
                        </S.Button>
                    </div>
                </div>
                {children}
            </S.Children>
        </S.Container>
    )
}
