import { useState } from "react";
import { toast } from "react-toastify";
import { excluirCurriculoApi } from "../../constants";

export function useExcluirCurriculo(){

    const [error] = useState();

    async function excluirCurriculo(){

        try{
            await excluirCurriculoApi();
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirCurriculo, error};

}