import { useState } from "react";
import { toast } from "react-toastify";
import { listarCursoApi } from "../../constants";

export function useListarCurso(){

    const [error] = useState();

    async function listarCurso(estudante){

        try{
            const response = await listarCursoApi(estudante);
            return response
        }
        catch(errorApi){
        }
    }

    return {listarCurso, error};

}