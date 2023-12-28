'use client'

import {useTheme} from "next-themes";
import {Theme} from "@/types/Theme";
import {Themes} from "@/data/Themes";
import {CardDeTema} from "@/components/datadisplay/temas/CardDeTema";
import * as S from './style'

export default function SeletorDeTemas() {
    const {setTheme, theme} = useTheme();
    function renderThemes(themes: Theme[]) {
        return (themes && themes.map((tm, i) => (
            <CardDeTema tema={tm} key={tm.value} onClick={() => setTheme(tm.value)}/>
        )))
    }

    return (
        <S.Container>
            {renderThemes(Themes)}
        </S.Container>
    )
}
