import { useState } from "react";
import { toast } from "react-toastify";
import { excluirPalavraChaveApi } from "../../constants";

export function useExcluirPalavraChave(){

    const [error] = useState();

    async function excluirPalavraChave(){

        try{
            await excluirPalavraChaveApi();
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirPalavraChave, error};

}