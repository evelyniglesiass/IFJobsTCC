import { useState } from "react";
import { toast } from "react-toastify";
import { editarCursoApi, excluirCursoApi } from "../../constants";

export function useExcluirCurso(){

    const [error] = useState();

    async function excluirCurso(){

        try{
            await excluirCursoApi();
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirCurso, error};

}