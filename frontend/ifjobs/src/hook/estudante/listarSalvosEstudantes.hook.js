import { useState } from "react";
import { toast } from "react-toastify";
import { listarSalvosEstudantesApi } from "../../constants";

export function useListarSalvosEstudantes() {

    const [error] = useState();

    async function listarSalvosEstudantes(estudante) {

        try {
            const response = await listarSalvosEstudantesApi(estudante);

            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarSalvosEstudantes, error };

}