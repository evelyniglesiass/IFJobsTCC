import { useState } from "react";
import { listarEmpresaEspecificaApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarEmpresaEspecifica() {

    const [error] = useState();

    async function listarEmpresaEspecifica(empresa) {

        try {
            const response = await listarEmpresaEspecificaApi(empresa);

            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarEmpresaEspecifica, error };

}