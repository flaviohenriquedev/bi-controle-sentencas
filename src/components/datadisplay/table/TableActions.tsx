import * as S from './style'
import {AiFillDelete} from "react-icons/ai";
import {Modal} from "@/components/datadisplay/modal";
import {closeModal, openModal} from "@/functions/functions";
import {ModalFooter} from "@/components/datadisplay/modal/ModalFooter";
import {Button} from "@/components/action/button/Button";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import {FaEdit} from "react-icons/fa";

interface Props {
    metodoExcluir?: (valor: number) => void
    metodoEditar?: (objeto: any) => void
    objeto: any
    alignment?: "left" | "center" | "right"
}

export function TableActions({metodoExcluir, metodoEditar, objeto, alignment = "center"}: Props) {

    const modalId = `confirmar_exclusao_${objeto.id}`

    function handleExcluirRegistro(id: number){
        console.log('OBJ', id)
        metodoExcluir && metodoExcluir(id)
        closeModal(modalId)
    }

    return (
        <>
            <S.Value>
                <div className={`flex`}>
                    {metodoExcluir && (
                        <S.ValueContent onClick={() => openModal(modalId)} alignment={alignment}
                                        className={`text-error hover:cursor-pointer`}>
                            <AiFillDelete size={17}/>
                        </S.ValueContent>
                    )}

                    {metodoEditar && (
                        <S.ValueContent onClick={metodoEditar} alignment={alignment}
                                        className={`text-warning hover:cursor-pointer`}>
                            <FaEdit size={17}/>
                        </S.ValueContent>
                    )}
                </div>
            </S.Value>
            <Modal.Container id={modalId}>
                <Modal.Content>
                    <LineContent>
                        <label>TEM CERTEZA QUE DESEJA EXCLUIR ESSE REGISTRO?</label>
                    </LineContent>
                </Modal.Content>
                <ModalFooter>
                    <LineContent alignment={`center`}>
                        <Button identifier={`Sim`} onClick={() => handleExcluirRegistro(objeto.id)}/>
                        <Button identifier={`Não`} onClick={() => closeModal(modalId)}/>
                    </LineContent>
                </ModalFooter>
            </Modal.Container>
        </>
    )
}
