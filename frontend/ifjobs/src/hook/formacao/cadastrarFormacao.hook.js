import { useState } from "react";
import { toast } from "react-toastify";
import { criarFormacaoApi } from "../../constants";

export function useCadastrarFormacao(){

    const [error] = useState();

    async function cadastrarFormacao(descricao, cidade, instituicao, dataInicial, dataFinal, nivel){

        try{
            await criarFormacaoApi(descricao, cidade, instituicao, dataInicial, dataFinal, nivel);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarFormacao, error};

}