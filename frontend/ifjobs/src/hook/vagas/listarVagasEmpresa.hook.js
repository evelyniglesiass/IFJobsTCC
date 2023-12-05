import { useState } from "react";
import { listarVagasEmpresaApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarVagasEmpresa() {

    const [error] = useState();

    async function listarVagasEmpresa(empresa) {

        try {
            const response = await listarVagasEmpresaApi(empresa);

            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarVagasEmpresa, error };

}