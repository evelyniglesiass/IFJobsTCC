import { useState } from "react";
import { toast } from "react-toastify";
import { criarIdiomaApi } from "../../constants";

export function useCadastrarIdioma(){

    const [error] = useState();

    async function cadastrarIdioma(descricao){

        try{
            await criarIdiomaApi(descricao);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarIdioma, error};

}