import { useState } from "react";
import { listarCurriculoApi } from "../../constants";

export function useListarCurriculo(){

    const [error] = useState();

    async function listarCurriculo(estudante){

        try{
            const response = await listarCurriculoApi(estudante);
            return response
        }
        catch(errorApi){
        }
    }

    return {listarCurriculo, error};

}