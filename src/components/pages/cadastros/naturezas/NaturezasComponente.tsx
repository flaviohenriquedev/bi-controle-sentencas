'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {excluirNatureza, getNaturezas, salvarNatureza} from "@/services";
import {Table} from "@/components/datadisplay/table";
import {Natureza} from "@/class/Natureza";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

export function NaturezasComponente() {

    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [natureza, setNatureza] = useState<Natureza>(new Natureza())
    const [naturezas, setNaturezas] = useState<Natureza[]>([])
    const [filtroNatureza, setFiltroNatureza] = useState<Natureza>(new Natureza())

    useEffect(() => {
        fetchCadastros()
    }, [filtroNatureza]);

    async function fetchCadastros() {
        try {
            const response = await getNaturezas(filtroNatureza);
            setNaturezas(response.data);
        } catch (error) {
            // if (error.response?.status === 401) {
            //     setAuth(false);
            // } else {
            //     toast.error(error.message);
            // }
        }
    };

    function novoCadastro() {
        setNatureza(new Natureza())
        setAbrirFormulario(true)
    }

    async function handleSalvarNatureza(natureza: Natureza) {
        await salvarNatureza(natureza);
        await fetchCadastros();
        setNatureza(new Natureza())
        setFiltroNatureza(new Natureza())
        setAbrirFormulario(false)
    }

    function cancelarFormulario() {
        setAbrirFormulario(false)
        setNatureza(new Natureza())
    }

    function handleSelecionarNatureza(natureza: Natureza) {
        setNatureza(natureza)
        setAbrirFormulario(true)
    }

    async function handleExcluirNatureza(id: number) {
        try {
            await excluirNatureza(id);
            setNaturezas(naturezas.filter((natureza) => natureza.id !== id));
        } catch (error) {
            console.error('Erro ao excluir natureza:', error);
        }
    }

    const objetoNovoCadastro: AcoesFormularioType = {
        valor: abrirFormulario,
        funcao: () => setAbrirFormulario(!abrirFormulario)
    }
    const objetoSalvarCadastro: AcoesFormularioType = {valor: '', funcao: () => handleSalvarNatureza(natureza)}
    const objetoCancelarCadastro: AcoesFormularioType = {valor: '', funcao: () => cancelarFormulario()}

    return (
        <Pagesection.Container titulo={`Cadastro de Naturezas`}
                               objetoNovoCadastro={objetoNovoCadastro}
                               objetoSalvarCadastro={objetoSalvarCadastro}
                               objetoCancelarCadastro={objetoCancelarCadastro}
        >
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`Descrição`}>
                        <Input onChange={(e) => setNatureza({...natureza, descricao: e.target.value})}
                               value={natureza.descricao}/>
                    </LabelContainer>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-Natureza`}>
                <LabelContainer>
                    <Input onChange={(e) => setFiltroNatureza({...filtroNatureza, descricao: e.target.value})}
                       value={filtroNatureza.descricao}/>
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
                        {naturezas && naturezas.map((natureza, index) => (
                            <Table.Row key={natureza.id}
                                       onDoubleClick={() => handleSelecionarNatureza(natureza)}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={natureza.descricao}/>
                                <Table.Actions metodoExcluir={() => handleExcluirNatureza(natureza.id)}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
