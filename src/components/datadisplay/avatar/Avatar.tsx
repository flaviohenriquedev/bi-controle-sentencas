'use client'

import * as S from "./style";

import Image from "next/image";
import Profile from "../../../../public/profile.jpg";
import Link from "next/link";
import {IoKeyOutline} from "react-icons/io5";
import {RxExit} from "react-icons/rx";
import {useRouter} from "next/navigation";

export const Avatar = () => {

    return (
        <div className="flex items-center dropdown dropdown-end">
            <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar placeholder online"
            >
                <S.AvatarContent id="avatar_content">
                    <Image src={Profile} alt="profile_picture" id="avatar_image"/>
                </S.AvatarContent>
            </label>
            <ul className="menu menu-sm dropdown-content top-full shadow bg-base-100 rounded-box w-52"
            >
                <div className={`flex flex-col gap-2`}>
                    <Link href="/" className={`flex gap-2 items-center`}>
                        <div>
                            <IoKeyOutline/>
                        </div>
                        <span>Alterar Senha</span>
                    </Link>
                    <hr/>
                    <Link href="/" className={`flex gap-2 items-center`}>
                        <div>
                            <RxExit/>
                        </div>
                        <span>Sair</span>
                    </Link>
                </div>
            </ul>
        </div>
    );
};
