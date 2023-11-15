import { useState } from "react";
import { toast } from "react-toastify";
import { editarFormacaoApi } from "../../constants";

export function useEditarFormacao(){

    const [error] = useState();

    async function editarFormacao(descricao, cidade, instituicao, dataInicial, dataFinal, nivel){

        try{
            await editarFormacaoApi(descricao, cidade, instituicao, dataInicial, dataFinal, nivel);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarFormacao, error};

}