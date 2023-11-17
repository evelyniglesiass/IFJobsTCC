import { useState } from "react";
import { toast } from "react-toastify";
import { criarExperienciaApi } from "../../constants";

export function useCadastrarExperiencia(){

    const [error] = useState();

    async function cadastrarExperiencia(titulo, descricao, empresa, cargo, dataInicial, dataFinal){

        try{
            await criarExperienciaApi(titulo, descricao, empresa, cargo, dataInicial, dataFinal);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarExperiencia, error};

}