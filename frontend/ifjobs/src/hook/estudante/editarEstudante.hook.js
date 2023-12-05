import { useState } from "react";
import { editarEstudanteApi } from "../../constants";
import { toast } from "react-toastify";

export function useEditarEstudante() {

    const [error] = useState();

    async function editarEstudante(nome, nomeUsuario, idade, curso, telefone, email, cidade, senha) {

        try {
            await editarEstudanteApi(nome, nomeUsuario, idade, curso, telefone, email, cidade, senha);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { editarEstudante, error };

}