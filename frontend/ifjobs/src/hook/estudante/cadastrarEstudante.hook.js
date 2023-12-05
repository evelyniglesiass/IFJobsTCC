import { useState } from "react";
import { criarEstudanteApi } from "../../constants";
import { toast } from "react-toastify";

export function useCadastroEstudante() {

    const [error] = useState();

    async function cadastroEstudante(nome, nomeUsuario, idade, curso, telefone, email, senha, cidade) {

        try {
            await criarEstudanteApi(nome, nomeUsuario, idade, curso, telefone, email, senha, cidade);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { cadastroEstudante, error };

}