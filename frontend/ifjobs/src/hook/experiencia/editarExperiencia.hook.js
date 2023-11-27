import { useState } from "react";
import { toast } from "react-toastify";
import { editarExperenciaApi } from "../../constants";

export function useEditarExperiencia(){

    const [error] = useState();

    async function editarExperiencia(descricao, empresa, cargo, dataInicial, dataFinal, experiencia){

        try{
            await editarExperenciaApi(descricao, empresa, cargo, dataInicial, dataFinal, experiencia);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarExperiencia, error};

}