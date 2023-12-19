'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";

export function Usuario() {


    return (
        <Pagesection.Container titulo={`Cadastro de Usuário`}>
            <Pagesection.Form>
                <LineContent>
                    <LabelContainer title={`Nome`}>
                        <Input />
                    </LabelContainer>

                    <LabelContainer title={`Email`}>
                        <Input type={`email`}/>
                    </LabelContainer>
                </LineContent>
            </Pagesection.Form>
        </Pagesection.Container>
    )
}
