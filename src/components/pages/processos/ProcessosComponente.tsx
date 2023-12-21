'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {excluirProcesso, getClientes, getProcessos, salvarProcesso} from "@/services";
import {Button} from "@/components/action/button/Button";
import {Table} from "@/components/datadisplay/table";
import {Processo} from "@/class/Processo";
import {Cliente} from "@/class/Cliente";

export function ProcessosComponente() {

    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [processo, setProcesso] = useState<Processo>(new Processo())
    const [processos, setProcessos] = useState<Processo[]>([])
    const [filtroProcesso, setFiltroProcesso] = useState<Processo>(new Processo())
    const [filtroCliente, setFiltroCliente] = useState<Cliente>(new Cliente())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente, setCliente] = useState<Cliente>(new Cliente())

    useEffect(() => {
        fetchCadastros()
    }, [filtroProcesso]);

    useEffect(() => {
        fetchCadastrosClientes()
    }, [filtroCliente]);

    async function fetchCadastrosClientes() {
        try {
            const response = await getClientes(filtroCliente);
            setClientes(response.data);
        } catch (error) {
            // if (error.response?.status === 401) {
            //     setAuth(false);
            // } else {
            //     toast.error(error.message);
            // }
        }
    };

    async function fetchCadastros() {
        try {
            const response = await getProcessos(filtroProcesso);
            setProcessos(response.data);
        } catch (error) {
            // if (error.response?.status === 401) {
            //     setAuth(false);
            // } else {
            //     toast.error(error.message);
            // }
        }
    };

    function novoCadastro() {
        setProcesso(new Processo())
        setAbrirFormulario(true)
    }

    async function handleSalvarProcesso(processo: Processo) {
        await salvarProcesso(processo);
        await fetchCadastros();
        setProcesso(new Processo())
        setFiltroProcesso(new Processo())
        setAbrirFormulario(false)
    }

    function cancelarFormulario() {
        setAbrirFormulario(false)
        setProcesso(new Processo())
    }

    function handleSelecionarProcesso(processo: Processo) {
        setProcesso(processo)
        setAbrirFormulario(true)
    }

    async function handleExcluirProcesso(id: number) {
        try {
            await excluirProcesso(id);
            setProcessos(processos.filter((processo) => processo.id !== id));
        } catch (error) {
            console.error('Erro ao excluir processo:', error);
        }
    }

    function handleSelecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        setAbrirFormulario(true)
    }

    return (
        <Pagesection.Container titulo={`Cadastro de Processos`}
                               metodoAbrirFormulario={novoCadastro}>
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`Número do Processo`}>
                        <Input onChange={(e) => setProcesso({...processo, numeroProcessoInicial: e.target.value})}
                               value={processo.numeroProcessoInicial}/>
                    </LabelContainer>

                    <LabelContainer title={`Cliente`}>
                        <Input placeholder={`Digite para buscar`}
                               onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                        <Table.Container>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Title title={`Nome`}/>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {clientes && clientes.map((cliente, index) => (
                                    <Table.Row key={cliente.id}
                                               onDoubleClick={() => handleSelecionarCliente(cliente)}>
                                        <Table.Value value={cliente.nome}/>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Container>
                    </LabelContainer>

                </LineContent>
                <LineContent alignment={`right`}>
                    <Button identifier={`Salvar`}
                            onClick={() => handleSalvarProcesso(processo)}/>

                    <Button identifier={`Cancelar`}
                            type={`warning`}
                            onClick={() => cancelarFormulario()}/>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-Processo`}>
                <Input placeholder={`Filtrar por número do processo`}
                       onChange={(e) => setFiltroProcesso({...filtroProcesso, numeroProcessoInicial: e.target.value})}
                       value={filtroProcesso.numeroProcessoInicial}/>
            </LineContent>
            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`}/>
                            <Table.Title title={`Nº Processo`}/>
                            <Table.Title title={`Cliente`}/>
                            <Table.Title title={`Ações`}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {processos && processos.map((processo, index) => (
                            <Table.Row key={processo.id}
                                       onDoubleClick={() => handleSelecionarProcesso(processo)}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={processo.numeroProcessoInicial}/>
                                <Table.Value value={processo.cliente.nome}/>
                                <Table.Actions metodoExcluir={() => handleExcluirProcesso(processo.id)}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
