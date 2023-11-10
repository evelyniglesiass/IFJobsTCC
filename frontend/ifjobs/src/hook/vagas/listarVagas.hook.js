import { useState } from "react";
import { criarEstudanteApi, listarVagasApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarVagas(){

    const [error] = useState();

    async function listarVagas(){

        try{
            const response = await listarVagasApi();

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarVagas, error};

}