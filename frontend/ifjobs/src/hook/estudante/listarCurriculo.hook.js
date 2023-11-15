import { useState } from "react";
import { toast } from "react-toastify";
import { listarCurriculoApi } from "../../api/estudante/listar-curriculo.api";

export function useListarCurriculo(){

    const [error] = useState();

    async function listarCurriculo(estudante){

        try{
            const response = await listarCurriculoApi(estudante);

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarCurriculo, error};

}