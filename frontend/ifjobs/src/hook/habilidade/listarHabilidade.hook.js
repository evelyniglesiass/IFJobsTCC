import { useState } from "react";
import { listarHabilidadeApi } from "../../constants";

export function useListarHabilidade() {

    const [error] = useState();

    async function listarHabilidade(estudante) {

        try {
            const response = await listarHabilidadeApi(estudante);
            return response
        }
        catch (errorApi) {
        }
    }

    return { listarHabilidade, error };

}