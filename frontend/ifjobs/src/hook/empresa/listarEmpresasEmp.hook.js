import { useState } from "react";
import { listarEmpresasEmpApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarEmpresasEmp() {

    const [error] = useState();

    async function listarEmpresasEmp() {

        try {
            const response = await listarEmpresasEmpApi();

            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarEmpresasEmp, error };

}