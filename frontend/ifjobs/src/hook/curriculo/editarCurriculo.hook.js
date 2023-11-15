import { useState } from "react";
import { toast } from "react-toastify";
import { editarCurriculoApi } from "../../constants";

export function useEditarCurriculo(){

    const [error] = useState();

    async function editarCurriculo(resumo){

        try{
            await editarCurriculoApi(resumo);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarCurriculo, error};

}