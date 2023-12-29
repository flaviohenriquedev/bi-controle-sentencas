'use client'

import {Input} from "@/components/datainput/input/Input";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import {Button} from "@/components/action/button/Button";
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from "next/navigation";
import {axiosInstance} from "@/services";
import {FormEvent, useState} from "react";
import {useAuth} from "@/context/auth/AuthContext";
import {Autenticacao} from "@/class/Autenticacao";

type User = {
    username: string
    password: string
}

export function LoginComponente() {

    const route = useRouter()
    const { retorno, login, setTokenLogado} = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const submitLogin = async ({username, password}: User) => {
        try {
            const res = await axiosInstance({
                method: "get",
                url: "/auth/login",
                auth: {username, password},
            });
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault()
        submitLogin({username, password})
            .then((response) => {
                const resposta: Autenticacao = response.data;

                if (resposta.token.length > 0) {
                    const tokenlogado = localStorage.getItem("token")
                    login(resposta);

                    if (!tokenlogado) {
                        localStorage.setItem("tokenlogado", resposta.token)

                        const tokenlogado2 = localStorage.getItem("token")
                        if (tokenlogado2) {
                            setTokenLogado(tokenlogado2)
                        }
                    } else {
                        setTokenLogado(tokenlogado)
                    }
                    route.push("/manager");
                } else {
                    console.error("Falha na autenticação");
                }

                if (rememberMe) {
                    localStorage.setItem("rememberedUser", username);
                    localStorage.setItem("rememberedRememberMe", String(rememberMe));
                } else {
                    localStorage.removeItem("rememberedUser");
                    localStorage.removeItem("rememberedRememberMe");
                }
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <div data-theme="light" className={`flex justify-center items-center w-screen h-screen bg-base-300`}>
            <div className={`flex flex-col gap-10 bg-base-100 w-[40%] h-[80%] p-6 rounded-lg shadow-xl`}>
                <div>
                    <span className={`text-[30pt] font-bold`}>Login</span>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}
                      className={`flex flex-col w-full gap-4 `}>
                    <LabelContainer title={`Email`}>
                        <Input placeholder={`Digite seu e-email`} className={`h-10`} type={`email`}
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                    </LabelContainer>

                    <LabelContainer title={`Senha`}>
                        <Input placeholder={`Digite sua senha`} className={`h-10`} type={`password`}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </LabelContainer>
                    <div className={`mt-10`}>
                        <LineContent>
                            <Button onClick={(e) => handleSubmit(e)}
                                    className={`w-full h-10`}
                                    identifier={`Entrar`}/>
                        </LineContent>
                    </div>
                </form>
            </div>
        </div>
    )
}
