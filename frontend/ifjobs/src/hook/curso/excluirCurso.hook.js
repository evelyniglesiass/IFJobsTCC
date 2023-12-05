import { useState } from "react";
import { toast } from "react-toastify";
import { excluirCursoApi } from "../../constants";

export function useExcluirCurso() {

    const [error] = useState();

    async function excluirCurso(id) {

        try {
            await excluirCursoApi(id);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { excluirCurso, error };

}