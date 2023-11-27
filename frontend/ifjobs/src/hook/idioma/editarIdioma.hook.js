import { useState } from "react";
import { toast } from "react-toastify";
import { editarIdiomaApi } from "../../constants";

export function useEditarIdioma(){

    const [error] = useState();

    async function editarIdioma(descricao, idioma){

        try{
            await editarIdiomaApi(descricao, idioma);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarIdioma, error};

}