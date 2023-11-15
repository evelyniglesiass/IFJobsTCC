import { useState } from "react";
import { toast } from "react-toastify";
import { listarFormacaoApi } from "../../constants";

export function useListarFormacao(){

    const [error] = useState();

    async function listarFormacao(estudante){

        try{
            const response = await listarFormacaoApi(estudante);
            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarFormacao, error};

}