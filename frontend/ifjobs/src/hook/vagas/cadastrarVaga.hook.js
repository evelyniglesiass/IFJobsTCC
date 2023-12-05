import { useState } from "react";
import { toast } from "react-toastify";
import { criarVagaApi } from "../../constants";

export function useCadastrarVaga() {

    const [error] = useState();

    async function cadastrarVaga(titulo, descricao, status, salario, idadeMinima, cidade, curso, dataPublicacao) {

        try {
            await criarVagaApi(titulo, descricao, status, salario, idadeMinima, cidade, curso, dataPublicacao);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { cadastrarVaga, error };

}