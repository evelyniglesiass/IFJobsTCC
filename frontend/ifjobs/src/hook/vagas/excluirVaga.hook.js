import { useState } from "react";
import { toast } from "react-toastify";
import { excluirVagaApi } from "../../constants";

export function useExcluirVaga() {

    const [error] = useState();

    async function excluirVaga(vaga) {

        try {
            await excluirVagaApi(vaga);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { excluirVaga, error };

}