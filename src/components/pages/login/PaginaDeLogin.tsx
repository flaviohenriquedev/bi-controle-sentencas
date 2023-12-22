'use client'

import {Input} from "@/components/datainput/input/Input";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import {Button} from "@/components/action/button/Button";
import {useAuth} from "@/context/auth/AuthContext";
import {useEffect, useState} from "react";

export function PaginaDeLogin() {

    // const [ {login: setAuth}] = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [rememberMe, setRememberMe] = useState(false);
    const [requiredFields, setRequiredFields] = useState([]);
    //
    // useEffect(() => {
    //     const rememberedUser = localStorage.getItem("rememberedUser");
    //     const rememberedRememberMe = localStorage.getItem("rememberedRememberMe");
    //
    //     if (rememberedUser) {
    //         setUsername(rememberedUser);
    //         if (rememberedRememberMe === "true") {
    //             setRememberMe(true);
    //         }
    //     }
    // }, []);
    //
    // const handleFocusPassword = (e) => {
    //     if (e.key === "Enter") {
    //         document.getElementById("password").focus();
    //     }
    // };
    //
    // const handleKeyDown = (e) => {
    //     if (e.key === "Enter") {
    //         handleBeforeSubmit();
    //     }
    // };
    //
    // const handleBeforeSubmit = () => {
    //     const fieldsRequired = [];
    //
    //     if (!username) {
    //         fieldsRequired.push("username");
    //         toast.error("É necessário informar seu Usuário!");
    //     }
    //
    //     if (!password) {
    //         fieldsRequired.push("password");
    //         toast.error("É necessário informar sea Senha!");
    //     }
    //
    //     if (fieldsRequired.length === 0) {
    //         handleSubmit();
    //     } else {
    //         setRequiredFields(fieldsRequired);
    //         return;
    //     }
    // };
    //
    // const handleSubmit = () => {
    //     login({username, password})
    //         .then((response) => {
    //             const {usuario, token, nomeUsuario} = response.data;
    //             setAuth({usuario, token, nomeUsuario});
    //
    //             if (rememberMe) {
    //                 localStorage.setItem("rememberedUser", username);
    //                 localStorage.setItem("rememberedRememberMe", rememberMe);
    //             } else {
    //                 localStorage.removeItem("rememberedUser");
    //                 localStorage.removeItem("rememberedRememberMe");
    //             }
    //         })
    //         .catch((error) => {
    //             toast.error(error.response.data);
    //         });
    // };


    return (
        <div data-theme="light" className={`flex justify-center items-center w-screen h-screen bg-base-300`}>
            <div className={`flex flex-col gap-10 bg-base-100 w-[40%] h-[80%] p-6 rounded-lg shadow-xl`}>
                <div>
                    <span className={`text-[30pt] font-bold`}>Login</span>
                </div>
                <form onSubmit={(e) => e.preventDefault()}
                      className={`flex flex-col w-full gap-4 `}>
                    <LabelContainer title={`Email`}>
                        <Input placeholder={`Digite seu e-email`} className={`h-10`} type={`email`}
                               onChange={(e) => {
                                   setRequiredFields([]);
                                   setUsername(e.target.value);
                               }}/>
                    </LabelContainer>

                    <LabelContainer title={`Senha`}>
                        <Input placeholder={`Digite sua senha`} className={`h-10`} type={`password`}
                               onChange={(e) => {
                                   setRequiredFields([]);
                                   setPassword(e.target.value);
                               }}/>
                    </LabelContainer>
                    <div className={`mt-10`}>
                        <LineContent>
                            <Button identifier={`Entrar`} className={`w-full h-10`}/>
                        </LineContent>
                    </div>
                </form>
            </div>
        </div>
    )
}
