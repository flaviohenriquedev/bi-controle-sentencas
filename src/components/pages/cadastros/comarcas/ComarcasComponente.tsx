'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {excluirComarca, getComarcas, salvarComarca} from "@/services";
import {Table} from "@/components/datadisplay/table";
import {Comarca} from "@/class/Comarca";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

export function ComarcasComponente() {

    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [comarca, setComarca] = useState<Comarca>(new Comarca())
    const [comarcas, setComarcas] = useState<Comarca[]>([])
    const [filtroComarca, setFiltroComarca] = useState<Comarca>(new Comarca())

    useEffect(() => {
        fetchCadastros()
    }, [filtroComarca]);

    async function fetchCadastros() {
        try {
            const response = await getComarcas(filtroComarca);
            setComarcas(response.data);
        } catch (error) {
            // if (error.response?.status === 401) {
            //     setAuth(false);
            // } else {
            //     toast.error(error.message);
            // }
        }
    };

    function novoCadastro() {
        setComarca(new Comarca())
        setAbrirFormulario(true)
    }

    async function handleSalvarComarca(comarca: Comarca) {
        await salvarComarca(comarca);
        await fetchCadastros();
        setComarca(new Comarca())
        setFiltroComarca(new Comarca())
        setAbrirFormulario(false)
    }

    function cancelarFormulario() {
        setAbrirFormulario(false)
        setComarca(new Comarca())
    }

    function handleSelecionarComarca(comarca: Comarca) {
        setComarca(comarca)
        setAbrirFormulario(true)
    }

    async function handleExcluirComarca(id: number) {
        try {
            await excluirComarca(id);
            setComarcas(comarcas.filter((comarca) => comarca.id !== id));
        } catch (error) {
            console.error('Erro ao excluir comarca:', error);
        }
    }

    const objetoNovoCadastro: AcoesFormularioType = {
        valor: abrirFormulario,
        funcao: () => novoCadastro()
    }
    const objetoSalvarCadastro: AcoesFormularioType = {valor: '', funcao: () => handleSalvarComarca(comarca)}
    const objetoCancelarCadastro: AcoesFormularioType = {valor: '', funcao: () => cancelarFormulario()}

    return (
        <Pagesection.Container titulo={`Cadastro de Comarcas`}
                               objetoNovoCadastro={objetoNovoCadastro}
                               objetoSalvarCadastro={objetoSalvarCadastro}
                               objetoCancelarCadastro={objetoCancelarCadastro}
        >
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`Descrição`}>
                        <Input onChange={(e) => setComarca({...comarca, descricao: e.target.value})}
                               value={comarca.descricao}/>
                    </LabelContainer>

                    <LabelContainer title={`Tipo`}>
                        <Input/>
                    </LabelContainer>

                    <LabelContainer title={`Estado`}>
                        <Input/>
                    </LabelContainer>

                    <LabelContainer title={`Município`}>
                        <Input onChange={(e) => setComarca({...comarca, municipio: e.target.value})}
                               value={comarca.municipio}/>
                    </LabelContainer>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-Comarca`}>
                <LabelContainer>
                    <Input onChange={(e) => setFiltroComarca({...filtroComarca, descricao: e.target.value})}
                       value={filtroComarca.descricao}/>
                </LabelContainer>
            </LineContent>
            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`}/>
                            <Table.Title title={`Descrição`}/>
                            <Table.Title title={`Tipo`}/>
                            <Table.Title title={`Estado`}/>
                            <Table.Title title={`Município`}/>
                            <Table.Title title={`Ações`}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {comarcas && comarcas.map((c, index) => (
                            <Table.Row key={c.id}
                                       onDoubleClick={() => handleSelecionarComarca(c)}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={c.descricao}/>
                                <Table.Value value={c.tipo}/>
                                <Table.Value value={c.estado}/>
                                <Table.Value value={c.municipio}/>
                                <Table.Actions metodoExcluir={() => handleExcluirComarca(c.id)}
                                               metodoEditar={() => handleSelecionarComarca(c)}
                                               objeto={c}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
