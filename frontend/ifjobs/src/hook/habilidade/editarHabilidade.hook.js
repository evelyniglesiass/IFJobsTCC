import { useState } from "react";
import { toast } from "react-toastify";
import { editarHabilidadesApi } from "../../constants";

export function useEditarHabilidade(){

    const [error] = useState();

    async function editarHabilidade(descricao){

        try{
            await editarHabilidadesApi(descricao);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarHabilidade, error};

}