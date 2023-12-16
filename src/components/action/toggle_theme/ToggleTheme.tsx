'use client'

import {useTheme} from "next-themes";

export function ToggleTheme() {
    const {setTheme, theme} = useTheme();

    return (
        <div className={`flex gap-2`}>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
    )
}
