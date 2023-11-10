import { useState } from "react";
import { listarEmpresasEstApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarEmpresasEst(){

    const [error] = useState();

    async function listarEmpresasEst(){

        try{
            const response = await listarEmpresasEstApi();

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarEmpresasEst, error};

}