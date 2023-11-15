import { useState } from "react";
import { toast } from "react-toastify";
import {excluirVagaApi } from "../../constants";

export function useExcluirVaga(){

    const [error] = useState();

    async function excluirVaga(){

        try{
            await excluirVagaApi();
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirVaga, error};

}