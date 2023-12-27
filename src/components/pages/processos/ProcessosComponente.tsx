'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {excluirProcesso, getClientes, getProcessos, salvarProcesso} from "@/services";
import {Table} from "@/components/datadisplay/table";
import {Processo} from "@/class/Processo";
import {Cliente} from "@/class/Cliente";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

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

    const objetoNovoCadastro: AcoesFormularioType = {
        valor: abrirFormulario,
        funcao: () => setAbrirFormulario(!abrirFormulario)
    }
    const objetoSalvarCadastro: AcoesFormularioType = {valor: '', funcao: () => handleSalvarProcesso(processo)}
    const objetoCancelarCadastro: AcoesFormularioType = {valor: '', funcao: () => cancelarFormulario()}

    return (
        <Pagesection.Container titulo={`Cadastro de Processos`}
                               objetoNovoCadastro={objetoNovoCadastro}
                               objetoSalvarCadastro={objetoSalvarCadastro}
                               objetoCancelarCadastro={objetoCancelarCadastro}
        >
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
                    </LabelContainer>
                </LineContent>

                <LineContent>
                    <LabelContainer title={`Natureza`}>
                        <Input placeholder={`Digite para buscar`}
                               onChange={(e) => setProcesso({...processo, numeroProcessoInicial: e.target.value})}
                               value={processo.numeroProcessoInicial}/>
                    </LabelContainer>

                    <LabelContainer title={`Comarca`}>
                        <Input placeholder={`Digite para buscar`}
                               onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>
                </LineContent>

                <LineContent>
                    <LabelContainer title={`Empresa`}>
                        <Input placeholder={`Digite para buscar`}
                               onChange={(e) => setProcesso({...processo, numeroProcessoInicial: e.target.value})}
                               value={processo.numeroProcessoInicial}/>
                    </LabelContainer>

                    <LabelContainer title={`Advogada`}>
                        <Input placeholder={`Digite para buscar`}
                               onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>
                </LineContent>

                <LineContent>
                    <LabelContainer title={`Data de Intimação`}>
                        <Input type={`date`}/>
                    </LabelContainer>

                    <LabelContainer title={`Data de Sentença`}>
                        <Input type={`date`}/>
                    </LabelContainer>

                    <LabelContainer title={`Data de Pagamento`}>
                        <Input type={`date`}/>
                    </LabelContainer>

                    <LabelContainer title={`Data Início do Benefício (DIB)`}>
                        <Input type={`date`}/>
                    </LabelContainer>

                    <LabelContainer title={`Data Início Pagamento do Benefício (DIP)`}>
                        <Input type={`date`}/>
                    </LabelContainer>
                </LineContent>

                <LineContent>
                    <LabelContainer title={`Número do Processo RPV`}>
                        <Input onChange={(e) => setProcesso({...processo, numeroProcessoInicial: e.target.value})}
                               value={processo.numeroProcessoInicial}/>
                    </LabelContainer>

                    <LabelContainer title={`Valor RPV`}>
                        <Input onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>

                    <LabelContainer title={`Valor Honorários`}>
                        <Input onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>
                </LineContent>

                <LineContent>
                    <LabelContainer title={`Número do Processo Sucumbência`}>
                        <Input onChange={(e) => setProcesso({...processo, numeroProcessoInicial: e.target.value})}
                               value={processo.numeroProcessoInicial}/>
                    </LabelContainer>

                    <LabelContainer title={`Valor Honorários Sucumbenciais`}>
                        <Input onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>

                    <LabelContainer title={`Número do Processo Administrativo`}>
                        <Input onChange={(e) => setProcesso({...processo, numeroProcessoInicial: e.target.value})}
                               value={processo.numeroProcessoInicial}/>
                    </LabelContainer>

                    <LabelContainer title={`Valor Honorários Pagamento no Administrativo`}>
                        <Input onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>
                </LineContent>

                <LineContent>
                    <LabelContainer title={`Número do Processo TRF`}>
                        <Input onChange={(e) => setProcesso({...processo, numeroProcessoInicial: e.target.value})}
                               value={processo.numeroProcessoInicial}/>
                    </LabelContainer>

                    <LabelContainer title={`Renda Mensal Inicial (RMI)`}>
                        <Input onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>

                    <LabelContainer title={`Banco`}>
                        <Input onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>

                    <LabelContainer title={`Observações`}>
                        <Input onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                               value={filtroCliente.nome}/>
                    </LabelContainer>
                </LineContent>

            </Pagesection.Form>
            <LineContent id={`filtrar-Processo`}>
                <LabelContainer>
                    <Input
                        onChange={(e) => setFiltroProcesso({...filtroProcesso, numeroProcessoInicial: e.target.value})}
                       value={filtroProcesso.numeroProcessoInicial}/>
                </LabelContainer>
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
