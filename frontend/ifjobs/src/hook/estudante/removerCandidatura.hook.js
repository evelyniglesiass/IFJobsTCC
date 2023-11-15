import { useState } from "react";
import { removerCandidaturaApi } from "../../constants";
import { toast } from "react-toastify";

export function useRemoverCandidatura(){

    const [error] = useState();

    async function removerCandidatura(vaga){

        try{
            await removerCandidaturaApi(vaga);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {removerCandidatura, error};

}