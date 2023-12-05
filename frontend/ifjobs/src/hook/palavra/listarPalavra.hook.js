import { useState } from "react";
import { toast } from "react-toastify";
import { listarPalavraChaveApi } from "../../constants";

export function useListarPalavraChave() {

    const [error] = useState();

    async function listarPalavraChave(vaga) {

        try {
            const response = await listarPalavraChaveApi(vaga);
            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarPalavraChave, error };

}