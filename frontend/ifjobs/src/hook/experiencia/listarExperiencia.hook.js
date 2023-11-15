import { useState } from "react";
import { toast } from "react-toastify";
import { listarExperienciaApi } from "../../constants";

export function useListarExperiencia(){

    const [error] = useState();

    async function listarExperiencia(estudante){

        try{
            const response = await listarExperienciaApi(estudante);
            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarExperiencia, error};

}