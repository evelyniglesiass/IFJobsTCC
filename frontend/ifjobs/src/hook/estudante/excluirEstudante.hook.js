import { useState } from "react";
import { editarEstudanteApi, excluirEstudanteApi } from "../../constants";
import { toast } from "react-toastify";

export function useExcluirEstudante() {

    const [error] = useState();

    async function excluirEstudante() {

        try {
            await excluirEstudanteApi();
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { excluirEstudante, error };

}