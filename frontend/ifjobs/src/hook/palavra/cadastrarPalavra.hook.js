import { useState } from "react";
import { toast } from "react-toastify";
import { criarPalavraChaveApi } from "../../constants";

export function useCadastrarPalavraChave() {

    const [error] = useState();

    async function cadastrarPalavraChave(palavra, id) {

        try {
            await criarPalavraChaveApi(palavra, id);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { cadastrarPalavraChave, error };

}