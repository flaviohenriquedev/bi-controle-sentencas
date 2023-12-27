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

type User = {
    username: string
    password: string
}

export function PaginaDeLogin() {

    const route = useRouter()
    const [, {login: setAuth}] = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [requiredFields, setRequiredFields] = useState([]);

    const login = async ({username, password}: User) => {
        try {
            console.log(username, password)
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        login({username, password})
            .then((response) => {
                const {usuario, token, nomeUsuario} = response.data;
                setAuth({usuario, token, nomeUsuario});

                if (rememberMe) {
                    localStorage.setItem("rememberedUser", username);
                    localStorage.setItem("rememberedRememberMe", String(rememberMe));
                } else {
                    localStorage.removeItem("rememberedUser");
                    localStorage.removeItem("rememberedRememberMe");
                }
            })
            .catch((error) => {
                console.error(error.response.data);
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
                            <Button onClick={() => route.push("/manager")}
                                    className={`w-full h-10`}
                                    identifier={`Entrar`}/>
                        </LineContent>
                    </div>
                </form>
            </div>
        </div>
    )
}
