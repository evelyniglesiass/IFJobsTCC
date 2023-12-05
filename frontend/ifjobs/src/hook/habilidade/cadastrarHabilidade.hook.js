import { useState } from "react";
import { toast } from "react-toastify";
import { criarHabilidadeApi } from "../../constants";

export function useCadastrarHabilidade() {

    const [error] = useState();

    async function cadastrarHabilidade(descricao) {

        try {
            await criarHabilidadeApi(descricao);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { cadastrarHabilidade, error };

}