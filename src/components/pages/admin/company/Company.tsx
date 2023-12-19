'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {Table} from "@/components/datadisplay/table";
import {getEmpresa, salvarEmpresa} from "@/services";
import {useEffect, useState} from "react";
import {Empresa} from "@/class/Empresa";
import {Button} from "@/components/action/button/Button";

export function Company() {
    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [empresa, setEmpresa] = useState<Empresa>(new Empresa());
    const [filtroEmpresa, setFiltroEmpresa] = useState<Empresa>(new Empresa())
    const [empresas, setEmpresas] = useState<Empresa[]>([])

    const [filtrarEmpresa, setFiltrarEmpresa] = useState("");
    const [empresaFiltrada, setEmpresaFiltrada] = useState<Empresa[]>(empresas);

    useEffect(() => {
        fetchCadastros()
        console.log(empresas)
    }, []);

    useEffect(() => {
        const filterMenu = () => {
            const filteredMap: { [key: string]: Empresa } = {};

            if (empresas) {
                empresas.forEach((empresa) => {
                    const filtro: Empresa = {...empresa};
                    if (
                        empresa.nome
                            .toLowerCase()
                            .includes(filtrarEmpresa.toLowerCase())
                    ) {
                        filteredMap[empresa.nome] = filtro;
                    }
                });
            }

            const filtered: Empresa[] = Object.values(filteredMap);
            setEmpresaFiltrada(filtered);
        };

        filterMenu();
    }, [empresas, filtrarEmpresa]);

    const fetchCadastros = async () => {
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
    };

    function novoCadastro() {
        setEmpresa(new Empresa())
        setAbrirFormulario(true)
    }

    async function handleSalvarEmpresa(empresa: Empresa) {
        await salvarEmpresa(empresa);
        await fetchCadastros();
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

    return (
        <Pagesection.Container  titulo={`Cadastro de Empresa`}
                                metodoAbrirFormulario={novoCadastro}>
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`CNPJ`} width={`64rem`}>
                        <Input/>
                    </LabelContainer>

                    <LabelContainer title={`Razão Social`}>
                        <Input onChange={(e) => setEmpresa({...empresa, nome: e.target.value})}
                               value={empresa.nome}/>
                    </LabelContainer>
                </LineContent>
                <LineContent alignment={`right`}>
                    <Button identifier={`Salvar`}
                            onClick={() => handleSalvarEmpresa(empresa)}/>

                    <Button identifier={`Cancelar`}
                            type={`warning`}
                            onClick={() => cancelarFormulario()}/>
                </LineContent>
            </Pagesection.Form>

            <LineContent>
                <Input onChange={(e) => setFiltrarEmpresa(e.target.value)}/>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`}/>
                            <Table.Title title={`CNPJ`}/>
                            <Table.Title title={`Nome`}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {empresaFiltrada && empresaFiltrada.map((empresa, index) => (
                            <Table.Row key={empresa.id}
                                       onDoubleClick={() => handleSelecionarEmpresa(empresa)}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={empresa.cnpj}/>
                                <Table.Value value={empresa.nome}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
