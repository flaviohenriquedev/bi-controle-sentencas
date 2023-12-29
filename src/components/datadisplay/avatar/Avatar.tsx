'use client'

import * as S from "./style";

import Image from "next/image";
import Profile from "../../../../public/profile.jpg";
import Link from "next/link";
import {IoKeyOutline} from "react-icons/io5";
import {RxExit} from "react-icons/rx";
import {LiaAffiliatetheme} from "react-icons/lia";
import {Modal} from "@/components/datadisplay/modal";
import SeletorDeTemas from "@/components/datadisplay/temas/SeletorDeTemas";
import {openModal} from "@/functions/functions";
import {useState} from "react";
import {useAuth} from "@/context/auth/AuthContext";

export const Avatar = () => {
    const {logout}  = useAuth()
    const [abrirMenu, setAbrirMenu] = useState<boolean>(false)

    return (
        <>
        <div className="flex items-center relative">
            <div className={`flex gap-2 items-center`}>
                <div>
                    <span>{`Olá, Administrador`}</span>
                </div>
                <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar placeholder online"
                >
                    <S.AvatarContent id="avatar_content" onClick={() => setAbrirMenu(!abrirMenu)}>
                        <Image src={Profile} alt="profile_picture" id="avatar_image"/>
                    </S.AvatarContent>
                </label>
            </div>

            <ul className={`flex flex-col absolute top-full bg-base-300 p-2 rounded-lg w-56 right-5 ${abrirMenu ? 'block' : 'hidden'}`}
            >
                <div className={`flex flex-col gap-2`}>
                    <Link href="/" className={`flex gap-2 items-center`}>
                        <div>
                            <IoKeyOutline/>
                        </div>
                        <span>Alterar Senha</span>
                    </Link>
                    <div className={`flex gap-2 items-center hover:cursor-pointer`}
                         onClick={() => openModal('seletor_de_temas')}>
                        <div>
                            <LiaAffiliatetheme/>
                        </div>
                        <span>Trocar Tema</span>
                    </div>
                    <hr/>
                    <div onClick={logout} className={`flex gap-2 items-center hover:cursor-pointer`}>
                        <div>
                            <RxExit/>
                        </div>
                        <span>Sair</span>
                    </div>
                </div>
            </ul>
        </div>
            <Modal.Container id={`seletor_de_temas`} title={`Selecionar Tema`}>
                <Modal.Content>
                    <SeletorDeTemas/>
                </Modal.Content>
            </Modal.Container>
        </>
    );
};
