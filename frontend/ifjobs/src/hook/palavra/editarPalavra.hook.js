import { useState } from "react";
import { toast } from "react-toastify";
import { editarPalavraChaveApi } from "../../constants";

export function useEditarPalavraChave(){

    const [error] = useState();

    async function editarPalavraChave(palavra, palavraId){

        try{
            await editarPalavraChaveApi(palavra, palavraId);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarPalavraChave, error};

}