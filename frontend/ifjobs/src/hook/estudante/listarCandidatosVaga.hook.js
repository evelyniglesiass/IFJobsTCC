import { useState } from "react";
import { toast } from "react-toastify";
import { listarCandidatosVagaApi } from "../../constants";

export function useListarCandidatosVaga(){

    const [error] = useState();

    async function listarCandidatosVaga(vaga){

        try{
            const response = await listarCandidatosVagaApi(vaga);

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarCandidatosVaga, error};

}