'use state'

import React, {createContext, useContext, useState} from "react";
import {Autenticacao} from "@/class/Autenticacao";
import {login} from "@/services";


export const LoginContext = createContext<Autenticacao>(new Autenticacao())

export function LoginContextProvider({children} : {children: React.ReactNode}) {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(false)

    return (
        <LoginContext.Provider value={{
            email, setEmail, senha, setSenha, usuarioLogado
        }}>

        </LoginContext.Provider>
    )
}
