import { useState } from "react";
import { listarEstudantesEstApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarEstudantesEst() {

    const [error] = useState();

    async function listarEstudantesEst() {

        try {
            const response = await listarEstudantesEstApi();

            return response
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { listarEstudantesEst, error };

}