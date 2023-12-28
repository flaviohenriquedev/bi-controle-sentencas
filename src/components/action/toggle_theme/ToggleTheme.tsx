'use client'

import {useTheme} from "next-themes";

import * as S from './style'
import {useEffect, useState} from "react";
import {BiSolidDownArrow} from 'react-icons/bi'
import {Themes} from "@/data/Themes";
import {Theme} from "@/types/Theme";

const ToggleTheme = () => {
    const {setTheme, theme} = useTheme();
    const [openList, setOpenList] = useState<boolean>(false)

    const [darkThemes, setDarkThemes] = useState<Theme[]>([])
    const [lightThemes, setLightThemes] = useState<Theme[]>([])

    useEffect(() => {
        const darkThemesArray = Themes.filter(t => t.group === "dark");
        const lightThemesArray = Themes.filter(t => t.group === "light");

        setDarkThemes(darkThemesArray);
        setLightThemes(lightThemesArray);
    }, []);

    function renderThemes(themes: Theme[]) {
        return (themes && themes.map((tm, i) => (
            <li key={i} className="flex items-center gap-3 hover:cursor-pointer bg-base-100 p-2 rounded-lg m-2"
                data-theme={tm.value}
                onClick={() => setTheme(tm.value)}>
                <div className="flex gap-1">
                    <div className="bg-primary w-2 h-2 rounded-full"/>
                    <div className="bg-secondary w-2 h-2 rounded-lg" data-theme={tm.value}/>
                    <div className="bg-accent w-2 h-2 rounded-lg" data-theme={tm.value}/>
                </div>

                <div className="flex justify-between items-center grow">
                    {tm.description}
                    {theme && tm.value === theme && (
                        <div className="w-3 h-3 bg-green-500 rounded-full"/>
                    )}
                </div>
            </li>
        )))
    }

    return (
        <S.Container>
            <div className="flex items-center" onClick={() => setOpenList(!openList)}>
                <S.Span>Temas</S.Span>
                <BiSolidDownArrow/>
            </div>

            <S.List openList={openList} className="w-56 z-50">
                {darkThemes.length > 0 && (
                    <div className={`mb-2 border-b-2 border-base-content`}>
                        <label className={`mb-4 text-base-content`}>Dark Themes</label>
                        {renderThemes(darkThemes)}
                    </div>
                )}

                {lightThemes.length > 0 && (
                    <div className={`mb-2`}>
                        <label className={`mb-4 text-base-content`}>Light Themes</label>
                        {renderThemes(lightThemes)}
                    </div>
                )}
            </S.List>
        </S.Container>
    )
}

export default ToggleTheme;
