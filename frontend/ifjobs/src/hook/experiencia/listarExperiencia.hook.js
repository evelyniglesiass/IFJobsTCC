import { useState } from "react";
import { listarExperienciaApi } from "../../constants";

export function useListarExperiencia() {

    const [error] = useState();

    async function listarExperiencia(estudante) {

        try {
            const response = await listarExperienciaApi(estudante);
            return response
        }
        catch (errorApi) {
        }
    }

    return { listarExperiencia, error };

}