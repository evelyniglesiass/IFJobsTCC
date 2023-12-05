import { useState } from "react";
import { toast } from "react-toastify";
import { editarHabilidadesApi } from "../../constants";

export function useEditarHabilidade() {

    const [error] = useState();

    async function editarHabilidade(descricao, id) {

        try {
            await editarHabilidadesApi(descricao, id);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { editarHabilidade, error };

}