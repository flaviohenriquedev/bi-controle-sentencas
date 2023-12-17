'use client'

import {Pagesection} from "@/components/layout/pagesection";
import {LineContent} from "@/components/layout/linecontent/LineContent";
import LabelContainer from "@/components/datainput/label/LabelContainer";
import {Input} from "@/components/datainput/input/Input";
import {Table} from "@/components/datadisplay/table";
import {salvarEmpresa} from "@/services";
import {useState} from "react";
import {CompanyClass} from "@/class/CompanyClass";
import {Button} from "@/components/action/button/Button";

export function Company() {

    const [company, setCompany] = useState<CompanyClass>(new CompanyClass());
    const [companyList, setCompanyList] = useState<CompanyClass[]>([])

    return (
        <Pagesection.Container title={`Cadastro de Empresa`}>
            <Pagesection.Form>
                <LineContent>
                    <LabelContainer title={`CNPJ`} width={`64rem`}>
                        <Input />
                    </LabelContainer>

                    <LabelContainer title={`Razão Social`}>
                        <Input onChange={(e) => setCompany({...company, nome: e.target.value})}/>
                    </LabelContainer>
                </LineContent>
                <LineContent alignment={`right`}>
                    <Button identifier={`Salvar`}
                            onClick={() => salvarEmpresa(company)}/>
                </LineContent>
            </Pagesection.Form>

            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title title={`Linha`} />
                            <Table.Title title={`CNPJ`} />
                            <Table.Title title={`Nome`} />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {companyList && companyList.map((company, index) => (
                            <Table.Row key={company.id}>
                                <Table.Value value={index + 1} />
                                <Table.Value value={company.cnpj} />
                                <Table.Value value={company.nome} />
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </Pagesection.Container>
    )
}
