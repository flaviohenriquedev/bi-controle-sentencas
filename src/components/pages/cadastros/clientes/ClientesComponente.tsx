'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {excluirCliente, getClientes, salvarCliente} from "@/services";
import {Button} from "@/components/action/button/Button";
import {Table} from "@/components/datadisplay/table";
import {Cliente} from "@/class/Cliente";

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


    return (
        <Pagesection.Container titulo={`Cadastro de Clientes`}
                               metodoAbrirFormulario={novoCadastro}>
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
                <LineContent alignment={`right`}>
                    <Button identifier={`Salvar`}
                            onClick={() => handleSalvarCliente(cliente)}/>

                    <Button identifier={`Cancelar`}
                            type={`warning`}
                            onClick={() => cancelarFormulario()}/>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-cliente`}>
                <Input placeholder={`Filtrar por nome`}
                       onChange={(e) => setFiltroCliente({...filtroCliente, nome: e.target.value})}
                       value={filtroCliente.nome}/>
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
                        {clientes && clientes.map((cliente, index) => (
                            <Table.Row key={cliente.id}
                                       onDoubleClick={() => handleSelecionarCliente(cliente)}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={cliente.nome}/>
                                <Table.Value value={cliente.cpf}/>
                                <Table.Actions metodoExcluir={() => handleExcluirCliente(cliente.id)}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
