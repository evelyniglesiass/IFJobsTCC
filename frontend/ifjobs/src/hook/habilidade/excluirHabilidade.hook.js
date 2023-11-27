import { useState } from "react";
import { toast } from "react-toastify";
import { editarHabilidadesApi, excluirHabilidadeApi } from "../../constants";

export function useExcluirHabilidade(){

    const [error] = useState();

    async function excluirHabilidade(habilidade){

        try{
            await excluirHabilidadeApi(habilidade);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirHabilidade, error};

}