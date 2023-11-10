import { useState } from "react";
import { listarVagasEmpresaApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarVagasEmpresa(){

    const [error] = useState();

    async function listarVagasEmpresa(){

        try{
            const response = await listarVagasEmpresaApi();

            return response
        }
        catch(errorApi){
            console.log(errorApi)
            toast.error(errorApi);
        }
    }

    return {listarVagasEmpresa, error};

}