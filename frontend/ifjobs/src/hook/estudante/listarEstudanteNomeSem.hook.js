import { useState } from "react";
import { toast } from "react-toastify";
import { listarEstudanteNomeSemApi } from "../../constants";

export function useListarEstudanteNomeSem() {

    const [error] = useState();

    async function listarEstudanteNomeSem(nomeEstudante) {

        try {
            const response = await listarEstudanteNomeSemApi(nomeEstudante);

            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarEstudanteNomeSem, error };

}