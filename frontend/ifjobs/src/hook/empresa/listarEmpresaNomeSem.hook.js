import { useState } from "react";
import { toast } from "react-toastify";
import { listarEmpresaNomeSemApi } from "../../constants";


export function useListarEmpresaNomeSem() {

    const [error] = useState();

    async function listarEmpresaNomeSem(nomeEmpresa) {

        try {
            const response = await listarEmpresaNomeSemApi(nomeEmpresa);
            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarEmpresaNomeSem, error };

}