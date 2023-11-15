import { useState } from "react";
import { toast } from "react-toastify";
import { listarEstudanteNomeApi } from "../../constants";

export function useListarEstudanteNome(){

    const [error] = useState();

    async function listarEstudanteNome(nomeEstudante){

        try{
            const response = await listarEstudanteNomeApi(nomeEstudante);

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarEstudanteNome, error};

}