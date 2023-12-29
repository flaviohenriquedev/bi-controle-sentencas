'use client'

import * as React from "react";
import {createContext, useContext, useState} from "react";

import {setToken} from "@/services";
import {Autenticacao} from "@/class/Autenticacao";
import {router} from "next/client";
import {useRouter} from "next/navigation";

interface Props {
    retorno: Autenticacao
    setRetorno: (retorno: Autenticacao) => void
}

const AuthContext = createContext<Props>({
    retorno: new Autenticacao(),
    setRetorno: (retorno: Autenticacao) => {
    }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [retorno, setRetorno] = useState<Autenticacao>(new Autenticacao())

    return (
        <AuthContext.Provider value={{
            retorno,
            setRetorno
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const route = useRouter()
    const {retorno, setRetorno} = useContext(AuthContext);
    const [tokenlogado, setTokenLogado] = useState<string>('')

    const logout = () => {
        setRetorno(new Autenticacao());
        setToken('');
        if (localStorage.getItem('tokenlogado')) {
            localStorage.removeItem('tokenlogado')
        }
        route.push("/")
    };

    const login = (auth: Autenticacao) => {
        console.log('AUTH', auth.token)
        setRetorno(auth);
        setToken(auth.token);
    };

    return {retorno, login, logout, tokenlogado, setTokenLogado};
};
