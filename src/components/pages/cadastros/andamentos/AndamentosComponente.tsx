'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {excluirAndamento, getAndamentos, salvarAndamento} from "@/services";
import {Table} from "@/components/datadisplay/table";
import {Andamento} from "@/class/Andamento";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

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

    const objetoNovoCadastro: AcoesFormularioType = {
        valor: abrirFormulario,
        funcao: () => novoCadastro()
    }
    const objetoSalvarCadastro: AcoesFormularioType = {valor: '', funcao: () => handleSalvarAndamento(andamento)}
    const objetoCancelarCadastro: AcoesFormularioType = {valor: '', funcao: () => cancelarFormulario()}

    return (
        <Pagesection.Container titulo={`Cadastro de Andamento`}
                               objetoNovoCadastro={objetoNovoCadastro}
                               objetoSalvarCadastro={objetoSalvarCadastro}
                               objetoCancelarCadastro={objetoCancelarCadastro}
        >
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`Descrição`}>
                        <Input onChange={(e) => setAndamento({...andamento, descricao: e.target.value})}
                               value={andamento.descricao}/>
                    </LabelContainer>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-advogado`}>
                <LabelContainer>
                    <Input onChange={(e) => setFiltroAndamento({...filtroAndamento, descricao: e.target.value})}
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
                        {andamentos && andamentos.map((a, index) => (
                            <Table.Row key={a.id}
                                       onDoubleClick={() => handleSelecionarAndamento(a)}
                                       index={index}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={a.descricao}/>
                                <Table.Actions metodoExcluir={() => handleExcluirAndamento(a.id)}
                                               metodoEditar={() => handleSelecionarAndamento(a)}
                                               objeto={a}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
