import { useState } from "react";
import { toast } from "react-toastify";
import { excluirEmpresaApi } from "../../constants";

export function useExcluirEmpresa(){

    const [error] = useState();

    async function excluirEmpresa(){

        try{
            await excluirEmpresaApi();
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirEmpresa, error};

}