import { useState } from "react";
import { toast } from "react-toastify";
import { listarHabilidadeApi } from "../../constants";

export function useListarHabilidade(){

    const [error] = useState();

    async function listarHabilidade(estudante){

        try{
            const response = await listarHabilidadeApi(estudante);
            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarHabilidade, error};

}