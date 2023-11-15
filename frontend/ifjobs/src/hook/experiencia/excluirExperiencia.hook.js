import { useState } from "react";
import { toast } from "react-toastify";
import { excluirExperienciaApi } from "../../constants";

export function useExcluirExperiencia(){

    const [error] = useState();

    async function excluirExperiencia(){

        try{
            await excluirExperienciaApi();
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirExperiencia, error};

}