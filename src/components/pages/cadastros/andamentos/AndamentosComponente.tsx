'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {excluirAndamento, getAndamentos, salvarAndamento} from "@/services";
import {Button} from "@/components/action/button/Button";
import {Table} from "@/components/datadisplay/table";
import {Andamento} from "@/class/Andamento";

export function AndamentosComponente() {

    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [andamento, setAndamento] = useState<Andamento>(new Andamento())
    const [andamentos, setAndamentos] = useState<Andamento[]>([])
    const [filtroAndamento, setFiltroAndamento] = useState<Andamento>(new Andamento())

    useEffect(() => {
        fetchCadastros()
    }, [filtroAndamento]);

    async function fetchCadastros() {
        try {
            const response = await getAndamentos(filtroAndamento);
            setAndamentos(response.data);
        } catch (error) {
            // if (error.response?.status === 401) {
            //     setAuth(false);
            // } else {
            //     toast.error(error.message);
            // }
        }
    };

    function novoCadastro() {
        setAndamento(new Andamento())
        setAbrirFormulario(true)
    }

    async function handleSalvarAndamento(andamento: Andamento) {
        await salvarAndamento(andamento);
        await fetchCadastros();
        setAndamento(new Andamento())
        setFiltroAndamento(new Andamento())
        setAbrirFormulario(false)
    }

    function cancelarFormulario() {
        setAbrirFormulario(false)
        setAndamento(new Andamento())
    }

    function handleSelecionarAndamento(andamento: Andamento) {
        setAndamento(andamento)
        setAbrirFormulario(true)
    }

    async function handleExcluirAndamento(id: number) {
        try {
            await excluirAndamento(id);
            setAndamentos(andamentos.filter((andamento) => andamento.id !== id));
        } catch (error) {
            console.error('Erro ao excluir andamento:', error);
        }
    }


    return (
        <Pagesection.Container titulo={`Cadastro de Andamento`}
                               metodoAbrirFormulario={novoCadastro}>
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`Descrição`}>
                        <Input onChange={(e) => setAndamento({...andamento, descricao: e.target.value})}
                               value={andamento.descricao}/>
                    </LabelContainer>
                </LineContent>
                <LineContent alignment={`right`}>
                    <Button identifier={`Salvar`}
                            onClick={() => handleSalvarAndamento(andamento)}/>

                    <Button identifier={`Cancelar`}
                            type={`warning`}
                            onClick={() => cancelarFormulario()}/>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-advogado`}>
                <LabelContainer>
                    <Input placeholder={`Filtrar por descrição`}
                           onChange={(e) => setFiltroAndamento({...filtroAndamento, descricao: e.target.value})}
                           value={filtroAndamento.descricao}/>
                </LabelContainer>
            </LineContent>
            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`}/>
                            <Table.Title title={`Descrição`}/>
                            <Table.Title title={`Ações`}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {andamentos && andamentos.map((andamento, index) => (
                            <Table.Row key={andamento.id}
                                       onDoubleClick={() => handleSelecionarAndamento(andamento)}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={andamento.descricao}/>
                                <Table.Actions metodoExcluir={() => handleExcluirAndamento(andamento.id)}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
