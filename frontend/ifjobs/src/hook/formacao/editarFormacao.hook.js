import { useState } from "react";
import { toast } from "react-toastify";
import { editarFormacaoApi } from "../../constants";

export function useEditarFormacao(){

    const [error] = useState();

    async function editarFormacao(descricao, cidade, instituicao, dataInicial, dataFinal, nivel, formacao){

        try{
            await editarFormacaoApi(descricao, cidade, instituicao, dataInicial, dataFinal, nivel, formacao);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarFormacao, error};

}