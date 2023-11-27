import { useState } from "react";
import { toast } from "react-toastify";
import { excluirCursoApi } from "../../constants";

export function useExcluirCurso(){

    const [error] = useState();

    async function excluirCurso(curso){

        try{
            await excluirCursoApi(curso);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirCurso, error};

}