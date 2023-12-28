'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {excluirCliente, getClientes, salvarCliente} from "@/services";
import {Table} from "@/components/datadisplay/table";
import {Cliente} from "@/class/Cliente";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

export function ClientesComponente() {

    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [cliente, setCliente] = useState<Cliente>(new Cliente())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [filtroCliente, setFiltroCliente] = useState<Cliente>(new Cliente())

    useEffect(() => {
        fetchCadastros()
    }, [filtroCliente]);

    async function fetchCadastros() {
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

    function novoCadastro() {
        setCliente(new Cliente())
        setAbrirFormulario(true)
    }

    async function handleSalvarCliente(cliente: Cliente) {
        await salvarCliente(cliente);
        await fetchCadastros();
        setCliente(new Cliente())
        setFiltroCliente(new Cliente())
        setAbrirFormulario(false)
    }

    function cancelarFormulario() {
        setAbrirFormulario(false)
        setCliente(new Cliente())
    }

    function handleSelecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        setAbrirFormulario(true)
    }

    async function handleExcluirCliente(id: number) {
        try {
            await excluirCliente(id);
            setClientes(clientes.filter((cliente) => cliente.id !== id));
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
        }
    }

    const objetoNovoCadastro: AcoesFormularioType = {
        valor: abrirFormulario,
        funcao: () => novoCadastro()
    }
    const objetoSalvarCadastro: AcoesFormularioType = {valor: '', funcao: () => handleSalvarCliente(cliente)}
    const objetoCancelarCadastro: AcoesFormularioType = {valor: '', funcao: () => cancelarFormulario()}

    return (
        <Pagesection.Container titulo={`Cadastro de Clientes`}
                               objetoNovoCadastro={objetoNovoCadastro}
                               objetoSalvarCadastro={objetoSalvarCadastro}
                               objetoCancelarCadastro={objetoCancelarCadastro}
        >
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`CPF`}>
                        <Input onChange={(e) => setCliente({...cliente, cpf: e.target.value})}
                               value={cliente.nome}/>
                    </LabelContainer>
                    <LabelContainer title={`Nome`}>
                        <Input onChange={(e) => setCliente({...cliente, nome: e.target.value})}
                               value={cliente.nome}/>
                    </LabelContainer>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-cliente`}>
                <LabelContainer>
                    <Input onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                       value={filtroCliente.nome}/>
                </LabelContainer>
            </LineContent>
            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`}/>
                            <Table.Title title={`Nome`}/>
                            <Table.Title title={`CPF`}/>
                            <Table.Title title={`Ações`}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {clientes && clientes.map((c, index) => (
                            <Table.Row key={c.id}
                                       onDoubleClick={() => handleSelecionarCliente(c)}
                                       index={index}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={c.nome}/>
                                <Table.Value value={c.cpf}/>
                                <Table.Actions metodoExcluir={() => handleExcluirCliente(c.id)}
                                               metodoEditar={() => handleSelecionarCliente(c)}
                                               objeto={c}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
