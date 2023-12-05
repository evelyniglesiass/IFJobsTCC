import { useState } from "react";
import { listarFormacaoApi } from "../../constants";

export function useListarFormacao() {

    const [error] = useState();

    async function listarFormacao(estudante) {

        try {
            const response = await listarFormacaoApi(estudante);
            return response
        }
        catch (errorApi) {
        }
    }

    return { listarFormacao, error };

}