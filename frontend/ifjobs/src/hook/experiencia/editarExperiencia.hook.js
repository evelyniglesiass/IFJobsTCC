import { useState } from "react";
import { toast } from "react-toastify";
import { editarExperenciaApi } from "../../constants";

export function useEditarExperiencia(){

    const [error] = useState();

    async function editarExperiencia(titulo, descricao, empresa, cargo, dataInicial, dataFinal){

        try{
            await editarExperenciaApi(titulo, descricao, empresa, cargo, dataInicial, dataFinal);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarExperiencia, error};

}