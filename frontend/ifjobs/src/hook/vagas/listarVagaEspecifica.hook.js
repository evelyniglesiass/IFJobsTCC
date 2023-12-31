import { useState } from "react";
import { toast } from "react-toastify";
import { listarVagaEspecificaApi } from "../../constants";

export function useListarVagaEspecifica() {

    const [error] = useState();

    async function listarVagaEspecifica(vaga) {

        try {
            const response = await listarVagaEspecificaApi(vaga);
            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarVagaEspecifica, error };

}