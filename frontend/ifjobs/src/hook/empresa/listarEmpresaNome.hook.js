import { useState } from "react";
import { listarEmpresaNomeApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarEmpresaNome(){

    const [error] = useState();

    async function listarEmpresaNome(nomeEmpresa){

        try{
            const response = await listarEmpresaNomeApi(nomeEmpresa);

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarEmpresaNome, error};

}