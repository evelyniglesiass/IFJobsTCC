import { useState } from "react";
import { toast } from "react-toastify";
import { excluirIdiomaApi } from "../../constants";

export function useExcluirIdioma(){

    const [error] = useState();

    async function excluirIdioma(idioma){

        try{
            await excluirIdiomaApi(idioma);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirIdioma, error};

}