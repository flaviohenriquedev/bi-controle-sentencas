import {HTMLAttributes} from "react";
import {Theme} from "@/types/Theme";

interface Props extends HTMLAttributes<HTMLDivElement> {
    tema: Theme
}

export function CardDeTema({tema, onClick}: Props) {
    return (
        <div className={`flex flex-col gap-1 w-[10rem] h-[5.5rem] rounded-lg relative bg-base-100`}
             data-theme={tema.value}
             onClick={onClick}>
            <div className={`w-full h-[1rem] bg-base-200`}/>
            <div className={`flex h-full`}>
                <aside className={`flex items-center justify-center pr-1 w-[3rem] h-full`}>
                    <div className={`w-full h-full rounded-sm bg-base-200`}/>
                </aside>
                <div className={`flex flex-col w-full`}>
                    <div className={`flex gap-1 items-center justify-end w-full`}>
                        <div className={`flex w-full h-[0.5rem] rounded-sm bg-primary`}/>
                        <div className={`flex w-[0.6rem] h-[0.5rem] rounded-sm bg-info`}/>
                        <div className={`flex w-[0.6rem] h-[0.5rem] rounded-sm bg-success`}/>
                        <div className={`flex w-[0.6rem] h-[0.5rem] rounded-sm bg-warning`}/>
                    </div>
                    <div className={`flex items-center justify-center w-full h-full`}>
                        <div className={`flex items-center justify-center w-full h-full bg-base-100 roundes-sm text-base-content text-[8pt]`}>
                            {tema.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
