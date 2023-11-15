import { useState } from "react";
import { criarCandidaturaApis } from "../../constants";
import { toast } from "react-toastify";

export function useCadastrarCandidatura(){

    const [error] = useState();

    async function cadastrarCandidatura(vaga){

        try{
            await criarCandidaturaApi(vaga);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarCandidatura, error};

}