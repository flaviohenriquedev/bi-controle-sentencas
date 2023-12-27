'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {Table} from "@/components/datadisplay/table";
import {excluirEmpresa, getEmpresa, salvarEmpresa} from "@/services";
import {useEffect, useState} from "react";
import {Empresa} from "@/class/Empresa";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

export function EmpresaComponete() {

    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [empresa, setEmpresa] = useState<Empresa>(new Empresa());
    const [filtroEmpresa, setFiltroEmpresa] = useState<Empresa>(new Empresa())
    const [empresas, setEmpresas] = useState<Empresa[]>([])

    useEffect(() => {
        fetchCadastros()
    }, [filtroEmpresa]);

    async function fetchCadastros() {
        try {
            const response = await getEmpresa(filtroEmpresa);
            setEmpresas(response.data);
        } catch (error) {
            // if (error.response?.status === 401) {
            //     setAuth(false);
            // } else {
            //     toast.error(error.message);
            // }
        }
    }

    function novoCadastro() {
        setEmpresa(new Empresa())
        setAbrirFormulario(true)
    }

    function handleSalvarEmpresa(empresa: Empresa) {
        salvarEmpresa(empresa);
        fetchCadastros();
        setEmpresa(new Empresa())
        setFiltroEmpresa(new Empresa())
        setAbrirFormulario(false)
    }

    function handleSelecionarEmpresa(empresa: Empresa) {
        setEmpresa(empresa)
        setAbrirFormulario(true)
    }

    function cancelarFormulario() {
        setAbrirFormulario(false)
        setEmpresa(new Empresa())
    }

    async function handleExcluirEmpresa(id: number) {
        try {
            await excluirEmpresa(id);
            setEmpresas(empresas.filter((ep) => ep.id !== id));
        } catch (error) {
            console.error('Erro ao excluir empresa:', error);
        }
    }

    const objetoNovoCadastro: AcoesFormularioType = {
        valor: abrirFormulario,
        funcao: () => setAbrirFormulario(!abrirFormulario)
    }
    const objetoSalvarCadastro: AcoesFormularioType = {valor: '', funcao: () => handleSalvarEmpresa(empresa)}
    const objetoCancelarCadastro: AcoesFormularioType = {valor: '', funcao: () => cancelarFormulario()}

    return (
        <Pagesection.Container titulo={`Cadastro de Empresa`}
                               objetoNovoCadastro={objetoNovoCadastro}
                               objetoSalvarCadastro={objetoSalvarCadastro}
                               objetoCancelarCadastro={objetoCancelarCadastro}
        >
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`CNPJ`} width={`64rem`}>
                        <Input />
                    </LabelContainer>

                    <LabelContainer title={`Razão Social`}>
                        <Input onChange={(e) => setEmpresa({...empresa, nome: e.target.value})}
                               value={empresa.nome}/>
                    </LabelContainer>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-empresa`}>
                <LabelContainer>
                    <Input placeholder={`Filtrar por nome`}
                           onChange={(e) => setFiltroEmpresa({ ...filtroEmpresa, nome: e.target.value })}
                           value={filtroEmpresa.nome}/>
                </LabelContainer>
            </LineContent>
            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`}/>
                            <Table.Title title={`CNPJ`}/>
                            <Table.Title title={`Nome`}/>
                            <Table.Title title={`Ações`}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {empresas && empresas.map((e, index) => (
                            <Table.Row key={e.id}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={e.cnpj}/>
                                <Table.Value value={e.nome}/>
                                <Table.Actions metodoExcluir={() => handleExcluirEmpresa(e.id)}
                                               metodoEditar={() => handleSelecionarEmpresa(e)}
                                               objeto={e}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
