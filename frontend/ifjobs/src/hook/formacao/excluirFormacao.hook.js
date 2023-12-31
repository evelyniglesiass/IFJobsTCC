import { useState } from "react";
import { toast } from "react-toastify";
import { excluirFormacaoApi } from "../../constants";

export function useExcluirFormacao() {

    const [error] = useState();

    async function excluirFormacao(formacao) {

        try {
            await excluirFormacaoApi(formacao);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { excluirFormacao, error };

}