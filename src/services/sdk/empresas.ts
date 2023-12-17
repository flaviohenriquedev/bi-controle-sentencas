import {axiosInstance} from "@/services";
import {CompanyClass} from "@/class/CompanyClass";

export const getCompany = async ({filtro} : any) => {
    try {
        const res = await axiosInstance({
            method: "get",
            url: "/empresas" + (filtro && "?filtro=" + filtro),
        });

        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getEmpresasAutoComplete = async ({filtro} : any) => {
    try {
        const res = await axiosInstance({
            method: "get",
            url: "/empresas/auto-complete" + (filtro && "?filtro=" + filtro),
        });

        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const salvarEmpresa = async (company: CompanyClass) => {
    try {
        const res = await axiosInstance({
            method: company.id ? "put" : "post",
            url: "/empresas" + (company.id ? "/" + company.id : ""),
            data: {nome: company.nome},
        });

        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const excluirEmpresa = async ({id} : any) => {
    try {
        const res = await axiosInstance({
            method: "delete",
            url: "/empresas/" + id,
        });

        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const ativarEmpresa = async ({id} : any) => {
    try {
        const res = await axiosInstance({
            method: "patch",
            url: "/empresas/ativar/" + id,
        });

        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const inativarEmpresa = async ({id} :any) => {
    try {
        const res = await axiosInstance({
            method: "patch",
            url: "/empresas/inativar/" + id,
        });

        return Promise.resolve(res);
    } catch (error) {
        return Promise.reject(error);
    }
};
