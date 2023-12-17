'use client'

import {useTheme} from "next-themes";
import {useState} from "react";
import {CiDark, CiLight} from "react-icons/ci";
import * as S from './style'
import {Circle} from "./style";


export function ToggleTheme() {
    const [darkLight, setDarkLight] = useState<boolean>(false);
    const {setTheme, theme} = useTheme();

    function handleClick() {
        setDarkLight(!darkLight)
        return darkLight ? setTheme("light") : setTheme("dark")
    }

    return (
        <S.Container dark={darkLight} onClick={() => handleClick()}>
            <S.Circle>
                {darkLight ? <CiLight/> : <CiDark/>}
            </S.Circle>
        </S.Container>
    )
}
