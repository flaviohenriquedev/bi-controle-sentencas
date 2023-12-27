'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {useEffect, useState} from "react";
import {Usuario} from "@/class/Usuario";
import {excluirUsuario, getUsuarios, salvarUsuario} from "@/services";
import {Table} from "@/components/datadisplay/table";
import {AcoesFormularioType} from "@/types/AcoesFormularioType";

export function UsuarioComponent() {

    const [abrirFormulario, setAbrirFormulario] = useState<boolean>(false)
    const [usuario, setUsuario] = useState<Usuario>(new Usuario())
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [filtroUsuario, setFiltroUsuario] = useState<Usuario>(new Usuario())

    useEffect(() => {
        fetchCadastros()
    }, [filtroUsuario]);

    async function fetchCadastros() {
        try {
            const response = await getUsuarios(filtroUsuario);
            setUsuarios(response.data);
        } catch (error) {
            // if (error.response?.status === 401) {
            //     setAuth(false);
            // } else {
            //     toast.error(error.message);
            // }
        }
    };

    function novoCadastro() {
        setUsuario(new Usuario())
        setAbrirFormulario(true)
    }

    async function handleSalvarUsuario(usuario: Usuario) {
        await salvarUsuario(usuario);
        await fetchCadastros();
        setUsuario(new Usuario())
        setFiltroUsuario(new Usuario())
        setAbrirFormulario(false)
    }

    function cancelarFormulario() {
        setAbrirFormulario(false)
        setUsuario(new Usuario())
    }

    function handleSelecionarUsuario(usuario: Usuario) {
        setUsuario(usuario)
        setAbrirFormulario(true)
    }

    async function handleExcluirUsuario(id: number) {
        try {
            await excluirUsuario(id);
            setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        } catch (error) {
            console.error('Erro ao excluir usuario:', error);
        }
    }

    const objetoNovoCadastro: AcoesFormularioType = {
        valor: abrirFormulario,
        funcao: () => setAbrirFormulario(!abrirFormulario)
    }
    const objetoSalvarCadastro: AcoesFormularioType = {valor: '', funcao: () => handleSalvarUsuario(usuario)}
    const objetoCancelarCadastro: AcoesFormularioType = {valor: '', funcao: () => cancelarFormulario()}

    return (
        <Pagesection.Container titulo={`Cadastro de Usuário`}
                               objetoNovoCadastro={objetoNovoCadastro}
                               objetoSalvarCadastro={objetoSalvarCadastro}
                               objetoCancelarCadastro={objetoCancelarCadastro}>
            <Pagesection.Form className={abrirFormulario ? `block` : `hidden`}>
                <LineContent>
                    <LabelContainer title={`Nome`}>
                        <Input onChange={(e) => setUsuario({...usuario, nome: e.target.value})}
                               value={usuario.nome}/>
                    </LabelContainer>

                    <LabelContainer title={`Email`}>
                        <Input type={`email`}
                               onChange={(e) => setUsuario({...filtroUsuario, email: e.target.value})}
                               value={usuario.email}/>
                    </LabelContainer>
                </LineContent>
            </Pagesection.Form>
            <LineContent id={`filtrar-usuario`}>
                <LabelContainer>
                    <Input onChange={(e) => setFiltroUsuario({...filtroUsuario, nome: e.target.value})}
                       value={filtroUsuario.nome}/>
                </LabelContainer>
            </LineContent>
            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`}/>
                            <Table.Title title={`Nome`}/>
                            <Table.Title title={`Email`}/>
                            <Table.Title title={`Ações`}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {usuarios && usuarios.map((usuario, index) => (
                            <Table.Row key={usuario.id}
                                       onDoubleClick={() => handleSelecionarUsuario(usuario)}>
                                <Table.Value value={index + 1}/>
                                <Table.Value value={usuario.nome}/>
                                <Table.Value value={usuario.email}/>
                                <Table.Actions metodoExcluir={() => handleExcluirUsuario(usuario.id)}/>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
