import { useState } from "react";
import { toast } from "react-toastify";
import { criarCurriculoApi } from "../../constants";

export function useCadastrarCurriculo(){

    const [error] = useState();

    async function cadastrarCurriculo(resumo){

        try{
            await criarCurriculoApi(resumo);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarCurriculo, error};

}