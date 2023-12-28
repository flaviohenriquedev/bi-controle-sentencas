'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {Advogado} from "@/class/Advogado";
import {excluirAdvogado, getAdvogados, salvarAdvogado} from "@/services";
import {Table} from "@/components/datadisplay/table";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

export function AdvogadosComponente() {

    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [advogado, setAdvogado] = useState<Advogado>(new Advogado())
    const [advogados, setAdvogados] = useState<Advogado[]>([])
    const [filtroAdvogado, setFiltroAdvogado] = useState<Advogado>(new Advogado())

    useEffect(() => {
        fetchCadastros()
    }, [filtroAdvogado]);

    async function fetchCadastros() {
        try {
            const response = await getAdvogados(filtroAdvogado);
            setAdvogados(response.data);
        } catch (error) {
            // if (error.response?.status === 401) {
            //     setAuth(false);
            // } else {
            //     toast.error(error.message);
            // }
        }
    };

    function novoCadastro() {
        setAdvogado(new Advogado())
        setAbrirFormulario(true)
    }

    async function handleSalvarAdvogado(advogado: Advogado) {
        await salvarAdvogado(advogado);
        await fetchCadastros();
        setAdvogado(new Advogado())
        setFiltroAdvogado(new Advogado())
        setAbrirFormulario(false)
    }

    function cancelarFormulario() {
        setAbrirFormulario(false)
        setAdvogado(new Advogado())
    }

    function handleSelecionarAdvogado(advogado: Advogado) {
        setAdvogado(advogado)
        setAbrirFormulario(true)
    }

    async function handleExcluirAdvogado(id: number) {
        try {
            await excluirAdvogado(id);
            setAdvogados(advogados.filter((advogado) => advogado.id !== id));
        } catch (error) {
            console.error('Erro ao excluir advogado:', error);
        }
    }

    const objetoNovoCadastro: AcoesFormularioType = {
        valor: abrirFormulario,
        funcao: () => novoCadastro()
    }
    const objetoSalvarCadastro: AcoesFormularioType = {valor: '', funcao: () => handleSalvarAdvogado(advogado)}
    const objetoCancelarCadastro: AcoesFormularioType = {valor: '', funcao: () => cancelarFormulario()}

    return (
        <Pagesection.Container titulo={`Cadastro de Advogado`}
                               objetoNovoCadastro={objetoNovoCadastro}
                               objetoSalvarCadastro={objetoSalvarCadastro}
                               objetoCancelarCadastro={objetoCancelarCadastro}
        >
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`Nome`}>
                        <Input onChange={(e) => setAdvogado({...advogado, nome: e.target.value})}
                               value={advogado.nome}/>
                    </LabelContainer>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-advogado`}>
                <LabelContainer>
                    <Input onChange={(e) => setFiltroAdvogado({...filtroAdvogado, nome: e.target.value})}
                       value={filtroAdvogado.nome}/>
                </LabelContainer>
            </LineContent>
            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`}/>
                            <Table.Title title={`Nome`}/>
                            <Table.Title title={`Ações`}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {advogados && advogados.map((a, index) => (
                            <Table.Row key={a.id}
                                       onDoubleClick={() => handleSelecionarAdvogado(a)}
                                       index={index}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={a.nome}/>
                                <Table.Actions metodoExcluir={() => handleExcluirAdvogado(a.id)}
                                               metodoEditar={() => handleSelecionarAdvogado(a)}
                                               objeto={a}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
